import { NgModule } from '@angular/core';
import { FirstComponent } from './components/first/first.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule, SharedModule
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
