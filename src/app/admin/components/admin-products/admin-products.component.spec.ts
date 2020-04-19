import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsComponent } from './admin-products.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Router} from "@angular/router";

describe('AdminProductsComponent', () => {
  let component: AdminProductsComponent;
  let fixture: ComponentFixture<AdminProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AdminProductsComponent],
      providers: [HttpClient, { provide: Router }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
