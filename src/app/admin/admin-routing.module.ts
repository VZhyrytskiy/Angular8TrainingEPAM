import { AdminEditProductComponent } from './components/admin-edit-product/admin-edit-product.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductsComponent, AdminMainComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: AdminMainComponent,
    children: [
      {
        path: 'products',
        component: AdminProductsComponent,
        children: [
          {
            path: 'add',
            component: AdminEditProductComponent
          },
          {
            path: 'edit/:productID',
            component: AdminEditProductComponent
          }
        ]
      },
      { path: 'orders', component: AdminOrdersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminProductsComponent,
    AdminEditProductComponent,
    AdminOrdersComponent
  ];
}
