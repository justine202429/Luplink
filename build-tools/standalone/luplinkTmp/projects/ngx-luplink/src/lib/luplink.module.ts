import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NanospaceRequestService, NanospaceService, NgxNanospaceClientLibModule } from 'ngx-nanospace-client-lib';
import { CardModule } from './components/card/card.module';
import ComputeLinkBudgetService from './services/compute-link-budget.service';
import { SaveLoadService } from './services/save-load.service';
import { ENVIRONMENT_TOKEN, FORM_TEMPLATE_TOKEN } from './shared/dependencies';

interface LuplinkConfig {
  defaultForm: any;
  environment: any;
  isStandalone?: boolean;
}
const NanospaceConfig = {
  endpoint: 'https://dcas-nanostar.isae.fr/api/',
};

// This is a workaround to avoid forRoot being called twice (see: https://github.com/angular/angular/issues/38376#issuecomment-670551280)
const NgxNanospace = NgxNanospaceClientLibModule.forRoot(NanospaceConfig);

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, CardModule, HttpClientModule, NgxNanospace],
  providers: [ComputeLinkBudgetService, SaveLoadService, NanospaceService, NanospaceRequestService],
  exports: [],
})
export class LuplinkModule {
  static forRoot(config: LuplinkConfig): ModuleWithProviders<LuplinkModule> {
    console.log(config);
    return {
      ngModule: LuplinkModule,
      providers: [
        {
          provide: FORM_TEMPLATE_TOKEN,
          useValue: config.defaultForm,
        },
        {
          provide: ENVIRONMENT_TOKEN,
          useValue: { ...config.environment, isStandalone: config.isStandalone, version: '0.2.1' },
        },
      ],
    };
  }
}
