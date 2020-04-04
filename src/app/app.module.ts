import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { NavModule } from './header/nav.module';
import { OrderModule } from './order/order.module';
import { httpInterceptorProviders } from './core/interceptors';
import { AppSettingsService } from './setings/app-settings.service';
import { RootStoreModule } from './core/@ngrx/root-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    NavModule,
    SharedModule,
    LayoutModule,
    OrderModule,
    LoginModule,
    RootStoreModule,
    // MUST BE LAST
    AppRoutingModule,
  ],
  providers: [httpInterceptorProviders, AppSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
