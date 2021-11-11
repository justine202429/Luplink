import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // Required by Toastr
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    LoggerService,
  ],
})
export class LoggerModule {
  static forRoot(): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LoggerService },
      ],
    };
  }
}
