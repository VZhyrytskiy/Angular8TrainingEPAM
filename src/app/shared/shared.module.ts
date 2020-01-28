import { BrowserModule } from '@angular/platform-browser';
import { MoneyPipe } from './pipes/money.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        MoneyPipe
    ],
    exports: [
        MoneyPipe
    ]
})
export class SharedModule { }
