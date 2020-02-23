import { AboutComponent } from './components/about/about.component';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../admin/components/login/login.component';



@NgModule({
  declarations: [PathNotFoundComponent, AboutComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
