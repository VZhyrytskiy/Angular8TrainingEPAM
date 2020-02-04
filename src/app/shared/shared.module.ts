import { MoneyPipe } from './pipes/money.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MoneyPipe
    ],
    exports: [
        MoneyPipe
    ]
})
export class SharedModule { }
