import { AboutComponent } from './components/about/about.component';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PathNotFoundComponent, AboutComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
