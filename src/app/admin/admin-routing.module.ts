import { AdminEditProductComponent } from './components/admin-edit-product/admin-edit-product.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMainComponent, LoginComponent, AdminProductsComponent } from './components';

const routes: Routes = [
  {
    path: 'admin',
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
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
