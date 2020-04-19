import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductComponent } from './view-product.component';
import {Router} from "@angular/router";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {AppState} from "../../../core/@ngrx";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";


describe('CartProductComponent', () => {
  let component: ViewProductComponent;
  let fixture: ComponentFixture<ViewProductComponent>;
  let mockStore: MockStore<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ViewProductComponent ],
      providers: [provideMockStore(), HttpClient, MockStore, {provide: Router}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
