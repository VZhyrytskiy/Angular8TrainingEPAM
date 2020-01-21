import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstComponent } from './components/first/first.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        FirstComponent,
        ProductComponent
    ],
    exports: [
        ProductComponent
    ]
})
export class ComponentModule { }