import {Directive} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';

import {checkPhone} from './custom.validators';

@Directive({
  selector: '[appPhoneValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneDirective,
    multi: true
  }]
})
export class PhoneDirective implements Validator {

  validate(c: AbstractControl): { [key: string]: boolean } | null {
    return checkPhone(c);
  }
}
