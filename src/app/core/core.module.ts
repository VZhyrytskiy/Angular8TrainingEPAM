import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { LocalStoreEngine } from './models/local-store-engine-class';



@NgModule({
  declarations: [],
  providers: [
    { provide: LocalStorageService, useClass: LocalStoreEngine }
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
