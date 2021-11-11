/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/**
* This service is a modified version of
* https://github.com/PaulDSheriff/Articles-CodeMagazine/blob/master/2019-01-Code_Magazine-Logging_in_Angular_Applications.zip
*/

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoggerModule } from './logger.module';

export enum LogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5,
  Off = 6,
}

export class LogEntry {
  // Public Properties
  entryDate: Date = new Date();

  message: string = '';

  level: LogLevel = LogLevel.Debug;

  extraInfo: any[] = [];

  logWithDate: boolean = true;

  buildLogString(): string {
    let ret: string = '';

    if (this.logWithDate) {
      ret = `${new Date()} - `;
    }

    ret += LogLevel[this.level];
    ret += ` - ${this.message}`;
    if (this.extraInfo.length) {
      ret += ` - Extra Info: ${LogEntry.formatParams(this.extraInfo)}`;
    }

    return ret;
  }

  static formatParams(params: any[]): string {
    let ret: string = params.join(',');

    // Is there at least one object in the array?
    if (params.some((p) => typeof p === 'object')) {
      ret = '';

      // Build comma-delimited string
      params.forEach((item) => {
        ret += `${JSON.stringify(item)},`;
      });
      // for (const item of params) {

      // }
    }

    return ret;
  }
}

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  /**
   * A custom service to log errors https://www.codemag.com/Article/1711021/Logging-in-Angular-Applications
   */
  constructor(private toastr: ToastrService) { }

  // Miscellanious debugging variables
  developer: boolean = false;

  // End

  level: LogLevel = LogLevel.Debug;

  logWithDate: boolean = false;

  logWithToast: boolean = true;

  debug(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Debug, optionalParams);
  }

  info(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Info, optionalParams);
  }

  warn(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Warn, optionalParams);
    this.sendToast(msg, LogLevel.Warn, LogEntry.formatParams(optionalParams));
  }

  error(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Error, optionalParams);
    // console.log(typeof optionalParams[0])
    // if (optionalParams.length>0){
    // let entry = new LogEntry
    this.sendToast(msg, LogLevel.Error, LogEntry.formatParams(optionalParams));
  }

  success(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Info, optionalParams);
    this.sendToast(msg, LogLevel.Info, LogEntry.formatParams(optionalParams));
  }

  fatal(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Fatal, optionalParams);
  }

  log(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.All, optionalParams);
  }

  private sendToast(title: string, level: LogLevel, message?:string, params?: any[]) {
    if (this.shouldLog(level) && this.logWithToast) {
      switch (level) {
        case LogLevel.Error:
          this.toastr.error(message, title);
          break;
        case LogLevel.Warn:
          this.toastr.warning(message, title);
          break;
        case LogLevel.Info:
          this.toastr.success(message, title);
          break;
        default:
          this.toastr.show(title);
      }
    }
  }

  private writeToLog(msg: string, level: LogLevel, params: any[]) {
    if (this.shouldLog(level)) {
      const entry: LogEntry = new LogEntry();
      entry.message = msg;
      entry.level = level;
      entry.extraInfo = params;
      entry.logWithDate = this.logWithDate;
      switch (level) {
        case LogLevel.Warn: console.warn(entry.buildLogString()); break;
        case LogLevel.Error: console.error(entry.buildLogString()); break;
        case LogLevel.Debug: console.debug(entry.buildLogString()); break;
        default: console.log(entry.buildLogString());
      }
    }
  }

  private shouldLog(level: LogLevel): boolean {
    let ret: boolean = false;
    if ((level >= this.level && level !== LogLevel.Off) || this.level === LogLevel.All) {
      ret = true;
    }
    return ret;
  }
}
