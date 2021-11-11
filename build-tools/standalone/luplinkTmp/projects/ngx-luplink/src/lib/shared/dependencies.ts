/**
 * This file is used to export various *InjectionTokens* while avoid circular dependencies
 * as suggested by https://flowup.cz/en/article/dependency-injection-in-angular-libraries
 */

import { InjectionToken } from '@angular/core';

export const FORM_TEMPLATE_TOKEN = new InjectionToken<any>('FormTemplate');
export const ENVIRONMENT_TOKEN = new InjectionToken<any>('environment');
