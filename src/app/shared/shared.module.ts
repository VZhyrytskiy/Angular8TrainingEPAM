import { MoneyPipe } from './pipes/money.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeColorDirective } from './directives/change-color.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MoneyPipe,
        ChangeColorDirective
    ],
    exports: [
        MoneyPipe,
        ChangeColorDirective
    ]
})
export class SharedModule { }
