import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstComponent } from './components/first/first.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        FirstComponent,
        ProductComponent,
        ProductListComponent
    ],
    exports: [
        ProductListComponent
    ]
})
export class ComponentModule {}
