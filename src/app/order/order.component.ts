import {OrderModel} from './models/order.model';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators, AbstractControl} from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

import {User} from "./models/user.model";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {CustomValidators} from "../validators";
import {debounceTime} from "rxjs/operators";
import {CartService} from "../cart/services/cart.service";
import {LocalStorageService} from "../core/services/local-storage.service";

declare var $: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit, OnDestroy {
  order: OrderModel;
  validationMessage: string;
  countries: Array<string> = ['Ukraine', 'Armenia', 'Belarus', 'Hungary', 'Kazakhstan', 'Poland', 'Russia', 'Germany', 'USA'];
  user: User = new User();
  userForm: FormGroup;
  placeholder = {
    phone: 'Phone',
    email: 'Email (required)',
    confirmEmail: 'Confirm Email (required)',
  };

  private sub: Subscription;
  // private router: Router;
  private validationMessagesMap = {
    firstName: {
      required: ' Please enter your first name',
      minlength: 'The first name must be longer than 3 characters'
    },
    email: {
      required: 'Please enter your email address.',
      pattern: 'Please enter a valid email address.',
      email: 'Please enter a valid email address.',
      asyncEmailInvalid:
        'This email already exists. Please enter other email address.'
    },
  };

  constructor(private cartService: CartService,
              private fb: FormBuilder,
              private localStorageService: LocalStorageService,
              private router: Router) {
    this.order = new OrderModel(this.cartService.getProducts());
  }

  ngOnInit() {
    this.buildForm();
    this.watchValueChanges();
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  private buildForm() {
    this.userForm = this.fb.group({
      firstName: new FormControl('', {validators: [Validators.required, Validators.minLength(3)], updateOn: 'blur'}),
      lastName: [
        {value: 'Ivanov', disabled: false},
        [Validators.required, Validators.maxLength(50)]
      ],
      emailGroup: this.fb.group({
        email: ['',
          [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.email]
        ],
        confirmEmail: ['', Validators.required],
      }, {validator: CustomValidators.emailMatcher}),
      phones: this.fb.array([this.buildPhone()]),
      notification: 'email',
      serviceLevel: [''],
      needDelivery: true,
      addressType: 'home',
      country: '',
      city: '',
      zip: '',
      street: '',
    });
  }

  private buildPhone(): FormGroup {
    return this.fb.group({
      phone: '',
    });
  }

  get phones(): FormArray {
    return this.userForm.get('phones') as FormArray;
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhone());
  }

  onDeletePhone(): void {
    if (this.phones.controls.length > 1) {
      this.phones.controls.pop();
    }
  }

  setNotification(notifyVia: string) {
    const controls = new Map();
    controls.set('phoneControl', this.userForm.get('phones'));
    controls.set('emailGroup', this.userForm.get('emailGroup'));
    controls.set('emailControl', this.userForm.get('emailGroup.email'));
    controls.set(
      'confirmEmailControl',
      this.userForm.get('emailGroup.confirmEmail')
    );

    if (notifyVia === 'text') {
      controls.get('phoneControl').setValidators(Validators.required);
      controls.forEach(
        (control, index) =>
          index !== 'phoneControl' && control.clearValidators()
      );

      this.placeholder = {
        phone: 'Phone (required)',
        email: 'Email',
        confirmEmail: 'Confirm Email'
      };
    } else {
      controls
        .get('emailControl')
        .setValidators([
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'),
          Validators.email
        ]);
      controls.get('confirmEmailControl').setValidators([Validators.required]);
      controls.get('emailGroup').setValidators([CustomValidators.emailMatcher]);
      controls.get('phoneControl').clearValidators();

      this.placeholder = {
        phone: 'Phone',
        email: 'Email (required)',
        confirmEmail: 'Confirm Email (required)'
      };
    }
    controls.forEach(control => control.updateValueAndValidity());
  }


  onBlur(param) {
    const emailControl = this.userForm.get('emailGroup.email');
    const firstName = this.userForm.get('firstName');
    if (param === 'first') {
      this.setValidationMessage(firstName, 'firstName');
    }
    if (param === 'email') {
      this.setValidationMessage(emailControl, 'email');
    }
  }


  private watchValueChanges() {
    let subject;
    this.sub = this.userForm.get('notification').valueChanges
      .subscribe(value => this.setNotification(value));
    const emailControl = this.userForm.get('emailGroup.email');
    const firstName = this.userForm.get('firstName');
    if (firstName) {
      subject = emailControl.valueChanges
        .pipe(
          debounceTime(1000)
        )
        .subscribe(value =>
          this.setValidationMessage(firstName, 'firstName')
        );
    } else {
      subject = emailControl.valueChanges
        .pipe(
          debounceTime(1000)
        )
        .subscribe(value =>
          this.setValidationMessage(emailControl, 'email')
        );
    }
    this.sub.add(subject);
  }

  private setValidationMessage(c: AbstractControl, controlName: string) {
    this.validationMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessage = Object.keys(c.errors)
        .map(key => this.validationMessagesMap[controlName][key])
        .join(' ');
    }
  }

  send() {
    const order = {...this.order};
    this.localStorageService.setItem('order', this.order);
    this.router.navigate(['/home']);
  }
}
