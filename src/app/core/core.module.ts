import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { LocalStoreEngine } from './models/local-store-engine-class';
import { ConstantsService } from './services/constants.service';
import { GeneratorService, GeneratorFactory } from './services/generator.service';
import { ConfigOptionsService } from './services/config-options.service';

@NgModule({
  declarations: [],
  providers: [
    ConfigOptionsService,
    { provide: LocalStorageService, useClass: LocalStoreEngine },
    { provide: ConstantsService, useValue : { App: 'TaskManager', Ver: '1.0' } },
    { provide: GeneratorService, useFactory: GeneratorFactory(8)}
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
