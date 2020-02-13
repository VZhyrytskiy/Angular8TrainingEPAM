import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, } from '@angular/common';
import { ChangeColorDirective } from './directives/change-color.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ChangeColorDirective,
    OrderByPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    OrderByPipe,
    ChangeColorDirective
  ]
})
export class SharedModule { }
