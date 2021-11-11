(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@fortawesome/angular-fontawesome'), require('@fortawesome/free-solid-svg-icons'), require('@angular/forms'), require('rxjs'), require('ngx-toastr'), require('@angular/platform-browser/animations'), require('@angular/router'), require('@angular/animations'), require('d3'), require('ng-katex'), require('rxjs/operators'), require('@angular/common/http'), require('sanitize-filename'), require('ngx-nanospace-client-lib')) :
    typeof define === 'function' && define.amd ? define('@luplink/ngx-luplink', ['exports', '@angular/core', '@angular/common', '@fortawesome/angular-fontawesome', '@fortawesome/free-solid-svg-icons', '@angular/forms', 'rxjs', 'ngx-toastr', '@angular/platform-browser/animations', '@angular/router', '@angular/animations', 'd3', 'ng-katex', 'rxjs/operators', '@angular/common/http', 'sanitize-filename', 'ngx-nanospace-client-lib'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.luplink = global.luplink || {}, global.luplink['ngx-luplink'] = {}), global.ng.core, global.ng.common, global.fontAwesome, global.freeSolidSvgIcons, global.ng.forms, global.rxjs, global['ngx-toastr'], global.ng.platformBrowser.animations, global.ng.router, global.ng.animations, global.d3, global['ng-katex'], global.rxjs.operators, global.ng.common.http, global['sanitize-filename'], global['ngx-nanospace-client-lib']));
}(this, (function (exports, i0, i4, i2, freeSolidSvgIcons, i3, rxjs, i1, animations, i2$1, animations$1, d3, i4$1, operators, i1$1, sanitize, i8) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var sanitize__default = /*#__PURE__*/_interopDefaultLegacy(sanitize);

    function CardComponent_header_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "header", 3);
            i0.ɵɵelementStart(1, "p", 4);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "a", 5);
            i0.ɵɵlistener("click", function CardComponent_header_1_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.collapseCard(); });
            i0.ɵɵelementStart(4, "span", 6);
            i0.ɵɵelement(5, "fa-icon", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r0.title);
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate1("transform", "rotate-", ctx_r0.collapsed ? 0 : 180, "");
            i0.ɵɵproperty("icon", ctx_r0.faAngleDown);
        }
    }
    function CardComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 8);
            i0.ɵɵelementStart(1, "div", 9);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var _c0 = ["*"];
    var CardComponent = /** @class */ (function () {
        function CardComponent() {
            this.styleClass = '';
            this.isWide = false;
            this.faAngleDown = freeSolidSvgIcons.faAngleDown;
            this.collapsed = false;
        }
        CardComponent.prototype.collapseCard = function () {
            this.collapsed = !this.collapsed;
        };
        return CardComponent;
    }());
    CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
    CardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CardComponent, selectors: [["lib-card"]], inputs: { styleClass: "styleClass", title: "title", isWide: "isWide" }, ngContentSelectors: _c0, decls: 3, vars: 3, consts: [[1, "card", 3, "ngClass"], ["class", "card-header", 4, "ngIf"], ["class", "card-content", 4, "ngIf"], [1, "card-header"], [1, "card-header-title"], ["aria-label", "collapse", 1, "card-header-icon", "is-text", "is-link", 3, "click"], [1, "icon"], ["aria-hidden", "true", 3, "icon", "transform"], [1, "card-content"], [1, "content"]], template: function CardComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, CardComponent_header_1_Template, 6, 3, "header", 1);
                i0.ɵɵtemplate(2, CardComponent_div_2_Template, 3, 0, "div", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.styleClass);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.title);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.collapsed);
            }
        }, directives: [i4.NgClass, i4.NgIf, i2.FaIconComponent], styles: [".card-header-title[_ngcontent-%COMP%]{margin-bottom:0}.card[_ngcontent-%COMP%]{margin-bottom:20px}.card.is-danger[_ngcontent-%COMP%]{background-color:#f14668;color:#fff}.card.is-success[_ngcontent-%COMP%]{background-color:#48c78e;color:#fff}.card.is-warning[_ngcontent-%COMP%]{background-color:#ffe08a;color:#2f4f4f}.wide[_ngcontent-%COMP%]{width:auto!important}.card-header[_ngcontent-%COMP%]{background-color:#fff}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-card',
                        templateUrl: './card.component.html',
                        styleUrls: ['./card.component.scss'],
                    }]
            }], null, { styleClass: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], isWide: [{
                    type: i0.Input
                }] });
    })();

    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        return CardModule;
    }());
    CardModule.ɵfac = function CardModule_Factory(t) { return new (t || CardModule)(); };
    CardModule.ɵmod = i0.ɵɵdefineNgModule({ type: CardModule });
    CardModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                i4.CommonModule,
                i2.FontAwesomeModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CardModule, { declarations: [CardComponent], imports: [i4.CommonModule,
                i2.FontAwesomeModule], exports: [CardComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            CardComponent,
                        ],
                        imports: [
                            i4.CommonModule,
                            i2.FontAwesomeModule,
                        ],
                        exports: [
                            CardComponent,
                        ],
                    }]
            }], null, null);
    })();

    var HelperFunctions = /** @class */ (function () {
        function HelperFunctions() {
        }
        HelperFunctions.convertDistance = function (value, from, to) {
            return value * (this.distance[from] / this.distance[to]);
        };
        // public static convertAngle(value: number, from: string, to: string) {
        //   return value * (this.distance[from] / this.distance[to]);
        // }
        HelperFunctions.slantRangeFromAltElev = function (altitude, elevation, stationAltitude, precisionDecimals) {
            if (stationAltitude === void 0) { stationAltitude = 0; }
            if (precisionDecimals === void 0) { precisionDecimals = 0; }
            /* Computes the slant range from the altitude and the elevation
            * The altitude is in kilometer and the delta angle in degrees,
            * stationAltitude from sea level in meters
            * precisionDecimals is the number of decimals you want to round to
            * */
            if (!(altitude && elevation)) {
                console.error('Warning', 'Tried to compute slant range with invalid values');
                console.debug("altitude: " + altitude + ", elevation: " + elevation);
                return 0;
            }
            var factor = Math.pow(10, precisionDecimals);
            var delta = elevation * (Math.PI / 180);
            return Math.round(this.earthRadius * (Math.sqrt(Math.pow(((altitude + this.earthRadius) / this.earthRadius), 2)
                - Math.pow(Math.cos(delta), 2))
                - Math.sin(delta)) * factor) / factor;
        };
        HelperFunctions.altitudeFromSrElev = function (sr, elevation, stationAltitude) {
            if (stationAltitude === void 0) { stationAltitude = 0; }
            /**
             * Computes the slant range from the altitude and the elevation
             * The altitude is in kilometer and the delta angle in degrees, stationAltitude from sea level in meters
            */
            var delta = elevation * (Math.PI / 180);
            return this.earthRadius * Math.sqrt(Math.pow((sr / this.earthRadius + Math.sin(delta)), 2) + Math.pow(Math.cos(delta), 2));
        };
        HelperFunctions.convertTLEtoKeplearian = function (tle1, tle2) {
            // See https://blog.hardinglabs.com/tle-to-kep.html
            // These manual calculations might be lacking precision. If that's an issued, switch to sgp4
            // console.log(tle1);
            // console.log(tle2.split(''));
            var ecc = parseFloat("0." + tle2.substring(26, 33)) / 10;
            // console.log(ecc);
            var n = parseFloat(tle2.substring(52, 63)) * ((2 * Math.PI) / (3600 * 24)); // Mean motion converted to rad/s
            // console.log(tle2.substring(52, 63));
            var sma = Math.pow((this.earthMu / (Math.pow(n, 2))), (1 / 3)) / 1000;
            return { ecc: ecc, sma: sma };
        };
        return HelperFunctions;
    }());
    /**
     * This class contains miscellaneous functions related to celestial dynamics.
     */
    HelperFunctions.earthRadius = 6378.137; // in km, at the equator
    HelperFunctions.earthMu = 3.986004418 * (Math.pow(10, 14));
    HelperFunctions.distance = {
        km: 10e3,
        // cm: 10e-2,
        m: 1,
    };

    var EmptyForm = /** @class */ (function () {
        function EmptyForm() {
            this.componentId = 'empty';
            this.parentComponent = 'uplink';
            this.params = [];
        }
        return EmptyForm;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    // https://dev.to/vishesh/custom-error-handling-in-angular-reactive-forms-5f05
    var FormControlWarn = /** @class */ (function (_super) {
        __extends(FormControlWarn, _super);
        function FormControlWarn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FormControlWarn;
    }(i3.FormControl));
    var CustomValidators = /** @class */ (function () {
        function CustomValidators() {
            var _this = this;
            this.positiveLossWarningValidator = function (control) {
                var _a;
                control.warnings =
                    ((_a = control.get('value')) === null || _a === void 0 ? void 0 : _a.value) > 0 ? 'Loss is algebraic here and usually < 0' : '';
                return null;
            };
            this.requiredValidator = function (control) {
                if (!control && control !== 0) {
                    return {
                        error: 'Please enter a value here',
                    };
                }
                return null;
            };
            this.validValidator = function (control) {
                if (control.errors === null) {
                    return null;
                }
                var pattern = control.errors.pattern;
                if (pattern) {
                    return {
                        error: 'Please enter a numerical value',
                    };
                }
                return {
                    error: 'Unknown error (3)',
                };
            };
            this.fieldValidator = function (control) {
                var value = control.get('value');
                var unit = control.get('unit');
                /*
              Pass value Abstract control through multiple validators and output the result
              TODO: order them by importance and only show the most jarring issue (or should we show all errors at once?)
              -required
              -numerical
              -bounds
              - ?
              */
                var req = _this.requiredValidator(value === null || value === void 0 ? void 0 : value.value);
                //let val = this.validValidator(value.value)
                //let errList = [req, val];
                // for(let i = 0; i < errList.length; i += 1){
                //   if(errList[i] != null){
                //     return errList[i];
                //   }
                // }
                return req;
                // return !(value && unit) ? { fieldValid: true } : null;
                // TODO: Handle different units
            };
        }
        return CustomValidators;
    }());
    CustomValidators.ɵfac = function CustomValidators_Factory(t) { return new (t || CustomValidators)(); };
    CustomValidators.ɵprov = i0.ɵɵdefineInjectable({ token: CustomValidators, factory: CustomValidators.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomValidators, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return []; }, null);
    })();

    /**
     * This file is used to export various *InjectionTokens* while avoid circular dependencies
     * as suggested by https://flowup.cz/en/article/dependency-injection-in-angular-libraries
     */
    var FORM_TEMPLATE_TOKEN = new i0.InjectionToken('FormTemplate');
    var ENVIRONMENT_TOKEN = new i0.InjectionToken('environment');

    /* eslint-disable max-classes-per-file */
    (function (LogLevel) {
        LogLevel[LogLevel["All"] = 0] = "All";
        LogLevel[LogLevel["Debug"] = 1] = "Debug";
        LogLevel[LogLevel["Info"] = 2] = "Info";
        LogLevel[LogLevel["Warn"] = 3] = "Warn";
        LogLevel[LogLevel["Error"] = 4] = "Error";
        LogLevel[LogLevel["Fatal"] = 5] = "Fatal";
        LogLevel[LogLevel["Off"] = 6] = "Off";
    })(exports.LogLevel || (exports.LogLevel = {}));
    var LogEntry = /** @class */ (function () {
        function LogEntry() {
            // Public Properties
            this.entryDate = new Date();
            this.message = '';
            this.level = exports.LogLevel.Debug;
            this.extraInfo = [];
            this.logWithDate = true;
        }
        LogEntry.prototype.buildLogString = function () {
            var ret = '';
            if (this.logWithDate) {
                ret = new Date() + " - ";
            }
            ret += exports.LogLevel[this.level];
            ret += " - " + this.message;
            if (this.extraInfo.length) {
                ret += " - Extra Info: " + LogEntry.formatParams(this.extraInfo);
            }
            return ret;
        };
        LogEntry.formatParams = function (params) {
            var ret = params.join(',');
            // Is there at least one object in the array?
            if (params.some(function (p) { return typeof p === 'object'; })) {
                ret = '';
                // Build comma-delimited string
                params.forEach(function (item) {
                    ret += JSON.stringify(item) + ",";
                });
                // for (const item of params) {
                // }
            }
            return ret;
        };
        return LogEntry;
    }());
    var LoggerService = /** @class */ (function () {
        /**
         * A custom service to log errors https://www.codemag.com/Article/1711021/Logging-in-Angular-Applications
         */
        function LoggerService(toastr) {
            this.toastr = toastr;
            // Miscellanious debugging variables
            this.developer = false;
            // End
            this.level = exports.LogLevel.Debug;
            this.logWithDate = false;
            this.logWithToast = true;
        }
        LoggerService.prototype.debug = function (msg) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            this.writeToLog(msg, exports.LogLevel.Debug, optionalParams);
        };
        LoggerService.prototype.info = function (msg) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            this.writeToLog(msg, exports.LogLevel.Info, optionalParams);
        };
        LoggerService.prototype.warn = function (msg) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            this.writeToLog(msg, exports.LogLevel.Warn, optionalParams);
            this.sendToast(msg, exports.LogLevel.Warn, LogEntry.formatParams(optionalParams));
        };
        LoggerService.prototype.error = function (msg) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            this.writeToLog(msg, exports.LogLevel.Error, optionalParams);
            // console.log(typeof optionalParams[0])
            // if (optionalParams.length>0){
            // let entry = new LogEntry
            this.sendToast(msg, exports.LogLevel.Error, LogEntry.formatParams(optionalParams));
        };
        LoggerService.prototype.success = function (msg) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            this.writeToLog(msg, exports.LogLevel.Info, optionalParams);
            this.sendToast(msg, exports.LogLevel.Info, LogEntry.formatParams(optionalParams));
        };
        LoggerService.prototype.fatal = function (msg) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            this.writeToLog(msg, exports.LogLevel.Fatal, optionalParams);
        };
        LoggerService.prototype.log = function (msg) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            this.writeToLog(msg, exports.LogLevel.All, optionalParams);
        };
        LoggerService.prototype.sendToast = function (title, level, message, params) {
            if (this.shouldLog(level) && this.logWithToast) {
                switch (level) {
                    case exports.LogLevel.Error:
                        this.toastr.error(message, title);
                        break;
                    case exports.LogLevel.Warn:
                        this.toastr.warning(message, title);
                        break;
                    case exports.LogLevel.Info:
                        this.toastr.success(message, title);
                        break;
                    default:
                        this.toastr.show(title);
                }
            }
        };
        LoggerService.prototype.writeToLog = function (msg, level, params) {
            if (this.shouldLog(level)) {
                var entry = new LogEntry();
                entry.message = msg;
                entry.level = level;
                entry.extraInfo = params;
                entry.logWithDate = this.logWithDate;
                switch (level) {
                    case exports.LogLevel.Warn:
                        console.warn(entry.buildLogString());
                        break;
                    case exports.LogLevel.Error:
                        console.error(entry.buildLogString());
                        break;
                    case exports.LogLevel.Debug:
                        console.debug(entry.buildLogString());
                        break;
                    default: console.log(entry.buildLogString());
                }
            }
        };
        LoggerService.prototype.shouldLog = function (level) {
            var ret = false;
            if ((level >= this.level && level !== exports.LogLevel.Off) || this.level === exports.LogLevel.All) {
                ret = true;
            }
            return ret;
        };
        return LoggerService;
    }());
    LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(i0.ɵɵinject(i1.ToastrService)); };
    LoggerService.ɵprov = i0.ɵɵdefineInjectable({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoggerService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1.ToastrService }]; }, null);
    })();

    /* eslint-disable max-classes-per-file */
    var FormService = /** @class */ (function () {
        function FormService(template, fb, customValidators, logger) {
            this.template = template;
            this.fb = fb;
            this.customValidators = customValidators;
            this.logger = logger;
            /**
             * This service keeps tracks of everything form-related.
             * It listens for forms changes and returns the form Data to the computeLinkBudget service
             */
            // This contains the concatenation of all subforms
            this.globalForm = new i3.FormGroup({}); // A form group can easily be observed
            this.erroneousSection = new rxjs.BehaviorSubject('');
            this.title = 'Untitled_Link_Budget';
            this.isInterlink = false;
            this.isCurrentFormSaved = true;
            // Has forms already been initialized ?
            this._isInitialized = false;
        }
        Object.defineProperty(FormService.prototype, "isInitialized", {
            get: function () {
                return this._isInitialized;
            },
            set: function (value) {
                this._isInitialized = value;
            },
            enumerable: false,
            configurable: true
        });
        FormService.prototype.addForm = function (formGroup, name, parent) {
            var _d;
            if (parent === void 0) { parent = ''; }
            /**
             * This allow adding a form to our globalform. This function is usually called by a form component
             */
            if (parent && parent !== '') {
                var group = this.globalForm.get(parent);
                if (group) {
                    group.setControl(name, formGroup);
                    this.globalForm.setControl(parent, group);
                }
                else {
                    this.globalForm.setControl(parent, this.fb.group((_d = {}, _d[name] = formGroup, _d)));
                }
            }
            else if (name !== '') {
                this.globalForm.setControl(name, formGroup);
            }
        };
        FormService.prototype.getComponentValues = function (componentId, link, parentId) {
            if (link === void 0) { link = ''; }
            var _a, _b, _c;
            /**
             * Returns the value of a component by its id and its parentId
             */
            if (!parentId)
                return this.getFormData()[componentId];
            return (_c = (_b = (_a = this.getFormData()) === null || _a === void 0 ? void 0 : _a[link]) === null || _b === void 0 ? void 0 : _b[parentId]) === null || _c === void 0 ? void 0 : _c[componentId];
        };
        FormService.prototype.patchForm = function (parentName, groupName, formGroup) {
            /**
             *  A wrapper for the method from FormGroup. This allows us to have a globalForm with more depth.
             */
            var group = this.globalForm.get(parentName);
            if (group !== null) {
                group.addControl(groupName, formGroup);
                return;
            }
            this.logger.warn(parentName + " does not exist! Cannot attach antenna to it.");
        };
        FormService.prototype.importForm = function (results) {
            /**
             * This function is called when importing a .json file.
             * It updates the fields values.
             */
            // #TODO: check file sanity (eg. sanitization)
            // #TODO: Test
            // #TODO We now need to make this more robust
            // Changing global form
            console.log('import form');
            console.log(results.data);
            this.globalForm.patchValue(results.data, { emitEvent: false });
            this.title = results.metadata.title;
        };
        FormService.prototype.getFormData$ = function () {
            return this.globalForm.valueChanges;
        };
        FormService.prototype.getFormData = function () {
            return this.globalForm.value; // The form updated at all times is used for the calculation
        };
        FormService.prototype.initForms = function () {
            var _this = this;
            // This function automatically generates the form to be sent to API even if some components haven't yet been instantiated
            this.template.template.components.forEach(function (componentTemplate) {
                if (componentTemplate.componentId !== '') {
                    var fg = _this.createFormGroup(componentTemplate);
                    if (componentTemplate.parentComponent) {
                        _this.addForm(fg, componentTemplate.componentId, componentTemplate.parentComponent);
                    }
                    else {
                        _this.addForm(fg, componentTemplate.componentId);
                    }
                }
            });
            this._isInitialized = true;
        };
        FormService.prototype.createFormGroup = function (componentTemplate) {
            var _this = this;
            /**
             * This function takes in a Form template and return a FormGroup of the corresponding component.
             * This makes the conversion between angular reactive forms and our custom JSON templates for transmission chain parts.
             */
            var group = {};
            componentTemplate.params.forEach(function (element) {
                // The default value is 'undefined' if key not found in map
                // Here we create FormControls for both the input and its unit
                var inputControl = new FormControlWarn(element.default, {
                    // FIXME: Formcontrolwarn
                    validators: [i3.Validators.pattern('^[+-]?[0-9]+([,][0-9]+)*([.][0-9]+)?$')],
                    updateOn: 'change',
                }); // , [Validators.required, Validators.maxLength(6)]); //FIXME: For testing purposes
                // Updating on blur is less distracting, a good compromise
                var unitControl = element.units.length === 0
                    ? new i3.FormControl('', i3.Validators.nullValidator)
                    : new i3.FormControl(element.units[0], i3.Validators.required);
                // For units, we can assume they will be valid since the user is constrained in his choices
                group[element.id] = new i3.FormGroup({
                    // A group composed of both the field and its unit
                    value: inputControl,
                    unit: unitControl,
                }, [
                    _this.customValidators.fieldValidator,
                    element.type === 'loss' ? _this.customValidators.positiveLossWarningValidator : i3.Validators.nullValidator,
                ]);
                if (element.alternative !== undefined) {
                    var subGroup = _this.createFormGroup(element.alternative);
                    group[element.alternative.componentId] = subGroup;
                }
            });
            return this.fb.group(group);
        };
        return FormService;
    }());
    FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(i0.ɵɵinject(FORM_TEMPLATE_TOKEN), i0.ɵɵinject(i3.FormBuilder), i0.ɵɵinject(CustomValidators), i0.ɵɵinject(LoggerService)); };
    FormService.ɵprov = i0.ɵɵdefineInjectable({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [FORM_TEMPLATE_TOKEN]
                        }] }, { type: i3.FormBuilder }, { type: CustomValidators }, { type: LoggerService }];
        }, null);
    })();

    function FormComponent_div_3_span_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 15);
            i0.ɵɵelement(1, "fa-icon", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("icon", ctx_r3.faInterrogation);
        }
    }
    function FormComponent_div_3_span_10_option_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "option");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var unit_r9 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", unit_r9, " ");
        }
    }
    function FormComponent_div_3_span_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 17);
            i0.ɵɵelementStart(1, "select", 18);
            i0.ɵɵtemplate(2, FormComponent_div_3_span_10_option_2_Template, 2, 1, "option", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r2 = i0.ɵɵnextContext().$implicit;
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("value", ctx_r4.asField(field_r2).units[0]);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r4.asField(field_r2).units);
        }
    }
    function FormComponent_div_3_a_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 19);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r2 = i0.ɵɵnextContext().$implicit;
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r5.asField(field_r2).units[0], " ");
        }
    }
    function FormComponent_div_3_p_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p", 20);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r2 = i0.ɵɵnextContext().$implicit;
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r6.getErrorMessage(ctx_r6.localForm.get(field_r2.id)).error, " ");
        }
    }
    function FormComponent_div_3_p_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p", 21);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r2 = i0.ɵɵnextContext().$implicit;
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r7.getWarningMessage(ctx_r7.asFormWarn(ctx_r7.localForm.get(field_r2.id))), " ");
        }
    }
    var _c0$1 = function (a0) { return { "is-danger": a0 }; };
    function FormComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "div", 5);
            i0.ɵɵelementStart(4, "label", 6);
            i0.ɵɵtext(5);
            i0.ɵɵtemplate(6, FormComponent_div_3_span_6_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 8);
            i0.ɵɵelementStart(8, "div", 9);
            i0.ɵɵelement(9, "input", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, FormComponent_div_3_span_10_Template, 3, 2, "span", 11);
            i0.ɵɵtemplate(11, FormComponent_div_3_a_11_Template, 2, 1, "a", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, FormComponent_div_3_p_12_Template, 2, 1, "p", 13);
            i0.ɵɵtemplate(13, FormComponent_div_3_p_13_Template, 2, 1, "p", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r2 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            var tmp_3_0 = null;
            var tmp_6_0 = null;
            var tmp_7_0 = null;
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx_r0.asField(field_r2).desc, ": ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", field_r2.type === "loss");
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("formGroupName", field_r2.id);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0$1, !((tmp_3_0 = ctx_r0.localForm.get(field_r2.id)) == null ? null : tmp_3_0.valid)));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.asField(field_r2).units.length > 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.asField(field_r2).units.length == 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !((tmp_6_0 = ctx_r0.localForm.get(field_r2.id)) == null ? null : tmp_6_0.valid));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (tmp_7_0 = ctx_r0.localForm.get(field_r2.id)) == null ? null : tmp_7_0.valid);
        }
    }
    function FormComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 22);
            i0.ɵɵelement(1, "img", 23);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("src", ctx_r1.displayedImage, i0.ɵɵsanitizeUrl);
        }
    }
    var FormComponent = /** @class */ (function () {
        function FormComponent(formService, logger) {
            this.formService = formService;
            this.logger = logger;
            this._formTemplate = new EmptyForm();
            this.isSubform = true;
            this.isStandalone = true;
            this.formStatus = new i0.EventEmitter();
            // We create a subform corresponding to one of the component involved in the link
            this.localForm = new i3.FormGroup({});
            this.faInterrogation = freeSolidSvgIcons.faQuestionCircle;
            this.componentName = '';
            this.parentName = '';
            this.displayedImage = '';
            this.hasImage = false;
            this.validity = 'none';
            this.localSubscription = new rxjs.Subscription();
            this.globalSubscription = new rxjs.Subscription();
            // If this is the first component constructed, initialize formService
            if (!this.formService.isInitialized)
                this.formService.initForms();
            this.subscribeToChanges();
        }
        Object.defineProperty(FormComponent.prototype, "formTemplate", {
            get: function () {
                return this._formTemplate;
            },
            set: function (value) {
                if (value) {
                    this._formTemplate = value;
                    this.changeComponent(this._formTemplate); // Supplied by datainput template
                    this.validity = this.localForm.valid ? 'valid' : 'invalid';
                    this.unsubscribeToChanges();
                    this.subscribeToChanges();
                    if (this.formTemplate.componentId === 'geometry') {
                        // We want to link slant range to altitude & elevation
                        this.geometrySubscribe();
                    }
                    // Checking validity
                    this.formStatus.emit({ id: this.formTemplate.componentId, validity: this.validity });
                }
                else {
                    this.logger.debug('Got an undefined formTemplate');
                }
            },
            enumerable: false,
            configurable: true
        });
        FormComponent.prototype.asField = function (field) {
            /**
             * Quick helper function for types conversion in the template
             */
            return field;
        };
        FormComponent.prototype.asFormWarn = function (control) {
            /**
             * Casts an AbstractControl into a FormControlWarn
             * (This is useful for doing type casting inside the template)
             */
            return control;
        };
        FormComponent.prototype.subscribeToChanges = function () {
            var _this = this;
            this.localSubscription = this.localForm.valueChanges.subscribe(function () {
                // Handle saved state
                _this.formService.isCurrentFormSaved = false;
                // Handle validity
                var currentFormValidity = _this.localForm.valid;
                if (!currentFormValidity && _this.validity !== 'invalid') {
                    _this.validity = 'invalid';
                    // console.log(this.step);
                    _this.formStatus.emit({ id: _this.formTemplate.componentId, validity: _this.validity });
                }
                else if (currentFormValidity && _this.validity !== 'valid') {
                    _this.validity = 'valid';
                    _this.formStatus.emit({ id: _this.formTemplate.componentId, validity: _this.validity });
                }
                else if (_this.validity === 'none') {
                    _this.validity = currentFormValidity ? 'valid' : 'invalid';
                    _this.formStatus.emit({ id: _this.formTemplate.componentId, validity: _this.validity });
                }
                _this.formService.addForm(_this.localForm, _this.componentName, _this.parentName);
            });
            // Subscription to geometry global changes caused by JSatOrb imports
            if (this.formTemplate.componentId === 'geometry') {
                this.globalSubscription.unsubscribe();
                this.globalSubscription = this.formService.globalForm.valueChanges.subscribe(function (newValue) {
                    if (_this.componentName === 'geometry' && _this.formTemplate.componentId === 'geometry') {
                        // Here we pass value from global to local, so we do not want to emit a valueChange event
                        // This way we avoid an infinite event loop
                        _this.localForm.patchValue(newValue.geometry, { emitEvent: false });
                    }
                });
            }
        };
        FormComponent.prototype.unsubscribeToChanges = function () {
            this.localSubscription.unsubscribe();
            this.globalSubscription.unsubscribe();
        };
        FormComponent.prototype.geometrySubscribe = function () {
            var _this = this;
            var _a, _b;
            /**
             * Handles the link between slant range and altitude/elevation
             * This function is a bit specific but could be generalized when used for other fields.
             * Only call this function when used with geometry templates.
             */
            if (this.formTemplate.componentId !== 'geometry') {
                return; // If our component isn't geometry related, pass the following subscriptions
            }
            (_a = this.localForm.get('altitude')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(function (value) {
                var _a, _b;
                // Altitude edited => calculate SR
                var elevation = (_a = _this.localForm.get('elevation')) === null || _a === void 0 ? void 0 : _a.value;
                // Convert to radians if required
                elevation.value = elevation.unit === '°' ? elevation.value : elevation.value * (180 / Math.PI);
                // Convert altitue to km
                var altitude = HelperFunctions.convertDistance(parseFloat(value.value), value.unit, 'km');
                (_b = _this.localForm.get('slantRange')) === null || _b === void 0 ? void 0 : _b.setValue({
                    value: HelperFunctions.slantRangeFromAltElev(altitude, parseFloat(elevation.value)).toFixed(1),
                    unit: 'km',
                });
            });
            (_b = this.localForm.get('elevation')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe(function (value) {
                var _a, _b;
                // elevation changed => calculate SR again
                var altitude = (_a = _this.localForm.get('altitude')) === null || _a === void 0 ? void 0 : _a.value;
                // Convert to radians if required
                altitude.value = HelperFunctions.convertDistance(parseFloat(altitude.value), altitude.unit, 'km');
                // Convert altitue to km
                var elev = value.unit === '°' ? value.value : value.value * (180 / Math.PI);
                (_b = _this.localForm.get('slantRange')) === null || _b === void 0 ? void 0 : _b.setValue({
                    value: HelperFunctions.slantRangeFromAltElev(altitude.value, parseFloat(elev)).toFixed(1),
                    unit: 'km',
                });
            });
        };
        FormComponent.prototype.changeComponent = function (componentTemplate) {
            /**
             * Handles the reuse of the form components by allowing to change inner template
             * @Input <Form>componentTemplate, the new template to use
             */
            var _a, _b;
            // Setting up new Template involves a lot a casting and checking if templates fields aren't null or undefined
            this.parentName = (_a = componentTemplate.parentComponent) !== null && _a !== void 0 ? _a : '';
            this.componentName = componentTemplate.componentId;
            this.hasImage = !!componentTemplate.image; // Casts our componentTemplate.image to a boolean
            this.displayedImage = (_b = componentTemplate.image) !== null && _b !== void 0 ? _b : '';
            var previousForm;
            if (!this.parentName) {
                previousForm = this.formService.globalForm.value[this.componentName];
            }
            else {
                previousForm = this.formService.globalForm.value[this.parentName][this.componentName];
            }
            // We use default values here but since they have already been used to generate globalForm, we shouldn't use them once again
            // Here we want to regenerate the localFrom from archived form
            var newForm = this.formService.createFormGroup(componentTemplate);
            if (previousForm) {
                // Previous from already exists, we overwrite the localForm
                newForm.setValue(previousForm);
                this.localForm = newForm;
                // Now we want to add this localForm to the globalForm
                if (componentTemplate.parentComponent) {
                    // Component is stored in a group
                    var group = this.formService.globalForm.get(this.parentName);
                    if (group) {
                        // The group already existed
                        group.setControl(this.componentName, this.localForm);
                        this.formService.globalForm.setControl(this.parentName, group);
                    }
                    else {
                        this.formService.addForm(this.localForm, this.componentName, this.parentName);
                    }
                }
                else {
                    // Component is not stored in a group (cf geometry)
                    this.formService.globalForm.setControl(this.componentName, this.localForm);
                }
            }
            else {
                // This form doesn't exist in the archives
                // We will use the values from globalForm
                this.localForm = newForm;
                this.formService.addForm(this.localForm, this.componentName, this.parentName);
            }
        };
        FormComponent.prototype.getWarningMessage = function (control) {
            /**
             * Returns the warning message if there is one
             */
            if (control && control.warnings)
                return control.warnings;
            return '';
        };
        FormComponent.prototype.getErrorMessage = function (control) {
            var _a, _b;
            /**
             * This function gathers result from validators.
             * The custom validator are defined in custom-fields.ts
             */
            var error;
            var warning = '';
            // Internal error, the control does not exist
            if (control === null) {
                error = 'Unknown error (-1)';
                return { error: error, warning: warning };
            }
            var errors = control.errors;
            if (errors === null) {
                if ((_b = (_a = control.get('value')) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.pattern) {
                    // Here we intercept the case where regexp is wrong.
                    error = 'Please choose a numerical value';
                }
                else {
                    // No error
                }
            }
            else {
                // array destructuring (same as error = errors.error;)
                (error = errors.error);
            }
            return { error: error, warning: warning };
        };
        return FormComponent;
    }());
    FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(i0.ɵɵdirectiveInject(FormService), i0.ɵɵdirectiveInject(LoggerService)); };
    FormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormComponent, selectors: [["lib-form"]], inputs: { formTemplate: "formTemplate", groupId: "groupId", isSubform: "isSubform", isStandalone: "isStandalone" }, outputs: { formStatus: "formStatus" }, decls: 5, vars: 3, consts: [[1, "columns", "is-multiline"], [1, "column"], ["role", "form", 3, "formGroup"], [4, "ngFor", "ngForOf"], ["class", "column", "style", "text-align:center;", 4, "ngIf"], [1, "field", "basic-input"], [1, "label"], ["style", "color: lightgray; dislay: inline-block; float:right", "class", "has-tooltip-arrow has-tooltip-right has-tooltip-multiline", "data-tooltip", "Losses are algebraic. They should be written as negative number (e.g. -3.0dB)", 4, "ngIf"], [1, "field", "has-addons", 3, "formGroupName"], [1, "control", "is-expanded"], ["type", "text", "formControlName", "value", 1, "input", 3, "ngClass"], ["class", "select", 4, "ngIf"], ["class", "button is-static", 4, "ngIf"], ["class", "help is-danger m-0", 4, "ngIf"], ["class", "help is-warning m-0", 4, "ngIf"], ["data-tooltip", "Losses are algebraic. They should be written as negative number (e.g. -3.0dB)", 1, "has-tooltip-arrow", "has-tooltip-right", "has-tooltip-multiline", 2, "color", "lightgray", "dislay", "inline-block", "float", "right"], [3, "icon"], [1, "select"], ["formControlName", "unit", 3, "value"], [1, "button", "is-static"], [1, "help", "is-danger", "m-0"], [1, "help", "is-warning", "m-0"], [1, "column", 2, "text-align", "center"], [2, "max-width", "180px", 3, "src"]], template: function FormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "form", 2);
                i0.ɵɵtemplate(3, FormComponent_div_3_Template, 14, 10, "div", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, FormComponent_div_4_Template, 2, 1, "div", 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("formGroup", ctx.localForm);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.formTemplate.params);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.hasImage);
            }
        }, directives: [i3.ɵangular_packages_forms_forms_ba, i3.NgControlStatusGroup, i3.FormGroupDirective, i4.NgForOf, i4.NgIf, i3.FormGroupName, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName, i4.NgClass, i2.FaIconComponent, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_z], styles: ["label[_ngcontent-%COMP%]{margin:0;margin-bottom:0!important;padding:6px}.input-wrapper[_ngcontent-%COMP%]{display:inline-flex}.form-control[_ngcontent-%COMP%]{max-width:90px;min-width:90px}.spacing[_ngcontent-%COMP%]{margin:24px;padding:0 24px}.field[_ngcontent-%COMP%]{max-width:360px}.field[_ngcontent-%COMP%], form[_ngcontent-%COMP%]{margin:auto}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-form',
                        templateUrl: './form.component.html',
                        styleUrls: ['./form.component.scss'],
                    }]
            }], function () { return [{ type: FormService }, { type: LoggerService }]; }, { formTemplate: [{
                    type: i0.Input
                }], groupId: [{
                    type: i0.Input
                }], isSubform: [{
                    type: i0.Input
                }], isStandalone: [{
                    type: i0.Input
                }], formStatus: [{
                    type: i0.Output
                }] });
    })();

    var LoggerModule = /** @class */ (function () {
        function LoggerModule() {
        }
        LoggerModule.forRoot = function () {
            return {
                ngModule: LoggerModule,
                providers: [
                    { provide: LoggerService },
                ],
            };
        };
        return LoggerModule;
    }());
    LoggerModule.ɵfac = function LoggerModule_Factory(t) { return new (t || LoggerModule)(); };
    LoggerModule.ɵmod = i0.ɵɵdefineNgModule({ type: LoggerModule });
    LoggerModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
            LoggerService,
        ], imports: [[
                i4.CommonModule,
                animations.BrowserAnimationsModule,
                i1.ToastrModule.forRoot({
                    positionClass: 'toast-bottom-right',
                }),
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LoggerModule, { imports: [i4.CommonModule,
                animations.BrowserAnimationsModule, i1.ToastrModule] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoggerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [
                            i4.CommonModule,
                            animations.BrowserAnimationsModule,
                            i1.ToastrModule.forRoot({
                                positionClass: 'toast-bottom-right',
                            }),
                        ],
                        providers: [
                            LoggerService,
                        ],
                    }]
            }], null, null);
    })();

    var FormModule = /** @class */ (function () {
        function FormModule() {
        }
        return FormModule;
    }());
    FormModule.ɵfac = function FormModule_Factory(t) { return new (t || FormModule)(); };
    FormModule.ɵmod = i0.ɵɵdefineNgModule({ type: FormModule });
    FormModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
            FormService,
            LoggerService,
        ], imports: [[
                i4.CommonModule,
                i3.ReactiveFormsModule,
                i2.FontAwesomeModule,
                LoggerModule.forRoot(),
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormModule, { declarations: [FormComponent], imports: [i4.CommonModule,
                i3.ReactiveFormsModule,
                i2.FontAwesomeModule, LoggerModule], exports: [FormComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FormComponent,
                        ],
                        imports: [
                            i4.CommonModule,
                            i3.ReactiveFormsModule,
                            i2.FontAwesomeModule,
                            LoggerModule.forRoot(),
                        ],
                        exports: [
                            FormComponent,
                        ],
                        providers: [
                            FormService,
                            LoggerService,
                        ],
                    }]
            }], null, null);
    })();

    var AntennasUtilsFunctions = {
        yagiGainComputation: function (params) {
            /**
             * AMSAT uses a LUT for this computation.
             * There seems to exist Python library that could handle these calculations.
             * For now, we're interpolating the data used in AMSAT
             * This function could also call API for complex calculations
             */
            console.warn('Yagi Gain Computation - not finished', params);
            var length = params.boomLength.value;
            return Math.round(12.316 * Math.pow(length, 0.2665) * 100) / 100;
        },
        yagiOptimumElements: function (params) {
            console.warn('Yagi Beamwidth Computation - not finished', params);
            var length = params.boomLength.value;
            return Math.round((2.632 * Math.pow(length, 0.2665) + 3.149) * 100) / 100;
        },
        yagiBeamwidthComputation: function (params) {
            console.warn('Yagi Beamwidth Computation - not finished', params);
            var length = params.boomLength.value;
            return Math.round(Math.sqrt(40000 / (Math.pow(10, (this.yagiGainComputation(params) / 10)))) * 100) / 100;
        },
    };
    var Antennas = /** @class */ (function () {
        function Antennas() {
        }
        return Antennas;
    }());
    Antennas.genericAntenna = {
        // componentType: "antenna",
        componentId: '',
        params: [{
                id: 'antMaxGain',
                desc: 'Max Gain',
                units: ['dBi'],
                // dimension:"iso_gain",
                default: 14.0,
            },
            {
                id: 'antBeamWidth',
                desc: 'Beamwidth',
                units: ['°', 'rad'],
                // dimension:"angle",
                default: 35.0,
            },
        ],
    };
    Antennas.yagiAntenna = {
        // componentType: "antenna",
        componentId: 'yagiAntenna',
        componentName: 'Yagi',
        image: 'assets/antennas/yagi.jpg',
        gainCalculation: 'yagiGainComputation',
        params: [
            {
                id: 'boomLength',
                desc: 'Boom Length',
                units: ['m', 'cm'],
                // dimension: "length",
                default: 0.4,
            },
            {
                id: 'elements',
                desc: 'Number of elements',
                units: ['m', 'cm'],
                // dimension: "length",
                default: 0.4,
            },
        ],
    };
    Antennas.helixAntenna = {
        // componentType: "antenna",
        componentId: 'helixAntenna',
        componentName: 'Helicoidal',
        image: 'assets/antennas/helix.jpg',
        params: [
            {
                id: 'turns',
                desc: 'Turns',
                units: [],
                // dimension: "adimensional",
                default: 10,
            },
            {
                id: 'turnSpacing',
                desc: 'Turn Spacing',
                units: ['m', 'cm'],
                // dimension: "length",
                default: 0.25,
            },
            {
                id: 'circumference',
                desc: 'Circumference',
                units: ['m', 'cm'],
                // dimension: "length",
                default: 1,
            },
        ],
    };

    var _c0$2 = function () { return { component: "ULCarrier" }; };
    var _c1 = function (a0) { return { "is-active": a0 }; };
    var _c2 = function () { return { component: "ULTransmitter" }; };
    var _c3 = function () { return { component: "ULReceiver" }; };
    function NavigationSidebarComponent_ul_18_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 3);
            i0.ɵɵelementStart(1, "li");
            i0.ɵɵelementStart(2, "a", 6);
            i0.ɵɵtext(3, "Carrier & Environment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "li");
            i0.ɵɵelementStart(5, "a", 6);
            i0.ɵɵtext(6, "Transmitter");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "li");
            i0.ɵɵelementStart(8, "a", 6);
            i0.ɵɵtext(9, "Receiver");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(6, _c0$2))("ngClass", i0.ɵɵpureFunction1(7, _c1, ctx_r0.currentComponent === "ULCarrier"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(9, _c2))("ngClass", i0.ɵɵpureFunction1(10, _c1, ctx_r0.currentComponent === "ULTransmitter"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(12, _c3))("ngClass", i0.ɵɵpureFunction1(13, _c1, ctx_r0.currentComponent === "ULReceiver"));
        }
    }
    var _c4 = function () { return { component: "DLCarrier" }; };
    var _c5 = function () { return { component: "DLTransmitter" }; };
    var _c6 = function () { return { component: "DLReceiver" }; };
    function NavigationSidebarComponent_ul_25_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 3);
            i0.ɵɵelementStart(1, "li");
            i0.ɵɵelementStart(2, "a", 6);
            i0.ɵɵtext(3, "Carrier & Environment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "li");
            i0.ɵɵelementStart(5, "a", 6);
            i0.ɵɵtext(6, "Transmitter");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "li");
            i0.ɵɵelementStart(8, "a", 6);
            i0.ɵɵtext(9, "Receiver");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("@panelInOut", undefined);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(7, _c4))("ngClass", i0.ɵɵpureFunction1(8, _c1, ctx_r1.currentComponent === "DLCarrier"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(10, _c5))("ngClass", i0.ɵɵpureFunction1(11, _c1, ctx_r1.currentComponent === "DLTransmitter"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(13, _c6))("ngClass", i0.ɵɵpureFunction1(14, _c1, ctx_r1.currentComponent === "DLReceiver"));
        }
    }
    var _c7 = function () { return { component: "geometry" }; };
    var _c8 = function (a0) { return { "fa-rotate-90": a0 }; };
    // import packageInfo from '../../../../package.json';
    var NavigationSidebarComponent = /** @class */ (function () {
        function NavigationSidebarComponent(environment) {
            this.environment = environment;
            this.currentComponent = 'geometry';
            this.collapseUplink = true;
            this.collapseDownlink = true;
            this.mail = freeSolidSvgIcons.faEnvelope;
            this.collapsed = false;
            this.showAbout = false; //Controls the visibility of 'about' modal
            // version = packageInfo.version;
            this.version = this.environment.version;
            this.faAngleDown = freeSolidSvgIcons.faAngleDown;
            // console.log(environment);
        }
        NavigationSidebarComponent.prototype.switchTemplate = function (name) {
            this.currentComponent = name;
        };
        NavigationSidebarComponent.prototype.collapseSidebar = function () {
            this.collapsed = !this.collapsed;
        };
        return NavigationSidebarComponent;
    }());
    NavigationSidebarComponent.ɵfac = function NavigationSidebarComponent_Factory(t) { return new (t || NavigationSidebarComponent)(i0.ɵɵdirectiveInject(ENVIRONMENT_TOKEN)); };
    NavigationSidebarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavigationSidebarComponent, selectors: [["lib-navigation-sidebar"]], inputs: { currentComponent: "currentComponent" }, decls: 85, vars: 25, consts: [["id", "sidebar", 1, "column", "is-narrow", "is-fullheight", "p-0", "m-0", 3, "ngClass"], [1, "section", "pr-0", "pl-0"], [1, "menu"], [1, "menu-list"], ["routerLink", "/luplink/welcome", "href", "#", "routerLinkActive", "is-active", 1, "navbar-menu"], [1, "menu-label"], ["routerLink", "/luplink", 1, "navbar-menu", 3, "queryParams", "ngClass"], [1, "icon", 2, "float", "right", 3, "click"], [3, "icon", "ngClass"], ["class", "menu-list", 4, "ngIf"], ["routerLink", "/luplink/results", "href", "#", "routerLinkActive", "active-route", 1, "navbar-menu", 3, "ngClass"], [1, "navbar-menu", 2, "bottom", "0px", "position", "relative", "right", "0px", 3, "click"], ["id", "modal", 1, "modal", 3, "ngClass"], [1, "modal-background", 3, "click"], [1, "modal-content"], [1, "box"], [2, "display", "inline-block", "margin", "0px"], [1, "has-text-grey", 2, "display", "inline-block", "margin-left", "5px"], ["href", "https://www.gnu.org/licenses/agpl-3.0-standalone.html", 1, "has-text-grey", 2, "display", "block", "margin-bottom", "15px"], [1, "media"], [1, "media-content"], [1, "content"], ["target", "_blank", "href", "https://gitlab.isae-supaero.fr/jsatorb-dev/stage/stage-2021-julien_prissimitzis", 1, "has-text-link"], ["target", "_blank", "href", "https://www.npmjs.com/package/@luplink/ngx-luplink", 1, "has-text-link"], ["target", "_blank", "href", "https://gitlab.com/librecube/lib/python-linkpredict/-/blob/master/README.md", 1, "has-text-link"], ["target", "_blank", "href", "mailto:julienprissi@protonmail.com"], [3, "icon"], [1, "logos"], ["target", "_blank", "href", "https://angular.io/"], ["src", "/assets/images/angular.png", "alt", "logo angular"], ["target", "_blank", "href", "https://www.isae-supaero.fr/fr/"], ["src", "/assets/images/isae.png", "alt", "logo isae"], ["target", "_blank", "href", "http://nanostarproject.eu/"], ["src", "data:image/png;base64,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", "alt", "logo nanostar"], ["aria-label", "close", 1, "modal-close", "is-large", 3, "click"], [1, "button", "is-primary", 2, "left", "10px", "z-index", "1", "bottom", "10px", "position", "fixed", 3, "click"]], template: function NavigationSidebarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "section", 1);
                i0.ɵɵelementStart(2, "aside", 2);
                i0.ɵɵelementStart(3, "ul", 3);
                i0.ɵɵelementStart(4, "li");
                i0.ɵɵelementStart(5, "a", 4);
                i0.ɵɵtext(6, "Welcome");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "p", 5);
                i0.ɵɵtext(8, "Link Budget");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "li");
                i0.ɵɵelementStart(10, "a", 6);
                i0.ɵɵtext(11, "Geometry");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "li");
                i0.ɵɵelementStart(13, "a");
                i0.ɵɵelementStart(14, "span", 7);
                i0.ɵɵlistener("click", function NavigationSidebarComponent_Template_span_click_14_listener() { return ctx.collapseUplink = !ctx.collapseUplink; });
                i0.ɵɵelement(15, "fa-icon", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵtext(16, " Uplink");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "li");
                i0.ɵɵtemplate(18, NavigationSidebarComponent_ul_18_Template, 10, 15, "ul", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "li");
                i0.ɵɵelementStart(20, "a");
                i0.ɵɵelementStart(21, "span", 7);
                i0.ɵɵlistener("click", function NavigationSidebarComponent_Template_span_click_21_listener() { return ctx.collapseDownlink = !ctx.collapseDownlink; });
                i0.ɵɵelement(22, "fa-icon", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵtext(23, "Downlink ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "li");
                i0.ɵɵtemplate(25, NavigationSidebarComponent_ul_25_Template, 10, 16, "ul", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "li");
                i0.ɵɵelementStart(27, "a", 10);
                i0.ɵɵtext(28, "Results");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "li");
                i0.ɵɵelementStart(30, "a", 11);
                i0.ɵɵlistener("click", function NavigationSidebarComponent_Template_a_click_30_listener() { return ctx.showAbout = true; });
                i0.ɵɵtext(31, "About");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(32, "div", 12);
                i0.ɵɵelementStart(33, "div", 13);
                i0.ɵɵlistener("click", function NavigationSidebarComponent_Template_div_click_33_listener() { return ctx.showAbout = false; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(34, "div", 14);
                i0.ɵɵelementStart(35, "div", 15);
                i0.ɵɵelementStart(36, "h3", 16);
                i0.ɵɵtext(37, "Luplink");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(38, "small", 17);
                i0.ɵɵtext(39);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(40, "br");
                i0.ɵɵelementStart(41, "a", 18);
                i0.ɵɵtext(42, "License AGPL v3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(43, "article", 19);
                i0.ɵɵelementStart(44, "div", 20);
                i0.ɵɵelementStart(45, "div", 21);
                i0.ɵɵelementStart(46, "p");
                i0.ɵɵelementStart(47, "strong");
                i0.ɵɵtext(48, "Luplink: ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(49, "a", 22);
                i0.ɵɵtext(50, "See on Gitlab ");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(51, "br");
                i0.ɵɵelementStart(52, "strong");
                i0.ɵɵtext(53, "ngx-luplink: ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(54, "a", 23);
                i0.ɵɵtext(55, "See on npmjs.com");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(56, "br");
                i0.ɵɵelementStart(57, "strong");
                i0.ɵɵtext(58, "python-linkpredict (backend): ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(59, "a", 24);
                i0.ɵɵtext(60, "https://gitlab.com/librecube/lib/python-linkpredict/");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(61, "br");
                i0.ɵɵelement(62, "br");
                i0.ɵɵelementStart(63, "strong");
                i0.ɵɵtext(64, "Built by:");
                i0.ɵɵelementEnd();
                i0.ɵɵtext(65, " Julien Prissimitzis / ");
                i0.ɵɵelementStart(66, "small");
                i0.ɵɵelementStart(67, "a", 25);
                i0.ɵɵelement(68, "fa-icon", 26);
                i0.ɵɵtext(69, " Contact ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(70, "br");
                i0.ɵɵelementStart(71, "strong");
                i0.ɵɵtext(72, "Supervisor:");
                i0.ɵɵelementEnd();
                i0.ɵɵtext(73, " Thibault Gateau");
                i0.ɵɵelement(74, "br");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(75, "div", 27);
                i0.ɵɵelementStart(76, "a", 28);
                i0.ɵɵelement(77, "img", 29);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(78, "a", 30);
                i0.ɵɵelement(79, "img", 31);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(80, "a", 32);
                i0.ɵɵelement(81, "img", 33);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(82, "button", 34);
                i0.ɵɵlistener("click", function NavigationSidebarComponent_Template_button_click_82_listener() { return ctx.showAbout = false; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(83, "button", 35);
                i0.ɵɵlistener("click", function NavigationSidebarComponent_Template_button_click_83_listener() { return ctx.collapseSidebar(); });
                i0.ɵɵtext(84);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.collapsed ? "is-hidden" : "");
                i0.ɵɵadvance(10);
                i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(14, _c7))("ngClass", i0.ɵɵpureFunction1(15, _c1, ctx.currentComponent === "geometry"));
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("icon", ctx.faAngleDown)("ngClass", i0.ɵɵpureFunction1(17, _c8, !ctx.collapseUplink));
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.collapseUplink);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("icon", ctx.faAngleDown)("ngClass", i0.ɵɵpureFunction1(19, _c8, !ctx.collapseDownlink));
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.collapseDownlink);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(21, _c1, ctx.currentComponent === "results"));
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(23, _c1, ctx.showAbout));
                i0.ɵɵadvance(7);
                i0.ɵɵtextInterpolate("v" + ctx.version);
                i0.ɵɵadvance(29);
                i0.ɵɵproperty("icon", ctx.mail);
                i0.ɵɵadvance(16);
                i0.ɵɵtextInterpolate1(" ", ctx.collapsed ? ">" : "<", " ");
            }
        }, directives: [i4.NgClass, i2$1.RouterLinkWithHref, i2$1.RouterLinkActive, i2.FaIconComponent, i4.NgIf], styles: ["a[_ngcontent-%COMP%]:hover{background-color:#ececec;text-decoration:none}a[_ngcontent-%COMP%]{color:#646464}.version[_ngcontent-%COMP%]{color:rgba(70,70,70,.7450980392156863);float:right;padding:10px}.fixed[_ngcontent-%COMP%]{bottom:30px;left:5px;position:fixed;z-index:-5}.menu-label[_ngcontent-%COMP%]{padding:0 12px}li[_ngcontent-%COMP%]{overflow:hidden}li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#646464;padding-left:24px}.menu-label[_ngcontent-%COMP%]{margin:0;padding:12px}#sidebar[_ngcontent-%COMP%]{background-color:#fbfbfb;border:solid hsla(0,0%,50.2%,.1803921568627451);border-width:0 1px 0 0;height:100vh;margin:10px;position:sticky;top:0;width:200px}.navbar-menu.is-active[_ngcontent-%COMP%]{-webkit-animation:navAnim .2s ease-in-out;animation:navAnim .2s ease-in-out;background-color:#ececec!important;border:solid #3273dc;border-width:0 0 0 5px;color:#3273dc;font-weight:700}@-webkit-keyframes navAnim{0%{background-color:transparent;opacity:0;transform:scaleX(0)}to{opacity:1;transform:scaleX(100%)}}@keyframes navAnim{0%{background-color:transparent;opacity:0;transform:scaleX(0)}to{opacity:1;transform:scaleX(100%)}}.modal-content[_ngcontent-%COMP%]{margin:0 auto;max-height:calc(100vh - 40px);width:640px}.logos[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{max-height:60px}.logos[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}"], data: { animation: [
                animations$1.trigger('panelInOut', [
                    animations$1.transition('void => *', [animations$1.style({ transform: 'translateY(-100%)' }), animations$1.animate(100)]),
                    animations$1.transition('* => void', [animations$1.animate(100, animations$1.style({ transform: 'translateY(-100%)' }))]),
                ]),
            ] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationSidebarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-navigation-sidebar',
                        templateUrl: './navigation-sidebar.component.html',
                        styleUrls: ['./navigation-sidebar.component.scss'],
                        animations: [
                            animations$1.trigger('panelInOut', [
                                animations$1.transition('void => *', [animations$1.style({ transform: 'translateY(-100%)' }), animations$1.animate(100)]),
                                animations$1.transition('* => void', [animations$1.animate(100, animations$1.style({ transform: 'translateY(-100%)' }))]),
                            ]),
                        ],
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [ENVIRONMENT_TOKEN]
                        }] }];
        }, { currentComponent: [{
                    type: i0.Input
                }] });
    })();

    function StepbarComponent_fa_icon_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fa-icon", 9);
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("icon", ctx_r0.faExclamation);
        }
    }
    function StepbarComponent_fa_icon_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fa-icon", 9);
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("icon", ctx_r1.faCheck);
        }
    }
    function StepbarComponent_fa_icon_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fa-icon", 9);
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("icon", ctx_r2.faExclamation);
        }
    }
    function StepbarComponent_fa_icon_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fa-icon", 9);
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("icon", ctx_r3.faCheck);
        }
    }
    function StepbarComponent_fa_icon_21_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fa-icon", 9);
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵproperty("icon", ctx_r4.faExclamation);
        }
    }
    function StepbarComponent_fa_icon_22_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fa-icon", 9);
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵproperty("icon", ctx_r5.faCheck);
        }
    }
    var _c0$3 = function (a0) { return { "is-active": a0 }; };
    var _c1$1 = function (a0, a1) { return { "is-warning": a0, "is-success": a1 }; };
    // interface Validity {
    //   steps: { [key: string]: string };
    //   forms: { [key: string]: string };
    // }
    var StepbarComponent = /** @class */ (function () {
        function StepbarComponent() {
            this.faCheck = freeSolidSvgIcons.faCheck;
            this.faExclamation = freeSolidSvgIcons.faExclamation;
            this._step = 'geometry';
        }
        Object.defineProperty(StepbarComponent.prototype, "validity", {
            get: function () {
                return this._validity;
            },
            set: function (value) {
                if (value) {
                    this._validity = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StepbarComponent.prototype, "step", {
            get: function () {
                return this._step;
            },
            set: function (value) {
                this._step = value;
            },
            enumerable: false,
            configurable: true
        });
        StepbarComponent.prototype.updateValidity = function () { };
        StepbarComponent.prototype.isActive = function (step) {
            /**
             * Determines if one of the step is active depending on other steps validity
             */
            // eslint-disable-next-line no-restricted-syntax
            for (var key in this.validity.steps) {
                if (Object.prototype.hasOwnProperty.call(this.validity.steps, key)) {
                    if (this.validity.steps[key] !== 'valid' || this.step === step) {
                        // We don't want the progress bar to continue after a warning
                        return true;
                    }
                }
            }
            return false;
        };
        return StepbarComponent;
    }());
    StepbarComponent.ɵfac = function StepbarComponent_Factory(t) { return new (t || StepbarComponent)(); };
    StepbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StepbarComponent, selectors: [["lib-stepbar"]], inputs: { validity: "validity", step: "step" }, decls: 31, vars: 30, consts: [[1, "section", "pb-0", "pt-5"], [1, "steps", "is-medium", "is-centered", "has-content-centered"], [1, "steps-segment", 3, "ngClass"], [1, "steps-marker", 3, "ngClass"], [1, "icon"], [3, "icon", 4, "ngIf"], [1, "steps-content"], [1, "heading"], [1, "steps-marker"], [3, "icon"]], template: function StepbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "section", 0);
                i0.ɵɵelementStart(1, "ul", 1);
                i0.ɵɵelementStart(2, "li", 2);
                i0.ɵɵelementStart(3, "span", 3);
                i0.ɵɵelementStart(4, "span", 4);
                i0.ɵɵtemplate(5, StepbarComponent_fa_icon_5_Template, 1, 1, "fa-icon", 5);
                i0.ɵɵtemplate(6, StepbarComponent_fa_icon_6_Template, 1, 1, "fa-icon", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div", 6);
                i0.ɵɵelementStart(8, "p", 7);
                i0.ɵɵtext(9, "Geometry");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "li", 2);
                i0.ɵɵelementStart(11, "span", 3);
                i0.ɵɵelementStart(12, "span", 4);
                i0.ɵɵtemplate(13, StepbarComponent_fa_icon_13_Template, 1, 1, "fa-icon", 5);
                i0.ɵɵtemplate(14, StepbarComponent_fa_icon_14_Template, 1, 1, "fa-icon", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "div", 6);
                i0.ɵɵelementStart(16, "p", 7);
                i0.ɵɵtext(17, "Uplink");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "li", 2);
                i0.ɵɵelementStart(19, "span", 3);
                i0.ɵɵelementStart(20, "span", 4);
                i0.ɵɵtemplate(21, StepbarComponent_fa_icon_21_Template, 1, 1, "fa-icon", 5);
                i0.ɵɵtemplate(22, StepbarComponent_fa_icon_22_Template, 1, 1, "fa-icon", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "div", 6);
                i0.ɵɵelementStart(24, "p", 7);
                i0.ɵɵtext(25, "Downlink");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "li", 2);
                i0.ɵɵelement(27, "span", 8);
                i0.ɵɵelementStart(28, "div", 6);
                i0.ɵɵelementStart(29, "p", 7);
                i0.ɵɵtext(30, "Result");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c0$3, ctx.isActive("geometry")));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(15, _c1$1, ctx.validity.steps.geometry === "invalid", ctx.validity.steps.geometry === "valid"));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.validity.steps.geometry === "invalid");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.validity.steps.geometry === "valid");
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(18, _c0$3, ctx.isActive("uplink")));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(20, _c1$1, ctx.validity.steps.uplink === "invalid", ctx.validity.steps.uplink === "valid"));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.validity.steps.uplink === "invalid");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.validity.steps.uplink === "valid");
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(23, _c0$3, ctx.isActive("downlink")));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(25, _c1$1, ctx.validity.steps.downlink === "invalid", ctx.validity.steps.downlink === "valid"));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.validity.steps.downlink === "invalid");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.validity.steps.downlink === "valid");
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(28, _c0$3, ctx.isActive("result")));
            }
        }, directives: [i4.NgClass, i4.NgIf, i2.FaIconComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-stepbar',
                        templateUrl: './stepbar.component.html',
                        styleUrls: ['./stepbar.component.scss'],
                    }]
            }], function () { return []; }, { validity: [{
                    type: i0.Input
                }], step: [{
                    type: i0.Input
                }] });
    })();

    function SimpleDocumentationComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "h3", 34);
            i0.ɵɵtext(2, "Carrier & Environment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4, "Here we can define the carrier used for the uplink. The Free Space Path Loss (FSPL) and atmospheric losses depend on frequency but also polarization of the carrier. This graph shows the losses in dB due to propagation in free space as a function of distance between antennas and frequency of the carrier");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "img", 35);
            i0.ɵɵelement(6, "img", 36);
            i0.ɵɵelementStart(7, "small", 37);
            i0.ɵɵtext(8, "\u00A9 ");
            i0.ɵɵelementStart(9, "a", 38);
            i0.ɵɵtext(10, "Splash");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, ", ");
            i0.ɵɵelementStart(12, "a", 39);
            i0.ɵɵtext(13, "CC BY-SA 3.0");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(14, ", via Wikimedia Commons");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function SimpleDocumentationComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div", 40);
            i0.ɵɵelementStart(2, "div", 41);
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4, "The transmitter has the following architecture: ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(5, "svg", 42);
            i0.ɵɵelementStart(6, "defs");
            i0.ɵɵelementStart(7, "marker", 43);
            i0.ɵɵelement(8, "path", 44);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "marker", 45);
            i0.ɵɵelement(10, "path", 46);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "g", 47);
            i0.ɵɵelement(12, "path", 48);
            i0.ɵɵelementStart(13, "text", 49);
            i0.ɵɵelementStart(14, "tspan", 50);
            i0.ɵɵtext(15, "Tx");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "g", 51);
            i0.ɵɵelement(17, "path", 52);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "g", 53);
            i0.ɵɵelement(19, "path", 54);
            i0.ɵɵelement(20, "path", 55);
            i0.ɵɵelement(21, "path", 56);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "rect", 57);
            i0.ɵɵelement(23, "rect", 58);
            i0.ɵɵelementStart(24, "text", 59);
            i0.ɵɵelementStart(25, "tspan", 60);
            i0.ɵɵelementStart(26, "tspan", 60);
            i0.ɵɵtext(27, "Filter");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "g", 61);
            i0.ɵɵelement(29, "path", 62);
            i0.ɵɵelement(30, "path", 63);
            i0.ɵɵelement(31, "path", 64);
            i0.ɵɵelement(32, "path", 65);
            i0.ɵɵelement(33, "path", 66);
            i0.ɵɵelement(34, "path", 67);
            i0.ɵɵelement(35, "path", 68);
            i0.ɵɵelement(36, "path", 69);
            i0.ɵɵelement(37, "path", 70);
            i0.ɵɵelement(38, "path", 71);
            i0.ɵɵelement(39, "path", 72);
            i0.ɵɵelement(40, "path", 73);
            i0.ɵɵelement(41, "path", 74);
            i0.ɵɵelement(42, "path", 75);
            i0.ɵɵelement(43, "path", 76);
            i0.ɵɵelement(44, "path", 77);
            i0.ɵɵelement(45, "path", 78);
            i0.ɵɵelement(46, "path", 79);
            i0.ɵɵelement(47, "path", 80);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(48, "path", 81);
            i0.ɵɵelementStart(49, "text", 82);
            i0.ɵɵelementStart(50, "tspan", 83);
            i0.ɵɵtext(51, "Antenna Mismatch");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(52, "br");
            i0.ɵɵelementStart(53, "p");
            i0.ɵɵtext(54, "We need to calculate the total line losses to determine the power actually delivered to the antenna. These line losses depend on the line length and quality. We usually try to make these as short as possible on the space segment since we have tight power requirements.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "p");
            i0.ɵɵelementStart(56, "b");
            i0.ɵɵtext(57, "Power in:");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(58);
            i0.ɵɵelement(59, "br");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "div", 41);
            i0.ɵɵelementStart(61, "div", 40);
            i0.ɵɵelementStart(62, "div", 41);
            i0.ɵɵelementStart(63, "pre");
            i0.ɵɵtext(64);
            i0.ɵɵpipe(65, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "div", 41);
            i0.ɵɵelementStart(67, "pre");
            i0.ɵɵtext(68);
            i0.ɵɵpipe(69, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(58);
            i0.ɵɵtextInterpolate2(" ", ctx_r1.form == null ? null : ctx_r1.form.uplink == null ? null : ctx_r1.form.uplink.transmitter.power.value, " ", ctx_r1.form == null ? null : ctx_r1.form.uplink == null ? null : ctx_r1.form.uplink.transmitter.power.unit, "");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("            ", i0.ɵɵpipeBind1(65, 4, ctx_r1.form == null ? null : ctx_r1.form.uplink == null ? null : ctx_r1.form.uplink.transmitter), "\n          ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("            ", i0.ɵɵpipeBind1(69, 6, ctx_r1.formService.getFormData().uplink.transmitter), "\n          ");
        }
    }
    function SimpleDocumentationComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div", 40);
            i0.ɵɵelementStart(2, "div", 41);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 84);
            i0.ɵɵelementStart(4, "g", 85);
            i0.ɵɵelementStart(5, "text", 49);
            i0.ɵɵelementStart(6, "tspan", 50);
            i0.ɵɵtext(7, "Tx");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "g", 86);
            i0.ɵɵelement(9, "path", 87);
            i0.ɵɵelement(10, "path", 88);
            i0.ɵɵelement(11, "path", 89);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "path", 90);
            i0.ɵɵelement(13, "rect", 57);
            i0.ɵɵelement(14, "rect", 58);
            i0.ɵɵelementStart(15, "text", 59);
            i0.ɵɵelementStart(16, "tspan", 60);
            i0.ɵɵelementStart(17, "tspan", 60);
            i0.ɵɵtext(18, "Filter");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "g", 61);
            i0.ɵɵelement(20, "path", 62);
            i0.ɵɵelement(21, "path", 63);
            i0.ɵɵelement(22, "path", 91);
            i0.ɵɵelement(23, "path", 65);
            i0.ɵɵelement(24, "path", 92);
            i0.ɵɵelement(25, "path", 67);
            i0.ɵɵelement(26, "path", 93);
            i0.ɵɵelement(27, "path", 69);
            i0.ɵɵelement(28, "path", 70);
            i0.ɵɵelement(29, "path", 71);
            i0.ɵɵelement(30, "path", 94);
            i0.ɵɵelement(31, "path", 73);
            i0.ɵɵelement(32, "path", 95);
            i0.ɵɵelement(33, "path", 75);
            i0.ɵɵelement(34, "path", 76);
            i0.ɵɵelement(35, "path", 77);
            i0.ɵɵelement(36, "path", 96);
            i0.ɵɵelement(37, "path", 79);
            i0.ɵɵelement(38, "path", 97);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "text", 82);
            i0.ɵɵelement(40, "tspan", 83);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "g", 98);
            i0.ɵɵelementStart(42, "g", 99);
            i0.ɵɵelement(43, "path", 100);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "text", 101);
            i0.ɵɵelementStart(45, "tspan", 102);
            i0.ɵɵtext(46, "Rx");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(47, "div", 41);
            i0.ɵɵelementStart(48, "h3");
            i0.ɵɵtext(49, "Temperatures:");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(50, " We define a system temperature that is used to determine the noise in the link. The system temperature is defined as: ");
            i0.ɵɵelement(51, "ng-katex-html", 32);
            i0.ɵɵtext(52, " This is the ");
            i0.ɵɵelementStart(53, "a", 103);
            i0.ɵɵtext(54, "Friis formula for noise temperature");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(55, ". We use this temperature in order to compute G/T out of the antena.");
            i0.ɵɵelement(56, "br");
            i0.ɵɵtext(57, " Here we consider the system to only have a LNA. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(51);
            i0.ɵɵproperty("html", ctx_r2.systemTemperature);
        }
    }
    var _c0$4 = function (a0) { return { "is-hidden": a0 }; };
    var SimpleDocumentationComponent = /** @class */ (function () {
        // cf: https://github.com/garciparedes/ng-katex
        function SimpleDocumentationComponent(formService, logger, changeDetector) {
            this.formService = formService;
            this.logger = logger;
            this.changeDetector = changeDetector;
            this.component = '';
            this.hasGeometryBeenDrawn = false;
            this.lineLosses = 0.0;
            this.eirp = 0.0;
            this.geometry = "\n  $\\delta$ is the minimum acceptable elevation angle. It is used for the calculation of the maximum slant range to the spacecraft. This range is then used to compute path losses.\n\n  The slant range is calculated using the following formula :\n  <b>$$S=R_e(\\sqrt{[\\frac{r}{R_e}]^2-\\cos^2{\\delta}}-\\sin{\\delta})$$</b><br>\n  with:<br>\n  <br>\n  $S$, the slant range in km<br>\n  $r$, the distance of satellite from center of Earth in km ($r= R_e+h$)<br>\n  $R_e$, the Earth's radius (in km)<br> $\\delta$, the minimum acceptable elevation angle\n  ";
            this.systemTemperature = "\n    $$T_s = T_a + T_1 + \\frac{T_2}{G_1} + \\frac{T_3}{G_1G_2}$$\n  ";
            this.formulas = {
                sr: 'S=R_e(\\sqrt{(\\frac{r}{R_e})^2-\\cos{2\\delta}}-\\sin{\\delta})',
            };
        }
        SimpleDocumentationComponent.prototype.drawGeometry = function () {
            var _this = this;
            this.svg = d3.select('#sr').select('svg');
            this.delta = this.svg
                .append('text')
                .attr('x', 73)
                .attr('y', 59)
                .attr('text-anchor', 'left')
                .style('font-size', '4px');
            this.alt = this.svg.append('text').attr('x', 5).attr('y', 20).attr('text-anchor', 'left').style('font-size', '4px');
            this.sr = this.svg.append('text').attr('x', 42).attr('y', 42).attr('text-anchor', 'left').style('font-size', '4px');
            this.hasGeometryBeenDrawn = true;
            var geo = this.formService.getFormData().geometry;
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            geo && this.updateDiagram(geo);
            this.formService.getFormData$().subscribe(function (obs) {
                // console.log(obs.getRawValue().geometry);
                // console.log(obs.geometry);
                _this.updateDiagram(obs.geometry);
            });
        };
        SimpleDocumentationComponent.prototype.ngAfterViewInit = function () {
            // If the text hasn't been drawn, we draw it (#sr is always present since we are just hiding it)
            if (!this.hasGeometryBeenDrawn) {
                this.drawGeometry();
            }
        };
        SimpleDocumentationComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.formService.globalForm.valueChanges.subscribe(function (newForm) {
                _this.form = newForm;
                // let transmitter = this.form.
                _this.changeDetector.detectChanges();
            });
        };
        SimpleDocumentationComponent.prototype.getFormData = function (component) {
            if (component === 'ULTransmitter') {
                return this.formService.globalForm.value.uplink.transmitter;
            }
            else if (component === 'DLTransmitter') {
                return this.formService.globalForm.value.downlink.transmitter;
            }
            else {
                console.warn('Unknown component in simple-documentation.component.ts::getFormData()');
            }
        };
        SimpleDocumentationComponent.prototype.updateDiagram = function (geo, precision) {
            if (precision === void 0) { precision = 3; }
            var alt = parseFloat(geo.altitude.value);
            var sr = parseFloat(geo.slantRange.value);
            this.delta.text("\u1E9F=" + geo.elevation.value + " " + geo.elevation.unit);
            this.alt.text(alt.toPrecision(precision) + " " + geo.altitude.unit);
            this.sr.text(sr.toPrecision(precision + 1) + " " + geo.slantRange.unit);
        };
        return SimpleDocumentationComponent;
    }());
    SimpleDocumentationComponent.ɵfac = function SimpleDocumentationComponent_Factory(t) { return new (t || SimpleDocumentationComponent)(i0.ɵɵdirectiveInject(FormService), i0.ɵɵdirectiveInject(LoggerService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    SimpleDocumentationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SimpleDocumentationComponent, selectors: [["lib-simple-documentation"]], inputs: { component: "component" }, decls: 45, vars: 7, consts: [[3, "ngClass"], ["id", "sr", 2, "text-align", "center"], ["width", "100mm", "height", "100mm", "version", "1.1", "viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg"], ["id", "DotM", "orient", "auto", 2, "overflow", "visible"], ["transform", "matrix(.4 0 0 .4 2.96 .4)", "d", "m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z", 2, "fill-rule", "evenodd", "fill", "#273445", "stroke-width", "1pt", "stroke", "#273445"], ["transform", "translate(-1.9512 12.867)"], ["d", "m63.25 47.74s3.2279-1.8388 0.39365-4.7054", 2, "fill", "none", "stroke-width", ".1299px", "stroke", "#000"], ["d", "m18.195 47.825 72.711-7.6302", 2, "fill", "#273445", "stroke-dasharray", "0.78553516, 0.78553516", "stroke-width", ".19638", "stroke", "#ed5353"], ["d", "m18.901 43.953 43.02-37.414", 2, "fill", "#273445", "stroke-dasharray", "0.78553515, 0.78553515", "stroke-width", ".19638", "stroke", "#000"], ["d", "m18.195 47.825 75.898-0.29524", 2, "fill", "#273445", "stroke-width", ".39277", "stroke", "#667885"], ["d", "m20.092 47.657 0.03936-53.571", 2, "fill", "none", "stroke-width", ".1299px", "stroke", "#7e8087"], ["transform", "matrix(.11271 0 0 .11271 20.484 37.582)"], ["transform", "translate(-93.027 -20.17)"], ["d", "m89.549 109.56h-32.099l16.05-55.728z", 2, "fill", "#fafafa", "stroke-linecap", "square", "stroke-linejoin", "round", "stroke-width", "2.011", "stroke", "#0e141f"], ["d", "m65.318 41.111a34.249 36.58 8.5053 0 0-3.7514 16.562 34.249 36.58 8.5053 0 0 34.268 35.857 34.249 36.58 8.5053 0 0 15.515-4.2531z", 2, "fill", "#fafafa", "stroke-linecap", "square", "stroke-linejoin", "round", "stroke-width", "1.9022", "stroke", "#0e141f"], ["d", "m12.408 98.696a25.719 25.719 0 0 0 6.2197 0.79589 25.719 25.719 0 0 0 25.719-25.719 25.719 25.719 0 0 0-3.5591-12.993 38.906 38.906 0 0 1 0.01625 0.46149 38.906 38.906 0 0 1-0.19434 3.8841 38.906 38.906 0 0 1-0.58125 3.8455 38.906 38.906 0 0 1-0.96207 3.7681 38.906 38.906 0 0 1-1.3335 3.6532 38.906 38.906 0 0 1-1.6917 3.502 38.906 38.906 0 0 1-2.0327 3.3155 38.906 38.906 0 0 1-2.3534 3.0958 38.906 38.906 0 0 1-2.651 2.8456 38.906 38.906 0 0 1-2.9217 2.5668 38.906 38.906 0 0 1-3.1633 2.2621 38.906 38.906 0 0 1-3.3736 1.935 38.906 38.906 0 0 1-3.5497 1.5887 38.906 38.906 0 0 1-3.5872 1.1919z", 2, "fill", "#002e99", "stroke-linecap", "square", "stroke-linejoin", "round", "stroke-width", ".98732", "stroke", "#002e99"], ["d", "m12.408 98.696a38.906 38.906 0 0 0 3.5872-1.1919 38.906 38.906 0 0 0 3.5497-1.5887 38.906 38.906 0 0 0 3.3736-1.935 38.906 38.906 0 0 0 3.1633-2.2621 38.906 38.906 0 0 0 2.9217-2.5668 38.906 38.906 0 0 0 2.651-2.8456 38.906 38.906 0 0 0 2.3534-3.0958 38.906 38.906 0 0 0 2.0327-3.3155 38.906 38.906 0 0 0 1.6917-3.502 38.906 38.906 0 0 0 1.3335-3.6532 38.906 38.906 0 0 0 0.96207-3.7681 38.906 38.906 0 0 0 0.58125-3.8455 38.906 38.906 0 0 0 0.19435-3.8841 38.906 38.906 0 0 0-0.01626-0.46149 25.719 25.719 0 0 0-22.16-12.726 25.719 25.719 0 0 0-25.719 25.719 25.719 25.719 0 0 0 19.499 24.923z", 2, "fill", "#0d52bf", "stroke-linecap", "square", "stroke-linejoin", "round", "stroke-width", ".98732", "stroke", "#002e99"], ["cx", "18.103", "cy", "74.979", "r", "80.736", 2, "fill", "none", "stroke-linecap", "square", "stroke-linejoin", "round", "stroke-width", ".73644", "stroke", "#8cd5ff"], ["x", "70.818298", "y", "50.84721", 0, "xml", "space", "preserve", 2, "fill", "#000000", "font-family", "sans-serif", "font-size", "2.7461px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".20596", "word-spacing", "0px"], ["x", "70.818298", "y", "50.84721", 2, "stroke-width", ".20596"], ["transform", "rotate(-40.986)", "x", "5.6012249", "y", "44.476562", 0, "xml", "space", "preserve", 2, "fill", "#000000", "font-family", "sans-serif", "font-size", "2.7461px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".20596", "word-spacing", "0px"], ["x", "5.6012249", "y", "44.476562", 2, "stroke-width", ".20596"], ["transform", "rotate(.074247)", "x", "5.4076142", "y", "3.2867277", 0, "xml", "space", "preserve", 2, "fill", "#000000", "font-family", "sans-serif", "font-size", "2.7461px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".20596", "word-spacing", "0px"], ["x", "5.4076142", "y", "3.2867277", 2, "stroke-width", ".20596"], ["transform", "rotate(-6.1089)", "x", "44.048023", "y", "48.248531", 0, "xml", "space", "preserve", 2, "fill", "#000000", "font-family", "sans-serif", "font-size", "2.7461px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".20596", "word-spacing", "0px"], ["x", "44.048023", "y", "48.248531", 2, "stroke-width", ".20596"], ["transform", "matrix(.15459 .16472 -.16472 .15459 74.703 -33.297)"], ["d", "m88.807 180.05c-3.9758 3e-3 -7.2787 2.8874-7.5811 6.6193 4.9024-2.7815 9.9481-2.9285 15.168 0-0.30262-3.7338-3.6088-6.6184-7.5867-6.6193z", 2, "fill", "#273445", "stroke-linecap", "square", "stroke-width", "1.0466", "stroke", "#273445"], ["x", "42.505", "y", "159.4", "width", "96.573", "height", "11.906", 2, "fill", "#002e99", "stroke-linecap", "square", "stroke-linejoin", "round", "stroke-width", "1.5", "stroke", "#0d52bf"], ["x", "75.578", "y", "151.46", "width", "27.905", "height", "27.781", 2, "fill", "#ffe16b", "stroke-linecap", "square", "stroke-linejoin", "round", "stroke-width", "1.2367", "stroke", "#f9c440"], ["d", "m88.807 184.53v2.6866", 2, "fill", "#273445", "marker-end", "url(#DotM)", "stroke-width", ".27078", "stroke", "#273445"], [2, "padding", "10px", "margin", "auto", "margin-top", "15px", "max-width", "90%"], [3, "html"], [4, "ngIf"], [1, "title"], ["src", "/assets/diagrams/fspl.svg"], ["src", "/assets/diagrams/ber.png"], [2, "float", "right", "color", "grey"], ["href", "https://commons.wikimedia.org/wiki/File:PSK_BER_curves.svg"], ["href", "http://creativecommons.org/licenses/by-sa/3.0/"], [1, "columns", "is-multiline"], [1, "column"], ["id", "transmitter", "width", " 90mm", "height", "25mm", "version", "1.1", "viewBox", "0 0 340.16 94.488", "xmlns", "http://www.w3.org/2000/svg"], ["id", "Arrow2Send", "orient", "auto", 2, "overflow", "visible"], ["transform", "matrix(-.3 0 0 -.3 .69 0)", "d", "m8.7186 4.0337-10.926-4.0177 10.926-4.0177c-1.7455 2.3721-1.7354 5.6175-6e-7 8.0354z", 2, "fill-rule", "evenodd", "fill", "#c83737", "stroke-linejoin", "round", "stroke-width", ".625", "stroke", "#c83737"], ["id", "a", "orient", "auto", 2, "overflow", "visible"], ["transform", "matrix(.3 0 0 .3 -.69 0)", "d", "m8.7186 4.0337-10.926-4.0177 10.926-4.0177c-1.7455 2.3721-1.7354 5.6175-6e-7 8.0354z", 2, "fill-rule", "evenodd", "fill", "#c83737", "stroke-linejoin", "round", "stroke-width", ".625", "stroke", "#c83737"], ["transform", "matrix(1 0 0 1.0279 -24.971 -102.43)"], ["d", "m79.364 162.81-53.49 27.974v-55.947l26.746 13.987z", 2, "fill", "#19aeff", "stroke-linejoin", "round", "stroke-width", "1.7103", "stroke", "#005c94"], ["transform", "scale(.95917 1.0426)", "x", "33.86866", "y", "163.47594", 0, "xml", "space", "preserve", 2, "fill", "#ffffff", "font-family", "sans-serif", "font-size", "41.667px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", "1.0416", "word-spacing", "0px"], ["x", "33.86866", "y", "163.47594", 2, "fill", "#ffffff", "font-size", "19.444px", "stroke-width", "1.0416"], ["id", "line-tx", "transform", "matrix(16.008 0 0 3.61 -479.73 -275.49)", 2, "paint-order", "stroke fill markers"], ["d", "m34.925 121.41 11.897 0.0139", 2, "fill", "#009100", "stroke-width", ".64874", "stroke", "#009100"], ["id", "antenna-tx", "transform", "matrix(4.0672 0 0 4.4208 49.207 -284.58)", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#009100"], ["d", "m54.24 101.21v-13.122", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "miter", "stroke-width", ".40003", "stroke", "#009100"], ["d", "m50.271 88.088 3.9688 6.8792", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#009100"], ["d", "m58.208 88.088-3.9688 6.8792", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#009100"], ["x", "103.26", "y", "145.82", "width", "48.507", "height", "33.346", 2, "fill", "#006680", "stroke-linecap", "square", "stroke-width", "1.2577", "stroke", "#364e59"], ["x", "188.01", "y", "145.82", "width", "48.507", "height", "33.346", 2, "fill", "#006680", "stroke-linecap", "square", "stroke-width", "1.2577", "stroke", "#364e59"], ["transform", "scale(1.0158 .98444)", "x", "110.38757", "y", "169.47885", 0, "xml", "space", "preserve", 2, "fill", "#ffffff", "font-family", "sans-serif", "font-size", "12.586px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".94394", "word-spacing", "0px"], ["x", "110.38757", "y", "169.47885", 2, "stroke-width", ".94394"], ["transform", "matrix(.95886 0 0 .92925 107.65 95.665)", "aria-label", "Other in-line devices", 2, "fill", "#fff"], ["d", "m92.632 65.239q0 0.86328-0.33203 1.5117-0.32812 0.64844-0.94531 0.99609-0.61719 0.34766-1.457 0.34766-0.84766 0-1.4648-0.34375-0.61328-0.34375-0.9375-0.99219-0.32422-0.65234-0.32422-1.5195 0-1.3203 0.72266-2.0625 0.72266-0.74609 2.0117-0.74609 0.83984 0 1.457 0.33594 0.61719 0.33203 0.94141 0.96875 0.32812 0.63672 0.32812 1.5039zm-0.76172 0q0-1.0273-0.51562-1.6133-0.51172-0.58594-1.4492-0.58594-0.94531 0-1.4609 0.57812t-0.51562 1.6211q0 1.0352 0.51953 1.6445 0.52344 0.60547 1.4492 0.60547 0.95312 0 1.4609-0.58594 0.51172-0.58984 0.51172-1.6641z"], ["d", "m95.175 67.985q-0.34766 0.09375-0.71094 0.09375-0.84375 0-0.84375-0.95703v-2.8203h-0.48828v-0.51172h0.51562l0.20703-0.94531h0.46875v0.94531h0.78125v0.51172h-0.78125v2.668q0 0.30469 0.09766 0.42969 0.10156 0.12109 0.34766 0.12109 0.14062 0 0.40625-0.05469z"], ["d", "m96.468 64.512q0.22656-0.41406 0.54297-0.60547 0.32031-0.19531 0.80859-0.19531 0.6875 0 1.0117 0.34375 0.32812 0.33984 0.32812 1.1445v2.8164h-0.70703v-2.6797q0-0.44531-0.08203-0.66016-0.08203-0.21875-0.26953-0.32031-0.1875-0.10156-0.51953-0.10156-0.49609 0-0.79688 0.34375-0.29688 0.34375-0.29688 0.92578v2.4922h-0.70313v-5.7969h0.70312v1.5078q0 0.23828-0.01563 0.49219-0.01172 0.25391-0.01563 0.29297z"], ["d", "m100.76 66.051q0 0.72656 0.30078 1.1211t0.87891 0.39453q0.45703 0 0.73047-0.18359 0.27734-0.18359 0.375-0.46484l0.61719 0.17578q-0.37891 1-1.7227 1-0.9375 0-1.4297-0.55859-0.48828-0.55859-0.48828-1.6602 0-1.0469 0.48828-1.6055 0.49219-0.55859 1.4024-0.55859 1.8633 0 1.8633 2.2461v0.09375zm2.2891-0.53906q-0.0586-0.66797-0.33984-0.97266-0.28125-0.30859-0.80859-0.30859-0.51172 0-0.8125 0.34375-0.29688 0.33984-0.32032 0.9375z"], ["d", "m104.69 68.016v-3.2422q0-0.44531-0.0234-0.98438h0.66406q0.0312 0.71875 0.0312 0.86328h0.0156q0.16797-0.54297 0.38672-0.74219 0.21875-0.19922 0.61719-0.19922 0.14062 0 0.28515 0.03906v0.64453q-0.14062-0.03906-0.375-0.03906-0.4375 0-0.66797 0.37891-0.23047 0.375-0.23047 1.0781v2.2031z"], ["d", "m109.56 62.891v-0.67188h0.70313v0.67188zm0 5.125v-4.2266h0.70313v4.2266z"], ["d", "m114.03 68.016v-2.6797q0-0.41797-0.082-0.64844t-0.26172-0.33203q-0.17968-0.10156-0.52734-0.10156-0.50781 0-0.80078 0.34766-0.29297 0.34766-0.29297 0.96484v2.4492h-0.70313v-3.3242q0-0.73828-0.0234-0.90234h0.66406q4e-3 0.01953 8e-3 0.10547 4e-3 0.08594 8e-3 0.19922 8e-3 0.10938 0.0156 0.41797h0.0117q0.24219-0.4375 0.55859-0.61719 0.32031-0.18359 0.79297-0.18359 0.69531 0 1.0156 0.34766 0.32421 0.34375 0.32421 1.1406v2.8164z"], ["d", "m115.62 66.203v-0.625h1.9531v0.625z"], ["d", "m118.47 68.016v-5.7969h0.70312v5.7969z"], ["d", "m120.25 62.891v-0.67188h0.70313v0.67188zm0 5.125v-4.2266h0.70313v4.2266z"], ["d", "m124.72 68.016v-2.6797q0-0.41797-0.082-0.64844t-0.26172-0.33203q-0.17968-0.10156-0.52734-0.10156-0.50781 0-0.80078 0.34766-0.29297 0.34766-0.29297 0.96484v2.4492h-0.70313v-3.3242q0-0.73828-0.0234-0.90234h0.66406q4e-3 0.01953 8e-3 0.10547 4e-3 0.08594 8e-3 0.19922 8e-3 0.10938 0.0156 0.41797h0.0117q0.24219-0.4375 0.55859-0.61719 0.32031-0.18359 0.79297-0.18359 0.69531 0 1.0156 0.34766 0.32421 0.34375 0.32421 1.1406v2.8164z"], ["d", "m127.03 66.051q0 0.72656 0.30078 1.1211t0.8789 0.39453q0.45704 0 0.73047-0.18359 0.27735-0.18359 0.375-0.46484l0.61719 0.17578q-0.37891 1-1.7227 1-0.9375 0-1.4297-0.55859-0.48828-0.55859-0.48828-1.6602 0-1.0469 0.48828-1.6055 0.49218-0.55859 1.4023-0.55859 1.8633 0 1.8633 2.2461v0.09375zm2.2891-0.53906q-0.0586-0.66797-0.33984-0.97266-0.28125-0.30859-0.8086-0.30859-0.51172 0-0.8125 0.34375-0.29687 0.33984-0.32031 0.9375z"], ["d", "m98.233 84.003q-0.19531 0.40625-0.51953 0.58203-0.32031 0.17578-0.79688 0.17578-0.80078 0-1.1797-0.53906-0.375-0.53906-0.375-1.6328 0-2.2109 1.5547-2.2109 0.48047 0 0.80078 0.17578 0.32031 0.17578 0.51562 0.55859h0.0078l-0.0078-0.47266v-1.7539h0.70312v4.9258q0 0.66016 0.02344 0.87109h-0.67188q-0.01172-0.0625-0.02734-0.28906-0.01172-0.22656-0.01172-0.39062zm-2.1328-1.4375q0 0.88672 0.23438 1.2695 0.23438 0.38281 0.76172 0.38281 0.59766 0 0.86719-0.41406 0.26953-0.41406 0.26953-1.2852 0-0.83984-0.26953-1.2305t-0.85938-0.39062q-0.53125 0-0.76953 0.39453-0.23438 0.39062-0.23438 1.2734z"], ["d", "m100.56 82.718q0 0.72656 0.30078 1.1211t0.8789 0.39453q0.45704 0 0.73047-0.18359 0.27735-0.18359 0.375-0.46484l0.61719 0.17578q-0.37891 1-1.7227 1-0.9375 0-1.4297-0.55859-0.48828-0.55859-0.48828-1.6602 0-1.0469 0.48828-1.6055 0.49218-0.55859 1.4023-0.55859 1.8633 0 1.8633 2.2461v0.09375zm2.2891-0.53906q-0.0586-0.66797-0.33984-0.97266-0.28125-0.30859-0.8086-0.30859-0.51172 0-0.8125 0.34375-0.29687 0.33984-0.32031 0.9375z"], ["d", "m106.33 84.683h-0.83203l-1.5352-4.2266h0.75l0.92969 2.75q0.0508 0.15625 0.26953 0.92578l0.13672-0.45703 0.15234-0.46094 0.96094-2.7578h0.74609z"], ["d", "m108.47 79.558v-0.67188h0.70313v0.67188zm0 5.125v-4.2266h0.70313v4.2266z"], ["d", "m110.79 82.55q0 0.84375 0.26562 1.25 0.26563 0.40625 0.80078 0.40625 0.375 0 0.625-0.20312 0.25391-0.20312 0.3125-0.625l0.71094 0.04687q-0.082 0.60938-0.51953 0.97266-0.4375 0.36328-1.1094 0.36328-0.88672 0-1.3555-0.55859-0.46484-0.5625-0.46484-1.6367 0-1.0664 0.46875-1.625 0.46875-0.5625 1.3438-0.5625 0.64844 0 1.0742 0.33594 0.42969 0.33594 0.53906 0.92578l-0.72265 0.05469q-0.0547-0.35156-0.27735-0.55859t-0.63281-0.20703q-0.55859 0-0.80859 0.37109-0.25 0.37109-0.25 1.25z"], ["d", "m114.79 82.718q0 0.72656 0.30078 1.1211t0.87891 0.39453q0.45703 0 0.73047-0.18359 0.27734-0.18359 0.375-0.46484l0.61719 0.17578q-0.37891 1-1.7227 1-0.9375 0-1.4297-0.55859-0.48828-0.55859-0.48828-1.6602 0-1.0469 0.48828-1.6055 0.49219-0.55859 1.4024-0.55859 1.8633 0 1.8633 2.2461v0.09375zm2.2891-0.53906q-0.0586-0.66797-0.33984-0.97266-0.28125-0.30859-0.80859-0.30859-0.51172 0-0.8125 0.34375-0.29688 0.33984-0.32032 0.9375z"], ["d", "m121.88 83.515q0 0.59766-0.45313 0.92188-0.44921 0.32422-1.2617 0.32422-0.78907 0-1.2188-0.25781-0.42579-0.26172-0.55469-0.8125l0.62109-0.12109q0.0898 0.33984 0.3711 0.5 0.28125 0.15625 0.78125 0.15625 0.53515 0 0.78125-0.16406 0.25-0.16406 0.25-0.49219 0-0.25-0.17188-0.40625-0.17187-0.15625-0.55469-0.25781l-0.5039-0.13281q-0.60547-0.15625-0.86328-0.30469-0.25391-0.15234-0.39844-0.36719t-0.14453-0.52734q0-0.57812 0.41015-0.87891 0.41407-0.30469 1.2031-0.30469 0.69922 0 1.1094 0.24609 0.41407 0.24609 0.52344 0.78906l-0.63281 0.07813q-0.0586-0.28125-0.31641-0.42969-0.2539-0.15234-0.68359-0.15234-0.47656 0-0.70313 0.14453-0.22656 0.14453-0.22656 0.4375 0 0.17969 0.0937 0.29688 0.0937 0.11719 0.27734 0.19922 0.1836 0.08203 0.77344 0.22656 0.5586 0.14062 0.80469 0.26172 0.24609 0.11719 0.38672 0.26172 0.14453 0.14453 0.22265 0.33594 0.0781 0.1875 0.0781 0.42969z"], ["d", "m275.16 144.7v16.133", 2, "fill", "#c83737", "marker-end", "url(#Arrow2Send)", "marker-start", "url(#a)", "stroke-width", "1.8879", "stroke", "#c83737"], ["transform", "scale(1.0158 .98444)", "x", "275.77902", "y", "157.34232", 0, "xml", "space", "preserve", 2, "fill", "#000000", "font-family", "sans-serif", "font-size", "12.586px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".94394", "word-spacing", "0px"], ["x", "275.77902", "y", "157.34232", 2, "font-size", "10.069px", "stroke-width", ".94394"], ["id", "rx", "width", "80mm", "height", "25mm", "version", "1.1", "viewBox", "0 0 302.36 94.488", "xmlns", "http://www.w3.org/2000/svg"], ["transform", "matrix(1,0,0,1.0279,-24.971,-102.43)"], ["id", "antenna-tx", "transform", "matrix(4.0672 0 0 4.4208 -160.92 -286.13)", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#f60"], ["d", "m54.24 101.21v-13.122", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "miter", "stroke-width", ".40003", "stroke", "#f60"], ["d", "m50.271 88.088 3.9688 6.8792", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#f60"], ["d", "m58.208 88.088-3.9688 6.8792", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#f60"], ["d", "m270.69 161.35-211.01-0.0491", 2, "fill", "none", "stroke-width", "2.17", "stroke", "#f60"], ["d", "m96.468 64.512q0.22656-0.41406 0.54297-0.60547 0.32031-0.19531 0.80859-0.19531 0.6875 0 1.0117 0.34375 0.32812 0.33984 0.32812 1.1445v2.8164h-0.70703v-2.6797q0-0.44531-0.08203-0.66016-0.08203-0.21875-0.26953-0.32031t-0.51953-0.10156q-0.49609 0-0.79688 0.34375-0.29688 0.34375-0.29688 0.92578v2.4922h-0.70313v-5.7969h0.70312v1.5078q0 0.23828-0.01563 0.49219-0.01172 0.25391-0.01563 0.29297z"], ["d", "m104.69 68.016v-3.2422q0-0.44531-0.0234-0.98438h0.66406q0.0312 0.71875 0.0312 0.86328h0.0156q0.16797-0.54297 0.38672-0.74219t0.61719-0.19922q0.14062 0 0.28515 0.03906v0.64453q-0.14062-0.03906-0.375-0.03906-0.4375 0-0.66797 0.37891-0.23047 0.375-0.23047 1.0781v2.2031z"], ["d", "m114.03 68.016v-2.6797q0-0.41797-0.082-0.64844t-0.26172-0.33203q-0.17968-0.10156-0.52734-0.10156-0.50781 0-0.80078 0.34766t-0.29297 0.96484v2.4492h-0.70313v-3.3242q0-0.73828-0.0234-0.90234h0.66406q4e-3 0.01953 8e-3 0.10547t8e-3 0.19922q8e-3 0.10938 0.0156 0.41797h0.0117q0.24219-0.4375 0.55859-0.61719 0.32031-0.18359 0.79297-0.18359 0.69531 0 1.0156 0.34766 0.32421 0.34375 0.32421 1.1406v2.8164z"], ["d", "m124.72 68.016v-2.6797q0-0.41797-0.082-0.64844t-0.26172-0.33203q-0.17968-0.10156-0.52734-0.10156-0.50781 0-0.80078 0.34766t-0.29297 0.96484v2.4492h-0.70313v-3.3242q0-0.73828-0.0234-0.90234h0.66406q4e-3 0.01953 8e-3 0.10547t8e-3 0.19922q8e-3 0.10938 0.0156 0.41797h0.0117q0.24219-0.4375 0.55859-0.61719 0.32031-0.18359 0.79297-0.18359 0.69531 0 1.0156 0.34766 0.32421 0.34375 0.32421 1.1406v2.8164z"], ["d", "m98.233 84.003q-0.19531 0.40625-0.51953 0.58203-0.32031 0.17578-0.79688 0.17578-0.80078 0-1.1797-0.53906-0.375-0.53906-0.375-1.6328 0-2.2109 1.5547-2.2109 0.48047 0 0.80078 0.17578t0.51562 0.55859h0.0078l-0.0078-0.47266v-1.7539h0.70312v4.9258q0 0.66016 0.02344 0.87109h-0.67188q-0.01172-0.0625-0.02734-0.28906-0.01172-0.22656-0.01172-0.39062zm-2.1328-1.4375q0 0.88672 0.23438 1.2695 0.23438 0.38281 0.76172 0.38281 0.59766 0 0.86719-0.41406t0.26953-1.2852q0-0.83984-0.26953-1.2305t-0.85938-0.39062q-0.53125 0-0.76953 0.39453-0.23438 0.39062-0.23438 1.2734z"], ["d", "m110.79 82.55q0 0.84375 0.26562 1.25 0.26563 0.40625 0.80078 0.40625 0.375 0 0.625-0.20312 0.25391-0.20312 0.3125-0.625l0.71094 0.04687q-0.082 0.60938-0.51953 0.97266-0.4375 0.36328-1.1094 0.36328-0.88672 0-1.3555-0.55859-0.46484-0.5625-0.46484-1.6367 0-1.0664 0.46875-1.625 0.46875-0.5625 1.3438-0.5625 0.64844 0 1.0742 0.33594 0.42969 0.33594 0.53906 0.92578l-0.72265 0.05469q-0.0547-0.35156-0.27735-0.55859t-0.63281-0.20703q-0.55859 0-0.80859 0.37109t-0.25 1.25z"], ["d", "m121.88 83.515q0 0.59766-0.45313 0.92188-0.44921 0.32422-1.2617 0.32422-0.78907 0-1.2188-0.25781-0.42579-0.26172-0.55469-0.8125l0.62109-0.12109q0.0898 0.33984 0.3711 0.5 0.28125 0.15625 0.78125 0.15625 0.53515 0 0.78125-0.16406 0.25-0.16406 0.25-0.49219 0-0.25-0.17188-0.40625-0.17187-0.15625-0.55469-0.25781l-0.5039-0.13281q-0.60547-0.15625-0.86328-0.30469-0.25391-0.15234-0.39844-0.36719t-0.14453-0.52734q0-0.57812 0.41015-0.87891 0.41407-0.30469 1.2031-0.30469 0.69922 0 1.1094 0.24609 0.41407 0.24609 0.52344 0.78906l-0.63281 0.07813q-0.0586-0.28125-0.31641-0.42969-0.2539-0.15234-0.68359-0.15234-0.47656 0-0.70313 0.14453-0.22656 0.14453-0.22656 0.4375 0 0.17969 0.0937 0.29688t0.27734 0.19922q0.1836 0.08203 0.77344 0.22656 0.5586 0.14062 0.80469 0.26172 0.24609 0.11719 0.38672 0.26172 0.14453 0.14453 0.22265 0.33594 0.0781 0.1875 0.0781 0.42969z"], ["id", "rx", "transform", "matrix(3.7796 0 0 3.7796 -138.23 -292.41)"], ["transform", "matrix(-1.236,0,0,1.3487,147.46,-17.998)", 2, "fill", "#ff4141", "stroke", "#b50000"], ["d", "m31.768 102.36-11.941 5.7454v-11.491l5.9708 2.8727z", 2, "fill", "#ff4141", "stroke-linejoin", "round", "stroke-width", ".36623", "stroke", "#b50000"], ["x", "115.42167", "y", "121.30454", 0, "xml", "space", "preserve", 2, "fill", "#ffffff", "font-family", "sans-serif", "font-size", "8.922px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".22304", "word-spacing", "0px"], ["x", "115.42167", "y", "121.30454", 2, "fill", "#ffffff", "font-size", "4.1635px", "stroke-width", ".22304"], ["target", "_blank", "href", "https://en.wikipedia.org/wiki/Friis_formulas_for_noise#The_Friis_formula_for_noise_temperature"]], template: function SimpleDocumentationComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "section", 1);
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(2, "svg", 2);
                i0.ɵɵelementStart(3, "defs");
                i0.ɵɵelementStart(4, "marker", 3);
                i0.ɵɵelement(5, "path", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "g", 5);
                i0.ɵɵelement(7, "path", 6);
                i0.ɵɵelement(8, "path", 7);
                i0.ɵɵelement(9, "path", 8);
                i0.ɵɵelement(10, "path", 9);
                i0.ɵɵelement(11, "path", 10);
                i0.ɵɵelementStart(12, "g", 11);
                i0.ɵɵelementStart(13, "g", 12);
                i0.ɵɵelement(14, "path", 13);
                i0.ɵɵelement(15, "path", 14);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(16, "path", 15);
                i0.ɵɵelement(17, "path", 16);
                i0.ɵɵelement(18, "circle", 17);
                i0.ɵɵelementStart(19, "text", 18);
                i0.ɵɵelementStart(20, "tspan", 19);
                i0.ɵɵelementStart(21, "tspan", 19);
                i0.ɵɵtext(22, "HORIZON LINE");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "text", 20);
                i0.ɵɵelementStart(24, "tspan", 21);
                i0.ɵɵelementStart(25, "tspan", 21);
                i0.ɵɵtext(26, "SLANT RANGE");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(27, "text", 22);
                i0.ɵɵelementStart(28, "tspan", 23);
                i0.ɵɵelementStart(29, "tspan", 23);
                i0.ɵɵtext(30, "ALTITUDE");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(31, "text", 24);
                i0.ɵɵelementStart(32, "tspan", 25);
                i0.ɵɵelementStart(33, "tspan", 25);
                i0.ɵɵtext(34, "MINIMUM ELEVATION");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(35, "g", 26);
                i0.ɵɵelement(36, "path", 27);
                i0.ɵɵelement(37, "rect", 28);
                i0.ɵɵelement(38, "rect", 29);
                i0.ɵɵelement(39, "path", 30);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(40, "p", 31);
                i0.ɵɵelement(41, "ng-katex-html", 32);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(42, SimpleDocumentationComponent_div_42_Template, 15, 0, "div", 33);
                i0.ɵɵtemplate(43, SimpleDocumentationComponent_div_43_Template, 70, 8, "div", 33);
                i0.ɵɵtemplate(44, SimpleDocumentationComponent_div_44_Template, 58, 1, "div", 33);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0$4, ctx.component !== "geometry"));
                i0.ɵɵadvance(41);
                i0.ɵɵproperty("html", ctx.geometry);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.component == "ULCarrier" || ctx.component == "DLCarrier");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.component == "ULTransmitter" || ctx.component == "DLTransmitter");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.component == "ULReceiver" || ctx.component == "DLReceiver");
            }
        }, directives: [i4.NgClass, i4$1.ɵc, i4.NgIf], pipes: [i4.JsonPipe], styles: ["svg[_ngcontent-%COMP%]{height:auto;width:85%}.column[_ngcontent-%COMP%]{min-width:320px}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SimpleDocumentationComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-simple-documentation',
                        templateUrl: './simple-documentation.component.html',
                        styleUrls: ['./simple-documentation.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: FormService }, { type: LoggerService }, { type: i0.ChangeDetectorRef }]; }, { component: [{
                    type: i0.Input
                }] });
    })();

    var ComputeLinkBudgetService = /** @class */ (function () {
        function ComputeLinkBudgetService(environment, httpClient, formService, logger) {
            this.environment = environment;
            this.httpClient = httpClient;
            this.formService = formService;
            this.logger = logger;
            this.displayFooter = false;
            this.displayingResults = true;
            this.computeLayout = 'sidebar';
            // public result: BehaviorSubject<any> = new BehaviorSubject("");
            // TODO: Should check that API is reachable with a ping and send a toastr
            // #FIXME:compute logic can be improved regarding observable, find suitable architecture
            this.result = new rxjs.BehaviorSubject([]);
            this.linkBudgetSynthesis = new rxjs.Observable();
        }
        ComputeLinkBudgetService.prototype.computeLinkBudget = function (dataIn, urlIn) {
            var data = dataIn;
            var url = urlIn;
            if (data === undefined) {
                // this.logger.warn('Form validity', this.formService.globalForm.valid);
                if (!this.formService.globalForm.valid) {
                    // In case the form is invalid
                    this.logger.warn('Errors in the inputed data', 'Please check the validity of entered data');
                    return;
                }
                data = this.formService.getFormData();
                if (data === {}) {
                    this.logger.warn('No data to process', 'Please check the inputed data');
                }
            }
            var POSTData = {
                data: data,
                options: {
                    calculation: 'linkpredict',
                    type: 'static',
                },
            };
            if (url === undefined) {
                url = this.environment.luplinkEndpoint + "/linkBudget/" + POSTData.options.type;
            }
            // this.logger.debug('Sending POST request!', data);
            this.linkBudgetSynthesis = this.httpClient.post(url, POSTData, { responseType: 'json' }).pipe(operators.catchError(this.handleError.bind(this)) // Binding the context of the call in order to still have access to logger
            );
            this.displayingResults = true;
            // this.result.next(this.linkBudgetSynthesis)
            // TODO: Check data validity before making it available and test this
            // eslint-disable-next-line consistent-return
            return this.linkBudgetSynthesis;
        };
        ComputeLinkBudgetService.prototype.toggleResults = function () {
            this.displayingResults = !this.displayingResults;
        };
        ComputeLinkBudgetService.prototype.updateResult = function (value) {
            this.result.next(value);
        };
        ComputeLinkBudgetService.prototype.getResult$ = function () {
            return this.result;
        };
        ComputeLinkBudgetService.prototype.handleError = function (error) {
            // This handles HTTP errors
            // this.logger.error("POST request error!")
            if (error.error instanceof Error) {
                // A client-side or network error occured.
                this.logger.error('Client-side / Network error', [error.message, error.error.stack]);
                // Displaying as much information as possible in order to choose the best to display later.
                this.logger.debug('full error (pick pertinent information to display to user & developper', error.error);
            }
            else {
                // The backend returned an error code
                this.logger.error('Backend Error', error.message);
            }
            return rxjs.throwError(error);
            // 'An error occured in Custom ErrorHandler'
        };
        return ComputeLinkBudgetService;
    }());
    ComputeLinkBudgetService.ɵfac = function ComputeLinkBudgetService_Factory(t) { return new (t || ComputeLinkBudgetService)(i0.ɵɵinject(ENVIRONMENT_TOKEN), i0.ɵɵinject(i1$1.HttpClient), i0.ɵɵinject(FormService), i0.ɵɵinject(LoggerService)); };
    ComputeLinkBudgetService.ɵprov = i0.ɵɵdefineInjectable({ token: ComputeLinkBudgetService, factory: ComputeLinkBudgetService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComputeLinkBudgetService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [ENVIRONMENT_TOKEN]
                        }] }, { type: i1$1.HttpClient }, { type: FormService }, { type: LoggerService }];
        }, null);
    })();

    var DrawingDefault = /** @class */ (function () {
        function DrawingDefault() {
        }
        return DrawingDefault;
    }());
    // This class keeps all the default values used by the synthetic drawing module.
    DrawingDefault.powerIn = 10;
    DrawingDefault.defaultGains = {
        cableTx: -3,
        antTx: 24,
        fsl: -125,
        antRx: 35,
        cableRx: -5,
    };
    DrawingDefault.defaultComponents = [
        {
            id: 'tx',
            component: {
                label: 'Ptx',
                gain: 0,
                linear: true,
                position: 0,
                width: 15,
            },
        },
        {
            id: 'cableTx',
            component: {
                label: 'Ltx',
                gain: DrawingDefault.defaultGains.cableTx,
                linear: true,
                position: 15,
                width: 10,
            },
        },
        {
            id: 'antTx',
            component: {
                label: 'Gtx',
                gain: DrawingDefault.defaultGains.antTx,
                linear: false,
                position: 25,
                width: 10,
            },
        },
        {
            id: 'fsl',
            component: {
                label: 'Lpath',
                gain: DrawingDefault.defaultGains.fsl,
                linear: true,
                position: 35,
                width: 30,
            },
        },
        {
            id: 'antRx',
            component: {
                label: 'Grx',
                gain: DrawingDefault.defaultGains.antRx,
                linear: false,
                position: 65,
                width: 10,
            },
        },
        {
            id: 'cableRx',
            component: {
                label: 'Lrx',
                gain: DrawingDefault.defaultGains.cableRx,
                linear: true,
                position: 75,
                width: 10,
            },
        },
        {
            id: 'rx',
            component: {
                label: 'Prx',
                gain: 0,
                linear: true,
                position: 85,
                width: 15,
            },
        },
    ];

    /* eslint-disable max-classes-per-file */
    var SyntheticDrawingFormService = /** @class */ (function () {
        function SyntheticDrawingFormService() {
            /**
             * This class handles the form part where the user can input some values in order to display them on the graph.
             * It is not required for the graph to display. The graph can be used as standalone.
             */
            // That is not exactly a good practice but we are keeping the last value of LBScenario
            // This is used by drawingFormService as a basis for randomizing
            this.LBScenario = {};
            this.LBScenario$ = {};
            this.components = DrawingDefault.defaultComponents;
            this.powerIn = DrawingDefault.powerIn;
            // THIS is the wrong way to do it, subscribing to one of the object's parameters overrides other subscription.
            // Terrible bug to solve, still not sure why it did not work...
            // this.LBScenario$.default = new Subject<LinkBudgetScenario>();
            // this.LBScenario$.uplink = new Subject<LinkBudgetScenario>();
            // this.LBScenario$.downlink = new Subject<LinkBudgetScenario>();
            this.LBScenario$ = {
                default: new rxjs.Subject(),
                uplink: new rxjs.Subject(),
                downlink: new rxjs.Subject(),
            };
        }
        // // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // initLBScenario(id: string, powerIn = this.powerIn, components = this.components, type: 'uplink' | 'downlink' = 'uplink') {
        // }
        SyntheticDrawingFormService.prototype.updateLBScenario = function (id, newLBScenario) {
            this.LBScenario[id] = newLBScenario;
            this.LBScenario$[id].next(newLBScenario);
        };
        SyntheticDrawingFormService.prototype.getLBScenario$ = function (id) {
            return this.LBScenario$[id];
        };
        SyntheticDrawingFormService.prototype.getLBScenario = function (id) {
            /** Do not use this function unless absolutely necessary */
            return this.LBScenario[id]; // ?? this.LBScenario$.default.getValue();
        };
        return SyntheticDrawingFormService;
    }());
    SyntheticDrawingFormService.ɵfac = function SyntheticDrawingFormService_Factory(t) { return new (t || SyntheticDrawingFormService)(); };
    SyntheticDrawingFormService.ɵprov = i0.ɵɵdefineInjectable({ token: SyntheticDrawingFormService, factory: SyntheticDrawingFormService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SyntheticDrawingFormService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return []; }, null);
    })();

    var LinkBudgetScenario = /** @class */ (function () {
        function LinkBudgetScenario(power) {
            this.powerIn = 0;
            this.powerOut = 0;
            this.powerIn = power;
            this.components = {};
            this.points = [];
        }
        LinkBudgetScenario.prototype.setPowerIn = function (power) {
            this.powerIn = power;
        };
        LinkBudgetScenario.prototype.getPowerOut = function () {
            return this.powerOut;
        };
        LinkBudgetScenario.prototype.getLabels = function () {
            /**
            * Returns the different labels for the components with their associated positions in
            * the form of a list of {label, position};
            */
            var labels = [];
            Object.entries(this.components).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                var label = { name: value.label, position: value.position + value.width / 2 };
                labels.push(label);
            });
            // for (const key in this.components) {
            //     const c = this.components[key];
            //     const label = { name: c.label, position: c.position + c.width / 2 };
            //     labels.push(label);
            // }
            return labels;
        };
        LinkBudgetScenario.prototype.addComponent = function (id, LinkBudgetComponent) {
            this.components[id] = LinkBudgetComponent;
        };
        LinkBudgetScenario.prototype.addComponents = function (components) {
            var _this = this;
            /**
             * This method adds multiples components at once
             */
            components.forEach(function (s) {
                _this.addComponent(s.id, s.component);
            });
        };
        LinkBudgetScenario.prototype.editGain = function (id, value) {
            this.components[id].gain = value;
        };
        LinkBudgetScenario.prototype.editGains = function (gains) {
            var _this = this;
            /**
             * Edit multiple gains at once, these can be provided by a formGroup using the formGroup.formValues attribute
             */
            // console.log(gains.keys());
            Object.keys(gains).forEach(function (key) {
                _this.editGain(key, gains[key]);
            });
        };
        LinkBudgetScenario.prototype.numberOfComponents = function () {
            return Object.keys(this.components).length;
        };
        LinkBudgetScenario.prototype.getPoints = function () {
            return this.points;
        };
        LinkBudgetScenario.prototype.randomize = function (amplitude) {
            var _this = this;
            if (amplitude === void 0) { amplitude = 30; }
            /** This changes the gain from the components with random values and return the new components */
            var excluded = ['tx', 'rx'];
            Object.keys(this.components).forEach(function (id) {
                if (!excluded.includes(id)) {
                    _this.components[id].gain = Math.round((Math.random() - 0.8) * amplitude); // Rounded to nearest integer
                }
            });
            this.powerIn = Math.random() * amplitude;
            return this.components;
        };
        LinkBudgetScenario.prototype.compute = function (link) {
            if (link === void 0) { link = 'uplink'; }
            /** This function gives us the points needed to plot our LB graph */
            // FIXME: Tried to make this clean (still better than before) but forgot about pass by reference and now it looks like it could be way cleaner.
            // Depending on the kind of link we want to go backward
            var isUp = link === 'uplink';
            var lastPoint = { x: isUp ? 0 : 100, y: this.powerIn };
            var points = [{ x: lastPoint.x, y: lastPoint.y }];
            var discontinuityPoint = { x: 0, y: 0 };
            Object.values(this.components).forEach(function (LinkBudgetComponent) {
                if (!LinkBudgetComponent.linear) {
                    // Here we create the discontinuity by adding a point with same abscissa
                    discontinuityPoint.x = lastPoint.x;
                    discontinuityPoint.y = lastPoint.y + LinkBudgetComponent.gain;
                    points.push({ x: discontinuityPoint.x, y: discontinuityPoint.y });
                }
                if (isUp)
                    lastPoint.x += LinkBudgetComponent.width;
                if (!isUp)
                    lastPoint.x -= LinkBudgetComponent.width;
                (lastPoint.y += LinkBudgetComponent.gain);
                points.push({ x: lastPoint.x, y: lastPoint.y });
            });
            this.powerOut = lastPoint.y;
            this.points = points;
            // for (const id in this.components) {
            //   if (Object.prototype.hasOwnProperty.call(this.components, id)) {
            //     const LinkBudgetComponent = this.components[id];
            //     if (!LinkBudgetComponent.linear) {
            //     // Here we create the discontinuity by adding a point with same abscissa
            //       discontinuityPoint.x = lastPoint.x;
            //       discontinuityPoint.y = lastPoint.y + LinkBudgetComponent.gain;
            //       points.push({ x: discontinuityPoint.x, y: discontinuityPoint.y });
            //     }
            //     (lastPoint.x += LinkBudgetComponent.width);
            //     (lastPoint.y += LinkBudgetComponent.gain);
            //     points.push({ x: lastPoint.x, y: lastPoint.y });
            //   }
            //   this.powerOut = lastPoint.y;
            //   this.points = points;
            // // return points;
            // }
        };
        return LinkBudgetScenario;
    }());

    var _c0$5 = ["diagram"];
    function SyntheticDrawingComponent__svg_svg_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 4);
            i0.ɵɵelementStart(1, "defs");
            i0.ɵɵelementStart(2, "svg", 5);
            i0.ɵɵelementStart(3, "defs");
            i0.ɵɵelementStart(4, "linearGradient", 6);
            i0.ɵɵelement(5, "stop", 7);
            i0.ɵɵelement(6, "stop", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "linearGradient", 9);
            i0.ɵɵelement(8, "stop", 10);
            i0.ɵɵelement(9, "stop", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "marker", 12);
            i0.ɵɵelement(11, "path", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "g", 14);
            i0.ɵɵelementStart(13, "g", 15);
            i0.ɵɵelement(14, "path", 16);
            i0.ɵɵelementStart(15, "text", 17);
            i0.ɵɵelementStart(16, "tspan", 18);
            i0.ɵɵtext(17, "Tx");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "path", 19);
            i0.ɵɵelementStart(19, "text", 20);
            i0.ɵɵelementStart(20, "tspan", 21);
            i0.ɵɵtext(21, "Ground Segment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "image", 22);
            i0.ɵɵelementStart(23, "text", 23);
            i0.ɵɵelementStart(24, "tspan", 24);
            i0.ɵɵtext(25, "Space Segment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "g", 25);
            i0.ɵɵelement(27, "path", 26);
            i0.ɵɵelement(28, "rect", 27);
            i0.ɵɵelement(29, "rect", 28);
            i0.ɵɵelement(30, "path", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "g", 30);
            i0.ɵɵelement(32, "path", 31);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "g", 32);
            i0.ɵɵelement(34, "path", 33);
            i0.ɵɵelement(35, "path", 34);
            i0.ɵɵelement(36, "path", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "g", 36);
            i0.ɵɵelementStart(38, "g", 37);
            i0.ɵɵelementStart(39, "g", 37);
            i0.ɵɵelement(40, "path", 38);
            i0.ɵɵelement(41, "path", 39);
            i0.ɵɵelement(42, "path", 40);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "g", 41);
            i0.ɵɵelement(44, "path", 42);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "g", 43);
            i0.ɵɵelementStart(46, "g", 44);
            i0.ɵɵelement(47, "path", 45);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "text", 46);
            i0.ɵɵelementStart(49, "tspan", 47);
            i0.ɵɵtext(50, "Rx");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(51, "use", 48);
            i0.ɵɵelementEnd();
        }
    }
    function SyntheticDrawingComponent__svg_svg_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 4);
            i0.ɵɵelementStart(1, "defs");
            i0.ɵɵelementStart(2, "svg", 49);
            i0.ɵɵelementStart(3, "defs");
            i0.ɵɵelementStart(4, "linearGradient", 6);
            i0.ɵɵelement(5, "stop", 7);
            i0.ɵɵelement(6, "stop", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "linearGradient", 50);
            i0.ɵɵelement(8, "stop", 10);
            i0.ɵɵelement(9, "stop", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "marker", 12);
            i0.ɵɵelement(11, "path", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "g", 51);
            i0.ɵɵelementStart(13, "g", 52);
            i0.ɵɵelement(14, "path", 16);
            i0.ɵɵelementStart(15, "text", 53);
            i0.ɵɵelementStart(16, "tspan", 54);
            i0.ɵɵtext(17, "Tx");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "path", 55);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "g", 56);
            i0.ɵɵelement(20, "path", 31);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "g", 57);
            i0.ɵɵelement(22, "path", 33);
            i0.ɵɵelement(23, "path", 34);
            i0.ɵɵelement(24, "path", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "g", 58);
            i0.ɵɵelementStart(26, "g", 37);
            i0.ɵɵelementStart(27, "g", 37);
            i0.ɵɵelement(28, "path", 38);
            i0.ɵɵelement(29, "path", 39);
            i0.ɵɵelement(30, "path", 40);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "g", 59);
            i0.ɵɵelement(32, "path", 42);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "g", 60);
            i0.ɵɵelementStart(34, "g", 61);
            i0.ɵɵelement(35, "path", 45);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "text", 62);
            i0.ɵɵelementStart(37, "tspan", 63);
            i0.ɵɵtext(38, "Rx");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "text", 64);
            i0.ɵɵelementStart(40, "tspan", 65);
            i0.ɵɵtext(41, "Ground Segment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "text", 66);
            i0.ɵɵelementStart(43, "tspan", 67);
            i0.ɵɵtext(44, "Space Segment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "g", 68);
            i0.ɵɵelement(46, "path", 26);
            i0.ɵɵelement(47, "rect", 27);
            i0.ɵɵelement(48, "rect", 28);
            i0.ɵɵelement(49, "path", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(50, "image", 69);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(51, "use", 70);
            i0.ɵɵelementEnd();
        }
    }
    var SyntheticDrawingComponent = /** @class */ (function () {
        function SyntheticDrawingComponent(drawingService, logger) {
            this.drawingService = drawingService;
            this.logger = logger;
            this.height = 0;
            this.width = 0;
            this.margin = {
                top: 30, right: 30, bottom: 0, left: 30,
            };
            this.graphPoints = [];
            // DefaultLBScenario:LinkBudgetScenario;
            // private drawing: any;
            // private graph: any;
            this.linkType = 'uplink'; // If not used by results component, choose uplink as default
            this.scenarioId = 'default';
            this.displayGraph = true;
            this._powerIn = 0;
            this._components = DrawingDefault.defaultComponents;
        }
        Object.defineProperty(SyntheticDrawingComponent.prototype, "powerIn", {
            // Setters and getter for powerIn and components variables because they require to update the graph
            get: function () {
                return this._powerIn;
            },
            set: function (value) {
                this._powerIn = value;
                this.updateLBScenario(value, this.components, this.linkType);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SyntheticDrawingComponent.prototype, "components", {
            get: function () {
                return this._components;
            },
            set: function (value) {
                this._components = value;
                this.updateLBScenario(this.powerIn, value, this.linkType);
            },
            enumerable: false,
            configurable: true
        });
        SyntheticDrawingComponent.prototype.updateLBScenario = function (power, components, linkType) {
            var scenario = new LinkBudgetScenario(power);
            scenario.addComponents(components);
            scenario.compute(linkType);
            this.drawingService.updateLBScenario(this.scenarioId, scenario);
        };
        SyntheticDrawingComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            // We need to do this after view init because else, the ViewChild result might still be undefined
            if (this.displayGraph) { // In some cases, we might just be interested by the drawing
                this.initGraph();
                // Subscribing to the LBScenario models in case they are modified
                this.drawingService.getLBScenario$(this.scenarioId)
                    .subscribe(function (value) {
                    _this.updateGraphData(value);
                });
                // Initial update with all the current data
                this.updateLBScenario(this.powerIn, this.components, this.linkType);
            }
        };
        SyntheticDrawingComponent.prototype.updateLabels = function (newScenario) {
            var labels = newScenario.getLabels();
            this.labels
                .selectAll('text')
                .data(labels)
                .enter()
                .append('text')
                .text(function (d) { return d.name; })
                .attr('x', function (d) { return d.position * 9; })
                .attr('text-anchor', 'middle');
        };
        SyntheticDrawingComponent.prototype.initGraph = function () {
            // points = this.DefaultLBScenario.getPoints();
            this.width = 960 - this.margin.left - this.margin.right; // Same value as for the drawing
            this.height = 240 - this.margin.top - this.margin.bottom;
            this.x = d3.scaleLinear().range([0, this.width]);
            this.y = d3.scaleLinear().range([0, this.height]);
            this.x.domain([0, 100]);
            // Setting the viewbox and div for the graph
            this.mainSVG = d3.select(this.diagram.nativeElement)
                .append('svg')
                .attr('id', 'graph')
                .attr('viewBox', -this.margin.left + " " + -this.margin.top + " " + (this.width + this.margin.left + this.margin.right) + " " + (this.height + this.margin.top + this.margin.bottom + 60));
            this.mainSVG
                .append('path')
                .attr('width', this.width + this.margin.left + this.margin.right)
                .attr('height', this.height + this.margin.top + this.margin.bottom);
            // Adding the summary text at the bottom, centered.
            this.budgetText = this.mainSVG
                .append('text')
                .attr('x', (this.width + this.margin.left + this.margin.right) / 2)
                .attr('y', this.height + this.margin.top + this.margin.bottom + 15)
                .attr('text-anchor', 'middle');
            this.verticalLinesGroup = this.mainSVG
                .append('g')
                .attr('class', 'group');
            this.mainSVG.append('g').attr('class', 'YAxis');
            this.labels = this.mainSVG.append('g')
                .attr('class', 'labels')
                .attr('transform', 'translate(0,-10)');
        };
        SyntheticDrawingComponent.prototype.updateGraphData = function (newScenario) {
            var _a;
            var _b = this, x = _b.x, y = _b.y;
            var points = newScenario.getPoints();
            var powerOut = newScenario.getPowerOut();
            this.updateLabels(newScenario);
            // this.logger.debug('Updating graph, points are :', points);
            // this.logger.debug('newScenario is:', newScenario);
            // Careful with this one, returns (min, max) but domain expects (up, down) so trouble with yaxis
            var _c = __read((_a = (d3.extent(points, function (point) { return point.y; }))) !== null && _a !== void 0 ? _a : [0, -150], 2), min = _c[0], max = _c[1];
            this.y.domain([max, min]);
            var valueline = d3.line()
                .x(function (d) { var _a; return (_a = x(d.x)) !== null && _a !== void 0 ? _a : x(0); })
                .y(function (d) { var _a; return (_a = y(d.y)) !== null && _a !== void 0 ? _a : y(0); });
            // Setting the plot line
            this.mainSVG
                .select('path')
                .datum(points)
                .attr('class', 'line')
                .transition()
                .duration(1000)
                .attr('d', valueline)
                .attr('stroke-width', 2)
                .attr('fill', '#FFFFFF')
                .attr('stroke', '#111111');
            // Setting the YAxis
            this.mainSVG
                .select('.YAxis')
                .transition()
                .duration(1000)
                .call(d3.axisLeft(this.y));
            // The vertical lines, here the *9 factor is explained by the 100px -> (960-60)px conversion
            this.verticalLinesGroup
                .selectAll('line')
                .remove();
            this.verticalLinesGroup
                .selectAll('line')
                .data(points)
                .enter()
                .append('line')
                .attr('class', 'vert-line')
                .attr('x1', function (d) { return d.x * 9; })
                .attr('y1', this.height)
                .attr('x2', function (d) { return d.x * 9; })
                .attr('y2', 0)
                .attr('stroke-width', 1)
                .attr('stroke-dasharray', '5,5')
                .attr('stroke', '#888888');
            // Adding a line with power out
            // this.svg
            //   .append('line')
            //   .attr('class', 'horz-line')
            //   .attr('x1', (d:any) => 0)
            //   .attr('y1', powerOut)
            //   .attr('x2', (d:any) => this.width)
            //   .attr('y2', powerOut)
            //   .attr('stroke-width', 1)
            //   .attr('stroke-dasharray', '5,5')
            //   .attr('stroke', '#888888');
            // Adding the formula at bottom
            this.budgetText.text("Prx = Ptx - Ltx + Gtx - Lpath + Grx - Lrx = " + powerOut.toFixed(1) + " dB");
        };
        return SyntheticDrawingComponent;
    }());
    SyntheticDrawingComponent.ɵfac = function SyntheticDrawingComponent_Factory(t) { return new (t || SyntheticDrawingComponent)(i0.ɵɵdirectiveInject(SyntheticDrawingFormService), i0.ɵɵdirectiveInject(LoggerService)); };
    SyntheticDrawingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SyntheticDrawingComponent, selectors: [["lib-synthetic-drawing"]], viewQuery: function SyntheticDrawingComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$5, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.diagram = _t.first);
            }
        }, inputs: { linkType: "linkType", scenarioId: "scenarioId", displayGraph: "displayGraph", powerIn: "powerIn", components: "components" }, decls: 5, vars: 2, consts: [["id", "container"], ["id", "diagram"], ["diagram", ""], ["viewBox", "-10 0 320 75", 4, "ngIf"], ["viewBox", "-10 0 320 75"], ["id", "antenna_uplink", "width", "100mm", "height", "25mm", "version", "1.1", "viewBox", "0 0 100 25", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["id", "b", "x1", "101.5", "x2", "112.65", "y1", "101.21", "y2", "101.21", "gradientTransform", "matrix(1.1223,0,0,1.2246,-14.869,-4.8265)", "gradientUnits", "userSpaceOnUse"], ["offset", "0", 2, "stop-color", "#f60"], ["offset", "1", 2, "stop-color", "#b50000"], ["id", "a", "x1", "36.839", "x2", "47.828", "y1", "101.21", "y2", "101.21", "gradientTransform", "matrix(1.1223 0 0 1.2246 -6.6383 -2.5344)", "gradientUnits", "userSpaceOnUse"], ["offset", "0", 2, "stop-color", "#005c94"], ["offset", "1", 2, "stop-color", "#009100"], ["id", "DotM", "orient", "auto", 2, "overflow", "visible"], ["transform", "matrix(.4 0 0 .4 2.96 .4)", "d", "m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z", 2, "fill-rule", "evenodd", "fill", "#273445", "stroke-width", "1pt", "stroke", "#273445"], ["transform", "matrix(1 0 0 1.0279 -24.935 -106.35)"], ["id", "tx", "transform", "matrix(1.236 0 0 1.3487 .69077 -18.24)"], ["d", "m31.768 102.36-11.941 5.7454v-11.491l5.9708 2.8727z", 2, "fill", "#19aeff", "stroke-linejoin", "round", "stroke-width", ".36623", "stroke", "#005c94"], ["x", "21.302406", "y", "103.92289", 0, "xml", "space", "preserve", 2, "fill", "#ffffff", "font-family", "sans-serif", "font-size", "8.922px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".22304", "word-spacing", "0px"], ["x", "21.302406", "y", "103.92289", 2, "fill", "#ffffff", "font-size", "4.1635px", "stroke-width", ".22304"], ["d", "m49.73 93.455c0.45514-1.8135 0.91028-2.9122 1.3654-2.0262 0.45514 0.88603 0.91028 3.1778 1.3654 3.851 0.45514 0.67321 0.91028-0.49987 1.3654-1.8248 0.45514-1.3249 0.91028-2.1271 1.3654-1.48 0.45514 0.64716 0.91028 2.321 1.3654 2.8128 0.45514 0.49171 0.91028-0.36511 1.3654-1.3328 0.45514-0.9677 0.91028-1.5536 1.3654-1.081 0.45514 0.47269 0.91028 1.6953 1.3654 2.0544 0.45514 0.35915 0.91028-0.26668 1.3654-0.97349 0.45514-0.70681 0.91028-1.1348 1.3654-0.78954 0.45514 0.34525 0.91028 1.2383 1.3654 1.5006 0.45514 0.26232 0.91028-0.19478 1.3654-0.71104 0.45514-0.51626 0.91028-0.82885 1.3654-0.57668 0.45514 0.25217 0.91028 0.90442 1.3654 1.096 0.45514 0.1916 0.91028-0.14227 1.3654-0.51934", "title", "5*sin(x)*exp(-0.05*x)", 2, "fill", "none", "stroke-linecap", "round", "stroke-width", ".38873", "stroke", "#364e59"], ["transform", "scale(1.059 .94425)", "x", "24.097195", "y", "114.17236", 0, "xml", "space", "preserve", 2, "fill", "#000000", "font-family", "sans-serif", "font-size", "2.695px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".20212", "word-spacing", "0px"], ["x", "24.097195", "y", "114.17236", 2, "font-size", "2.156px", "stroke-width", ".20212"], ["x", "29.608", "y", "91.921", "width", "8.0214", "height", "8.5605", "preserveAspectRatio", "none", 0, "xlink", "href", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBoRXhpZgAASUkqAAgAAAADABIBAwABAAAAAQAAADEBAgAQ AAAAMgAAAGmHBAABAAAAQgAAAAAAAABTaG90d2VsbCAwLjIyLjAAAgACoAkAAQAAAAsCAAADoAkA AQAAAHICAAAAAAAA/+EJ9Gh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJl Z2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxu czp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPiA8cmRm OlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1u cyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMu YWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZm LzEuMC8iIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1MjMiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSI2 MjYiIHRpZmY6SW1hZ2VXaWR0aD0iNTIzIiB0aWZmOkltYWdlSGVpZ2h0PSI2MjYiIHRpZmY6T3Jp ZW50YXRpb249IjEiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/9sA QwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwP FxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU FBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgCcgILAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAA AAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQy gZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVm Z2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS 09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYH CAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1Lw FWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5 eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj 5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+1qUDikFKK9U4UGCOlAzmlp3AoAZtzSdKlIF MYZoCw0DIpQMUdOlLQAq08HvTQOKUDNAxcc0uPSlC8U4CgBmD3pQtPIo20ANxTsGlVaUjFK4CYpw FAGadSAAM0oFC1IB7UANApwXmjFOAoKG0U7FBFAhjCmEVIRgU3bxQFhlFOxik70CsIeKQ9KcRmkx 70ANxSmlpKACiloxmgAHWjPNA60uBQAZzRQMUtABRRQaADNN9KdQRn8KAExS0nNLQAUUUUFCHB+t A560uKAMUCsNJoApSKDx0oFYBwcnpTLm0g1C0ntLpDJb3EbRSKCQSrDBwR0ODwaeelKOlA0UdFup 7m0ktr1xJqVg4trl8f60gApMPaRSG44BJH8Jq9WXrDjS7qDWxxFGotr8A8fZySVkPr5Ttu9keT2r WkTYxU8sCRQIbRRRQNBRRRQMKDRRQAmeeaMZNB65oJxQSDUHkUmfWgnHAoASiiigCgOKUdab3pwN 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 mf/Z ", 2, "image-rendering", "optimizeQuality"], ["transform", "scale(1.059 .94425)", "x", "73.431267", "y", "113.96858", 0, "xml", "space", "preserve", 2, "fill", "#000000", "font-family", "sans-serif", "font-size", "2.695px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".20212", "word-spacing", "0px"], ["x", "73.431267", "y", "113.96858", 2, "font-size", "2.156px", "stroke-width", ".20212"], ["transform", "matrix(.068572 .061139 -.068572 .061139 89.532 81.276)"], ["d", "m88.807 180.05c-3.9758 3e-3 -7.2787 2.8874-7.5811 6.6193 4.9024-2.7815 9.9481-2.9285 15.168 0-0.30262-3.7338-3.6088-6.6184-7.5867-6.6193z", 2, "fill", "#273445", "stroke-linecap", "square", "stroke-width", "1.0466", "stroke", "#273445"], ["x", "42.505", "y", "159.4", "width", "96.573", "height", "11.906", 2, "fill", "#002e99", "stroke-linecap", "square", "stroke-linejoin", "round", "stroke-width", "1.5", "stroke", "#0d52bf"], ["x", "75.578", "y", "151.46", "width", "27.905", "height", "27.781", 2, "fill", "#ffe16b", "stroke-linecap", "square", "stroke-linejoin", "round", "stroke-width", "1.2367", "stroke", "#f9c440"], ["d", "m88.807 184.53v2.6866", 2, "fill", "#273445", "marker-end", "url(#DotM)", "stroke-width", ".27078", "stroke", "#273445"], ["id", "line-tx", "transform", "matrix(1.2574 0 0 1 -3.9287 -1.604)", 2, "paint-order", "stroke fill markers"], ["d", "m34.935 121.41h11.878", 2, "fill", "#ba00ff", "paint-order", "stroke fill markers", "stroke-linejoin", "round", "stroke-width", ".46895", "stroke", "url(#a)"], ["id", "antenna-tx", "transform", "matrix(1.1223 0 0 1.2246 -5.9383 -4.1198)", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#009100"], ["d", "m54.24 101.21v-13.122", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#009100"], ["d", "m50.271 88.088 3.9688 6.8792", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#009100"], ["d", "m58.208 88.088-3.9688 6.8792", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#009100"], ["id", "antenna-rx", "transform", "matrix(-1.1223 0 0 1.2246 155.81 -4.1437)", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#f60"], [2, "stroke", "#f60"], ["d", "m54.24 101.21v-13.117", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#f60"], ["d", "m50.271 88.086 3.9688 6.8792", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#f60"], ["d", "m58.208 88.086-3.9688 6.8792", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#f60"], ["id", "line-rx", "transform", "matrix(1.2451 0 0 1 -28.676 .67803)"], ["d", "m111.34 119.12h-12.06", 2, "fill", "#ba00ff", "stroke-width", ".46895", "stroke", "url(#b)"], ["id", "rx", "transform", "translate(1.7596 -.25208)"], ["transform", "matrix(-1.236 0 0 1.3487 147.46 -17.998)", 2, "fill", "#ff4141", "stroke", "#b50000"], ["d", "m31.768 102.36-11.941 5.7454v-11.491l5.9708 2.8727z", 2, "fill", "#ff4141", "stroke-linejoin", "round", "stroke-width", ".36623", "stroke", "#b50000"], ["x", "115.42167", "y", "121.30454", 0, "xml", "space", "preserve", 2, "fill", "#ffffff", "font-family", "sans-serif", "font-size", "8.922px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".22304", "word-spacing", "0px"], ["x", "115.42167", "y", "121.30454", 2, "fill", "#ffffff", "font-size", "4.1635px", "stroke-width", ".22304"], ["href", "#antenna_uplink", "width", "300", "height", "75"], ["id", "antenna_downlink", "width", "100mm", "height", "25mm", "version", "1.1", "viewBox", "0 0 100 25", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["id", "a", "x1", "36.839", "x2", "47.828", "y1", "101.21", "y2", "101.21", "gradientTransform", "matrix(1.1223,0,0,1.2246,-6.6383,-2.5344)", "gradientUnits", "userSpaceOnUse"], ["transform", "matrix(1,0,0,1.0279,-24.935,-106.35)"], ["id", "tx", "transform", "matrix(-1.236,0,0,1.3487,149.22,-18.24)"], ["transform", "scale(-1,1)", "x", "-25.978191", "y", "103.92289", 0, "xml", "space", "preserve", 2, "fill", "#ffffff", "font-family", "sans-serif", "font-size", "8.922px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".22304", "word-spacing", "0px"], ["x", "-25.978191", "y", "103.92289", 2, "fill", "#ffffff", "font-size", "4.1635px", "stroke-width", ".22304"], ["d", "m49.73 93.136c0.45514 1.8135 0.91028 2.9122 1.3654 2.0262 0.45514-0.88603 0.91028-3.1778 1.3654-3.851 0.45514-0.67321 0.91028 0.49987 1.3654 1.8248 0.45514 1.3249 0.91028 2.1271 1.3654 1.48 0.45514-0.64716 0.91028-2.321 1.3654-2.8128 0.45514-0.49171 0.91028 0.36511 1.3654 1.3328 0.45514 0.9677 0.91028 1.5536 1.3654 1.081 0.45514-0.47269 0.91028-1.6953 1.3654-2.0544 0.45514-0.35915 0.91028 0.26668 1.3654 0.97349 0.45514 0.70681 0.91028 1.1348 1.3654 0.78954 0.45514-0.34525 0.91028-1.2383 1.3654-1.5006 0.45514-0.26232 0.91028 0.19478 1.3654 0.71104 0.45514 0.51626 0.91028 0.82885 1.3654 0.57668 0.45514-0.25217 0.91028-0.90442 1.3654-1.096 0.45514-0.1916 0.91028 0.14227 1.3654 0.51934", "title", "5*sin(x)*exp(-0.05*x)", 2, "fill", "none", "stroke-linecap", "round", "stroke-width", ".38873", "stroke", "#364e59"], ["id", "line-tx", "transform", "matrix(-1.2574,0,0,1,153.84,-1.604)", 2, "paint-order", "stroke fill markers"], ["id", "antenna-tx", "transform", "matrix(-1.1223,0,0,1.2246,155.85,-4.1198)", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#009100"], ["id", "antenna-rx", "transform", "matrix(1.1223,0,0,1.2246,-5.9006,-4.1437)", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#f60"], ["id", "line-rx", "transform", "matrix(-1.2451 0 0 1 178.58 .67803)"], ["id", "rx", "transform", "matrix(-1 0 0 1 148.15 -.25208)"], ["transform", "matrix(-1.236,0,0,1.3487,147.46,-17.998)", 2, "fill", "#ff4141", "stroke", "#b50000"], ["transform", "scale(-1,1)", "x", "-120.80899", "y", "121.30454", 0, "xml", "space", "preserve", 2, "fill", "#ffffff", "font-family", "sans-serif", "font-size", "8.922px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".22304", "word-spacing", "0px"], ["x", "-120.80899", "y", "121.30454", 2, "fill", "#ffffff", "font-size", "4.1635px", "stroke-width", ".22304"], ["x", "8.212184", "y", "24.521841", 0, "xml", "space", "preserve", 2, "fill", "#000000", "font-family", "sans-serif", "font-size", "3.5278px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".26458", "word-spacing", "0px"], ["x", "8.212184", "y", "24.521841", 2, "font-size", "2.8222px", "stroke-width", ".26458"], ["x", "72.513123", "y", "24.230505", 0, "xml", "space", "preserve", 2, "fill", "#000000", "font-family", "sans-serif", "font-size", "3.5278px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".26458", "word-spacing", "0px"], ["x", "72.513123", "y", "24.230505", 2, "font-size", "2.8222px", "stroke-width", ".26458"], ["transform", "matrix(.084757 .084757 -.084757 .084757 87.056 -12.283)"], ["x", "13.266", "y", "2.4992", "width", "9.9148", "height", "11.867", "preserveAspectRatio", "none", 0, "xlink", "href", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBoRXhpZgAASUkqAAgAAAADABIBAwABAAAAAQAAADEBAgAQ AAAAMgAAAGmHBAABAAAAQgAAAAAAAABTaG90d2VsbCAwLjIyLjAAAgACoAkAAQAAAAsCAAADoAkA AQAAAHICAAAAAAAA/+EJ9Gh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJl Z2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxu czp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPiA8cmRm OlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1u cyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMu YWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZm LzEuMC8iIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1MjMiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSI2 MjYiIHRpZmY6SW1hZ2VXaWR0aD0iNTIzIiB0aWZmOkltYWdlSGVpZ2h0PSI2MjYiIHRpZmY6T3Jp ZW50YXRpb249IjEiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/9sA QwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwP FxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU FBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgCcgILAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAA AAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQy gZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVm Z2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS 09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYH CAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1Lw FWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5 eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj 5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+1qUDikFKK9U4UGCOlAzmlp3AoAZtzSdKlIF MYZoCw0DIpQMUdOlLQAq08HvTQOKUDNAxcc0uPSlC8U4CgBmD3pQtPIo20ANxTsGlVaUjFK4CYpw FAGadSAAM0oFC1IB7UANApwXmjFOAoKG0U7FBFAhjCmEVIRgU3bxQFhlFOxik70CsIeKQ9KcRmkx 70ANxSmlpKACiloxmgAHWjPNA60uBQAZzRQMUtABRRQaADNN9KdQRn8KAExS0nNLQAUUUUFCHB+t A560uKAMUCsNJoApSKDx0oFYBwcnpTLm0g1C0ntLpDJb3EbRSKCQSrDBwR0ODwaeelKOlA0UdFup 7m0ktr1xJqVg4trl8f60gApMPaRSG44BJH8Jq9WXrDjS7qDWxxFGotr8A8fZySVkPr5Ttu9keT2r WkTYxU8sCRQIbRRRQNBRRRQMKDRRQAmeeaMZNB65oJxQSDUHkUmfWgnHAoASiiigCgOKUdab3pwN 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 mf/Z ", 2, "image-rendering", "optimizeQuality"], ["href", "#antenna_downlink", "width", "300", "height", "75"]], template: function SyntheticDrawingComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "section", 0);
                i0.ɵɵelementStart(1, "div", 1, 2);
                i0.ɵɵtemplate(3, SyntheticDrawingComponent__svg_svg_3_Template, 52, 0, "svg", 3);
                i0.ɵɵtemplate(4, SyntheticDrawingComponent__svg_svg_4_Template, 52, 0, "svg", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.linkType === "uplink");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.linkType === "downlink");
            }
        }, directives: [i4.NgIf], styles: ["#side[_ngcontent-%COMP%]{display:inline-block;height:800px;width:50%}form[_ngcontent-%COMP%]{margin-right:auto;width:50%}input[_ngcontent-%COMP%]{float:right}div[_ngcontent-%COMP%]{margin:10px 0}#diagram[_ngcontent-%COMP%]{margin:24px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SyntheticDrawingComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-synthetic-drawing',
                        templateUrl: './synthetic-drawing.component.html',
                        styleUrls: ['./synthetic-drawing.component.scss'],
                    }]
            }], function () { return [{ type: SyntheticDrawingFormService }, { type: LoggerService }]; }, { diagram: [{
                    type: i0.ViewChild,
                    args: ['diagram']
                }], linkType: [{
                    type: i0.Input
                }], scenarioId: [{
                    type: i0.Input
                }], displayGraph: [{
                    type: i0.Input
                }], powerIn: [{
                    type: i0.Input
                }], components: [{
                    type: i0.Input
                }] });
    })();

    var _c0$6 = function (a0) { return { "active-row": a0 }; };
    function ResultsComponent_lib_card_0_ng_container_11_ng_container_7_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "tr", 19);
            i0.ɵɵelementStart(2, "td", 20);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "td", 21);
            i0.ɵɵtext(5);
            i0.ɵɵpipe(6, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var elt_r7 = ctx.$implicit;
            var ctx_r6 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0$6, ctx_r6.showUplink ? ctx_r6.deltaUL.includes(elt_r7.name) : ctx_r6.deltaDL.includes(elt_r7.name)));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r6.params[elt_r7.name].label);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(6, 4, elt_r7.value, ".1-2"), " ", elt_r7.unit, " ");
        }
    }
    function ResultsComponent_lib_card_0_ng_container_11_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ResultsComponent_lib_card_0_ng_container_11_ng_container_7_ng_container_1_Template, 7, 9, "ng-container", 14);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var section_r4 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", section_r4.elt);
        }
    }
    function ResultsComponent_lib_card_0_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "th", 15);
            i0.ɵɵelementStart(2, "b");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "a", 16);
            i0.ɵɵlistener("click", function ResultsComponent_lib_card_0_ng_container_11_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r10_1); var section_r4 = ctx.$implicit; var ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.showUplink ? (ctx_r9.collapsed.uplink[section_r4.group] = !ctx_r9.collapsed.uplink[section_r4.group]) : (ctx_r9.collapsed.downlink[section_r4.group] = !ctx_r9.collapsed.downlink[section_r4.group]); });
            i0.ɵɵelementStart(5, "span", 17);
            i0.ɵɵelement(6, "fa-icon", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, ResultsComponent_lib_card_0_ng_container_11_ng_container_7_Template, 2, 1, "ng-container", 0);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var section_r4 = ctx.$implicit;
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(section_r4.group);
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate1("transform", "rotate-", (ctx_r3.showUplink ? ctx_r3.collapsed.uplink[section_r4.group] : ctx_r3.collapsed.downlink[section_r4.group]) ? 0 : 180, "");
            i0.ɵɵproperty("icon", ctx_r3.faAngleDown);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3.showUplink ? !ctx_r3.collapsed.uplink[section_r4.group] : !ctx_r3.collapsed.downlink[section_r4.group]);
        }
    }
    var _c1$2 = function (a0) { return { "is-active": a0 }; };
    function ResultsComponent_lib_card_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "lib-card");
            i0.ɵɵelementStart(1, "div", 10);
            i0.ɵɵelementStart(2, "ul", 11);
            i0.ɵɵelementStart(3, "li", 12);
            i0.ɵɵlistener("click", function ResultsComponent_lib_card_0_Template_li_click_3_listener() { i0.ɵɵrestoreView(_r12_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.showUplink = true; });
            i0.ɵɵelementStart(4, "a");
            i0.ɵɵtext(5, "Uplink");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "li", 12);
            i0.ɵɵlistener("click", function ResultsComponent_lib_card_0_Template_li_click_6_listener() { i0.ɵɵrestoreView(_r12_1); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.showUplink = false; });
            i0.ɵɵelementStart(7, "a");
            i0.ɵɵtext(8, "Downlink");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "table", 13);
            i0.ɵɵelementStart(10, "tbody");
            i0.ɵɵtemplate(11, ResultsComponent_lib_card_0_ng_container_11_Template, 8, 4, "ng-container", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1$2, ctx_r0.showUplink));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c1$2, !ctx_r0.showUplink));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx_r0.showUplink ? "animate__slideInLeft" : "animate__slideInRight");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r0.showUplink ? ctx_r0.fullResult2.uplink : ctx_r0.fullResult2.downlink);
        }
    }
    function ResultsComponent_lib_navigation_sidebar_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "lib-navigation-sidebar", 22);
        }
        if (rf & 2) {
            i0.ɵɵproperty("currentComponent", "results");
        }
    }
    function ResultsComponent_div_15_lib_card_3_fa_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fa-icon", 33);
        }
        if (rf & 2) {
            var ctx_r18 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("icon", ctx_r18.faCheck);
        }
    }
    function ResultsComponent_div_15_lib_card_3_fa_icon_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fa-icon", 33);
        }
        if (rf & 2) {
            var ctx_r19 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("icon", ctx_r19.faWarn);
        }
    }
    function ResultsComponent_div_15_lib_card_3_fa_icon_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fa-icon", 33);
        }
        if (rf & 2) {
            var ctx_r20 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("icon", ctx_r20.faError);
        }
    }
    function ResultsComponent_div_15_lib_card_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "lib-card", 29);
            i0.ɵɵelementStart(1, "div", 30);
            i0.ɵɵtemplate(2, ResultsComponent_div_15_lib_card_3_fa_icon_2_Template, 1, 1, "fa-icon", 31);
            i0.ɵɵtemplate(3, ResultsComponent_div_15_lib_card_3_fa_icon_3_Template, 1, 1, "fa-icon", 31);
            i0.ɵɵtemplate(4, ResultsComponent_div_15_lib_card_3_fa_icon_4_Template, 1, 1, "fa-icon", 31);
            i0.ɵɵelement(5, "p", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r14 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("styleClass", ctx_r14.linkStatus.uplink.status || "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r14.linkStatus.uplink.status === "is-success");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r14.linkStatus.uplink.status === "is-warning");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r14.linkStatus.uplink.status === "is-danger");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("innerHTML", ctx_r14.linkStatus.uplink.message, i0.ɵɵsanitizeHtml);
        }
    }
    function ResultsComponent_div_15_ng_container_6_ng_container_7_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "tr", 19);
            i0.ɵɵelementStart(2, "td", 20);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "td", 21);
            i0.ɵɵtext(5);
            i0.ɵɵpipe(6, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var elt_r24 = ctx.$implicit;
            var ctx_r23 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0$6, ctx_r23.deltaUL.includes(elt_r24.name)));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r23.params[elt_r24.name].label);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(6, 4, elt_r24.value, ".1-2"), " ", elt_r24.unit, " ");
        }
    }
    function ResultsComponent_div_15_ng_container_6_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ResultsComponent_div_15_ng_container_6_ng_container_7_ng_container_1_Template, 7, 9, "ng-container", 14);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var section_r21 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", section_r21.elt);
        }
    }
    function ResultsComponent_div_15_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r27_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "th", 15);
            i0.ɵɵelementStart(2, "b");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "a", 16);
            i0.ɵɵlistener("click", function ResultsComponent_div_15_ng_container_6_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r27_1); var section_r21 = ctx.$implicit; var ctx_r26 = i0.ɵɵnextContext(2); return (ctx_r26.collapsed.uplink[section_r21.group] = !ctx_r26.collapsed.uplink[section_r21.group]); });
            i0.ɵɵelementStart(5, "span", 17);
            i0.ɵɵelement(6, "fa-icon", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, ResultsComponent_div_15_ng_container_6_ng_container_7_Template, 2, 1, "ng-container", 0);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var section_r21 = ctx.$implicit;
            var ctx_r15 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(section_r21.group);
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate1("transform", "rotate-", ctx_r15.collapsed.uplink[section_r21.group] ? 0 : 180, "");
            i0.ɵɵproperty("icon", ctx_r15.faAngleDown);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r15.collapsed.uplink[section_r21.group]);
        }
    }
    function ResultsComponent_div_15_lib_card_14_fa_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fa-icon", 33);
        }
        if (rf & 2) {
            var ctx_r28 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("icon", ctx_r28.faCheck);
        }
    }
    function ResultsComponent_div_15_lib_card_14_fa_icon_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fa-icon", 33);
        }
        if (rf & 2) {
            var ctx_r29 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("icon", ctx_r29.faWarn);
        }
    }
    function ResultsComponent_div_15_lib_card_14_fa_icon_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fa-icon", 33);
        }
        if (rf & 2) {
            var ctx_r30 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("icon", ctx_r30.faError);
        }
    }
    function ResultsComponent_div_15_lib_card_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "lib-card", 29);
            i0.ɵɵelementStart(1, "div", 30);
            i0.ɵɵtemplate(2, ResultsComponent_div_15_lib_card_14_fa_icon_2_Template, 1, 1, "fa-icon", 31);
            i0.ɵɵtemplate(3, ResultsComponent_div_15_lib_card_14_fa_icon_3_Template, 1, 1, "fa-icon", 31);
            i0.ɵɵtemplate(4, ResultsComponent_div_15_lib_card_14_fa_icon_4_Template, 1, 1, "fa-icon", 31);
            i0.ɵɵelement(5, "p", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("styleClass", ctx_r16.linkStatus.downlink.status || "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r16.linkStatus.downlink.status === "is-success");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r16.linkStatus.downlink.status === "is-warning");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r16.linkStatus.downlink.status === "is-danger");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("innerHTML", ctx_r16.linkStatus.downlink.message, i0.ɵɵsanitizeHtml);
        }
    }
    function ResultsComponent_div_15_ng_container_17_ng_container_7_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "tr", 19);
            i0.ɵɵelementStart(2, "td", 20);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "td", 21);
            i0.ɵɵtext(5);
            i0.ɵɵpipe(6, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var elt_r34 = ctx.$implicit;
            var ctx_r33 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0$6, ctx_r33.deltaDL.includes(elt_r34.name)));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r33.params[elt_r34.name].label);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(6, 4, elt_r34.value, ".1-2"), " ", elt_r34.unit, " ");
        }
    }
    function ResultsComponent_div_15_ng_container_17_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ResultsComponent_div_15_ng_container_17_ng_container_7_ng_container_1_Template, 7, 9, "ng-container", 14);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var section_r31 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", section_r31.elt);
        }
    }
    function ResultsComponent_div_15_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
            var _r37_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "th", 15);
            i0.ɵɵelementStart(2, "b");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "a", 16);
            i0.ɵɵlistener("click", function ResultsComponent_div_15_ng_container_17_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r37_1); var section_r31 = ctx.$implicit; var ctx_r36 = i0.ɵɵnextContext(2); return (ctx_r36.collapsed.downlink[section_r31.group] = !ctx_r36.collapsed.downlink[section_r31.group]); });
            i0.ɵɵelementStart(5, "span", 17);
            i0.ɵɵelement(6, "fa-icon", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, ResultsComponent_div_15_ng_container_17_ng_container_7_Template, 2, 1, "ng-container", 0);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var section_r31 = ctx.$implicit;
            var ctx_r17 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(section_r31.group);
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate1("transform", "rotate-", ctx_r17.collapsed.downlink[section_r31.group] ? 0 : 180, "");
            i0.ɵɵproperty("icon", ctx_r17.faAngleDown);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r17.collapsed.downlink[section_r31.group]);
        }
    }
    function ResultsComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵelementStart(1, "div", 23);
            i0.ɵɵelementStart(2, "lib-card", 24);
            i0.ɵɵtemplate(3, ResultsComponent_div_15_lib_card_3_Template, 6, 5, "lib-card", 25);
            i0.ɵɵelementStart(4, "table", 26);
            i0.ɵɵelementStart(5, "tbody");
            i0.ɵɵtemplate(6, ResultsComponent_div_15_ng_container_6_Template, 8, 4, "ng-container", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 27);
            i0.ɵɵelementStart(8, "lib-card", 24);
            i0.ɵɵelement(9, "lib-synthetic-drawing", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "lib-card", 24);
            i0.ɵɵelement(11, "lib-synthetic-drawing", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 23);
            i0.ɵɵelementStart(13, "lib-card", 24);
            i0.ɵɵtemplate(14, ResultsComponent_div_15_lib_card_14_Template, 6, 5, "lib-card", 25);
            i0.ɵɵelementStart(15, "table", 26);
            i0.ɵɵelementStart(16, "tbody");
            i0.ɵɵtemplate(17, ResultsComponent_div_15_ng_container_17_Template, 8, 4, "ng-container", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", "Uplink");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.linkStatus);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx_r2.fullResult2.uplink);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", "Synthesis Uplink");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("scenarioId", "uplink")("components", ctx_r2.diagramParamsUplink.diagramComponents)("linkType", "uplink")("powerIn", ctx_r2.diagramParamsUplink.powerIn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("title", "Synthesis Downlink");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("scenarioId", "downlink")("components", ctx_r2.diagramParamsDownlink.diagramComponents)("linkType", "downlink")("powerIn", ctx_r2.diagramParamsDownlink.powerIn);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", "Downlink");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.linkStatus);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx_r2.fullResult2.downlink);
        }
    }
    var ResultsComponent = /** @class */ (function () {
        function ResultsComponent(computeLinkBudget, logger, formService, drawingService) {
            var _this = this;
            this.computeLinkBudget = computeLinkBudget;
            this.logger = logger;
            this.formService = formService;
            this.drawingService = drawingService;
            this.faCheck = freeSolidSvgIcons.faCheckCircle;
            this.faWarn = freeSolidSvgIcons.faExclamationTriangle;
            this.faError = freeSolidSvgIcons.faTimesCircle;
            this.download = freeSolidSvgIcons.faFileDownload;
            this.statusStyle = '';
            this.previousCalculationResults = { uplink: [], downlink: [] };
            this.deltaUL = []; // Stores the difference with previous value
            this.deltaDL = [];
            this.showUplink = true;
            // public diagramComponents: any;
            // public powerIn: number;
            this.faAngleDown = freeSolidSvgIcons.faAngleDown;
            this.collapsed = { uplink: {}, downlink: {} };
            this.minimal = false;
            // @Input() keys: string[] = [
            //   'tx_amplifier_power',
            //   'tx_circuit_loss',
            //   'tx_antenna_gain',
            //   'eirp',
            //   'ebno_ratio_margin',
            // ];
            this.fullKeys2 = [
                {
                    key: 'Transmitter',
                    value: ['tx_amplifier_power', 'tx_circuit_loss', 'tx_antenna_gain', 'eirp'],
                },
                {
                    key: 'Path',
                    value: ['slant_range', 'tx_antenna_angle', 'free_space_path_loss', 'medium_loss', 'total_path_loss'],
                },
                {
                    key: 'Receiver',
                    value: [
                        'received_isotropic_signal_level',
                        'rx_antenna_pointing_loss',
                        'rx_antenna_gain',
                        'rx_circuit_loss',
                        'rx_system_noise_temperature',
                        'g_t_figure_of_merit',
                        'received_noise_power_density',
                        'cno_ratio',
                        'bit_rate',
                        'ebno_ratio',
                        'ebno_ratio_threshold',
                        'ebno_ratio_margin',
                    ],
                },
            ];
            this.fullKeys = [
                'tx_amplifier_power',
                'tx_circuit_loss',
                'tx_antenna_gain',
                'eirp',
                'slant_range',
                'tx_antenna_pointing_loss',
                'free_space_path_loss',
                'medium_loss',
                'total_path_loss',
                'received_isotropic_signal_level',
                'rx_antenna_pointing_loss',
                'rx_antenna_gain',
                'rx_circuit_loss',
                'rx_system_noise_temperature',
                'g_t_figure_of_merit',
                'received_noise_power_density',
                'cno_ratio',
                'bit_rate',
                'ebno_ratio',
                'ebno_ratio_threshold',
                'ebno_ratio_margin',
            ];
            this.params = {
                tx_amplifier_power: { label: 'Amplifier power', section: 'Transmitter' },
                tx_circuit_loss: { label: 'Circuit Loss', section: 'Transmitter' },
                tx_antenna_gain: { label: 'Antenna Gain', section: 'Transmitter' },
                tx_antenna_angle: { label: 'Depointing Angle', section: 'Transmitter' },
                eirp: { label: 'EIRP', section: 'Transmitter' },
                slant_range: { label: 'Slant Range', section: 'Path' },
                tx_antenna_pointing_loss: { label: 'Pointing Losses', section: 'Path' },
                free_space_path_loss: { label: 'FSL', section: 'Path' },
                medium_loss: { label: 'Medium Losses', section: 'Path' },
                total_path_loss: { label: 'Total Path Loss', section: 'Path' },
                received_isotropic_signal_level: { label: 'Isotropic power received', section: 'Receiver' },
                rx_antenna_pointing_loss: { label: 'Pointing Losses', section: 'Receiver' },
                rx_antenna_angle: { label: 'Depointing Angle', section: 'Receiver' },
                rx_antenna_gain: { label: 'Antenna Gain', section: 'Receiver' },
                rx_circuit_loss: { label: 'Circuit Loss', section: 'Receiver' },
                rx_system_noise_temperature: { label: 'Noise Temperature', section: 'Receiver' },
                g_t_figure_of_merit: { label: 'G/T Figure of Merit', section: 'Receiver' },
                received_noise_power_density: { label: 'Noise Power Density', section: 'Receiver' },
                cno_ratio: { label: 'C/N0 ratio', section: 'Receiver' },
                bit_rate: { label: 'Bit Rate', section: 'Receiver' },
                ebno_ratio: { label: 'Eb/N0 ratio', section: 'Receiver' },
                ebno_ratio_threshold: { label: 'Eb/N0 threshold', section: 'Receiver' },
                ebno_ratio_margin: { label: 'Eb/N0 margin', section: 'Receiver' },
            };
            // Setting up key to display when no data has already been provided
            this.fullResult2 = { uplink: [], downlink: [] };
            this.fullKeys2.forEach(function (section) {
                // Building a default array before the first calculation
                var k = section.value.map(function (id) { return ({ name: id, value: 0, unit: '' }); });
                _this.fullResult2.uplink.push({ group: section.key, elt: k });
                _this.fullResult2.downlink.push({ group: section.key, elt: k });
                // Updating the collapsed object
                _this.collapsed.uplink[section.key] = false;
                _this.collapsed.downlink[section.key] = false;
            });
            this.diagramParamsUplink = {
                powerIn: this.drawingService.powerIn,
                diagramComponents: this.drawingService.components,
            };
            this.diagramParamsDownlink = {
                powerIn: this.drawingService.powerIn,
                diagramComponents: this.drawingService.components,
            };
            // this.diagramComponents = this.drawingService.defaultComponents;
            // this.powerIn = this.drawingService.powerIn;
        }
        ResultsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.computeLinkBudget.getResult$().subscribe(function (calculationResult) {
                _this.deltaUL = _this.computeDelta(calculationResult.uplink, _this.previousCalculationResults.uplink);
                _this.deltaDL = _this.computeDelta(calculationResult.downlink, _this.previousCalculationResults.downlink);
                // this.deltaDL = this.computeDelta(calculationResult.downlink, this.fullResult2.downlink);
                _this.previousCalculationResults = calculationResult;
                if (calculationResult.uplink || calculationResult.downlink) {
                    var currentResult = _this.formatResults(calculationResult, _this.params);
                    _this.fullResult2 = currentResult;
                    // console.log(this.diagramParams);
                    if (calculationResult.uplink) {
                        // This makes our array an object so we can pick the values we want
                        var res = calculationResult.uplink.reduce(function (acc, _e) {
                            var _f;
                            var name = _e.name, value = _e.value, unit = _e.unit;
                            return (Object.assign(Object.assign({}, acc), (_f = {}, _f[name] = { value: value, unit: unit }, _f)));
                        }, {});
                        // This updates the data passed to the diagram
                        // console.log('a');
                        var diagramResults = _this.refreshDiagramComponents(res);
                        _this.diagramParamsUplink = {
                            powerIn: diagramResults.powerIn,
                            diagramComponents: diagramResults.diagramComponents,
                        };
                    }
                    if (calculationResult.downlink) {
                        // This makes our array an object so we can pick the values we want
                        var res = calculationResult.downlink.reduce(function (acc, _e) {
                            var _f;
                            var name = _e.name, value = _e.value, unit = _e.unit;
                            return (Object.assign(Object.assign({}, acc), (_f = {}, _f[name] = { value: value, unit: unit }, _f)));
                        }, {});
                        // This updates the data passed to the diagram
                        // console.log('b');
                        var diagramResults = _this.refreshDiagramComponents(res);
                        _this.diagramParamsDownlink = {
                            powerIn: diagramResults.powerIn,
                            diagramComponents: diagramResults.diagramComponents,
                        };
                    }
                    // console.log(this.diagramParams);
                }
            });
        };
        ResultsComponent.prototype.computeDelta = function (current, previous) {
            // This computes the difference between previous data and current
            var delta = [];
            // result is null or undefined
            if (!previous || !current)
                return delta;
            for (var i = 0; i < current.length; i += 1) {
                if (i < previous.length && JSON.stringify(current[i]) !== JSON.stringify(previous[i])) {
                    delta.push(current[i].name);
                }
            }
            return delta;
        };
        ResultsComponent.prototype.exportResults = function (format) {
            // This function is supposed to take the results and export them to the markdown format, allowing user to download them.
            // mardown-pdf is a module that even allows the conversion from markdown to pdf.
            var configURL = '';
            switch (format) {
                case 'md':
                    configURL = "data:application/md;charset=UTF-8," + encodeURIComponent(this.resultsToMD());
                    break;
                // case 'pdf':
                //   configURL = `data:application/pdf;charset=UTF-8,${this.resultToPDF()}`;
                //   break;
                case 'json':
                    configURL = "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(this.fullResult2, null, 2));
                    break;
                default:
                    // this.logger.debug()
                    configURL = "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(this.fullResult2, null, 2));
            }
            // Create a placeholder element for this data
            var anchor = document.createElement('a');
            anchor.href = configURL;
            anchor.target = '_blank';
            anchor.download = "results." + format;
            anchor.click();
            // Removing placeholder element
            anchor.remove();
        };
        ResultsComponent.prototype.resultsToMD = function () {
            var _this = this;
            var markdownOutput = '';
            markdownOutput += '# Uplink link budget\n';
            markdownOutput += '| Component | Value | Link Budget |\n';
            markdownOutput += '|---|---|---|\n';
            this.fullResult2.uplink.forEach(function (value) {
                markdownOutput += "|**" + value.group + "**| | |\n";
                // markdownOutput += '||||\n';
                value.elt.forEach(function (line) {
                    markdownOutput += "|" + _this.params[line.name].label + "|" + line.value.toPrecision(3) + " " + line.unit + "| |\n";
                });
            });
            markdownOutput += '# Downlink link budget\n';
            markdownOutput += '| Component | Value | Link Budget |\n';
            markdownOutput += '|---|---|---|\n';
            this.fullResult2.downlink.forEach(function (value) {
                markdownOutput += "|**" + value.group + "**| | |\n";
                // markdownOutput += '||||\n';
                value.elt.forEach(function (line) {
                    markdownOutput += "|" + _this.params[line.name].label + "|" + line.value.toPrecision(3) + " " + line.unit + "| |\n";
                });
            });
            return markdownOutput;
        };
        ResultsComponent.prototype.formatResults = function (newResults, params) {
            if (params === void 0) { params = this.params; }
            // This function formats the result from an array of values/units pair to group with sections name.
            // This provides 'discoverable' results that can be used by the template with ngFor
            // Temporary result allows us to make the conversion from APIResult to Result
            var result = { uplink: [], downlink: [] };
            var tempResult = {};
            // FIXME: redundancy
            if (newResults.uplink) {
                newResults.uplink.forEach(function (element) {
                    var section = params[element.name].section;
                    var line = { name: element.name, value: element.value, unit: element.unit };
                    if (tempResult[section]) {
                        tempResult[section].push(line);
                    }
                    else {
                        tempResult[section] = [line];
                    }
                });
                // console.log(tempResult);
                result.uplink = Object.entries(tempResult).map(function (_e) {
                    var _f = __read(_e, 2), group = _f[0], elt = _f[1];
                    return ({ group: group, elt: elt });
                });
            }
            tempResult = {};
            if (newResults.downlink) {
                newResults.downlink.forEach(function (element) {
                    var section = params[element.name].section;
                    var line = { name: element.name, value: element.value, unit: element.unit };
                    if (tempResult[section]) {
                        tempResult[section].push(line);
                    }
                    else {
                        tempResult[section] = [line];
                    }
                });
                // console.log(tempResult);
                result.downlink = Object.entries(tempResult).map(function (_e) {
                    var _f = __read(_e, 2), group = _f[0], elt = _f[1];
                    return ({ group: group, elt: elt });
                });
            }
            this.calculateLinkSummary(newResults.uplink, newResults.downlink);
            return result;
        };
        ResultsComponent.prototype.calculateLinkSummary = function (resultUL, resultDL) {
            var _a, _b, _c, _d;
            var uplinkMargin = resultUL[resultUL.length - 1];
            var downlinkMargin = resultDL[resultDL.length - 1];
            // Bad code, fix it #FIXME
            var systemMarginUplink = (_b = (_a = this.formService.getComponentValues('system_margin', 'uplink', 'carrier')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 6;
            var systemMarginDownlink = (_d = (_c = this.formService.getComponentValues('system_margin', 'downlink', 'carrier')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : 6;
            // The default success message
            this.linkStatus = {
                uplink: {
                    margin: uplinkMargin.value,
                    status: 'is-success',
                    message: "<b>This link closes</b><br>Eb/N0 margin = " + (Math.round(uplinkMargin.value * 100) / 100).toFixed(2) + " " + uplinkMargin.unit + " > " + systemMarginUplink + " dB = System Margin",
                },
                downlink: {
                    margin: downlinkMargin.value,
                    status: 'is-success',
                    message: "<b>This link closes</b><br>Eb/N0 margin = " + (Math.round(downlinkMargin.value * 100) / 100).toFixed(2) + " " + downlinkMargin.unit + " > " + systemMarginDownlink + " dB = System Margin",
                },
            };
            // In other cases, warning or danger message
            Object.entries(this.linkStatus).map(function (_e) {
                var _f = __read(_e, 2), key = _f[0], link = _f[1];
                var localLinkStatus = link;
                // console.log(key);
                var localSystemMargin = key === 'uplink' ? systemMarginUplink : systemMarginDownlink;
                if (link.margin < localSystemMargin) {
                    localLinkStatus.status = 'is-warning';
                    localLinkStatus.message = "<b>This link closes with a low margin</b><br>Eb/N0 margin = " + (Math.round(link.margin * 100) / 100).toFixed(2) + " dB < " + localSystemMargin + " dB = System Margin";
                }
                if (link.margin < 0) {
                    localLinkStatus.status = 'is-danger';
                    localLinkStatus.message = "<b>This link does not close</b><br>Eb/N0 margin = " + (Math.round(link.margin * 100) / 100).toFixed(2) + " dB < 0dB";
                }
                return { key: key, localLinkStatus: localLinkStatus };
            });
        };
        ResultsComponent.prototype.refreshDiagramComponents = function (results) {
            // console.log(results);
            var powerIn = results.tx_amplifier_power.value;
            var diagramComponents = [
                {
                    id: 'tx',
                    component: {
                        label: 'Ptx',
                        gain: 0,
                        linear: true,
                        position: 0,
                        width: 15,
                    },
                },
                {
                    id: 'cableTx',
                    component: {
                        label: 'Ltx',
                        gain: -results.tx_circuit_loss.value,
                        linear: true,
                        position: 15,
                        width: 10,
                    },
                },
                {
                    id: 'antTx',
                    component: {
                        label: 'Gtx',
                        gain: results.tx_antenna_gain.value,
                        linear: false,
                        position: 25,
                        width: 10,
                    },
                },
                {
                    id: 'fsl',
                    component: {
                        label: 'Lpath',
                        gain: -results.total_path_loss.value,
                        linear: true,
                        position: 35,
                        width: 30,
                    },
                },
                {
                    id: 'antRx',
                    component: {
                        label: 'Grx',
                        gain: results.rx_antenna_gain.value,
                        linear: false,
                        position: 65,
                        width: 10,
                    },
                },
                {
                    id: 'cableRx',
                    component: {
                        label: 'Lrx',
                        gain: -results.rx_circuit_loss.value,
                        linear: true,
                        position: 75,
                        width: 10,
                    },
                },
                {
                    id: 'rx',
                    component: {
                        label: 'Prx',
                        gain: 0,
                        linear: true,
                        position: 85,
                        width: 15,
                    },
                },
            ];
            return { powerIn: powerIn, diagramComponents: diagramComponents };
        };
        return ResultsComponent;
    }());
    ResultsComponent.ɵfac = function ResultsComponent_Factory(t) { return new (t || ResultsComponent)(i0.ɵɵdirectiveInject(ComputeLinkBudgetService), i0.ɵɵdirectiveInject(LoggerService), i0.ɵɵdirectiveInject(FormService), i0.ɵɵdirectiveInject(SyntheticDrawingFormService)); };
    ResultsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ResultsComponent, selectors: [["lib-results"]], inputs: { minimal: "minimal" }, decls: 16, vars: 5, consts: [[4, "ngIf"], [1, "columns"], ["class", "column is-narrow", 3, "currentComponent", 4, "ngIf"], [1, "column", "is-wide"], [1, "pt-3", "pr-3"], [1, "section", "p-0", "pb3-3", "export-bar"], [1, "buttons", "is-grouped"], [1, "button", 3, "click"], ["size", "lg", 2, "margin-right", "12px", 3, "icon"], ["class", "columns", 4, "ngIf"], [1, "tabs", "is-centered"], [2, "margin", "auto"], [3, "ngClass", "click"], [1, "animate__animated", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["colspan", "2", 2, "display", "block"], ["aria-label", "collapse", 1, "is-text", "is-link", 3, "click"], [1, "icon"], ["aria-hidden", "true", 3, "icon", "transform"], [1, "result-row", 3, "ngClass"], [1, "result-label"], ["align", "right", 1, "result-value"], [1, "column", "is-narrow", 3, "currentComponent"], [1, "column", "is-one-quarter"], [3, "title"], [3, "styleClass", 4, "ngIf"], [1, "table"], [1, "column", "is-half"], [3, "scenarioId", "components", "linkType", "powerIn"], [3, "styleClass"], [1, "link-closed-container"], ["size", "2x", 3, "icon", 4, "ngIf"], [1, "link-closed", 3, "innerHTML"], ["size", "2x", 3, "icon"]], template: function ResultsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, ResultsComponent_lib_card_0_Template, 12, 8, "lib-card", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵtemplate(2, ResultsComponent_lib_navigation_sidebar_2_Template, 1, 1, "lib-navigation-sidebar", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵelementStart(4, "section", 4);
                i0.ɵɵelementStart(5, "section", 5);
                i0.ɵɵelementStart(6, "div", 6);
                i0.ɵɵelementStart(7, "a", 7);
                i0.ɵɵlistener("click", function ResultsComponent_Template_a_click_7_listener() { return ctx.exportResults("md"); });
                i0.ɵɵelement(8, "fa-icon", 8);
                i0.ɵɵelementStart(9, "div");
                i0.ɵɵtext(10, "Export results as .md");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "a", 7);
                i0.ɵɵlistener("click", function ResultsComponent_Template_a_click_11_listener() { return ctx.exportResults("json"); });
                i0.ɵɵelement(12, "fa-icon", 8);
                i0.ɵɵelementStart(13, "div");
                i0.ɵɵtext(14, "Export results as .json");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(15, ResultsComponent_div_15_Template, 18, 16, "div", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.minimal);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", !ctx.minimal);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("icon", ctx.download);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("icon", ctx.download);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", !ctx.minimal);
            }
        }, directives: [i4.NgIf, i2.FaIconComponent, CardComponent, i4.NgClass, i4.NgForOf, NavigationSidebarComponent, SyntheticDrawingComponent], pipes: [i4.DecimalPipe], styles: [".active-row[_ngcontent-%COMP%]{-webkit-animation-delay:0s;-webkit-animation-direction:alternate;-webkit-animation-duration:.4s;-webkit-animation-name:emphasis;animation-delay:0s;animation-direction:alternate;animation-duration:.4s;animation-name:emphasis;border:solid;border-color:#3e8ed0;border-width:0 0 0 5px}.link-closed-container[_ngcontent-%COMP%]{align-items:center;display:flex}.link-closed[_ngcontent-%COMP%]{display:inline-block;margin:0 0 0 15px}@-webkit-keyframes emphasis{0%{background-color:#3e8ed0;color:#fff}}@keyframes emphasis{0%{background-color:#3e8ed0;color:#fff}}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResultsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-results',
                        templateUrl: './results.component.html',
                        styleUrls: ['./results.component.scss'],
                    }]
            }], function () { return [{ type: ComputeLinkBudgetService }, { type: LoggerService }, { type: FormService }, { type: SyntheticDrawingFormService }]; }, { minimal: [{
                    type: i0.Input
                }] });
    })();

    function ResultSidebarComponent_lib_results_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "lib-results", 2);
        }
        if (rf & 2) {
            i0.ɵɵproperty("minimal", true);
        }
    }
    function ResultSidebarComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 3);
            i0.ɵɵlistener("click", function ResultSidebarComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.computeLinkBudget.toggleResults(); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r1.computeLinkBudget.displayingResults ? ">" : "<", " ");
        }
    }
    var ResultSidebarComponent = /** @class */ (function () {
        function ResultSidebarComponent(computeLinkBudget) {
            this.computeLinkBudget = computeLinkBudget;
        }
        return ResultSidebarComponent;
    }());
    ResultSidebarComponent.ɵfac = function ResultSidebarComponent_Factory(t) { return new (t || ResultSidebarComponent)(i0.ɵɵdirectiveInject(ComputeLinkBudgetService)); };
    ResultSidebarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ResultSidebarComponent, selectors: [["lib-result-sidebar"]], decls: 2, vars: 2, consts: [[3, "minimal", 4, "ngIf"], ["class", "button", "style", "position: fixed; bottom: 10px; right: 10px", 3, "click", 4, "ngIf"], [3, "minimal"], [1, "button", 2, "position", "fixed", "bottom", "10px", "right", "10px", 3, "click"]], template: function ResultSidebarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, ResultSidebarComponent_lib_results_0_Template, 1, 1, "lib-results", 0);
                i0.ɵɵtemplate(1, ResultSidebarComponent_button_1_Template, 2, 1, "button", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.computeLinkBudget.displayingResults);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.computeLinkBudget.computeLayout == "sidebar");
            }
        }, directives: [i4.NgIf, ResultsComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResultSidebarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-result-sidebar',
                        templateUrl: './result-sidebar.component.html',
                        styleUrls: ['./result-sidebar.component.scss'],
                    }]
            }], function () { return [{ type: ComputeLinkBudgetService }]; }, null);
    })();

    /**
     * This is used by jsatorb-link.service.ts when debugMode is true
     * It allows testing jsatorb link functionnalities directly inside luplink.
     */
    var jsoMockData = {
        header: {
            mission: 'Default-mission',
            celestialBody: 'EARTH',
            timeStart: '2021-07-22T01:53:36',
            timeEnd: '2021-07-23T01:53:41',
            step: '600',
        },
        satellites: [
            {
                name: 'SunSynchronous',
                type: 'keplerian',
                sma: '7000000',
                ecc: '0',
                inc: 97.8736,
                pa: 0,
                raan: 0,
                meanAnomaly: 0,
            },
            {
                name: 'CALSPHERE 4A',
                type: 'tle',
                line1: '1 01520U 65065H   21200.78530898  .00000048  00000-0  74357-4 0  9995',
                line2: '2 01520  90.0154 130.0589 0071394 120.1784 294.1357 13.35847446723246',
            },
            {
                name: 'CALSPHERE 2',
                type: 'tle',
                line1: '1 00902U 64063E   21200.88552299  .00000048  00000-0  58478-4 0  9991',
                line2: '2 00902  90.1726  37.8678 0019554  38.2840  29.0114 13.52697507613817',
            },
        ],
        constellations: [],
        groundStations: [
            {
                name: 'aaa',
                latitude: '1',
                longitude: '1',
                altitude: '1',
                elevation: '1',
            },
            {
                name: 'bbb',
                latitude: '1',
                longitude: '1',
                altitude: '1',
                elevation: 1,
            },
        ],
        options: {},
    };

    var readFile = function (files) { return new rxjs.Observable(function (obs) {
        // This is a helper function that opens the provided file and passes its content to the provided callback function.
        if (!files || !files.item(0)) {
            // this.logger.warn('Error', 'Unexpected error, cannot open imported file');
            obs.error(new Error('cannot open imported file'));
            return;
        }
        var file = files.item(0);
        var fileReader = new FileReader();
        fileReader.onerror = function (err) { return obs.error(err); };
        fileReader.onabort = function (err) { return obs.error(err); };
        fileReader.onload = function () { return obs.next(fileReader.result); };
        fileReader.onloadend = function () { return obs.complete(); };
        fileReader.readAsText(file, 'utf8');
    }); };
    var SaveLoadService = /** @class */ (function () {
        /**
         * This service handles both saving and loading of configuration files, JSatOrb config files.
         * Note: Using promises here might not be the best choice considering we have used only observable so far. At least, it is independant from the rest so we don't mix both.
         */
        function SaveLoadService(environment, logger, formService, fb) {
            var _this = this;
            this.environment = environment;
            this.logger = logger;
            this.formService = formService;
            this.fb = fb;
            // Defining a callback function to which we will feed the provided file
            // Replace by Observables !!!
            this.parseJSOData = function (results) {
                var _a;
                // console.log(results);
                if (results && results !== {}) {
                    var title = (_a = results.header) === null || _a === void 0 ? void 0 : _a.mission;
                    var satellites = results.satellites;
                    var groundStations = results.groundStations;
                    satellites = _this.formatJSOData(satellites);
                    /**
                     * 1. Display available options
                     * 2. Create a scenario : choose satellite, choose groundstation.
                     * 3. Convert that to a LB
                     */
                    // To move elsewhere !
                    return { title: title, satellites: satellites, groundStations: groundStations };
                }
                return null;
            };
        }
        SaveLoadService.prototype.importJSatOrbConfigFile = function (files) {
            var _this = this;
            /*
             * This allows the user to import a JSatOrb Configuration file (.jso) into this app
             */
            return new rxjs.Observable(function (obs) {
                readFile(files).subscribe(function (value) {
                    obs.next(_this.parseJSOData(JSON.parse(value)));
                    obs.complete();
                }, function (error) {
                    obs.error(error);
                });
            });
            // We then pass this callback function to our function that imports the file
            // this.importFile(files)
            //   .pipe(
            //     mergeMap((result) => callbackFn(result)),
            //   )
            // return new Observable(
            //   (subscriber) => {
            //     this.importFile(files).subscribe((results) => {
            //       console.log(results);
            //     });
            // },
            // );
            // .then((results) => new Promise(() => callbackFn(results)));
            // return of({ title: '', satellites: [], groundStations: [] });
        };
        SaveLoadService.prototype.formatJSOData = function (satellites) {
            /**
             * Takes the satellite list from a .jso file and converts all TLE-types satellites to Keplerian-type
             */
            if (!satellites)
                return {}; // input is undefined or null
            Object.entries(satellites).forEach(function (_b) {
                var _c = __read(_b, 2), key = _c[0], satellite = _c[1];
                if (satellite.type === 'tle') {
                    satellites[key] = Object.assign(Object.assign({}, satellite), HelperFunctions.convertTLEtoKeplearian(satellite.line1, satellite.line2)); // HelperFunctions.convertTLEtoKeplearian('', ''),
                    // console.log(satellites)
                    // console.log(HelperFunctions.convertTLEtoKeplearian(satellite.line1, satellite.line2));
                }
                else {
                    Object.values(['sma', 'ecc', 'inc', 'pa', 'raan', 'meanAnomaly']).forEach(function (val) {
                        satellites[key][val] = parseFloat(satellite[val]);
                    });
                }
                // results.satellite = satellites
            });
            return satellites;
        };
        SaveLoadService.prototype.importJSOData = function (title, satellite, station) {
            /**
             * Given data extracted from JSatOrb, updates the current link budget
             */
            if (!this.formService.isCurrentFormSaved) {
                this.logger.warn('Warning', 'You have unsaved data');
                return;
            }
            this.formService.title = title;
            var geometry = this.formService.getFormData().geometry;
            // Here AMSAT uses mean altitude which is equivalent to SMA but we will be using maximum Altitude corresponding to worst case scenario
            geometry.altitude.value = (1 + satellite.ecc) * satellite.sma;
            geometry.elevation.value = station.elevation;
            // Updating slantRange also
            geometry.slantRange.value = HelperFunctions.slantRangeFromAltElev(satellite.sma, station.elevation);
            // this.formService.addArchive('geometry', this.fb.group(geometry));
            this.formService.globalForm.setControl('geometry', this.fb.group(geometry));
            console.log(this.formService.globalForm.value);
            this.logger.success('importing data');
        };
        SaveLoadService.prototype.importConfigFile = function (files) {
            var _this = this;
            /*
             * This allows importing a json config file containing a scenario using the save/load buttons
             */
            // #TODO: SOME FILE VERIFICATION
            // Defining a callback function to which we will feed the provided file
            var callbackFn = function (results) {
                if (results && results.metadata) {
                    if (results.metadata.version !== _this.environment.version) {
                        _this.logger.warn('Version Warning', 'The imported file has been generated with a different version');
                    }
                    var safeResults = results;
                    // We want to make sure to import a file-safe name
                    safeResults.metadata.title = sanitize__default['default'](results.metadata.title);
                    _this.formService.importForm(safeResults);
                    _this.logger.success('Successfully loaded config file');
                }
                else {
                    // If the file doesn't contain metadata or if its content is null or undefined, this probably hasn't been generated with Luplink
                    _this.logger.error("This file doesn't look like a Luplink configuration file", 'Missing content or metadata');
                }
            };
            // We then pass this callback function to our function that imports the file
            readFile(files).subscribe(function (value) {
                callbackFn(JSON.parse(value));
            }, function (error) {
                _this.logger.error('Error while importing file', error);
            });
            // this.importFile(files);
            // .then(() => new Promise((results) => callbackFn(results)));
        };
        SaveLoadService.prototype.generateConfig = function (data) {
            var metadata = {
                title: this.formService.title,
                date: Date.now(),
                version: this.environment.version,
            };
            return { metadata: metadata, data: data };
        };
        SaveLoadService.prototype.exportConfigFile = function (data) {
            // #TODO: This is working, now are we sure we can't inject javascript using this (XSS injection) ?
            // #TODO: Also, given a large enough JSON, this won't work, -> switch to blob
            // this.logger.debug('exporting config!');
            // FIXME: USING DATA URI IS PRETTY STRAIGHTFORWARD YET THE MAX SIZE DEPENDS ON THE BROWSER (2MB for Chrome, unlimited for Firefox), BETTER TO USE BLOB
            // See https://stackoverflow.com/questions/695151/data-protocol-url-size-limitations
            var configData = this.generateConfig(data);
            var configURL = "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(configData, undefined, 2));
            // Create a placeholder element for this data
            var anchor = document.createElement('a');
            anchor.href = configURL;
            anchor.target = '_blank';
            anchor.download = configData.metadata.title + ".json";
            anchor.click();
            // Removing placeholder element
            anchor.remove();
            // Mark the current form as saved
            this.formService.isCurrentFormSaved = true;
        };
        return SaveLoadService;
    }());
    SaveLoadService.ɵfac = function SaveLoadService_Factory(t) { return new (t || SaveLoadService)(i0.ɵɵinject(ENVIRONMENT_TOKEN), i0.ɵɵinject(LoggerService), i0.ɵɵinject(FormService), i0.ɵɵinject(i3.FormBuilder)); };
    SaveLoadService.ɵprov = i0.ɵɵdefineInjectable({ token: SaveLoadService, factory: SaveLoadService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SaveLoadService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [ENVIRONMENT_TOKEN]
                        }] }, { type: LoggerService }, { type: FormService }, { type: i3.FormBuilder }];
        }, null);
    })();

    var JSatOrbLinkService = /** @class */ (function () {
        function JSatOrbLinkService(formService, logger, loadService, environment) {
            this.formService = formService;
            this.logger = logger;
            this.loadService = loadService;
            this.environment = environment;
            this.jsoData$ = new rxjs.Subject();
            this.jsoMockData = jsoMockData;
            this.jsoData = this.environment.debugMode ? this.jsoMockData : {}; //= this.jsoMockData; //{};
            this.jsoData$.next(this.jsoData);
        }
        JSatOrbLinkService.prototype.updateEndpoint = function (newEndpoint) {
            /**
             * Since the ENV token is passed by value between jso & luplink, we need a way to update the api endpoint
             * @input newEndpoint, e.g. 'http://localhost:8001' or '157.63.2.17:87'
             *
             */
            this.environment.luplinkEndpoint = newEndpoint;
        };
        JSatOrbLinkService.prototype.updateJSOData = function (data) {
            /**
             * Allow JSO to send data that can then be used by luplink
             */
            this.jsoData = data;
            this.jsoData$.next(this.jsoData);
        };
        JSatOrbLinkService.prototype.getJSOData = function () {
            /**
             * Returns the currently stored JSO data
             */
            return this.jsoData;
        };
        JSatOrbLinkService.prototype.getJSOData$ = function () {
            /**
             * Returns an observable to currently stored JSO data
             */
            return this.jsoData$;
        };
        JSatOrbLinkService.prototype.initService = function () {
            var _this = this;
            /**
             * Started when the component is created. Handles the save of luplink data while navigating between luplink & jso
             */
            this.formService.globalForm.valueChanges.subscribe(function (value) {
                console.log('form data updated');
                // this.luplinkFormSave = { data: value }; //JSON.stringify(value), undefined, 2 };
                _this.luplinkFormSave = _this.loadService.generateConfig(value);
            });
        };
        JSatOrbLinkService.prototype.refreshLuplink = function () {
            console.log('refreshing luplink');
            if (this.luplinkFormSave) {
                console.log('save exists');
                this.formService.isInitialized = true;
                this.formService.importForm(this.luplinkFormSave);
            }
        };
        return JSatOrbLinkService;
    }());
    JSatOrbLinkService.ɵfac = function JSatOrbLinkService_Factory(t) { return new (t || JSatOrbLinkService)(i0.ɵɵinject(FormService), i0.ɵɵinject(LoggerService), i0.ɵɵinject(SaveLoadService), i0.ɵɵinject(ENVIRONMENT_TOKEN)); };
    JSatOrbLinkService.ɵprov = i0.ɵɵdefineInjectable({ token: JSatOrbLinkService, factory: JSatOrbLinkService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JSatOrbLinkService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () {
            return [{ type: FormService }, { type: LoggerService }, { type: SaveLoadService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [ENVIRONMENT_TOKEN]
                        }] }];
        }, null);
    })();

    function JSatOrbLinkComponent_form_0_option_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "option", 15);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var satellite_r4 = ctx.$implicit;
            i0.ɵɵproperty("ngValue", satellite_r4);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(satellite_r4.name);
        }
    }
    function JSatOrbLinkComponent_form_0_option_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "option", 15);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var station_r5 = ctx.$implicit;
            i0.ɵɵproperty("ngValue", station_r5);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(station_r5.name);
        }
    }
    function JSatOrbLinkComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 2);
            i0.ɵɵlistener("ngSubmit", function JSatOrbLinkComponent_form_0_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r7_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.importJSO(); });
            i0.ɵɵelementStart(1, "div", 3);
            i0.ɵɵelementStart(2, "div", 4);
            i0.ɵɵelementStart(3, "div", 5);
            i0.ɵɵelementStart(4, "div", 6);
            i0.ɵɵtext(5, "Satellite:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 7);
            i0.ɵɵelementStart(7, "select", 8);
            i0.ɵɵtemplate(8, JSatOrbLinkComponent_form_0_option_8_Template, 2, 2, "option", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 10);
            i0.ɵɵelementStart(10, "div", 6);
            i0.ɵɵtext(11, "Station:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 7);
            i0.ɵɵelementStart(13, "select", 11);
            i0.ɵɵtemplate(14, JSatOrbLinkComponent_form_0_option_14_Template, 2, 2, "option", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 4);
            i0.ɵɵelement(16, "div", 6);
            i0.ɵɵelementStart(17, "div", 12);
            i0.ɵɵelementStart(18, "div", 13);
            i0.ɵɵelementStart(19, "button", 14);
            i0.ɵɵtext(20, "Load");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("formGroup", ctx_r0.importForm);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx_r0.jsoData.satellites);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx_r0.jsoData.groundStations);
        }
    }
    function JSatOrbLinkComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "It seems no scenario has been imported inside JSatOrb.");
            i0.ɵɵelement(3, "br");
            i0.ɵɵtext(4, "Luplink won't be able to import data from JSatOrb.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var JSatOrbLinkComponent = /** @class */ (function () {
        function JSatOrbLinkComponent(linkService, logger, loadService) {
            this.linkService = linkService;
            this.logger = logger;
            this.loadService = loadService;
            this.isEmpty = false;
            this.importForm = new i3.FormGroup({
                satellite: new i3.FormControl(),
                station: new i3.FormControl(),
            });
        }
        JSatOrbLinkComponent.prototype.ngOnInit = function () {
            var _a, _b;
            this.jsoData = this.loadService.parseJSOData(this.linkService.getJSOData());
            if (this.isJSOValid(this.jsoData)) {
                // Set the default values
                this.importForm.patchValue({
                    satellite: (_a = this.jsoData) === null || _a === void 0 ? void 0 : _a.satellites[0],
                    station: (_b = this.jsoData) === null || _b === void 0 ? void 0 : _b.groundStations[0],
                });
            }
            else {
                // Nothing interesting from getJSOData(), show warning
                this.isEmpty = true;
            }
            // Init the link service that will keep tracks of luplink data changes for persistance of data
            this.linkService.initService();
        };
        JSatOrbLinkComponent.prototype.isJSOValid = function (jsoData) {
            /**
             * This checks that the imported JSO data is valid: non empty or null and has existing satellites / GS.
             * In all other cases, the data is invalid
             *
             * @input jsoData: {title: string, satellites: Satellite[], groundStations: GroundStation[]}
             *
             * @output validity of the data
             */
            if (jsoData) {
                if (jsoData.groundStations && jsoData.satellites) {
                    if (jsoData.groundStations.length > 0 && jsoData.satellites.length > 0) {
                        return true;
                    }
                    this.logger.warn('Data from JSatOrb does either have no satellites or groundstations');
                }
                else {
                    this.logger.warn('Data from JSatOrb does either have nosatellites or groundstations');
                }
            }
            else {
                this.logger.warn('Data from JSatOrb is either undefined or null');
            }
            return false;
        };
        JSatOrbLinkComponent.prototype.importJSO = function () {
            this.loadService.importJSOData(this.jsoData.title, this.importForm.controls.satellite.value, this.importForm.controls.station.value);
        };
        return JSatOrbLinkComponent;
    }());
    JSatOrbLinkComponent.ɵfac = function JSatOrbLinkComponent_Factory(t) { return new (t || JSatOrbLinkComponent)(i0.ɵɵdirectiveInject(JSatOrbLinkService), i0.ɵɵdirectiveInject(LoggerService), i0.ɵɵdirectiveInject(SaveLoadService)); };
    JSatOrbLinkComponent.ɵcmp = i0.ɵɵdefineComponent({ type: JSatOrbLinkComponent, selectors: [["lib-luplink-jsatorb-import"]], decls: 2, vars: 2, consts: [["class", "form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [4, "ngIf"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "field", "is-horizontal"], [1, "field-body"], [1, "field"], [1, "label"], [1, "select", "is-fullwidth"], ["formControlName", "satellite"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "field", "is-expanded"], ["formControlName", "station"], [1, "field", "is-grouped", "is-grouped-right"], [1, "control"], ["type", "submit", 1, "button", "is-primary"], [3, "ngValue"]], template: function JSatOrbLinkComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, JSatOrbLinkComponent_form_0_Template, 21, 3, "form", 0);
                i0.ɵɵtemplate(1, JSatOrbLinkComponent_div_1_Template, 5, 0, "div", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", !ctx.isEmpty);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.isEmpty);
            }
        }, directives: [i4.NgIf, i3.ɵangular_packages_forms_forms_ba, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.FormControlName, i4.NgForOf, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_z], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JSatOrbLinkComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-luplink-jsatorb-import',
                        templateUrl: './luplink-jsatorb-import.component.html',
                        styleUrls: ['./luplink-jsatorb-import.component.scss'],
                    }]
            }], function () { return [{ type: JSatOrbLinkService }, { type: LoggerService }, { type: SaveLoadService }]; }, null);
    })();

    function LayoutComponent_div_6_lib_card_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "lib-card", 14);
            i0.ɵɵelement(1, "lib-luplink-jsatorb-import");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("title", "Import from JSatOrb");
        }
    }
    var _c0$7 = function (a0) { return { "is-hidden": a0 }; };
    function LayoutComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 11);
            i0.ɵɵelementStart(1, "div", 12);
            i0.ɵɵtemplate(2, LayoutComponent_div_6_lib_card_2_Template, 2, 1, "lib-card", 13);
            i0.ɵɵelementStart(3, "lib-card", 14);
            i0.ɵɵelementStart(4, "lib-form", 15);
            i0.ɵɵlistener("formStatus", function LayoutComponent_div_6_Template_lib_form_formStatus_4_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.handleError($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "lib-card", 6);
            i0.ɵɵelementStart(6, "lib-form", 15);
            i0.ɵɵlistener("formStatus", function LayoutComponent_div_6_Template_lib_form_formStatus_6_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.handleError($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 12);
            i0.ɵɵelementStart(8, "lib-card", 6);
            i0.ɵɵelementStart(9, "lib-form", 15);
            i0.ɵɵlistener("formStatus", function LayoutComponent_div_6_Template_lib_form_formStatus_9_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.handleError($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "lib-card", 6);
            i0.ɵɵelement(11, "lib-simple-documentation", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx_r0.isStandalone && ctx_r0.componentId == "geometry");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("title", ctx_r0.componentName);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formTemplate", ctx_r0.currentTemplate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("title", "Atmosphere")("ngClass", i0.ɵɵpureFunction1(12, _c0$7, !ctx_r0.hasAtmCard));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formTemplate", ctx_r0.atmosphere);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", ctx_r0.antennaName)("ngClass", i0.ɵɵpureFunction1(14, _c0$7, !ctx_r0.hasAntennaCard));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formTemplate", ctx_r0.currentAntenna);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("title", "Documentation")("ngClass", i0.ɵɵpureFunction1(16, _c0$7, ctx_r0.hasAntennaCard));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("component", ctx_r0.componentId);
        }
    }
    function LayoutComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 16);
            i0.ɵɵelementStart(1, "pre");
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r1.formService.globalForm.value));
        }
    }
    var LayoutComponent = /** @class */ (function () {
        function LayoutComponent(environment, FormsTemplate, formService, route, logger) {
            this.environment = environment;
            this.FormsTemplate = FormsTemplate;
            this.formService = formService;
            this.route = route;
            this.logger = logger;
            this.isStandalone = false;
            /* Inventory gives access to neighbor for each step,
            useful when one of the page is updated and we want to
            know if step is complete : page -> step -> neighbors */
            this.inventory = {
                geometry: ['geometry'],
                uplink: ['ULCarrier', 'ULTransmitter', 'ULReceiver'],
                downlink: ['DLCarrier', 'DLTransmitter', 'DLReceiver'],
            };
            this.validity = {};
            // Both are public for testing purposes
            this.formValidity = {};
            this.pageValidity = {};
            this.componentName = 'Geometry';
            this.componentId = 'geometry';
            this.currentStep = 'geometry';
            this.currentTemplate = this.FormsTemplate.geometry;
            this.currentAntenna = Antennas.genericAntenna;
            this.atmosphere = this.FormsTemplate.UL_atmosphere;
            this.antennaName = '';
            this.hasAntennaCard = false;
            this.hasAtmCard = false;
            this.templates = {};
            this.isStandalone = this.environment.isStandalone; // Used to know if app is standalone
            // FIXME: Move elsewhere with models
            // This links each page to its components and its
            this.templates = {
                geometry: {
                    name: 'Geometry',
                    step: 'geometry',
                    form: FormsTemplate.geometry,
                },
                ULCarrier: {
                    name: 'Uplink Carrier',
                    step: 'uplink',
                    form: FormsTemplate.UL_carrier,
                    atm: FormsTemplate.UL_atmosphere,
                },
                ULTransmitter: {
                    name: 'Groundstation Transmitter',
                    step: 'uplink',
                    form: FormsTemplate.UL_transmitter_GS,
                    antenna: FormsTemplate.UL_GS_tx_antenna,
                },
                ULReceiver: {
                    name: 'Spacecraft Receiver',
                    step: 'uplink',
                    form: FormsTemplate.UL_receiver_SC,
                    antenna: FormsTemplate.UL_SC_rx_antenna,
                },
                DLCarrier: {
                    name: 'Uplink Carrier',
                    step: 'downlink',
                    form: FormsTemplate.DL_carrier,
                    atm: FormsTemplate.DL_atmosphere,
                },
                DLTransmitter: {
                    name: 'Groundstation Transmitter',
                    step: 'downlink',
                    form: FormsTemplate.DL_transmitter_SC,
                    antenna: FormsTemplate.DL_SC_tx_antenna,
                },
                DLReceiver: {
                    name: 'Spacecraft Receiver',
                    step: 'downlink',
                    form: FormsTemplate.DL_receiver_GS,
                    antenna: FormsTemplate.DL_GS_rx_antenna,
                },
            };
        }
        LayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.validity.steps = {
                geometry: 'none',
                uplink: 'none',
                downlink: 'none',
                results: 'none',
            };
            Object.entries(this.templates).forEach(function (_a) {
                var _b = __read(_a, 2), pageKey = _b[0], pageValue = _b[1];
                _this.pageValidity[pageKey] = {};
                _this.formValidity[pageKey] = {};
                Object.entries(pageValue).forEach(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    if (key !== 'step' && key !== 'name') {
                        var v = value;
                        _this.pageValidity[pageKey][v.componentId] = 'unvisited';
                    }
                });
            });
            this.route.queryParams.subscribe(function (params) {
                if (params.component) {
                    _this.componentId = params.component;
                }
                var currentComponentTemplate = _this.templates[_this.componentId];
                if (currentComponentTemplate) {
                    _this.currentStep = currentComponentTemplate.step;
                    _this.componentName = currentComponentTemplate.name;
                    _this.currentTemplate = currentComponentTemplate.form;
                    _this.hasAntennaCard = false;
                    _this.hasAtmCard = false;
                    if (currentComponentTemplate.antenna) {
                        _this.currentAntenna = currentComponentTemplate.antenna;
                        _this.antennaName = _this.currentAntenna.componentName || 'Antenna';
                        _this.hasAntennaCard = true;
                    }
                    if (currentComponentTemplate.atm) {
                        _this.atmosphere = currentComponentTemplate.atm;
                        _this.hasAtmCard = true;
                    }
                }
                else {
                    _this.logger.debug("The selected template doesn't exist, please check the variable name used");
                }
            });
        };
        LayoutComponent.prototype.handleError = function (event) {
            if (event.id !== '' && this.componentId) {
                // this.logger.error(event.id, event.validity);
                this.pageValidity[this.componentId][event.id] = event.validity;
                this.refreshPageValidity(this.componentId);
                this.updateStepsValidity(this.componentId);
            }
        };
        LayoutComponent.prototype.refreshPageValidity = function (pageId) {
            /**
             * This function updates the validity of a page based on its internal 'formFragments' validities.
             * Once again, the dependency is the following :
             * "Step/Groups validity" --> "Pages validity" --> "FormFragments validity"
             * ex: Uplink validity --> Carrier, Transmitter, Receiver validities --> Carrier, Environment, Rx Antenna, ... validities
             *
             * This function could be tidied up. At least it is tested.
             */
            var valid = 'none';
            if (Object.values(this.pageValidity[pageId]).includes('invalid'))
                valid = 'invalid';
            if (Object.values(this.pageValidity[pageId]).every(function (item) { return item === 'valid'; }))
                valid = 'valid';
            this.formValidity[pageId] = valid;
            if (!valid)
                this.logger.error(pageId);
        };
        LayoutComponent.prototype.updateStepsValidity = function (id) {
            var _this = this;
            var step = this.templates[this.componentId].step;
            var valid = true;
            var unvisited = false;
            var validity = 'valid';
            // this.logger.warn('validity', this.formValidity);
            this.inventory[step].forEach(function (neighbor) {
                if (_this.formValidity[neighbor] === 'invalid') {
                    // this.logger.error('invalid neighbor', neighbor);
                    valid = false;
                }
                if (!_this.formValidity[neighbor]) {
                    unvisited = true;
                }
            });
            if (!valid)
                validity = 'invalid';
            if (unvisited)
                validity = 'unvisited';
            this.validity.steps[step] = validity;
            // this.logger.warn('Current steps validity', this.validity.steps);
        };
        return LayoutComponent;
    }());
    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(i0.ɵɵdirectiveInject(ENVIRONMENT_TOKEN), i0.ɵɵdirectiveInject(FORM_TEMPLATE_TOKEN), i0.ɵɵdirectiveInject(FormService), i0.ɵɵdirectiveInject(i2$1.ActivatedRoute), i0.ɵɵdirectiveInject(LoggerService)); };
    LayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayoutComponent, selectors: [["lib-layout"]], decls: 13, vars: 10, consts: [[1, "columns", "is-fullheight"], [1, "column", "is-narrow", 3, "currentComponent"], [1, "column", "p-0"], [1, "section", "pt-2"], [3, "validity", "step"], ["class", "columns is-multiline", 4, "ngIf"], [3, "title", "ngClass"], [3, "component"], [1, "column", "p-0", "is-one-quarter"], [1, "section", "pl-0"], ["class", "column pl-0 is-one-fifth", 4, "ngIf"], [1, "columns", "is-multiline"], [1, "column", "is-half"], [3, "title", 4, "ngIf"], [3, "title"], [3, "formTemplate", "formStatus"], [1, "column", "pl-0", "is-one-fifth"]], template: function LayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelement(1, "lib-navigation-sidebar", 1);
                i0.ɵɵelementStart(2, "div", 0);
                i0.ɵɵelementStart(3, "div", 2);
                i0.ɵɵelementStart(4, "section", 3);
                i0.ɵɵelement(5, "lib-stepbar", 4);
                i0.ɵɵtemplate(6, LayoutComponent_div_6_Template, 12, 18, "div", 5);
                i0.ɵɵelementStart(7, "lib-card", 6);
                i0.ɵɵelement(8, "lib-simple-documentation", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 8);
                i0.ɵɵelementStart(10, "div", 9);
                i0.ɵɵelement(11, "lib-result-sidebar");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(12, LayoutComponent_div_12_Template, 4, 3, "div", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("currentComponent", ctx.componentId);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("validity", ctx.validity)("step", ctx.currentStep);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.componentId !== "results");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("title", "Documentation")("ngClass", i0.ɵɵpureFunction1(8, _c0$7, !ctx.hasAntennaCard || ctx.componentId === "results"));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("component", ctx.componentId);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngIf", ctx.logger.developer);
            }
        }, directives: [NavigationSidebarComponent, StepbarComponent, i4.NgIf, CardComponent, i4.NgClass, SimpleDocumentationComponent, ResultSidebarComponent, FormComponent, JSatOrbLinkComponent], pipes: [i4.JsonPipe], styles: [".subform[_ngcontent-%COMP%]{max-width:900px;min-width:250px}.container[_ngcontent-%COMP%]{margin:25px;width:80%}.progressbar[_ngcontent-%COMP%]{counter-reset:step}.progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:left;font-size:12px;list-style-type:none;position:relative;text-align:center;text-transform:uppercase;width:25%}.progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{background-color:#fff;border:2px solid #7d7d7d;border-radius:50%;content:counter(step);counter-increment:step;display:block;height:30px;line-height:30px;margin:0 auto 10px;text-align:center;width:30px}.progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{background-color:#7d7d7d;content:\"\";height:2px;left:-50%;position:absolute;top:15px;width:100%;z-index:-1}.progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after{content:none}.progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:green}.progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:before{border-color:#55b776}.progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]:after{background-color:#55b776}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-layout',
                        templateUrl: './layout.component.html',
                        styleUrls: ['./layout.component.scss'],
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [ENVIRONMENT_TOKEN]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [FORM_TEMPLATE_TOKEN]
                        }] }, { type: FormService }, { type: i2$1.ActivatedRoute }, { type: LoggerService }];
        }, null);
    })();

    var SimpleDocumentationModule = /** @class */ (function () {
        function SimpleDocumentationModule() {
        }
        return SimpleDocumentationModule;
    }());
    SimpleDocumentationModule.ɵfac = function SimpleDocumentationModule_Factory(t) { return new (t || SimpleDocumentationModule)(); };
    SimpleDocumentationModule.ɵmod = i0.ɵɵdefineNgModule({ type: SimpleDocumentationModule });
    SimpleDocumentationModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                i4.CommonModule,
                i2.FontAwesomeModule,
                i3.FormsModule,
                LoggerModule.forRoot(),
                i4$1.KatexModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SimpleDocumentationModule, { declarations: [SimpleDocumentationComponent], imports: [i4.CommonModule,
                i2.FontAwesomeModule,
                i3.FormsModule, LoggerModule, i4$1.KatexModule], exports: [SimpleDocumentationComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SimpleDocumentationModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SimpleDocumentationComponent,
                        ],
                        imports: [
                            i4.CommonModule,
                            i2.FontAwesomeModule,
                            i3.FormsModule,
                            LoggerModule.forRoot(),
                            i4$1.KatexModule,
                        ],
                        exports: [
                            SimpleDocumentationComponent,
                        ],
                    }]
            }], null, null);
    })();

    var StepbarModule = /** @class */ (function () {
        function StepbarModule() {
        }
        return StepbarModule;
    }());
    StepbarModule.ɵfac = function StepbarModule_Factory(t) { return new (t || StepbarModule)(); };
    StepbarModule.ɵmod = i0.ɵɵdefineNgModule({ type: StepbarModule });
    StepbarModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                i4.CommonModule,
                i2.FontAwesomeModule,
                LoggerModule.forRoot(),
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StepbarModule, { declarations: [StepbarComponent], imports: [i4.CommonModule,
                i2.FontAwesomeModule, LoggerModule], exports: [StepbarComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepbarModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            StepbarComponent,
                        ],
                        imports: [
                            i4.CommonModule,
                            i2.FontAwesomeModule,
                            LoggerModule.forRoot(),
                        ],
                        exports: [
                            StepbarComponent,
                        ],
                    }]
            }], null, null);
    })();

    var NavigationSidebarModule = /** @class */ (function () {
        function NavigationSidebarModule() {
        }
        return NavigationSidebarModule;
    }());
    NavigationSidebarModule.ɵfac = function NavigationSidebarModule_Factory(t) { return new (t || NavigationSidebarModule)(); };
    NavigationSidebarModule.ɵmod = i0.ɵɵdefineNgModule({ type: NavigationSidebarModule });
    NavigationSidebarModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[i4.CommonModule, i3.FormsModule, i2.FontAwesomeModule, i2$1.RouterModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NavigationSidebarModule, { declarations: [NavigationSidebarComponent], imports: [i4.CommonModule, i3.FormsModule, i2.FontAwesomeModule, i2$1.RouterModule], exports: [NavigationSidebarComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationSidebarModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [NavigationSidebarComponent],
                        imports: [i4.CommonModule, i3.FormsModule, i2.FontAwesomeModule, i2$1.RouterModule],
                        exports: [NavigationSidebarComponent],
                    }]
            }], null, null);
    })();

    var SyntheticDrawingFormComponent = /** @class */ (function () {
        function SyntheticDrawingFormComponent(formBuilder, drawingService) {
            this.formBuilder = formBuilder;
            this.drawingService = drawingService;
            // This ties the form to the right LBScenario model, don't forget to include it
            this.scenarioId = 'default';
            // This sets the options for our form group
            var controlOptions = { validators: [i3.Validators.required], updateOn: 'blur' };
            this.drawingForm = this.formBuilder.group({
                power: DrawingDefault.powerIn,
                gains: this.formBuilder.group(DrawingDefault.defaultGains),
            }, controlOptions);
        }
        SyntheticDrawingFormComponent.prototype.ngOnInit = function () {
            var _this = this;
            // When the 'updateOn:blur' is triggered, we call the onSubmit within the new context
            this.drawingFormSub = this.drawingForm.valueChanges.subscribe({
                next: this.onSubmit.bind(this),
            });
            this.LBScenarioSub = this.drawingService.getLBScenario$(this.scenarioId).subscribe(function (next) {
                _this.currentScenario = next;
            });
        };
        SyntheticDrawingFormComponent.prototype.ngOnDestroy = function () {
            this.drawingFormSub.unsubscribe();
            this.LBScenarioSub.unsubscribe();
        };
        SyntheticDrawingFormComponent.prototype.randomizeInputs = function () {
            // Randomize belongs to the form component, we should randomize here and send data to model after
            var defaultLBScenario = this.drawingService.getLBScenario(this.scenarioId);
            var components = defaultLBScenario.randomize();
            var newGains = {};
            var excluded = ['tx', 'rx'];
            Object.entries(components).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                if (!excluded.includes(key)) {
                    newGains[key] = value.gain;
                }
            });
            this.drawingForm.patchValue({ gains: newGains }); // Update the form values
            defaultLBScenario.compute();
            this.drawingService.updateLBScenario(this.scenarioId, defaultLBScenario);
        };
        SyntheticDrawingFormComponent.prototype.onSubmit = function () {
            var defaultLBScenario = this.drawingService.getLBScenario(this.scenarioId);
            defaultLBScenario.setPowerIn(this.drawingForm.value.power);
            var formValues = this.drawingForm.value.gains;
            defaultLBScenario.editGains(formValues);
            defaultLBScenario.compute();
            this.drawingService.updateLBScenario(this.scenarioId, defaultLBScenario);
        };
        return SyntheticDrawingFormComponent;
    }());
    SyntheticDrawingFormComponent.ɵfac = function SyntheticDrawingFormComponent_Factory(t) { return new (t || SyntheticDrawingFormComponent)(i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(SyntheticDrawingFormService)); };
    SyntheticDrawingFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SyntheticDrawingFormComponent, selectors: [["lib-synthetic-drawing-form"]], inputs: { scenarioId: "scenarioId" }, decls: 34, vars: 1, consts: [["id", "form", 3, "formGroup"], [1, "field"], [1, "label"], ["formControlName", "power", "type", "number", 1, "input"], ["formArrayName", "gains"], ["formControlName", "cableTx", "type", "number", 1, "input"], ["formControlName", "antTx", "type", "number", 1, "input"], ["formControlName", "fsl", "type", "number", 1, "input"], ["formControlName", "antRx", "type", "number", 1, "input"], ["formControlName", "cableRx", "type", "number", 1, "input"], [1, "field", "is-grouped"], [1, "control"], ["form", "form", "type", "submit", 1, "button", "is-primary", 3, "click"], ["id", "randomize", 1, "button", "is-secondary", 3, "click"]], template: function SyntheticDrawingFormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "label", 2);
                i0.ɵɵtext(3, "Power in: ");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(4, "input", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div", 1);
                i0.ɵɵelementStart(6, "div", 4);
                i0.ɵɵelementStart(7, "div", 1);
                i0.ɵɵelementStart(8, "label", 2);
                i0.ɵɵtext(9, "Tx Cable Loss: ");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "input", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "div", 1);
                i0.ɵɵelementStart(12, "label", 2);
                i0.ɵɵtext(13, "Tx Antenna Gain: ");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(14, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "div", 1);
                i0.ɵɵelementStart(16, "label", 2);
                i0.ɵɵtext(17, "FSL: ");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(18, "input", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "div", 1);
                i0.ɵɵelementStart(20, "label", 2);
                i0.ɵɵtext(21, "Rx Antenna Gain: ");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(22, "input", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "div", 1);
                i0.ɵɵelementStart(24, "label", 2);
                i0.ɵɵtext(25, "Rx Cable Loss: ");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(26, "input", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(27, "div", 10);
                i0.ɵɵelementStart(28, "div", 11);
                i0.ɵɵelementStart(29, "button", 12);
                i0.ɵɵlistener("click", function SyntheticDrawingFormComponent_Template_button_click_29_listener() { return ctx.onSubmit(); });
                i0.ɵɵtext(30, " Update Graph ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(31, "div", 11);
                i0.ɵɵelementStart(32, "button", 13);
                i0.ɵɵlistener("click", function SyntheticDrawingFormComponent_Template_button_click_32_listener() { return ctx.randomizeInputs(); });
                i0.ɵɵtext(33, " Random values ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.drawingForm);
            }
        }, directives: [i3.ɵangular_packages_forms_forms_ba, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.DefaultValueAccessor, i3.NumberValueAccessor, i3.NgControlStatus, i3.FormControlName, i3.FormArrayName], styles: [".ng-valid.required[_ngcontent-%COMP%], .ng-valid[required][_ngcontent-%COMP%]{border-left:5px solid green}.ng-invalid[_ngcontent-%COMP%]:not(form){border-left:5px solid red}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SyntheticDrawingFormComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-synthetic-drawing-form',
                        templateUrl: './synthetic-drawing-form.component.html',
                        styleUrls: ['./synthetic-drawing-form.component.scss'],
                    }]
            }], function () { return [{ type: i3.FormBuilder }, { type: SyntheticDrawingFormService }]; }, { scenarioId: [{
                    type: i0.Input
                }] });
    })();

    var SyntheticDrawingModule = /** @class */ (function () {
        function SyntheticDrawingModule() {
        }
        return SyntheticDrawingModule;
    }());
    SyntheticDrawingModule.ɵfac = function SyntheticDrawingModule_Factory(t) { return new (t || SyntheticDrawingModule)(); };
    SyntheticDrawingModule.ɵmod = i0.ɵɵdefineNgModule({ type: SyntheticDrawingModule });
    SyntheticDrawingModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
            SyntheticDrawingFormService,
        ], imports: [[
                i4.CommonModule,
                i3.ReactiveFormsModule,
                LoggerModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SyntheticDrawingModule, { declarations: [SyntheticDrawingFormComponent,
                SyntheticDrawingComponent], imports: [i4.CommonModule,
                i3.ReactiveFormsModule,
                LoggerModule], exports: [SyntheticDrawingFormComponent,
                SyntheticDrawingComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SyntheticDrawingModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SyntheticDrawingFormComponent,
                            SyntheticDrawingComponent,
                        ],
                        imports: [
                            i4.CommonModule,
                            i3.ReactiveFormsModule,
                            LoggerModule,
                        ],
                        exports: [
                            SyntheticDrawingFormComponent,
                            SyntheticDrawingComponent,
                        ],
                        providers: [
                            SyntheticDrawingFormService,
                        ],
                    }]
            }], null, null);
    })();

    var ResultSidebarModule = /** @class */ (function () {
        function ResultSidebarModule() {
        }
        return ResultSidebarModule;
    }());
    ResultSidebarModule.ɵfac = function ResultSidebarModule_Factory(t) { return new (t || ResultSidebarModule)(); };
    ResultSidebarModule.ɵmod = i0.ɵɵdefineNgModule({ type: ResultSidebarModule });
    ResultSidebarModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                i4.CommonModule,
                i2.FontAwesomeModule,
                i2$1.RouterModule,
                i3.FormsModule,
                LoggerModule.forRoot(),
                CardModule,
                SyntheticDrawingModule,
                NavigationSidebarModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ResultSidebarModule, { declarations: [ResultSidebarComponent,
                ResultsComponent], imports: [i4.CommonModule,
                i2.FontAwesomeModule,
                i2$1.RouterModule,
                i3.FormsModule, LoggerModule, CardModule,
                SyntheticDrawingModule,
                NavigationSidebarModule], exports: [ResultSidebarComponent,
                ResultsComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResultSidebarModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ResultSidebarComponent,
                            ResultsComponent,
                        ],
                        imports: [
                            i4.CommonModule,
                            i2.FontAwesomeModule,
                            i2$1.RouterModule,
                            i3.FormsModule,
                            LoggerModule.forRoot(),
                            CardModule,
                            SyntheticDrawingModule,
                            NavigationSidebarModule,
                        ],
                        exports: [
                            ResultSidebarComponent,
                            ResultsComponent,
                        ],
                    }]
            }], null, null);
    })();

    var SynthesisComponent = /** @class */ (function () {
        function SynthesisComponent() {
        }
        return SynthesisComponent;
    }());
    SynthesisComponent.ɵfac = function SynthesisComponent_Factory(t) { return new (t || SynthesisComponent)(); };
    SynthesisComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SynthesisComponent, selectors: [["lib-synthesis"]], decls: 8, vars: 3, consts: [[1, "section"], [1, "columns", "is-multiline", "is-centered"], [1, "column", "is-two-third-desktop"], [3, "scenarioId"], [1, "column", "is-one-third-desktop"], [3, "title"]], template: function SynthesisComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "section", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "lib-card");
                i0.ɵɵelement(4, "lib-synthetic-drawing", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div", 4);
                i0.ɵɵelementStart(6, "lib-card", 5);
                i0.ɵɵelement(7, "lib-synthetic-drawing-form", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("scenarioId", "default");
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("title", "Input values");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("scenarioId", "default");
            }
        }, directives: [CardComponent, SyntheticDrawingComponent, SyntheticDrawingFormComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SynthesisComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-synthesis',
                        templateUrl: './synthesis.component.html',
                        styleUrls: ['./synthesis.component.scss'],
                    }]
            }], function () { return []; }, null);
    })();

    var header = {
        mission: "JSatOrb4LB1",
        celestialBody: "EARTH",
        timeStart: "2010-01-01T02:00:00",
        timeEnd: "2010-01-02T02:00:00",
        step: "60"
    };
    var satellites = [
        {
            name: "SunSynchronous",
            type: "keplerian",
            sma: 7000000,
            ecc: 0,
            inc: 97.8736,
            pa: 0,
            raan: 0,
            meanAnomaly: 0
        },
        {
            name: "CALSPHERE 1",
            type: "tle",
            line1: "1 00900U 64063C   21173.84548169  .00000235  00000-0  24159-3 0  9991",
            line2: "2 00900  90.1626  34.5516 0028893  27.0031  90.8509 13.73547930821297"
        },
        {
            name: "CALSPHERE 2",
            type: "tle",
            line1: "1 00902U 64063E   21173.66392337  .00000055  00000-0  68798-4 0  9995",
            line2: "2 00902  90.1745  37.3945 0020222 109.9446 315.1066 13.52696677610136"
        },
        {
            name: "LCS 1",
            type: "tle",
            line1: "1 01361U 65034C   21173.93594008  .00000024  00000-0  20948-2 0  9992",
            line2: "2 01361  32.1362 178.9014 0011312  43.0042 317.1338  9.89299797 29625"
        },
        {
            name: "TEMPSAT 1",
            type: "tle",
            line1: "1 01512U 65065E   21173.67152492  .00000024  00000-0  30485-4 0  9991",
            line2: "2 01512  89.8937 221.9890 0068582 322.1475 166.0360 13.33435986717427"
        },
        {
            name: "CALSPHERE 4A",
            type: "tle",
            line1: "1 01520U 65065H   21173.89542559  .00000035  00000-0  49772-4 0  9992",
            line2: "2 01520  90.0143 130.0161 0068819 195.5679 219.8975 13.35845069719656"
        },
        {
            name: "ISS (ZARYA)",
            type: "tle",
            line1: "1 25544U 98067A   21173.65515341 -.00000451  00000-0  00000+0 0  9994",
            line2: "2 25544  51.6428 315.6803 0003919 122.6547 356.3586 15.49000460289445"
        },
        {
            name: "SWISSCUBE",
            type: "tle",
            line1: "1 35932U 09051B   21173.50730819  .00000145  00000-0  43500-4 0  9990",
            line2: "2 35932  98.6024  13.6871 0008800  74.6266 285.5903 14.56543941623696"
        },
        {
            name: "NOAA 15",
            type: "tle",
            line1: "1 25338U 98030A   21173.83925067  .00000088  00000-0  55433-4 0  9995",
            line2: "2 25338  98.6810 202.3160 0009181 264.3116  95.7017 14.26039417201763"
        },
        {
            name: "INTELSAT 5 (IS-5)",
            type: "tle",
            line1: "1 24916U 97046A   21173.56844120  .00000087  00000-0  00000-0 0  9997",
            line2: "2 24916   6.4710  63.4179 0004185  16.5128 258.6638  1.00270282 87367"
        },
        {
            name: "satellite",
            type: "keplerian",
            color: "#f44295",
            sma: 9000,
            ecc: 0.15,
            inc: 18,
            pa: 0,
            raan: 0,
            meanAnomaly: 0
        }
    ];
    var constellations = [
        {
            name: "ConstellationA",
            satellites: []
        },
        {
            name: "ConstellationB",
            satellites: [
                "SunSynchronous",
                "CALSPHERE 1",
                "CALSPHERE 2",
                "LCS 1",
                "TEMPSAT 1",
                "CALSPHERE 4A",
                "ISS (ZARYA)",
                "SWISSCUBE",
                "NOAA 15",
                "INTELSAT 5 (IS-5)"
            ]
        }
    ];
    var groundStations = [
        {
            name: "isae",
            latitude: 43,
            longitude: 1.5,
            altitude: 150,
            elevation: 12
        }
    ];
    var options = {
        CARTESIAN: [],
        KEPLERIAN: [],
        LLA: [],
        ECLIPSE: [],
        VISIBILITY: [],
        ATTITUDE: {
            law: "NADIR"
        },
        COVERAGE: {
            timeStart: "2010-01-01T02:00:00",
            timeEnd: "2010-01-02T02:00:00",
            step: "10",
            elevation: "5",
            nbSatsToCover: 1,
            satConstMode: "constellation",
            satConstName: "ConstellationB",
            regionLatitudes: [
                32.5,
                62
            ],
            regionLongitudes: [
                -13.5,
                18.5
            ],
            plotType: "PERCENT_COV"
        }
    };
    var mockJSatOrbData = {
        header: header,
        satellites: satellites,
        constellations: constellations,
        groundStations: groundStations,
        options: options
    };

    function WelcomeComponent_option_43_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "option", 29);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var satellite_r6 = ctx.$implicit;
            i0.ɵɵproperty("ngValue", satellite_r6);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", satellite_r6.name, "");
        }
    }
    function WelcomeComponent_option_49_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "option", 29);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var station_r7 = ctx.$implicit;
            i0.ɵɵproperty("ngValue", station_r7);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", station_r7.name, " ");
        }
    }
    function WelcomeComponent_div_61_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵelementStart(2, "b");
            i0.ɵɵtext(3, "Semi-Major Axis (SMA):");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵelementStart(6, "b");
            i0.ɵɵtext(7, "Excentricity:");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵelementStart(10, "b");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "p");
            i0.ɵɵelementStart(13, "b");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx_r3.selectedSatellite.sma.toPrecision(3), "");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx_r3.selectedSatellite.ecc, "");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Minimum Altitude: ", ((1 - ctx_r3.selectedSatellite.ecc) * ctx_r3.selectedSatellite.sma).toPrecision(3), " km");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Maximum Altitude (imported into geometry): ", ((1 + ctx_r3.selectedSatellite.ecc) * ctx_r3.selectedSatellite.sma).toPrecision(3), " km");
        }
    }
    function WelcomeComponent_div_67_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵelementStart(2, "b");
            i0.ɵɵtext(3, "Elevation:");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx_r4.selectedStation.elevation.toPrecision(3), "");
        }
    }
    function WelcomeComponent_div_68_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵelementStart(1, "lib-card", 6);
            i0.ɵɵelementStart(2, "div", 30);
            i0.ɵɵelement(3, "nano-dropdown-project");
            i0.ɵɵelement(4, "nano-input-id");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("title", "Import from Nanospace");
        }
    }
    var WelcomeComponent = /** @class */ (function () {
        /**
         * Import Data from JSatOrb, select satellites and groundstations to study. Maybe also import from nanospace.
         */
        function WelcomeComponent(environment, logger, saveLoadService, formService, fb) {
            this.environment = environment;
            this.logger = logger;
            this.saveLoadService = saveLoadService;
            this.formService = formService;
            this.fb = fb;
            this.jsoData = { title: '', satellites: undefined, groundStations: undefined };
            this.debugMode = this.environment.debugMode;
            this.jsoForm = new i3.FormGroup({
                satellite: new i3.FormControl(),
                station: new i3.FormControl(),
            });
        }
        WelcomeComponent.prototype.ngOnInit = function () {
            var _a;
            if (this.debugMode) {
                var testData = mockJSatOrbData;
                var title = (_a = testData.header) === null || _a === void 0 ? void 0 : _a.mission;
                var satellites = this.saveLoadService.formatJSOData(testData.satellites);
                var groundStations = testData.groundStations;
                this.jsoData = { title: title, satellites: satellites, groundStations: groundStations };
                this.buildForm();
            }
        };
        WelcomeComponent.prototype.importJSatOrbData = function (files) {
            var _this = this;
            var obs = this.saveLoadService.importJSatOrbConfigFile(files)
                .subscribe(function (value) {
                if (value)
                    _this.jsoData = value;
                console.log('import from jso');
                console.log(_this.jsoData);
                _this.buildForm();
                obs.unsubscribe();
            }, function (error) {
                _this.logger.error('Error', 'Could not open file provided');
                obs.unsubscribe();
            }, 
            // When complete
            function () { obs.unsubscribe(); });
            // return;
        };
        WelcomeComponent.prototype.buildForm = function (data) {
            if (data === void 0) { data = this.jsoData; }
            /**
             * This builds the reactive part of the form from jsoData so that it can be displayed by template
             */
            this.jsoForm.patchValue({
                satellite: this.jsoData.satellites[0],
                station: this.jsoData.groundStations[0],
            });
            return this.jsoForm;
        };
        WelcomeComponent.prototype.useSelectedData = function () {
            this.logger.debug('jsoForm value:', this.jsoForm.value);
            this.selectedSatellite = this.jsoForm.controls.satellite.value;
            this.selectedStation = this.jsoForm.controls.station.value;
            if (!(this.selectedSatellite && this.selectedStation)) {
                this.logger.warn('Warning', 'Station or satellite not selected!');
                return;
            }
            this.saveLoadService.importJSOData(this.jsoData.title, this.selectedSatellite, this.selectedStation);
        };
        return WelcomeComponent;
    }());
    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(i0.ɵɵdirectiveInject(ENVIRONMENT_TOKEN), i0.ɵɵdirectiveInject(LoggerService), i0.ɵɵdirectiveInject(SaveLoadService), i0.ɵɵdirectiveInject(FormService), i0.ɵɵdirectiveInject(i3.FormBuilder)); };
    WelcomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WelcomeComponent, selectors: [["lib-welcome"]], decls: 69, vars: 18, consts: [[1, "columns"], [1, "column", "is-narrow", 3, "currentComponent"], [1, "column", "pl-0", "pr-5"], [1, "pt-3"], [1, "columns", "is-centered"], [1, "column", "is-two-thirds"], [3, "title"], [2, "display", "flex", "justify-content", "space-around", "align-items", "center"], [1, "button", "is-primary"], [1, "file-input"], ["id", "file", "type", "file", "accept", ".jso", 1, "file", 3, "change"], ["file", ""], [2, "text-align", "center"], [1, "column"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "field", "is-horizontal"], [1, "field-body"], [1, "field"], [1, "label"], [1, "select", "is-fullwidth"], ["formControlName", "satellite"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "field", "is-expanded"], ["formControlName", "station"], [1, "field", "is-grouped", "is-grouped-right"], [1, "control"], ["type", "submit", 1, "button", "is-primary"], [4, "ngIf"], ["class", "column", 4, "ngIf"], [3, "ngValue"], [2, "display", "inline-flex"]], template: function WelcomeComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r8_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelement(1, "lib-navigation-sidebar", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "section", 3);
                i0.ɵɵelementStart(4, "h2");
                i0.ɵɵtext(5, "Welcome to Luplink");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "p");
                i0.ɵɵtext(7, "Start importing data from JSatOrb or use default data to compute a link budget!");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "div", 4);
                i0.ɵɵelementStart(9, "div", 5);
                i0.ɵɵelementStart(10, "lib-card", 6);
                i0.ɵɵelementStart(11, "div", 7);
                i0.ɵɵelementStart(12, "a", 8);
                i0.ɵɵelementStart(13, "div", 9);
                i0.ɵɵelementStart(14, "input", 10, 11);
                i0.ɵɵlistener("change", function WelcomeComponent_Template_input_change_14_listener() { i0.ɵɵrestoreView(_r8_1); var _r0 = i0.ɵɵreference(15); return ctx.importJSatOrbData(_r0.files); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtext(16, " Load JSatOrb file (.jso) ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "div", 12);
                i0.ɵɵelementStart(18, "p");
                i0.ɵɵtext(19, "Imported project: ");
                i0.ɵɵelementStart(20, "b");
                i0.ɵɵtext(21);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(22, "br");
                i0.ɵɵtext(23, "Satellites: ");
                i0.ɵɵelementStart(24, "b");
                i0.ɵɵtext(25);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(26, "br");
                i0.ɵɵtext(27, "Groundstations: ");
                i0.ɵɵelementStart(28, "b");
                i0.ɵɵtext(29);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(30, "lib-card", 6);
                i0.ɵɵelementStart(31, "div", 13);
                i0.ɵɵelementStart(32, "p");
                i0.ɵɵelementStart(33, "i");
                i0.ɵɵtext(34, "Choose a satellite and a groundstation to import: ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(35, "form", 14);
                i0.ɵɵlistener("ngSubmit", function WelcomeComponent_Template_form_ngSubmit_35_listener() { return ctx.useSelectedData(); });
                i0.ɵɵelementStart(36, "div", 15);
                i0.ɵɵelementStart(37, "div", 16);
                i0.ɵɵelementStart(38, "div", 17);
                i0.ɵɵelementStart(39, "div", 18);
                i0.ɵɵtext(40, "Satellite:");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(41, "div", 19);
                i0.ɵɵelementStart(42, "select", 20);
                i0.ɵɵtemplate(43, WelcomeComponent_option_43_Template, 2, 2, "option", 21);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(44, "div", 22);
                i0.ɵɵelementStart(45, "div", 18);
                i0.ɵɵtext(46, "Station:");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(47, "div", 19);
                i0.ɵɵelementStart(48, "select", 23);
                i0.ɵɵtemplate(49, WelcomeComponent_option_49_Template, 2, 2, "option", 21);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(50, "div", 16);
                i0.ɵɵelement(51, "div", 18);
                i0.ɵɵelementStart(52, "div", 24);
                i0.ɵɵelementStart(53, "div", 25);
                i0.ɵɵelementStart(54, "button", 26);
                i0.ɵɵtext(55, "Import");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(56, "h3");
                i0.ɵɵtext(57, "Selected Satellite:");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(58, "pre");
                i0.ɵɵtext(59);
                i0.ɵɵpipe(60, "json");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(61, WelcomeComponent_div_61_Template, 15, 4, "div", 27);
                i0.ɵɵelementStart(62, "h3");
                i0.ɵɵtext(63, "Selected groundstation");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(64, "pre");
                i0.ɵɵtext(65);
                i0.ɵɵpipe(66, "json");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(67, WelcomeComponent_div_67_Template, 5, 1, "div", 27);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(68, WelcomeComponent_div_68_Template, 5, 1, "div", 28);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("currentComponent", "welcome");
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("title", "Import data from JSatOrb");
                i0.ɵɵadvance(11);
                i0.ɵɵtextInterpolate(ctx.jsoData.title);
                i0.ɵɵadvance(4);
                i0.ɵɵtextInterpolate1("(", ctx.jsoData.satellites == null ? null : ctx.jsoData.satellites.length, ")");
                i0.ɵɵadvance(4);
                i0.ɵɵtextInterpolate1("(", ctx.jsoData.groundStations == null ? null : ctx.jsoData.groundStations.length, ")");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("title", "Satellite & Groundstation selection");
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("formGroup", ctx.jsoForm);
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("ngForOf", ctx.jsoData.satellites);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngForOf", ctx.jsoData.groundStations);
                i0.ɵɵadvance(10);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(60, 14, ctx.selectedSatellite));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.selectedSatellite);
                i0.ɵɵadvance(4);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(66, 16, ctx.selectedStation));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.selectedStation);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.environment.enableNanospace);
            }
        }, directives: [NavigationSidebarComponent, CardComponent, i3.ɵangular_packages_forms_forms_ba, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.FormControlName, i4.NgForOf, i4.NgIf, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_z, i8.ɵd, i8.ɵg], pipes: [i4.JsonPipe], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WelcomeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-welcome',
                        templateUrl: './welcome.component.html',
                        styleUrls: ['./welcome.component.scss'],
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [ENVIRONMENT_TOKEN]
                        }] }, { type: LoggerService }, { type: SaveLoadService }, { type: FormService }, { type: i3.FormBuilder }];
        }, null);
    })();

    // https://github.com/wesleygrimes/angular-routing-best-practices
    var routes = [
        {
            path: 'luplink',
            children: [
                { path: 'welcome', component: WelcomeComponent },
                { path: '', component: LayoutComponent },
                { path: 'diagram', component: SynthesisComponent },
                { path: 'results', component: ResultsComponent },
            ],
        },
        { path: '', redirectTo: 'luplink', pathMatch: 'full' },
    ];

    var ViewComponent = /** @class */ (function () {
        function ViewComponent() {
        }
        return ViewComponent;
    }());
    ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(); };
    ViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ViewComponent, selectors: [["lib-view"]], decls: 1, vars: 0, template: function ViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "router-outlet");
            }
        }, directives: [i2$1.RouterOutlet], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-view',
                        templateUrl: './view.component.html',
                        styleUrls: ['./view.component.scss'],
                    }]
            }], function () { return []; }, null);
    })();

    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        return LayoutModule;
    }());
    LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
    LayoutModule.ɵmod = i0.ɵɵdefineNgModule({ type: LayoutModule });
    LayoutModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
            JSatOrbLinkService,
        ], imports: [[
                i4.CommonModule,
                i2$1.RouterModule.forChild(routes),
                CardModule,
                FormModule,
                LoggerModule,
                SimpleDocumentationModule,
                StepbarModule,
                NavigationSidebarModule,
                ResultSidebarModule,
                i3.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LayoutModule, { declarations: [LayoutComponent,
                ViewComponent,
                JSatOrbLinkComponent], imports: [i4.CommonModule, i2$1.RouterModule, CardModule,
                FormModule,
                LoggerModule,
                SimpleDocumentationModule,
                StepbarModule,
                NavigationSidebarModule,
                ResultSidebarModule,
                i3.ReactiveFormsModule], exports: [LayoutComponent,
                ViewComponent,
                JSatOrbLinkComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            LayoutComponent,
                            ViewComponent,
                            JSatOrbLinkComponent,
                        ],
                        imports: [
                            i4.CommonModule,
                            i2$1.RouterModule.forChild(routes),
                            CardModule,
                            FormModule,
                            LoggerModule,
                            SimpleDocumentationModule,
                            StepbarModule,
                            NavigationSidebarModule,
                            ResultSidebarModule,
                            i3.ReactiveFormsModule,
                        ],
                        exports: [
                            LayoutComponent,
                            ViewComponent,
                            JSatOrbLinkComponent,
                        ],
                        providers: [
                            JSatOrbLinkService,
                        ],
                    }]
            }], null, null);
    })();

    var _c0$8 = ["titleInput"];
    function NavbarComponent_strong_41_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "strong", 31);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2("", ctx_r2.formService.title, "", !ctx_r2.formService.isCurrentFormSaved ? "*" : "", "");
        }
    }
    function NavbarComponent_strong_69_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "strong", 31);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2("", ctx_r6.formService.title, "", !ctx_r6.formService.isCurrentFormSaved ? "*" : "", "");
        }
    }
    var _c1$3 = function (a0) { return { "is-active": a0 }; };
    var _c2$1 = function (a0) { return { "is-hidden": a0 }; };
    var _c3$1 = function (a0) { return { "is-loading": a0 }; };
    var _c4$1 = ["*"];
    // import { environment } from 'projects/luplink-app/src/environments/environment';
    var NavbarComponent = /** @class */ (function () {
        function NavbarComponent(environment, saveLoadService, computeLinkBudget, formService, logger) {
            var _this = this;
            this.environment = environment;
            this.saveLoadService = saveLoadService;
            this.computeLinkBudget = computeLinkBudget;
            this.formService = formService;
            this.logger = logger;
            this.title = 'Luplink-v0.2';
            // For now debug mode disables the reload warning. Debug mode is disabled automatically in prod mode but can be disabled manually
            this.debugMode = false;
            this.isMenuBarVisible = false;
            this._isNanospaceEnabled = true;
            this.angleLeft = freeSolidSvgIcons.faAngleLeft;
            this.isEditingTitle = false;
            this.pencil = freeSolidSvgIcons.faPencilAlt;
            this.loading = false;
            this.globalFormValue = new i3.FormGroup({});
            this.isNanospaceEnabled = this.environment.enableNanospace;
            if (!this.formService.isInitialized)
                this.formService.initForms();
            this.formService.getFormData$().subscribe(function (value) {
                _this.globalFormValue = value;
            });
        }
        Object.defineProperty(NavbarComponent.prototype, "isNanospaceEnabled", {
            get: function () {
                return this._isNanospaceEnabled;
            },
            set: function (value) {
                this.environment.enableNanospace = value;
                this._isNanospaceEnabled = value;
            },
            enumerable: false,
            configurable: true
        });
        NavbarComponent.prototype.onBlur = function ($event) {
            // We use the sanitize-filename node module to make sure everything is fine with the selected fileName (length, characters, ...)
            this.formService.title = sanitize__default['default']($event.target.value);
            this.isEditingTitle = false;
        };
        NavbarComponent.prototype.editTitle = function () {
            var _this = this;
            this.isEditingTitle = true;
            setTimeout(function () {
                var _a;
                // this will make the execution after the above boolean has changed
                (_a = _this.titleInput) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
            }, 0);
        };
        NavbarComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.logger.info('Logging is enabled');
            // Prevent the user from losing data if he hasn't saved the current scenario
            // if (!this.debugMode) {
            window.addEventListener('beforeunload', function (event) {
                if (!_this.formService.isCurrentFormSaved) {
                    event.preventDefault();
                    // eslint-disable-next-line no-param-reassign
                    // event.returnValue = 'Unsaved modifications';
                }
                return event;
            });
            // }
        };
        NavbarComponent.prototype.save = function () {
            this.saveLoadService.exportConfigFile(this.formService.getFormData());
        };
        NavbarComponent.prototype.load = function (files) {
            if (files) {
                this.saveLoadService.importConfigFile(files);
            }
        };
        NavbarComponent.prototype.compute = function () {
            var _this = this;
            var obs = this.computeLinkBudget.computeLinkBudget();
            if (obs) {
                this.loading = true;
                var subscription_1 = obs.subscribe(function (value) {
                    // this.logger.debug('value', value);
                    _this.computeLinkBudget.updateResult(value);
                    // this.logger.debug("API response:", value)
                    _this.loading = false;
                    subscription_1 === null || subscription_1 === void 0 ? void 0 : subscription_1.unsubscribe();
                }, function (err) {
                    _this.loading = false;
                    _this.logger.debug('error in compute()', err);
                    subscription_1 === null || subscription_1 === void 0 ? void 0 : subscription_1.unsubscribe();
                });
            }
        };
        return NavbarComponent;
    }());
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(i0.ɵɵdirectiveInject(ENVIRONMENT_TOKEN), i0.ɵɵdirectiveInject(SaveLoadService), i0.ɵɵdirectiveInject(ComputeLinkBudgetService), i0.ɵɵdirectiveInject(FormService), i0.ɵɵdirectiveInject(LoggerService)); };
    NavbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["lib-navbar"]], viewQuery: function NavbarComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$8, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.titleInput = _t.first);
            }
        }, ngContentSelectors: _c4$1, decls: 77, vars: 27, consts: [["role", "navigation", "aria-label", "main navigation", 1, "navbar", "is-primary"], [1, "navbar-brand"], [1, "navbar-item"], ["aria-label", "menu", "aria-expanded", "false", 1, "navbar-burger", "burger", 3, "ngClass", "click"], ["aria-hidden", "true"], ["id", "navbar", 1, "navbar-menu", 3, "ngClass"], [1, "navbar-start"], [1, "navbar-item", 3, "routerLink"], [1, "is-hidden-desktop"], [1, "navbar-item", "is-hoverable", 2, "padding-right", "16px", 3, "click"], ["id", "dev", "type", "checkbox", 2, "margin-left", "auto", 3, "ngModel", "ngModelChange"], [1, "navbar-item", 2, "padding-right", "16px", 3, "click"], ["type", "checkbox", 2, "margin-left", "auto", 3, "ngModel", "ngModelChange"], [1, "navbar-divider"], [1, "navbar-item", 3, "click"], [1, "file-input"], ["id", "file", "type", "file", "accept", ".json", 1, "file", 3, "change"], ["file", ""], ["for", "file", 1, "btn", "btn-primary", "btn-file"], [1, "navbar-end"], [1, "navbar-item", "has-dropdown", "is-hoverable", "is-hidden-touch"], [1, "navbar-link", 3, "click"], [2, "margin-right", "10px", 3, "icon"], ["id", "scenario-title", 4, "ngIf"], ["type", "text", "autofocus", "", 1, "input", 3, "ngClass", "value", "focusout"], ["titleInput", ""], [1, "navbar-menu", "navbar-dropdown"], [1, "navbar-item", "is-hidden-desktop"], [1, "navbar-link", "is-arrowless", 3, "click"], [1, "buttons"], [1, "button", "is-secondary", "compute", 3, "ngClass", "click"], ["id", "scenario-title"]], template: function NavbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r8_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "nav", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵtext(3, "Luplink");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "span", 3);
                i0.ɵɵlistener("click", function NavbarComponent_Template_span_click_4_listener() { return ctx.isMenuBarVisible = !ctx.isMenuBarVisible; });
                i0.ɵɵelement(5, "span", 4);
                i0.ɵɵelement(6, "span", 4);
                i0.ɵɵelement(7, "span", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "div", 5);
                i0.ɵɵelementStart(9, "div", 6);
                i0.ɵɵelementStart(10, "a", 7);
                i0.ɵɵtext(11, " Diagram ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "a", 7);
                i0.ɵɵtext(13, " Simple Link Budget ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "div", 8);
                i0.ɵɵelementStart(15, "a", 2);
                i0.ɵɵtext(16, "New Link Budget");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "a", 9);
                i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_17_listener() { return ctx.logger.developer = !ctx.logger.developer; });
                i0.ɵɵtext(18, " Developer mode ");
                i0.ɵɵelementStart(19, "input", 10);
                i0.ɵɵlistener("ngModelChange", function NavbarComponent_Template_input_ngModelChange_19_listener($event) { return ctx.logger.developer = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "a", 11);
                i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_20_listener() { return ctx.isNanospaceEnabled = !ctx.isNanospaceEnabled; });
                i0.ɵɵtext(21, " Enable Nanospace ");
                i0.ɵɵelementStart(22, "input", 12);
                i0.ɵɵlistener("ngModelChange", function NavbarComponent_Template_input_ngModelChange_22_listener($event) { return ctx.isNanospaceEnabled = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(23, "hr", 13);
                i0.ɵɵelementStart(24, "a", 14);
                i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_24_listener() { return ctx.save(); });
                i0.ɵɵtext(25, "Save");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "a", 2);
                i0.ɵɵelementStart(27, "div", 15);
                i0.ɵɵelementStart(28, "input", 16, 17);
                i0.ɵɵlistener("change", function NavbarComponent_Template_input_change_28_listener() { i0.ɵɵrestoreView(_r8_1); var _r0 = i0.ɵɵreference(29); return ctx.load(_r0.files); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(30, "label", 18);
                i0.ɵɵtext(31, "Import");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtext(32, " Load ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(33, "a", 2);
                i0.ɵɵelementStart(34, "input", 16, 17);
                i0.ɵɵlistener("change", function NavbarComponent_Template_input_change_34_listener() { i0.ɵɵrestoreView(_r8_1); var _r0 = i0.ɵɵreference(29); return ctx.load(_r0.files); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(36, "div", 19);
                i0.ɵɵprojection(37);
                i0.ɵɵelementStart(38, "div", 20);
                i0.ɵɵelementStart(39, "a", 21);
                i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_39_listener() { return ctx.editTitle(); });
                i0.ɵɵelement(40, "fa-icon", 22);
                i0.ɵɵtemplate(41, NavbarComponent_strong_41_Template, 2, 2, "strong", 23);
                i0.ɵɵelementStart(42, "input", 24, 25);
                i0.ɵɵlistener("focusout", function NavbarComponent_Template_input_focusout_42_listener($event) { return ctx.onBlur($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(44, "div", 26);
                i0.ɵɵelementStart(45, "a", 2);
                i0.ɵɵtext(46, "New Link Budget");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(47, "a", 9);
                i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_47_listener() { return ctx.logger.developer = !ctx.logger.developer; });
                i0.ɵɵtext(48, " Developer mode ");
                i0.ɵɵelementStart(49, "input", 10);
                i0.ɵɵlistener("ngModelChange", function NavbarComponent_Template_input_ngModelChange_49_listener($event) { return ctx.logger.developer = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(50, "a", 11);
                i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_50_listener() { return ctx.isNanospaceEnabled = !ctx.isNanospaceEnabled; });
                i0.ɵɵtext(51, " Enable Nanospace ");
                i0.ɵɵelementStart(52, "input", 12);
                i0.ɵɵlistener("ngModelChange", function NavbarComponent_Template_input_ngModelChange_52_listener($event) { return ctx.isNanospaceEnabled = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(53, "hr", 13);
                i0.ɵɵelementStart(54, "a", 14);
                i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_54_listener() { return ctx.save(); });
                i0.ɵɵtext(55, "Save");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(56, "a", 2);
                i0.ɵɵelementStart(57, "div", 15);
                i0.ɵɵelementStart(58, "input", 16, 17);
                i0.ɵɵlistener("change", function NavbarComponent_Template_input_change_58_listener() { i0.ɵɵrestoreView(_r8_1); var _r0 = i0.ɵɵreference(29); return ctx.load(_r0.files); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(60, "label", 18);
                i0.ɵɵtext(61, "Import");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtext(62, " Load ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(63, "a", 2);
                i0.ɵɵelementStart(64, "input", 16, 17);
                i0.ɵɵlistener("change", function NavbarComponent_Template_input_change_64_listener() { i0.ɵɵrestoreView(_r8_1); var _r0 = i0.ɵɵreference(29); return ctx.load(_r0.files); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(66, "div", 27);
                i0.ɵɵelementStart(67, "a", 28);
                i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_67_listener() { return ctx.editTitle(); });
                i0.ɵɵelement(68, "fa-icon", 22);
                i0.ɵɵtemplate(69, NavbarComponent_strong_69_Template, 2, 2, "strong", 23);
                i0.ɵɵelementStart(70, "input", 24, 25);
                i0.ɵɵlistener("focusout", function NavbarComponent_Template_input_focusout_70_listener($event) { return ctx.onBlur($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(72, "div", 2);
                i0.ɵɵelementStart(73, "div", 29);
                i0.ɵɵelementStart(74, "a", 30);
                i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_74_listener() { return ctx.compute(); });
                i0.ɵɵelementStart(75, "strong");
                i0.ɵɵtext(76, "Compute");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c1$3, ctx.isMenuBarVisible));
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(19, _c1$3, ctx.isMenuBarVisible));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("routerLink", "/luplink/diagram");
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("routerLink", "/luplink");
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("ngModel", ctx.logger.developer);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngModel", ctx.isNanospaceEnabled);
                i0.ɵɵadvance(18);
                i0.ɵɵproperty("icon", ctx.pencil);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.isEditingTitle);
                i0.ɵɵadvance(1);
                i0.ɵɵpropertyInterpolate("value", ctx.formService.title);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(21, _c2$1, !ctx.isEditingTitle));
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("ngModel", ctx.logger.developer);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngModel", ctx.isNanospaceEnabled);
                i0.ɵɵadvance(16);
                i0.ɵɵproperty("icon", ctx.pencil);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.isEditingTitle);
                i0.ɵɵadvance(1);
                i0.ɵɵpropertyInterpolate("value", ctx.formService.title);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(23, _c2$1, !ctx.isEditingTitle));
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(25, _c3$1, ctx.loading));
            }
        }, directives: [i4.NgClass, i2$1.RouterLinkWithHref, i3.CheckboxControlValueAccessor, i3.NgControlStatus, i3.NgModel, i2.FaIconComponent, i4.NgIf], styles: [".navbar[_ngcontent-%COMP%]{min-height:auto;padding-bottom:0;padding-top:0}.navbar[_ngcontent-%COMP%]   .navbar-link[_ngcontent-%COMP%]:focus-within{background-color:#00b89c}.navbar-dropdown[_ngcontent-%COMP%] > .navbar-item[_ngcontent-%COMP%]{color:#4a4a4a!important}.navbar-end[_ngcontent-%COMP%]{align-items:center;display:inline-flex}.navbar-link[_ngcontent-%COMP%]:not(.is-arrowless):after{border-color:#fff!important}.button.is-secondary[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%]{color:initial}.navbar-link[_ngcontent-%COMP%]{color:#fff}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-navbar',
                        templateUrl: './navbar.component.html',
                        styleUrls: ['./navbar.component.scss'],
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [ENVIRONMENT_TOKEN]
                        }] }, { type: SaveLoadService }, { type: ComputeLinkBudgetService }, { type: FormService }, { type: LoggerService }];
        }, { titleInput: [{
                    type: i0.ViewChild,
                    args: ['titleInput']
                }] });
    })();

    var NavbarModule = /** @class */ (function () {
        function NavbarModule() {
        }
        return NavbarModule;
    }());
    NavbarModule.ɵfac = function NavbarModule_Factory(t) { return new (t || NavbarModule)(); };
    NavbarModule.ɵmod = i0.ɵɵdefineNgModule({ type: NavbarModule });
    NavbarModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                i4.CommonModule,
                i3.FormsModule,
                i2.FontAwesomeModule,
                i2$1.RouterModule,
                i3.FormsModule,
                LoggerModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NavbarModule, { declarations: [NavbarComponent], imports: [i4.CommonModule,
                i3.FormsModule,
                i2.FontAwesomeModule,
                i2$1.RouterModule,
                i3.FormsModule,
                LoggerModule], exports: [NavbarComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            NavbarComponent,
                        ],
                        imports: [
                            i4.CommonModule,
                            i3.FormsModule,
                            i2.FontAwesomeModule,
                            i2$1.RouterModule,
                            i3.FormsModule,
                            LoggerModule,
                        ],
                        exports: [
                            NavbarComponent,
                        ],
                    }]
            }], null, null);
    })();

    var SynthesisModule = /** @class */ (function () {
        function SynthesisModule() {
        }
        return SynthesisModule;
    }());
    SynthesisModule.ɵfac = function SynthesisModule_Factory(t) { return new (t || SynthesisModule)(); };
    SynthesisModule.ɵmod = i0.ɵɵdefineNgModule({ type: SynthesisModule });
    SynthesisModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                i4.CommonModule,
                i2.FontAwesomeModule,
                CardModule,
                SyntheticDrawingModule,
                LoggerModule.forRoot(),
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SynthesisModule, { declarations: [SynthesisComponent], imports: [i4.CommonModule,
                i2.FontAwesomeModule,
                CardModule,
                SyntheticDrawingModule, LoggerModule], exports: [SynthesisComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SynthesisModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SynthesisComponent,
                        ],
                        imports: [
                            i4.CommonModule,
                            i2.FontAwesomeModule,
                            CardModule,
                            SyntheticDrawingModule,
                            LoggerModule.forRoot(),
                        ],
                        exports: [
                            SynthesisComponent,
                        ],
                    }]
            }], null, null);
    })();

    var WelcomeModule = /** @class */ (function () {
        function WelcomeModule() {
        }
        return WelcomeModule;
    }());
    WelcomeModule.ɵfac = function WelcomeModule_Factory(t) { return new (t || WelcomeModule)(); };
    WelcomeModule.ɵmod = i0.ɵɵdefineNgModule({ type: WelcomeModule });
    WelcomeModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
        // NanospaceRequestService,
        // NanospaceService,
        ], imports: [[
                i4.CommonModule,
                i3.ReactiveFormsModule,
                i2.FontAwesomeModule,
                LoggerModule.forRoot(),
                FormModule,
                CardModule,
                NavigationSidebarModule,
                i8.NgxNanospaceClientLibModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WelcomeModule, { declarations: [WelcomeComponent], imports: [i4.CommonModule,
                i3.ReactiveFormsModule,
                i2.FontAwesomeModule, LoggerModule, FormModule,
                CardModule,
                NavigationSidebarModule,
                i8.NgxNanospaceClientLibModule], exports: [WelcomeComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WelcomeModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            WelcomeComponent,
                        ],
                        imports: [
                            i4.CommonModule,
                            i3.ReactiveFormsModule,
                            i2.FontAwesomeModule,
                            LoggerModule.forRoot(),
                            FormModule,
                            CardModule,
                            NavigationSidebarModule,
                            i8.NgxNanospaceClientLibModule,
                        ],
                        exports: [
                            WelcomeComponent,
                        ],
                        providers: [
                        // NanospaceRequestService,
                        // NanospaceService,
                        ],
                    }]
            }], null, null);
    })();

    var NanospaceConfig = {
        endpoint: 'https://dcas-nanostar.isae.fr/api/',
    };
    // This is a workaround to avoid forRoot being called twice (see: https://github.com/angular/angular/issues/38376#issuecomment-670551280)
    var NgxNanospace = i8.NgxNanospaceClientLibModule.forRoot(NanospaceConfig);
    var LuplinkModule = /** @class */ (function () {
        function LuplinkModule() {
        }
        LuplinkModule.forRoot = function (config) {
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
                        useValue: Object.assign(Object.assign({}, config.environment), { isStandalone: config.isStandalone, version: '0.2.1' }),
                    },
                ],
            };
        };
        return LuplinkModule;
    }());
    LuplinkModule.ɵfac = function LuplinkModule_Factory(t) { return new (t || LuplinkModule)(); };
    LuplinkModule.ɵmod = i0.ɵɵdefineNgModule({ type: LuplinkModule });
    LuplinkModule.ɵinj = i0.ɵɵdefineInjector({ providers: [ComputeLinkBudgetService, SaveLoadService, i8.NanospaceService, i8.NanospaceRequestService], imports: [[i4.CommonModule, i3.FormsModule, CardModule, i1$1.HttpClientModule, NgxNanospace]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LuplinkModule, { imports: [i4.CommonModule, i3.FormsModule, CardModule, i1$1.HttpClientModule, i8.NgxNanospaceClientLibModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LuplinkModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [i4.CommonModule, i3.FormsModule, CardModule, i1$1.HttpClientModule, NgxNanospace],
                        providers: [ComputeLinkBudgetService, SaveLoadService, i8.NanospaceService, i8.NanospaceRequestService],
                        exports: [],
                    }]
            }], null, null);
    })();

    // import mockPOSTData from './mockPOSTData.json';
    // Mocking  FormService
    var MockFormService = /** @class */ (function () {
        function MockFormService() {
            this.result = new rxjs.BehaviorSubject('');
            this.fb = new i3.FormBuilder();
        }
        MockFormService.prototype.getFormData = function () {
            // Objects.mockPOSTData.geometry
            // const geo = this.fb.group(mockPOSTData.geometry);
            return new i3.FormBuilder().group({ test: 5, u: 3.14159265358979323846 });
        };
        MockFormService.prototype.initForms = function () { };
        MockFormService.prototype.getFormData$ = function () {
            return rxjs.of(new i3.FormBuilder().group({ test: 5, u: 3.14159265358979323846 }));
        };
        return MockFormService;
    }());
    // Mocking ComputeLinkBudgetService
    var MockComputeService = /** @class */ (function () {
        function MockComputeService() {
        }
        return MockComputeService;
    }());
    // Mocking LoggerService
    var MockupLoggerService = /** @class */ (function () {
        function MockupLoggerService() {
        }
        MockupLoggerService.prototype.log = function () { };
        MockupLoggerService.prototype.debug = function () { };
        MockupLoggerService.prototype.error = function () { };
        MockupLoggerService.prototype.info = function () { };
        MockupLoggerService.prototype.warn = function () { };
        return MockupLoggerService;
    }());
    var MockToastPackage = /** @class */ (function (_super) {
        __extends(MockToastPackage, _super);
        function MockToastPackage() {
            var _this = this;
            var toastConfig = { toastClass: 'custom-toast' };
            _this = _super.call(this, 1, toastConfig, 'test message', 'test title', 'show', new i1.ToastRef(null)) || this;
            return _this;
        }
        return MockToastPackage;
    }(i1.ToastPackage));
    MockToastPackage.ɵfac = function MockToastPackage_Factory(t) { return new (t || MockToastPackage)(); };
    MockToastPackage.ɵprov = i0.ɵɵdefineInjectable({ token: MockToastPackage, factory: MockToastPackage.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MockToastPackage, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();
    var ToastrTestingModule = /** @class */ (function () {
        function ToastrTestingModule() {
        }
        return ToastrTestingModule;
    }());
    ToastrTestingModule.ɵfac = function ToastrTestingModule_Factory(t) { return new (t || ToastrTestingModule)(); };
    ToastrTestingModule.ɵmod = i0.ɵɵdefineNgModule({ type: ToastrTestingModule });
    ToastrTestingModule.ɵinj = i0.ɵɵdefineInjector({ providers: [{ provide: i1.ToastPackage, useClass: MockToastPackage }], imports: [[i1.ToastrModule.forRoot()], i1.ToastrModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ToastrTestingModule, { imports: [i1.ToastrModule], exports: [i1.ToastrModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastrTestingModule, [{
                type: i0.NgModule,
                args: [{
                        providers: [{ provide: i1.ToastPackage, useClass: MockToastPackage }],
                        imports: [i1.ToastrModule.forRoot()],
                        exports: [i1.ToastrModule],
                    }]
            }], null, null);
    })();
    // INJECTION TOKENS
    var mockEnvironment = {
        production: false,
        debugMode: true,
        enableNanospace: true,
        luplinkEndpoint: 'http://localhost:8001',
        version: 0.0,
    };

    /*
     * Public API Surface of ngx-luplink
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CardComponent = CardComponent;
    exports.CardModule = CardModule;
    exports.EmptyForm = EmptyForm;
    exports.FormComponent = FormComponent;
    exports.FormModule = FormModule;
    exports.JSatOrbLinkComponent = JSatOrbLinkComponent;
    exports.JSatOrbLinkService = JSatOrbLinkService;
    exports.LayoutComponent = LayoutComponent;
    exports.LayoutModule = LayoutModule;
    exports.LinkBudgetScenario = LinkBudgetScenario;
    exports.LogEntry = LogEntry;
    exports.LoggerModule = LoggerModule;
    exports.LoggerService = LoggerService;
    exports.LuplinkModule = LuplinkModule;
    exports.MockComputeService = MockComputeService;
    exports.MockFormService = MockFormService;
    exports.MockupLoggerService = MockupLoggerService;
    exports.NavbarComponent = NavbarComponent;
    exports.NavbarModule = NavbarModule;
    exports.NavigationSidebarComponent = NavigationSidebarComponent;
    exports.NavigationSidebarModule = NavigationSidebarModule;
    exports.ResultSidebarComponent = ResultSidebarComponent;
    exports.ResultSidebarModule = ResultSidebarModule;
    exports.ResultsComponent = ResultsComponent;
    exports.SimpleDocumentationComponent = SimpleDocumentationComponent;
    exports.SimpleDocumentationModule = SimpleDocumentationModule;
    exports.StepbarComponent = StepbarComponent;
    exports.StepbarModule = StepbarModule;
    exports.SynthesisComponent = SynthesisComponent;
    exports.SynthesisModule = SynthesisModule;
    exports.SyntheticDrawingComponent = SyntheticDrawingComponent;
    exports.SyntheticDrawingFormComponent = SyntheticDrawingFormComponent;
    exports.SyntheticDrawingModule = SyntheticDrawingModule;
    exports.ToastrTestingModule = ToastrTestingModule;
    exports.ViewComponent = ViewComponent;
    exports.WelcomeComponent = WelcomeComponent;
    exports.WelcomeModule = WelcomeModule;
    exports.mockEnvironment = mockEnvironment;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=luplink-ngx-luplink.umd.js.map
