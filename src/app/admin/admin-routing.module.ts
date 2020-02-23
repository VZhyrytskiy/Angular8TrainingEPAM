import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMainComponent, LoginComponent } from './components';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminMainComponent,
    // children: [
    //   { path: 'product/:productID', component: ViewProductComponent }
    // ]
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
