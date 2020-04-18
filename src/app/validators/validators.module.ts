import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhoneDirective} from './phone.directive';
import {ServiceLevelDirective} from './service-level.directive';
import { AsyncEmailValidatorDirective } from './async-email-validator.directive';

@NgModule({
  declarations: [PhoneDirective, ServiceLevelDirective, AsyncEmailValidatorDirective],
  imports: [
    CommonModule
  ],
  exports: [PhoneDirective, ServiceLevelDirective, AsyncEmailValidatorDirective]
})
export class ValidatorsModule {}
