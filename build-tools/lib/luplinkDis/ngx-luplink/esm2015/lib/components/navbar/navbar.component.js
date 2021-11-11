import { Component, Inject, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faAngleLeft, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import sanitize from 'sanitize-filename';
import ComputeLinkBudgetService from '../../services/compute-link-budget.service';
import { ENVIRONMENT_TOKEN } from '../../shared/dependencies';
import * as i0 from "@angular/core";
import * as i1 from "../../services/save-load.service";
import * as i2 from "../../form/form.service";
import * as i3 from "../../shared/logger/logger.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/router";
import * as i6 from "@angular/forms";
import * as i7 from "@fortawesome/angular-fontawesome";
const _c0 = ["titleInput"];
function NavbarComponent_strong_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", ctx_r2.formService.title, "", !ctx_r2.formService.isCurrentFormSaved ? "*" : "", "");
} }
function NavbarComponent_strong_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", ctx_r6.formService.title, "", !ctx_r6.formService.isCurrentFormSaved ? "*" : "", "");
} }
const _c1 = function (a0) { return { "is-active": a0 }; };
const _c2 = function (a0) { return { "is-hidden": a0 }; };
const _c3 = function (a0) { return { "is-loading": a0 }; };
const _c4 = ["*"];
// import { environment } from 'projects/luplink-app/src/environments/environment';
export class NavbarComponent {
    constructor(environment, saveLoadService, computeLinkBudget, formService, logger) {
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
        this.angleLeft = faAngleLeft;
        this.isEditingTitle = false;
        this.pencil = faPencilAlt;
        this.loading = false;
        this.globalFormValue = new FormGroup({});
        this.isNanospaceEnabled = this.environment.enableNanospace;
        if (!this.formService.isInitialized)
            this.formService.initForms();
        this.formService.getFormData$().subscribe((value) => {
            this.globalFormValue = value;
        });
    }
    get isNanospaceEnabled() {
        return this._isNanospaceEnabled;
    }
    set isNanospaceEnabled(value) {
        this.environment.enableNanospace = value;
        this._isNanospaceEnabled = value;
    }
    onBlur($event) {
        // We use the sanitize-filename node module to make sure everything is fine with the selected fileName (length, characters, ...)
        this.formService.title = sanitize($event.target.value);
        this.isEditingTitle = false;
    }
    editTitle() {
        this.isEditingTitle = true;
        setTimeout(() => {
            var _a;
            // this will make the execution after the above boolean has changed
            (_a = this.titleInput) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
        }, 0);
    }
    ngOnInit() {
        this.logger.info('Logging is enabled');
        // Prevent the user from losing data if he hasn't saved the current scenario
        // if (!this.debugMode) {
        window.addEventListener('beforeunload', (event) => {
            if (!this.formService.isCurrentFormSaved) {
                event.preventDefault();
                // eslint-disable-next-line no-param-reassign
                // event.returnValue = 'Unsaved modifications';
            }
            return event;
        });
        // }
    }
    save() {
        this.saveLoadService.exportConfigFile(this.formService.getFormData());
    }
    load(files) {
        if (files) {
            this.saveLoadService.importConfigFile(files);
        }
    }
    compute() {
        const obs = this.computeLinkBudget.computeLinkBudget();
        if (obs) {
            this.loading = true;
            const subscription = obs.subscribe((value) => {
                // this.logger.debug('value', value);
                this.computeLinkBudget.updateResult(value);
                // this.logger.debug("API response:", value)
                this.loading = false;
                subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
            }, (err) => {
                this.loading = false;
                this.logger.debug('error in compute()', err);
                subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
            });
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(i0.ɵɵdirectiveInject(ENVIRONMENT_TOKEN), i0.ɵɵdirectiveInject(i1.SaveLoadService), i0.ɵɵdirectiveInject(ComputeLinkBudgetService), i0.ɵɵdirectiveInject(i2.FormService), i0.ɵɵdirectiveInject(i3.LoggerService)); };
NavbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["lib-navbar"]], viewQuery: function NavbarComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.titleInput = _t.first);
    } }, ngContentSelectors: _c4, decls: 77, vars: 27, consts: [["role", "navigation", "aria-label", "main navigation", 1, "navbar", "is-primary"], [1, "navbar-brand"], [1, "navbar-item"], ["aria-label", "menu", "aria-expanded", "false", 1, "navbar-burger", "burger", 3, "ngClass", "click"], ["aria-hidden", "true"], ["id", "navbar", 1, "navbar-menu", 3, "ngClass"], [1, "navbar-start"], [1, "navbar-item", 3, "routerLink"], [1, "is-hidden-desktop"], [1, "navbar-item", "is-hoverable", 2, "padding-right", "16px", 3, "click"], ["id", "dev", "type", "checkbox", 2, "margin-left", "auto", 3, "ngModel", "ngModelChange"], [1, "navbar-item", 2, "padding-right", "16px", 3, "click"], ["type", "checkbox", 2, "margin-left", "auto", 3, "ngModel", "ngModelChange"], [1, "navbar-divider"], [1, "navbar-item", 3, "click"], [1, "file-input"], ["id", "file", "type", "file", "accept", ".json", 1, "file", 3, "change"], ["file", ""], ["for", "file", 1, "btn", "btn-primary", "btn-file"], [1, "navbar-end"], [1, "navbar-item", "has-dropdown", "is-hoverable", "is-hidden-touch"], [1, "navbar-link", 3, "click"], [2, "margin-right", "10px", 3, "icon"], ["id", "scenario-title", 4, "ngIf"], ["type", "text", "autofocus", "", 1, "input", 3, "ngClass", "value", "focusout"], ["titleInput", ""], [1, "navbar-menu", "navbar-dropdown"], [1, "navbar-item", "is-hidden-desktop"], [1, "navbar-link", "is-arrowless", 3, "click"], [1, "buttons"], [1, "button", "is-secondary", "compute", 3, "ngClass", "click"], ["id", "scenario-title"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = i0.ɵɵgetCurrentView();
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
        i0.ɵɵlistener("change", function NavbarComponent_Template_input_change_28_listener() { i0.ɵɵrestoreView(_r8); const _r0 = i0.ɵɵreference(29); return ctx.load(_r0.files); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "label", 18);
        i0.ɵɵtext(31, "Import");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(32, " Load ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "a", 2);
        i0.ɵɵelementStart(34, "input", 16, 17);
        i0.ɵɵlistener("change", function NavbarComponent_Template_input_change_34_listener() { i0.ɵɵrestoreView(_r8); const _r0 = i0.ɵɵreference(29); return ctx.load(_r0.files); });
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
        i0.ɵɵlistener("change", function NavbarComponent_Template_input_change_58_listener() { i0.ɵɵrestoreView(_r8); const _r0 = i0.ɵɵreference(29); return ctx.load(_r0.files); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(60, "label", 18);
        i0.ɵɵtext(61, "Import");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(62, " Load ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(63, "a", 2);
        i0.ɵɵelementStart(64, "input", 16, 17);
        i0.ɵɵlistener("change", function NavbarComponent_Template_input_change_64_listener() { i0.ɵɵrestoreView(_r8); const _r0 = i0.ɵɵreference(29); return ctx.load(_r0.files); });
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
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c1, ctx.isMenuBarVisible));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(19, _c1, ctx.isMenuBarVisible));
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
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(21, _c2, !ctx.isEditingTitle));
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
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(23, _c2, !ctx.isEditingTitle));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(25, _c3, ctx.loading));
    } }, directives: [i4.NgClass, i5.RouterLinkWithHref, i6.CheckboxControlValueAccessor, i6.NgControlStatus, i6.NgModel, i7.FaIconComponent, i4.NgIf], styles: [".navbar[_ngcontent-%COMP%]{min-height:auto;padding-bottom:0;padding-top:0}.navbar[_ngcontent-%COMP%]   .navbar-link[_ngcontent-%COMP%]:focus-within{background-color:#00b89c}.navbar-dropdown[_ngcontent-%COMP%] > .navbar-item[_ngcontent-%COMP%]{color:#4a4a4a!important}.navbar-end[_ngcontent-%COMP%]{align-items:center;display:inline-flex}.navbar-link[_ngcontent-%COMP%]:not(.is-arrowless):after{border-color:#fff!important}.button.is-secondary[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%]{color:initial}.navbar-link[_ngcontent-%COMP%]{color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{
                selector: 'lib-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ENVIRONMENT_TOKEN]
            }] }, { type: i1.SaveLoadService }, { type: ComputeLinkBudgetService }, { type: i2.FormService }, { type: i3.LoggerService }]; }, { titleInput: [{
            type: ViewChild,
            args: ['titleInput']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM3RSxPQUFPLFFBQVEsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLHdCQUF3QixNQUFNLDRDQUE0QyxDQUFDO0FBSWxGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7OztJQ3lDdEQsa0NBQzBCO0lBQUEsWUFDcEI7SUFBQSxpQkFBUzs7O0lBRFcsZUFDcEI7SUFEb0IsOEdBQ3BCOzs7SUFtQ04sa0NBQzBCO0lBQUEsWUFDcEI7SUFBQSxpQkFBUzs7O0lBRFcsZUFDcEI7SUFEb0IsOEdBQ3BCOzs7Ozs7QUQvRWQsbUZBQW1GO0FBT25GLE1BQU0sT0FBTyxlQUFlO0lBb0IxQixZQUNxQyxXQUFnQixFQUMzQyxlQUFnQyxFQUNqQyxpQkFBMkMsRUFDM0MsV0FBd0IsRUFDeEIsTUFBcUI7UUFKTyxnQkFBVyxHQUFYLFdBQVcsQ0FBSztRQUMzQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDakMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUMzQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixX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eUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDOztzQkFzQkksTUFBTTt1QkFBQyxpQkFBaUI7d0RBakN0Qix3QkFBd0IsZ0VBYUosVUFBVTtrQkFBbEMsU0FBUzttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmYUFuZ2xlTGVmdCwgZmFQZW5jaWxBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHNhbml0aXplIGZyb20gJ3Nhbml0aXplLWZpbGVuYW1lJztcbmltcG9ydCBDb21wdXRlTGlua0J1ZGdldFNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvY29tcHV0ZS1saW5rLWJ1ZGdldC5zZXJ2aWNlJztcbmltcG9ydCB7IFNhdmVMb2FkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NhdmUtbG9hZC5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZm9ybS9mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlRfVE9LRU4gfSBmcm9tICcuLi8uLi9zaGFyZWQvZGVwZW5kZW5jaWVzJztcbi8vIGltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAncHJvamVjdHMvbHVwbGluay1hcHAvc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uYXZiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2YmFyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RpdGxlSW5wdXQnKSB0aXRsZUlucHV0PzogRWxlbWVudFJlZjtcblxuICB0aXRsZSA9ICdMdXBsaW5rLXYwLjInO1xuICAvLyBGb3Igbm93IGRlYnVnIG1vZGUgZGlzYWJsZXMgdGhlIHJlbG9hZCB3YXJuaW5nLiBEZWJ1ZyBtb2RlIGlzIGRpc2FibGVkIGF1dG9tYXRpY2FsbHkgaW4gcHJvZCBtb2RlIGJ1dCBjYW4gYmUgZGlzYWJsZWQgbWFudWFsbHlcbiAgZGVidWdNb2RlID0gZmFsc2U7XG4gIHB1YmxpYyBpc01lbnVCYXJWaXNpYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzTmFub3NwYWNlRW5hYmxlZCA9IHRydWU7XG4gIGdldCBpc05hbm9zcGFjZUVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTmFub3NwYWNlRW5hYmxlZDtcbiAgfVxuICBzZXQgaXNOYW5vc3BhY2VFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudC5lbmFibGVOYW5vc3BhY2UgPSB2YWx1ZTtcbiAgICB0aGlzLl9pc05hbm9zcGFjZUVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBhbmdsZUxlZnQgPSBmYUFuZ2xlTGVmdDtcbiAgcHVibGljIGlzRWRpdGluZ1RpdGxlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBwZW5jaWwgPSBmYVBlbmNpbEFsdDtcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGdsb2JhbEZvcm1WYWx1ZTogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRU5WSVJPTk1FTlRfVE9LRU4pIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHNhdmVMb2FkU2VydmljZTogU2F2ZUxvYWRTZXJ2aWNlLFxuICAgIHB1YmxpYyBjb21wdXRlTGlua0J1ZGdldDogQ29tcHV0ZUxpbmtCdWRnZXRTZXJ2aWNlLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHVibGljIGxvZ2dlcjogTG9nZ2VyU2VydmljZVxuICApIHtcbiAgICB0aGlzLmlzTmFub3NwYWNlRW5hYmxlZCA9IHRoaXMuZW52aXJvbm1lbnQuZW5hYmxlTmFub3NwYWNlO1xuICAgIGlmICghdGhpcy5mb3JtU2VydmljZS5pc0luaXRpYWxpemVkKSB0aGlzLmZvcm1TZXJ2aWNlLmluaXRGb3JtcygpO1xuICAgIHRoaXMuZm9ybVNlcnZpY2UuZ2V0Rm9ybURhdGEkKCkuc3Vic2NyaWJlKCh2YWx1ZTogRm9ybUdyb3VwKSA9PiB7XG4gICAgICB0aGlzLmdsb2JhbEZvcm1WYWx1ZSA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG4gIG9uQmx1cigkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIC8vIFdlIHVzZSB0aGUgc2FuaXRpemUtZmlsZW5hbWUgbm9kZSBtb2R1bGUgdG8gbWFrZSBzdXJlIGV2ZXJ5dGhpbmcgaXMgZmluZSB3aXRoIHRoZSBzZWxlY3RlZCBmaWxlTmFtZSAobGVuZ3RoLCBjaGFyYWN0ZXJzLCAuLi4pXG4gICAgdGhpcy5mb3JtU2VydmljZS50aXRsZSA9IHNhbml0aXplKCRldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuaXNFZGl0aW5nVGl0bGUgPSBmYWxzZTtcbiAgfVxuXG4gIGVkaXRUaXRsZSgpIHtcbiAgICB0aGlzLmlzRWRpdGluZ1RpdGxlID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIHRoaXMgd2lsbCBtYWtlIHRoZSBleGVjdXRpb24gYWZ0ZXIgdGhlIGFib3ZlIGJvb2xlYW4gaGFzIGNoYW5nZWRcbiAgICAgIHRoaXMudGl0bGVJbnB1dD8ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnTG9nZ2luZyBpcyBlbmFibGVkJyk7XG4gICAgLy8gUHJldmVudCB0aGUgdXNlciBmcm9tIGxvc2luZyBkYXRhIGlmIGhlIGhhc24ndCBzYXZlZCB0aGUgY3VycmVudCBzY2VuYXJpb1xuICAgIC8vIGlmICghdGhpcy5kZWJ1Z01vZGUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZm9ybVNlcnZpY2UuaXNDdXJyZW50Rm9ybVNhdmVkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAvLyBldmVudC5yZXR1cm5WYWx1ZSA9ICdVbnNhdmVkIG1vZGlmaWNhdGlvbnMnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH0pO1xuICAgIC8vIH1cbiAgfVxuICBzYXZlKCkge1xuICAgIHRoaXMuc2F2ZUxvYWRTZXJ2aWNlLmV4cG9ydENvbmZpZ0ZpbGUodGhpcy5mb3JtU2VydmljZS5nZXRGb3JtRGF0YSgpKTtcbiAgfVxuXG4gIGxvYWQoZmlsZXM6IEZpbGVMaXN0IHwgbnVsbCkge1xuICAgIGlmIChmaWxlcykge1xuICAgICAgdGhpcy5zYXZlTG9hZFNlcnZpY2UuaW1wb3J0Q29uZmlnRmlsZShmaWxlcyk7XG4gICAgfVxuICB9XG4gIGNvbXB1dGUoKSB7XG4gICAgY29uc3Qgb2JzID0gdGhpcy5jb21wdXRlTGlua0J1ZGdldC5jb21wdXRlTGlua0J1ZGdldCgpO1xuICAgIGlmIChvYnMpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBvYnMuc3Vic2NyaWJlKFxuICAgICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZygndmFsdWUnLCB2YWx1ZSk7XG4gICAgICAgICAgdGhpcy5jb21wdXRlTGlua0J1ZGdldC51cGRhdGVSZXN1bHQodmFsdWUpO1xuICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKFwiQVBJIHJlc3BvbnNlOlwiLCB2YWx1ZSlcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnZXJyb3IgaW4gY29tcHV0ZSgpJywgZXJyKTtcbiAgICAgICAgICBzdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iLCI8bmF2IGNsYXNzPVwibmF2YmFyIGlzLXByaW1hcnlcIiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJtYWluIG5hdmlnYXRpb25cIj5cbiAgPGRpdiBjbGFzcz1cIm5hdmJhci1icmFuZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaXRlbVwiPkx1cGxpbms8L2Rpdj5cbiAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci1idXJnZXIgYnVyZ2VyXCIgW25nQ2xhc3NdPVwieyAnaXMtYWN0aXZlJzogaXNNZW51QmFyVmlzaWJsZSB9XCIgYXJpYS1sYWJlbD1cIm1lbnVcIlxuICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgKGNsaWNrKT1cImlzTWVudUJhclZpc2libGUgPSAhaXNNZW51QmFyVmlzaWJsZVwiPlxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzcz1cIm5hdmJhci1tZW51XCIgW25nQ2xhc3NdPVwieyAnaXMtYWN0aXZlJzogaXNNZW51QmFyVmlzaWJsZSB9XCI+XG4gICAgPGRpdiBjbGFzcz1cIm5hdmJhci1zdGFydFwiPlxuICAgICAgPGEgY2xhc3M9XCJuYXZiYXItaXRlbVwiIFtyb3V0ZXJMaW5rXT1cIicvbHVwbGluay9kaWFncmFtJ1wiPiBEaWFncmFtIDwvYT5cbiAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWl0ZW1cIiBbcm91dGVyTGlua109XCInL2x1cGxpbmsnXCI+IFNpbXBsZSBMaW5rIEJ1ZGdldCA8L2E+XG4gICAgICA8IS0tIDxhIGNsYXNzPVwibmF2YmFyLWl0ZW0gaXMtZGlzYWJsZWRcIj4gRnVsbCBMaW5rIEJ1ZGdldCA8L2E+IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImlzLWhpZGRlbi1kZXNrdG9wXCI+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWl0ZW1cIj5OZXcgTGluayBCdWRnZXQ8L2E+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWl0ZW0gaXMtaG92ZXJhYmxlXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxNnB4O1wiXG4gICAgICAgICAgKGNsaWNrKT1cInRoaXMubG9nZ2VyLmRldmVsb3BlciA9ICF0aGlzLmxvZ2dlci5kZXZlbG9wZXJcIj5cbiAgICAgICAgICBEZXZlbG9wZXIgbW9kZVxuICAgICAgICAgIDxpbnB1dCBzdHlsZT1cIm1hcmdpbi1sZWZ0OmF1dG9cIiBpZD1cImRldlwiIHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwidGhpcy5sb2dnZXIuZGV2ZWxvcGVyXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1pdGVtXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxNnB4O1wiXG4gICAgICAgICAgKGNsaWNrKT1cInRoaXMuaXNOYW5vc3BhY2VFbmFibGVkID0gIXRoaXMuaXNOYW5vc3BhY2VFbmFibGVkXCI+XG4gICAgICAgICAgRW5hYmxlIE5hbm9zcGFjZVxuICAgICAgICAgIDxpbnB1dCBzdHlsZT1cIm1hcmdpbi1sZWZ0OmF1dG9cIiB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cInRoaXMuaXNOYW5vc3BhY2VFbmFibGVkXCIgLz5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxociBjbGFzcz1cIm5hdmJhci1kaXZpZGVyXCIgLz5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItaXRlbVwiIChjbGljayk9XCJzYXZlKClcIj5TYXZlPC9hPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtaW5wdXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImZpbGVcIiBjbGFzcz1cImZpbGVcIiB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cIi5qc29uXCIgI2ZpbGUgKGNoYW5nZSk9XCJsb2FkKGZpbGUuZmlsZXMpXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlsZVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1maWxlXCI+SW1wb3J0PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBMb2FkXG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgIDxpbnB1dCBpZD1cImZpbGVcIiBjbGFzcz1cImZpbGVcIiB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cIi5qc29uXCIgI2ZpbGUgKGNoYW5nZSk9XCJsb2FkKGZpbGUuZmlsZXMpXCI+XG4gICAgICAgIDwvYT5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibmF2YmFyLWVuZFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWl0ZW0gaGFzLWRyb3Bkb3duIGlzLWhvdmVyYWJsZSBpcy1oaWRkZW4tdG91Y2hcIj5cbiAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWxpbmtcIiAoY2xpY2spPVwiZWRpdFRpdGxlKClcIj5cbiAgICAgICAgPGZhLWljb24gW2ljb25dPVwicGVuY2lsXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7XCI+PC9mYS1pY29uPlxuICAgICAgICA8c3Ryb25nIGlkPVwic2NlbmFyaW8tdGl0bGVcIlxuICAgICAgICAgICpuZ0lmPVwiIWlzRWRpdGluZ1RpdGxlXCI+e3t0aGlzLmZvcm1TZXJ2aWNlLnRpdGxlfX17eyF0aGlzLmZvcm1TZXJ2aWNlLmlzQ3VycmVudEZvcm1TYXZlZCA/ICcqJyA6XG4gICAgICAgICAgJyd9fTwvc3Ryb25nPlxuICAgICAgICA8aW5wdXQgI3RpdGxlSW5wdXQgdHlwZT1cInRleHRcIiBbbmdDbGFzc109XCJ7J2lzLWhpZGRlbic6ICF0aGlzLmlzRWRpdGluZ1RpdGxlfVwiIHZhbHVlPXt7dGhpcy5mb3JtU2VydmljZS50aXRsZX19XG4gICAgICAgICAgY2xhc3M9XCJpbnB1dFwiIChmb2N1c291dCk9XCJvbkJsdXIoJGV2ZW50KVwiIGF1dG9mb2N1cyAvPlxuICAgICAgPC9hPlxuICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1tZW51IG5hdmJhci1kcm9wZG93blwiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1pdGVtXCI+TmV3IExpbmsgQnVkZ2V0PC9hPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1pdGVtIGlzLWhvdmVyYWJsZVwiIHN0eWxlPVwicGFkZGluZy1yaWdodDogMTZweDtcIlxuICAgICAgICAgIChjbGljayk9XCJ0aGlzLmxvZ2dlci5kZXZlbG9wZXIgPSAhdGhpcy5sb2dnZXIuZGV2ZWxvcGVyXCI+XG4gICAgICAgICAgRGV2ZWxvcGVyIG1vZGVcbiAgICAgICAgICA8aW5wdXQgc3R5bGU9XCJtYXJnaW4tbGVmdDphdXRvXCIgaWQ9XCJkZXZcIiB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cInRoaXMubG9nZ2VyLmRldmVsb3BlclwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItaXRlbVwiIHN0eWxlPVwicGFkZGluZy1yaWdodDogMTZweDtcIlxuICAgICAgICAgIChjbGljayk9XCJ0aGlzLmlzTmFub3NwYWNlRW5hYmxlZCA9ICF0aGlzLmlzTmFub3NwYWNlRW5hYmxlZFwiPlxuICAgICAgICAgIEVuYWJsZSBOYW5vc3BhY2VcbiAgICAgICAgICA8aW5wdXQgc3R5bGU9XCJtYXJnaW4tbGVmdDphdXRvXCIgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJ0aGlzLmlzTmFub3NwYWNlRW5hYmxlZFwiIC8+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8aHIgY2xhc3M9XCJuYXZiYXItZGl2aWRlclwiIC8+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWl0ZW1cIiAoY2xpY2spPVwic2F2ZSgpXCI+U2F2ZTwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWlucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaWxlXCIgY2xhc3M9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCIuanNvblwiICNmaWxlIChjaGFuZ2UpPVwibG9hZChmaWxlLmZpbGVzKVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpbGVcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tZmlsZVwiPkltcG9ydDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgTG9hZFxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJmaWxlXCIgY2xhc3M9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCIuanNvblwiICNmaWxlIChjaGFuZ2UpPVwibG9hZChmaWxlLmZpbGVzKVwiPlxuICAgICAgICA8L2E+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaXRlbSBpcy1oaWRkZW4tZGVza3RvcFwiPlxuICAgICAgPGEgY2xhc3M9XCJuYXZiYXItbGluayBpcy1hcnJvd2xlc3NcIiAoY2xpY2spPVwiZWRpdFRpdGxlKClcIj5cbiAgICAgICAgPGZhLWljb24gW2ljb25dPVwicGVuY2lsXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7XCI+PC9mYS1pY29uPlxuICAgICAgICA8c3Ryb25nIGlkPVwic2NlbmFyaW8tdGl0bGVcIlxuICAgICAgICAgICpuZ0lmPVwiIWlzRWRpdGluZ1RpdGxlXCI+e3t0aGlzLmZvcm1TZXJ2aWNlLnRpdGxlfX17eyF0aGlzLmZvcm1TZXJ2aWNlLmlzQ3VycmVudEZvcm1TYXZlZCA/ICcqJyA6XG4gICAgICAgICAgJyd9fTwvc3Ryb25nPlxuICAgICAgICA8aW5wdXQgI3RpdGxlSW5wdXQgdHlwZT1cInRleHRcIiBbbmdDbGFzc109XCJ7J2lzLWhpZGRlbic6ICF0aGlzLmlzRWRpdGluZ1RpdGxlfVwiIHZhbHVlPXt7dGhpcy5mb3JtU2VydmljZS50aXRsZX19XG4gICAgICAgICAgY2xhc3M9XCJpbnB1dFwiIChmb2N1c291dCk9XCJvbkJsdXIoJGV2ZW50KVwiIGF1dG9mb2N1cyAvPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtc2Vjb25kYXJ5IGNvbXB1dGVcIiBbbmdDbGFzc109XCJ7ICdpcy1sb2FkaW5nJzogdGhpcy5sb2FkaW5nIH1cIlxuICAgICAgICAgIChjbGljayk9XCJ0aGlzLmNvbXB1dGUoKVwiPjxzdHJvbmc+Q29tcHV0ZTwvc3Ryb25nPjwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwhLS0gPC9kaXY+IC0tPlxuICA8L2Rpdj5cbjwvbmF2PlxuXG48IS0tIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLWZ1bGxoZWlnaHRcIj4gLS0+XG5cbjwhLS0gPGFwcC1zeW50aGVzaXM+PC9hcHAtc3ludGhlc2lzPiAtLT5cbjwhLS0gPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PiAtLT5cblxuPCEtLSA8L2Rpdj4gLS0+Il19