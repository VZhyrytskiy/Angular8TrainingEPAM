import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ComponentModule } from './products/component.module';
import { NavModule } from './header/nav.module';
import { CoreModule } from './core/core.module';
import { AboutComponent } from './layout/components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    CoreModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
