import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ProductsState} from "../../../core/@ngrx/products";
import * as actions from '../../../core/@ngrx/products/products.actions';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {MemoizedSelector} from "@ngrx/store";
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";
import {selectProductsData} from "../../../core/@ngrx/products/products.selectors";
import {Router} from "@angular/router";

const mockObject = {
  id:100
};

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let mockStore: MockStore<ProductsState>;
  let mockProductsSelector: MemoizedSelector<any, Observable<ReadonlyArray<Product>>>;
  const getProductsSpy = jasmine.createSpy('getProducts').and.returnValue({
    type: '[Product List Page (App)] GET_PRODUCTS'
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      providers: [provideMockStore(), MockStore, { provide: Router }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(MockStore);
    mockProductsSelector = mockStore.overrideSelector(selectProductsData, [mockObject] as any);
    spyOnProperty(actions, 'getProducts', 'get').and.returnValue(getProductsSpy);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get products from store', (done: DoneFn) => {
    mockProductsSelector.setResult([mockObject] as any);
    component.productsState$.subscribe(data => {
      expect(data[0].id).toBe(100);
      done();
    });
  });

  it('should dispatch getProducts', () => {
    const onLoad = new CustomEvent('getProducts');
    mockStore.refreshState();
    mockStore.dispatch(onLoad);
    fixture.detectChanges();
    expect(getProductsSpy).toHaveBeenCalled();
  });
});
