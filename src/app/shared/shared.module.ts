import { MoneyPipe } from './pipes/money.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeColorDirective } from './directives/change-color.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MoneyPipe,
        ChangeColorDirective,
        OrderByPipe
    ],
    exports: [
        MoneyPipe,
        OrderByPipe,
        ChangeColorDirective
    ]
})
export class SharedModule { }
