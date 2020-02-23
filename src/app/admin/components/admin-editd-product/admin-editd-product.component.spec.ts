import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditdProductComponent } from './admin-editd-product.component';

describe('AdminEditdProductComponent', () => {
  let component: AdminEditdProductComponent;
  let fixture: ComponentFixture<AdminEditdProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditdProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditdProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
