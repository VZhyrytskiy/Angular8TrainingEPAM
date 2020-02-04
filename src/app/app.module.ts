import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ComponentModule } from './products/component.module';
import { NavModule } from './header/nav.module';
import { LocalStorageService } from './core/services/local-storage.service';
import { LocalStoreEngine } from './core/models/local-store-engine-class';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    NavModule
  ],
  providers: [
    { provide: LocalStorageService, useClass: LocalStoreEngine }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
