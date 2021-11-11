/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/**
* This service is a modified version of
* https://github.com/PaulDSheriff/Articles-CodeMagazine/blob/master/2019-01-Code_Magazine-Logging_in_Angular_Applications.zip
*/
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["All"] = 0] = "All";
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Warn"] = 3] = "Warn";
    LogLevel[LogLevel["Error"] = 4] = "Error";
    LogLevel[LogLevel["Fatal"] = 5] = "Fatal";
    LogLevel[LogLevel["Off"] = 6] = "Off";
})(LogLevel || (LogLevel = {}));
export class LogEntry {
    constructor() {
        // Public Properties
        this.entryDate = new Date();
        this.message = '';
        this.level = LogLevel.Debug;
        this.extraInfo = [];
        this.logWithDate = true;
    }
    buildLogString() {
        let ret = '';
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
    static formatParams(params) {
        let ret = params.join(',');
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
export class LoggerService {
    /**
     * A custom service to log errors https://www.codemag.com/Article/1711021/Logging-in-Angular-Applications
     */
    constructor(toastr) {
        this.toastr = toastr;
        // Miscellanious debugging variables
        this.developer = false;
        // End
        this.level = LogLevel.Debug;
        this.logWithDate = false;
        this.logWithToast = true;
    }
    debug(msg, ...optionalParams) {
        this.writeToLog(msg, LogLevel.Debug, optionalParams);
    }
    info(msg, ...optionalParams) {
        this.writeToLog(msg, LogLevel.Info, optionalParams);
    }
    warn(msg, ...optionalParams) {
        this.writeToLog(msg, LogLevel.Warn, optionalParams);
        this.sendToast(msg, LogLevel.Warn, LogEntry.formatParams(optionalParams));
    }
    error(msg, ...optionalParams) {
        this.writeToLog(msg, LogLevel.Error, optionalParams);
        // console.log(typeof optionalParams[0])
        // if (optionalParams.length>0){
        // let entry = new LogEntry
        this.sendToast(msg, LogLevel.Error, LogEntry.formatParams(optionalParams));
    }
    success(msg, ...optionalParams) {
        this.writeToLog(msg, LogLevel.Info, optionalParams);
        this.sendToast(msg, LogLevel.Info, LogEntry.formatParams(optionalParams));
    }
    fatal(msg, ...optionalParams) {
        this.writeToLog(msg, LogLevel.Fatal, optionalParams);
    }
    log(msg, ...optionalParams) {
        this.writeToLog(msg, LogLevel.All, optionalParams);
    }
    sendToast(title, level, message, params) {
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
    writeToLog(msg, level, params) {
        if (this.shouldLog(level)) {
            const entry = new LogEntry();
            entry.message = msg;
            entry.level = level;
            entry.extraInfo = params;
            entry.logWithDate = this.logWithDate;
            switch (level) {
                case LogLevel.Warn:
                    console.warn(entry.buildLogString());
                    break;
                case LogLevel.Error:
                    console.error(entry.buildLogString());
                    break;
                case LogLevel.Debug:
                    console.debug(entry.buildLogString());
                    break;
                default: console.log(entry.buildLogString());
            }
        }
    }
    shouldLog(level) {
        let ret = false;
        if ((level >= this.level && level !== LogLevel.Off) || this.level === LogLevel.All) {
            ret = true;
        }
        return ret;
    }
}
LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(i0.ɵɵinject(i1.ToastrService)); };
LoggerService.ɵprov = i0.ɵɵdefineInjectable({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoggerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.ToastrService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL3NoYXJlZC9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDO0FBQ3pDLCtCQUErQjtBQUMvQjs7O0VBR0U7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFJM0MsTUFBTSxDQUFOLElBQVksUUFRWDtBQVJELFdBQVksUUFBUTtJQUNsQixxQ0FBTyxDQUFBO0lBQ1AseUNBQVMsQ0FBQTtJQUNULHVDQUFRLENBQUE7SUFDUix1Q0FBUSxDQUFBO0lBQ1IseUNBQVMsQ0FBQTtJQUNULHlDQUFTLENBQUE7SUFDVCxxQ0FBTyxDQUFBO0FBQ1QsQ0FBQyxFQVJXLFFBQVEsS0FBUixRQUFRLFFBUW5CO0FBRUQsTUFBTSxPQUFPLFFBQVE7SUFBckI7UUFDRSxvQkFBb0I7UUFDcEIsY0FBUyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFFN0IsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixVQUFLLEdBQWEsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUVqQyxjQUFTLEdBQVUsRUFBRSxDQUFDO1FBRXRCLGdCQUFXLEdBQVksSUFBSSxDQUFDO0lBb0M5QixDQUFDO0lBbENDLGNBQWM7UUFDWixJQUFJLEdBQUcsR0FBVyxFQUFFLENBQUM7UUFFckIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLEtBQUssQ0FBQztTQUMxQjtRQUVELEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLEdBQUcsSUFBSSxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxF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QUM7WUFDckMsUUFBUSxLQUFLLEVBQUU7Z0JBQ2IsS0FBSyxRQUFRLENBQUMsSUFBSTtvQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUFDLE1BQU07Z0JBQ2hFLEtBQUssUUFBUSxDQUFDLEtBQUs7b0JBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFBQyxNQUFNO2dCQUNsRSxLQUFLLFFBQVEsQ0FBQyxLQUFLO29CQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7b0JBQUMsTUFBTTtnQkFDbEUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQzthQUM5QztTQUNGO0lBQ0gsQ0FBQztJQUVPLFNBQVMsQ0FBQyxLQUFlO1FBQy9CLElBQUksR0FBRyxHQUFZLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDbEYsR0FBRyxHQUFHLElBQUksQ0FBQztTQUNaO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzswRUEzRlUsYUFBYTtxREFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNO3VGQUVQLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qKlxuKiBUaGlzIHNlcnZpY2UgaXMgYSBtb2RpZmllZCB2ZXJzaW9uIG9mXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9QYXVsRFNoZXJpZmYvQXJ0aWNsZXMtQ29kZU1hZ2F6aW5lL2Jsb2IvbWFzdGVyLzIwMTktMDEtQ29kZV9NYWdhemluZS1Mb2dnaW5nX2luX0FuZ3VsYXJfQXBwbGljYXRpb25zLnppcFxuKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJ25neC10b2FzdHInO1xuaW1wb3J0IHsgTG9nZ2VyTW9kdWxlIH0gZnJvbSAnLi9sb2dnZXIubW9kdWxlJztcblxuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xuICBBbGwgPSAwLFxuICBEZWJ1ZyA9IDEsXG4gIEluZm8gPSAyLFxuICBXYXJuID0gMyxcbiAgRXJyb3IgPSA0LFxuICBGYXRhbCA9IDUsXG4gIE9mZiA9IDYsXG59XG5cbmV4cG9ydCBjbGFzcyBMb2dFbnRyeSB7XG4gIC8vIFB1YmxpYyBQcm9wZXJ0aWVzXG4gIGVudHJ5RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgbWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgbGV2ZWw6IExvZ0xldmVsID0gTG9nTGV2ZWwuRGVidWc7XG5cbiAgZXh0cmFJbmZvOiBhbnlbXSA9IFtdO1xuXG4gIGxvZ1dpdGhEYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICBidWlsZExvZ1N0cmluZygpOiBzdHJpbmcge1xuICAgIGxldCByZXQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaWYgKHRoaXMubG9nV2l0aERhdGUpIHtcbiAgICAgIHJldCA9IGAke25ldyBEYXRlKCl9IC0gYDtcbiAgICB9XG5cbiAgICByZXQgKz0gTG9nTGV2ZWxbdGhpcy5sZXZlbF07XG4gICAgcmV0ICs9IGAgLSAke3RoaXMubWVzc2FnZX1gO1xuICAgIGlmICh0aGlzLmV4dHJhSW5mby5sZW5ndGgpIHtcbiAgICAgIHJldCArPSBgIC0gRXh0cmEgSW5mbzogJHtMb2dFbnRyeS5mb3JtYXRQYXJhbXModGhpcy5leHRyYUluZm8pfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHN0YXRpYyBmb3JtYXRQYXJhbXMocGFyYW1zOiBhbnlbXSk6IHN0cmluZyB7XG4gICAgbGV0IHJldDogc3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKTtcblxuICAgIC8vIElzIHRoZXJlIGF0IGxlYXN0IG9uZSBvYmplY3QgaW4gdGhlIGFycmF5P1xuICAgIGlmIChwYXJhbXMuc29tZSgocCkgPT4gdHlwZW9mIHAgPT09ICdvYmplY3QnKSkge1xuICAgICAgcmV0ID0gJyc7XG5cbiAgICAgIC8vIEJ1aWxkIGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcbiAgICAgIHBhcmFtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHJldCArPSBgJHtKU09OLnN0cmluZ2lmeShpdGVtKX0sYDtcbiAgICAgIH0pO1xuICAgICAgLy8gZm9yIChjb25zdCBpdGVtIG9mIHBhcmFtcykge1xuXG4gICAgICAvLyB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTG9nZ2VyU2VydmljZSB7XG4gIC8qKlxuICAgKiBBIGN1c3RvbSBzZXJ2aWNlIHRvIGxvZyBlcnJvcnMgaHR0cHM6Ly93d3cuY29kZW1hZy5jb20vQXJ0aWNsZS8xNzExMDIxL0xvZ2dpbmctaW4tQW5ndWxhci1BcHBsaWNhdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9hc3RyOiBUb2FzdHJTZXJ2aWNlKSB7IH1cblxuICAvLyBNaXNjZWxsYW5pb3VzIGRlYnVnZ2luZyB2YXJpYWJsZXNcbiAgZGV2ZWxvcGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gRW5kXG5cbiAgbGV2ZWw6IExvZ0xldmVsID0gTG9nTGV2ZWwuRGVidWc7XG5cbiAgbG9nV2l0aERhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBsb2dXaXRoVG9hc3Q6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pIHtcbiAgICB0aGlzLndyaXRlVG9Mb2cobXNnLCBMb2dMZXZlbC5EZWJ1Zywgb3B0aW9uYWxQYXJhbXMpO1xuICB9XG5cbiAgaW5mbyhtc2c6IHN0cmluZywgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKSB7XG4gICAgdGhpcy53cml0ZVRvTG9nKG1zZywgTG9nTGV2ZWwuSW5mbywgb3B0aW9uYWxQYXJhbXMpO1xuICB9XG5cbiAgd2Fybihtc2c6IHN0cmluZywgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKSB7XG4gICAgdGhpcy53cml0ZVRvTG9nKG1zZywgTG9nTGV2ZWwuV2Fybiwgb3B0aW9uYWxQYXJhbXMpO1xuICAgIHRoaXMuc2VuZFRvYXN0KG1zZywgTG9nTGV2ZWwuV2FybiwgTG9nRW50cnkuZm9ybWF0UGFyYW1zKG9wdGlvbmFsUGFyYW1zKSk7XG4gIH1cblxuICBlcnJvcihtc2c6IHN0cmluZywgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKSB7XG4gICAgdGhpcy53cml0ZVRvTG9nKG1zZywgTG9nTGV2ZWwuRXJyb3IsIG9wdGlvbmFsUGFyYW1zKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2Ygb3B0aW9uYWxQYXJhbXNbMF0pXG4gICAgLy8gaWYgKG9wdGlvbmFsUGFyYW1zLmxlbmd0aD4wKXtcbiAgICAvLyBsZXQgZW50cnkgPSBuZXcgTG9nRW50cnlcbiAgICB0aGlzLnNlbmRUb2FzdChtc2csIExvZ0xldmVsLkVycm9yLCBMb2dFbnRyeS5mb3JtYXRQYXJhbXMob3B0aW9uYWxQYXJhbXMpKTtcbiAgfVxuXG4gIHN1Y2Nlc3MobXNnOiBzdHJpbmcsIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSkge1xuICAgIHRoaXMud3JpdGVUb0xvZyhtc2csIExvZ0xldmVsLkluZm8sIG9wdGlvbmFsUGFyYW1zKTtcbiAgICB0aGlzLnNlbmRUb2FzdChtc2csIExvZ0xldmVsLkluZm8sIExvZ0VudHJ5LmZvcm1hdFBhcmFtcyhvcHRpb25hbFBhcmFtcykpO1xuICB9XG5cbiAgZmF0YWwobXNnOiBzdHJpbmcsIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSkge1xuICAgIHRoaXMud3JpdGVUb0xvZyhtc2csIExvZ0xldmVsLkZhdGFsLCBvcHRpb25hbFBhcmFtcyk7XG4gIH1cblxuICBsb2cobXNnOiBzdHJpbmcsIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSkge1xuICAgIHRoaXMud3JpdGVUb0xvZyhtc2csIExvZ0xldmVsLkFsbCwgb3B0aW9uYWxQYXJhbXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZW5kVG9hc3QodGl0bGU6IHN0cmluZywgbGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlPzpzdHJpbmcsIHBhcmFtcz86IGFueVtdKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9nKGxldmVsKSAmJiB0aGlzLmxvZ1dpdGhUb2FzdCkge1xuICAgICAgc3dpdGNoIChsZXZlbCkge1xuICAgICAgICBjYXNlIExvZ0xldmVsLkVycm9yOlxuICAgICAgICAgIHRoaXMudG9hc3RyLmVycm9yKG1lc3NhZ2UsIHRpdGxlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBMb2dMZXZlbC5XYXJuOlxuICAgICAgICAgIHRoaXMudG9hc3RyLndhcm5pbmcobWVzc2FnZSwgdGl0bGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIExvZ0xldmVsLkluZm86XG4gICAgICAgICAgdGhpcy50b2FzdHIuc3VjY2VzcyhtZXNzYWdlLCB0aXRsZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy50b2FzdHIuc2hvdyh0aXRsZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3cml0ZVRvTG9nKG1zZzogc3RyaW5nLCBsZXZlbDogTG9nTGV2ZWwsIHBhcmFtczogYW55W10pIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2cobGV2ZWwpKSB7XG4gICAgICBjb25zdCBlbnRyeTogTG9nRW50cnkgPSBuZXcgTG9nRW50cnkoKTtcbiAgICAgIGVudHJ5Lm1lc3NhZ2UgPSBtc2c7XG4gICAgICBlbnRyeS5sZXZlbCA9IGxldmVsO1xuICAgICAgZW50cnkuZXh0cmFJbmZvID0gcGFyYW1zO1xuICAgICAgZW50cnkubG9nV2l0aERhdGUgPSB0aGlzLmxvZ1dpdGhEYXRlO1xuICAgICAgc3dpdGNoIChsZXZlbCkge1xuICAgICAgICBjYXNlIExvZ0xldmVsLldhcm46IGNvbnNvbGUud2FybihlbnRyeS5idWlsZExvZ1N0cmluZygpKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgTG9nTGV2ZWwuRXJyb3I6IGNvbnNvbGUuZXJyb3IoZW50cnkuYnVpbGRMb2dTdHJpbmcoKSk7IGJyZWFrO1xuICAgICAgICBjYXNlIExvZ0xldmVsLkRlYnVnOiBjb25zb2xlLmRlYnVnKGVudHJ5LmJ1aWxkTG9nU3RyaW5nKCkpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDogY29uc29sZS5sb2coZW50cnkuYnVpbGRMb2dTdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRMb2cobGV2ZWw6IExvZ0xldmVsKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlmICgobGV2ZWwgPj0gdGhpcy5sZXZlbCAmJiBsZXZlbCAhPT0gTG9nTGV2ZWwuT2ZmKSB8fCB0aGlzLmxldmVsID09PSBMb2dMZXZlbC5BbGwpIHtcbiAgICAgIHJldCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiJdfQ==