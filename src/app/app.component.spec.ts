import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AppComponent],
      providers:[HttpClient],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h6'));
    el = de.nativeElement;
  }));

  it('should create the app', () => {
    expect(component).toBeDefined();
  });

  it('should have no title in the DOM until manually call `detectChanges`', (done:DoneFn) => {
    expect(el.textContent).toEqual('');
    done();
  });
});
