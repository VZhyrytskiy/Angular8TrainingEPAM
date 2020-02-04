import { Component, OnInit, Optional, Inject } from '@angular/core';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ConfigOptionsService } from '../../../core/services/config-options.service';
import { ConstantsService } from 'src/app/core/services/constants.service';
import { GeneratorService } from 'src/app/core/services/generator.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() private localStorageServive: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() @Inject(ConstantsService) private constantsService: object,
    @Optional() @Inject(GeneratorService) private generatorService: string
  ) { }

  ngOnInit() {
  }

}
