import { ToastrService } from 'ngx-toastr';
import * as i0 from "@angular/core";
export declare enum LogLevel {
    All = 0,
    Debug = 1,
    Info = 2,
    Warn = 3,
    Error = 4,
    Fatal = 5,
    Off = 6
}
export declare class LogEntry {
    entryDate: Date;
    message: string;
    level: LogLevel;
    extraInfo: any[];
    logWithDate: boolean;
    buildLogString(): string;
    static formatParams(params: any[]): string;
}
export declare class LoggerService {
    private toastr;
    /**
     * A custom service to log errors https://www.codemag.com/Article/1711021/Logging-in-Angular-Applications
     */
    constructor(toastr: ToastrService);
    developer: boolean;
    level: LogLevel;
    logWithDate: boolean;
    logWithToast: boolean;
    debug(msg: string, ...optionalParams: any[]): void;
    info(msg: string, ...optionalParams: any[]): void;
    warn(msg: string, ...optionalParams: any[]): void;
    error(msg: string, ...optionalParams: any[]): void;
    success(msg: string, ...optionalParams: any[]): void;
    fatal(msg: string, ...optionalParams: any[]): void;
    log(msg: string, ...optionalParams: any[]): void;
    private sendToast;
    private writeToLog;
    private shouldLog;
    static ɵfac: i0.ɵɵFactoryDef<LoggerService, never>;
    static ɵprov: i0.ɵɵInjectableDef<LoggerService>;
}
//# sourceMappingURL=logger.service.d.ts.map