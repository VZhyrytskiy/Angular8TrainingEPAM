import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloductItemComponent } from './ploduct-item.component';

describe('PloductItemComponent', () => {
  let component: PloductItemComponent;
  let fixture: ComponentFixture<PloductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
