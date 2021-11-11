/* eslint-disable @typescript-eslint/quotes */
import { Component, Inject } from '@angular/core';
import { Antennas } from '../../shared/models/Antennas';
import { ENVIRONMENT_TOKEN, FORM_TEMPLATE_TOKEN } from '../../shared/dependencies';
import * as i0 from "@angular/core";
import * as i1 from "../../form/form.service";
import * as i2 from "@angular/router";
import * as i3 from "../../shared/logger/logger.service";
import * as i4 from "../../components/navigation-sidebar/navigation-sidebar.component";
import * as i5 from "../../components/stepbar/stepbar.component";
import * as i6 from "@angular/common";
import * as i7 from "../../components/card/card.component";
import * as i8 from "../../components/simple-documentation/simple-documentation.component";
import * as i9 from "../../components/results/components/sidebar/result-sidebar.component";
import * as i10 from "../../form/component/form.component";
import * as i11 from "../../luplink-jsatorb-import/luplink-jsatorb-import.component";
function LayoutComponent_div_6_lib_card_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "lib-card", 14);
    i0.ɵɵelement(1, "lib-luplink-jsatorb-import");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("title", "Import from JSatOrb");
} }
const _c0 = function (a0) { return { "is-hidden": a0 }; };
function LayoutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵtemplate(2, LayoutComponent_div_6_lib_card_2_Template, 2, 1, "lib-card", 13);
    i0.ɵɵelementStart(3, "lib-card", 14);
    i0.ɵɵelementStart(4, "lib-form", 15);
    i0.ɵɵlistener("formStatus", function LayoutComponent_div_6_Template_lib_form_formStatus_4_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.handleError($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "lib-card", 6);
    i0.ɵɵelementStart(6, "lib-form", 15);
    i0.ɵɵlistener("formStatus", function LayoutComponent_div_6_Template_lib_form_formStatus_6_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.handleError($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 12);
    i0.ɵɵelementStart(8, "lib-card", 6);
    i0.ɵɵelementStart(9, "lib-form", 15);
    i0.ɵɵlistener("formStatus", function LayoutComponent_div_6_Template_lib_form_formStatus_9_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.handleError($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "lib-card", 6);
    i0.ɵɵelement(11, "lib-simple-documentation", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isStandalone && ctx_r0.componentId == "geometry");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("title", ctx_r0.componentName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formTemplate", ctx_r0.currentTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("title", "Atmosphere")("ngClass", i0.ɵɵpureFunction1(12, _c0, !ctx_r0.hasAtmCard));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formTemplate", ctx_r0.atmosphere);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", ctx_r0.antennaName)("ngClass", i0.ɵɵpureFunction1(14, _c0, !ctx_r0.hasAntennaCard));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formTemplate", ctx_r0.currentAntenna);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("title", "Documentation")("ngClass", i0.ɵɵpureFunction1(16, _c0, ctx_r0.hasAntennaCard));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("component", ctx_r0.componentId);
} }
function LayoutComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "pre");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "json");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r1.formService.globalForm.value));
} }
export class LayoutComponent {
    constructor(environment, FormsTemplate, formService, route, logger) {
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
    ngOnInit() {
        this.validity.steps = {
            geometry: 'none',
            uplink: 'none',
            downlink: 'none',
            results: 'none',
        };
        Object.entries(this.templates).forEach(([pageKey, pageValue]) => {
            this.pageValidity[pageKey] = {};
            this.formValidity[pageKey] = {};
            Object.entries(pageValue).forEach(([key, value]) => {
                if (key !== 'step' && key !== 'name') {
                    const v = value;
                    this.pageValidity[pageKey][v.componentId] = 'unvisited';
                }
            });
        });
        this.route.queryParams.subscribe((params) => {
            if (params.component) {
                this.componentId = params.component;
            }
            const currentComponentTemplate = this.templates[this.componentId];
            if (currentComponentTemplate) {
                this.currentStep = currentComponentTemplate.step;
                this.componentName = currentComponentTemplate.name;
                this.currentTemplate = currentComponentTemplate.form;
                this.hasAntennaCard = false;
                this.hasAtmCard = false;
                if (currentComponentTemplate.antenna) {
                    this.currentAntenna = currentComponentTemplate.antenna;
                    this.antennaName = this.currentAntenna.componentName || 'Antenna';
                    this.hasAntennaCard = true;
                }
                if (currentComponentTemplate.atm) {
                    this.atmosphere = currentComponentTemplate.atm;
                    this.hasAtmCard = true;
                }
            }
            else {
                this.logger.debug("The selected template doesn't exist, please check the variable name used");
            }
        });
    }
    handleError(event) {
        if (event.id !== '' && this.componentId) {
            // this.logger.error(event.id, event.validity);
            this.pageValidity[this.componentId][event.id] = event.validity;
            this.refreshPageValidity(this.componentId);
            this.updateStepsValidity(this.componentId);
        }
    }
    refreshPageValidity(pageId) {
        /**
         * This function updates the validity of a page based on its internal 'formFragments' validities.
         * Once again, the dependency is the following :
         * "Step/Groups validity" --> "Pages validity" --> "FormFragments validity"
         * ex: Uplink validity --> Carrier, Transmitter, Receiver validities --> Carrier, Environment, Rx Antenna, ... validities
         *
         * This function could be tidied up. At least it is tested.
         */
        let valid = 'none';
        if (Object.values(this.pageValidity[pageId]).includes('invalid'))
            valid = 'invalid';
        if (Object.values(this.pageValidity[pageId]).every((item) => item === 'valid'))
            valid = 'valid';
        this.formValidity[pageId] = valid;
        if (!valid)
            this.logger.error(pageId);
    }
    updateStepsValidity(id) {
        const { step } = this.templates[this.componentId];
        let valid = true;
        let unvisited = false;
        let validity = 'valid';
        // this.logger.warn('validity', this.formValidity);
        this.inventory[step].forEach((neighbor) => {
            if (this.formValidity[neighbor] === 'invalid') {
                // this.logger.error('invalid neighbor', neighbor);
                valid = false;
            }
            if (!this.formValidity[neighbor]) {
                unvisited = true;
            }
        });
        if (!valid)
            validity = 'invalid';
        if (unvisited)
            validity = 'unvisited';
        this.validity.steps[step] = validity;
        // this.logger.warn('Current steps validity', this.validity.steps);
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(i0.ɵɵdirectiveInject(ENVIRONMENT_TOKEN), i0.ɵɵdirectiveInject(FORM_TEMPLATE_TOKEN), i0.ɵɵdirectiveInject(i1.FormService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.LoggerService)); };
LayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayoutComponent, selectors: [["lib-layout"]], decls: 13, vars: 10, consts: [[1, "columns", "is-fullheight"], [1, "column", "is-narrow", 3, "currentComponent"], [1, "column", "p-0"], [1, "section", "pt-2"], [3, "validity", "step"], ["class", "columns is-multiline", 4, "ngIf"], [3, "title", "ngClass"], [3, "component"], [1, "column", "p-0", "is-one-quarter"], [1, "section", "pl-0"], ["class", "column pl-0 is-one-fifth", 4, "ngIf"], [1, "columns", "is-multiline"], [1, "column", "is-half"], [3, "title", 4, "ngIf"], [3, "title"], [3, "formTemplate", "formStatus"], [1, "column", "pl-0", "is-one-fifth"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("currentComponent", ctx.componentId);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("validity", ctx.validity)("step", ctx.currentStep);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.componentId !== "results");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("title", "Documentation")("ngClass", i0.ɵɵpureFunction1(8, _c0, !ctx.hasAntennaCard || ctx.componentId === "results"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("component", ctx.componentId);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.logger.developer);
    } }, directives: [i4.NavigationSidebarComponent, i5.StepbarComponent, i6.NgIf, i7.CardComponent, i6.NgClass, i8.SimpleDocumentationComponent, i9.ResultSidebarComponent, i10.FormComponent, i11.JSatOrbLinkComponent], pipes: [i6.JsonPipe], styles: [".subform[_ngcontent-%COMP%]{max-width:900px;min-width:250px}.container[_ngcontent-%COMP%]{margin:25px;width:80%}.progressbar[_ngcontent-%COMP%]{counter-reset:step}.progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:left;font-size:12px;list-style-type:none;position:relative;text-align:center;text-transform:uppercase;width:25%}.progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{background-color:#fff;border:2px solid #7d7d7d;border-radius:50%;content:counter(step);counter-increment:step;display:block;height:30px;line-height:30px;margin:0 auto 10px;text-align:center;width:30px}.progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{background-color:#7d7d7d;content:\"\";height:2px;left:-50%;position:absolute;top:15px;width:100%;z-index:-1}.progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after{content:none}.progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:green}.progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:before{border-color:#55b776}.progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]:after{background-color:#55b776}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutComponent, [{
        type: Component,
        args: [{
                selector: 'lib-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ENVIRONMENT_TOKEN]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [FORM_TEMPLATE_TOKEN]
            }] }, { type: i1.FormService }, { type: i2.ActivatedRoute }, { type: i3.LoggerService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvdWkvbGluay1idWRnZXQvbGF5b3V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvdWkvbGluay1idWRnZXQvbGF5b3V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFJakUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7OztJQ0d6RSxvQ0FBdUc7SUFDckcsNkNBQXlEO0lBQzNELGlCQUFXOztJQUZELDZDQUErQjs7Ozs7SUFGN0MsK0JBQXlFO0lBQ3ZFLCtCQUE0QjtJQUMxQixpRkFFVztJQUNYLG9DQUF1QztJQUNyQyxvQ0FBbUY7SUFBekUsNE1BQWtDO0lBQXVDLGlCQUFXO0lBQ2hHLGlCQUFXO0lBQ1gsbUNBRUs7SUFDSCxvQ0FBOEU7SUFBcEUsNE1BQWtDO0lBQWtDLGlCQUFXO0lBQzNGLGlCQUFXO0lBQ2IsaUJBQU07SUFDTiwrQkFBNEI7SUFDMUIsbUNBRUs7SUFDSCxvQ0FBNkU7SUFBbkUsNE1BQWtDO0lBQWlDLGlCQUFXO0lBQzFGLGlCQUFXO0lBQ1gsb0NBRUs7SUFDSCwrQ0FBb0Y7SUFDdEYsaUJBQVc7SUFDYixpQkFBTTtJQUNSLGlCQUFNOzs7SUF4QnlDLGVBQTBEO0lBQTFELCtFQUEwRDtJQUczRixlQUE0QjtJQUE1Qiw0Q0FBNEI7SUFDUyxlQUFxQztJQUFyQyxxREFBcUM7SUFFekUsZUFBc0I7SUFBdEIsb0NBQXNCLDRE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QUFvQztRQUFwQyxvREFBb0M7UUEyQjdELGVBQXlCO1FBQXpCLHVDQUF5Qiw2RkFBQTtRQUdQLGVBQThCO1FBQTlCLDJDQUE4QjtRQVV2QixlQUEyQjtRQUEzQiwyQ0FBMkI7O3VGRGxDdkQsZUFBZTtjQUwzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDOztzQkFJSSxNQUFNO3VCQUFDLGlCQUFpQjs7c0JBQ3hCLE1BQU07dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3F1b3RlcyAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZm9ybS9mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvRm9ybS5tb2RlbCc7XG5pbXBvcnQgeyBBbnRlbm5hcyB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvQW50ZW5uYXMnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlRfVE9LRU4sIEZPUk1fVEVNUExBVEVfVE9LRU4gfSBmcm9tICcuLi8uLi9zaGFyZWQvZGVwZW5kZW5jaWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGlzU3RhbmRhbG9uZTogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEVOVklST05NRU5UX1RPS0VOKSBwcml2YXRlIGVudmlyb25tZW50OiBhbnksXG4gICAgQEluamVjdChGT1JNX1RFTVBMQVRFX1RPS0VOKSBwcml2YXRlIEZvcm1zVGVtcGxhdGU6IGFueSxcbiAgICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyBsb2dnZXI6IExvZ2dlclNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5pc1N0YW5kYWxvbmUgPSB0aGlzLmVudmlyb25tZW50LmlzU3RhbmRhbG9uZTsgLy8gVXNlZCB0byBrbm93IGlmIGFwcCBpcyBzdGFuZGFsb25lXG4gICAgLy8gRklYTUU6IE1vdmUgZWxzZXdoZXJlIHdpdGggbW9kZWxzXG4gICAgLy8gVGhpcyBsaW5rcyBlYWNoIHBhZ2UgdG8gaXRzIGNvbXBvbmVudHMgYW5kIGl0c1xuICAgIHRoaXMudGVtcGxhdGVzID0ge1xuICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgbmFtZTogJ0dlb21ldHJ5JyxcbiAgICAgICAgc3RlcDogJ2dlb21ldHJ5JyxcbiAgICAgICAgZm9ybTogRm9ybXNUZW1wbGF0ZS5nZW9tZXRyeSxcbiAgICAgIH0sXG4gICAgICBVTENhcnJpZXI6IHtcbiAgICAgICAgbmFtZTogJ1VwbGluayBDYXJyaWVyJyxcbiAgICAgICAgc3RlcDogJ3VwbGluaycsXG4gICAgICAgIGZvcm06IEZvcm1zVGVtcGxhdGUuVUxfY2FycmllcixcbiAgICAgICAgYXRtOiBGb3Jtc1RlbXBsYXRlLlVMX2F0bW9zcGhlcmUsXG4gICAgICB9LFxuICAgICAgVUxUcmFuc21pdHRlcjoge1xuICAgICAgICBuYW1lOiAnR3JvdW5kc3RhdGlvbiBUcmFuc21pdHRlcicsXG4gICAgICAgIHN0ZXA6ICd1cGxpbmsnLFxuICAgICAgICBmb3JtOiBGb3Jtc1RlbXBsYXRlLlVMX3RyYW5zbWl0dGVyX0dTLFxuICAgICAgICBhbnRlbm5hOiBGb3Jtc1RlbXBsYXRlLlVMX0dTX3R4X2FudGVubmEsXG4gICAgICB9LFxuICAgICAgVUxSZWNlaXZlcjoge1xuICAgICAgICBuYW1lOiAnU3BhY2VjcmFmdCBSZWNlaXZlcicsXG4gICAgICAgIHN0ZXA6ICd1cGxpbmsnLFxuICAgICAgICBmb3JtOiBGb3Jtc1RlbXBsYXRlLlVMX3JlY2VpdmVyX1NDLFxuICAgICAgICBhbnRlbm5hOiBGb3Jtc1RlbXBsYXRlLlVMX1NDX3J4X2FudGVubmEsXG4gICAgICB9LFxuICAgICAgRExDYXJyaWVyOiB7XG4gICAgICAgIG5hbWU6ICdVcGxpbmsgQ2FycmllcicsXG4gICAgICAgIHN0ZXA6ICdkb3dubGluaycsXG4gICAgICAgIGZvcm06IEZvcm1zVGVtcGxhdGUuRExfY2FycmllcixcbiAgICAgICAgYXRtOiBGb3Jtc1RlbXBsYXRlLkRMX2F0bW9zcGhlcmUsXG4gICAgICB9LFxuICAgICAgRExUcmFuc21pdHRlcjoge1xuICAgICAgICBuYW1lOiAnR3JvdW5kc3RhdGlvbiBUcmFuc21pdHRlcicsXG4gICAgICAgIHN0ZXA6ICdkb3dubGluaycsXG4gICAgICAgIGZvcm06IEZvcm1zVGVtcGxhdGUuRExfdHJhbnNtaXR0ZXJfU0MsXG4gICAgICAgIGFudGVubmE6IEZvcm1zVGVtcGxhdGUuRExfU0NfdHhfYW50ZW5uYSxcbiAgICAgIH0sXG4gICAgICBETFJlY2VpdmVyOiB7XG4gICAgICAgIG5hbWU6ICdTcGFjZWNyYWZ0IFJlY2VpdmVyJyxcbiAgICAgICAgc3RlcDogJ2Rvd25saW5rJyxcbiAgICAgICAgZm9ybTogRm9ybXNUZW1wbGF0ZS5ETF9yZWNlaXZlcl9HUyxcbiAgICAgICAgYW50ZW5uYTogRm9ybXNUZW1wbGF0ZS5ETF9HU19yeF9hbnRlbm5hLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIC8qIEludmVudG9yeSBnaXZlcyBhY2Nlc3MgdG8gbmVpZ2hib3IgZm9yIGVhY2ggc3RlcCxcbiAgdXNlZnVsIHdoZW4gb25lIG9mIHRoZSBwYWdlIGlzIHVwZGF0ZWQgYW5kIHdlIHdhbnQgdG9cbiAga25vdyBpZiBzdGVwIGlzIGNvbXBsZXRlIDogcGFnZSAtPiBzdGVwIC0+IG5laWdoYm9ycyAqL1xuICBwcml2YXRlIGludmVudG9yeTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge1xuICAgIGdlb21ldHJ5OiBbJ2dlb21ldHJ5J10sXG4gICAgdXBsaW5rOiBbJ1VMQ2FycmllcicsICdVTFRyYW5zbWl0dGVyJywgJ1VMUmVjZWl2ZXInXSxcbiAgICBkb3dubGluazogWydETENhcnJpZXInLCAnRExUcmFuc21pdHRlcicsICdETFJlY2VpdmVyJ10sXG4gIH07XG5cbiAgcHVibGljIHZhbGlkaXR5OiBhbnkgPSB7fTtcblxuICAvLyBCb3RoIGFyZSBwdWJsaWMgZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgcHVibGljIGZvcm1WYWxpZGl0eTogYW55ID0ge307XG4gIHB1YmxpYyBwYWdlVmFsaWRpdHk6IGFueSA9IHt9O1xuXG4gIHB1YmxpYyBjb21wb25lbnROYW1lOiBzdHJpbmcgPSAnR2VvbWV0cnknO1xuICBwdWJsaWMgY29tcG9uZW50SWQ6IHN0cmluZyA9ICdnZW9tZXRyeSc7XG4gIHB1YmxpYyBjdXJyZW50U3RlcDogc3RyaW5nID0gJ2dlb21ldHJ5JztcblxuICBwdWJsaWMgY3VycmVudFRlbXBsYXRlOiBGb3JtID0gdGhpcy5Gb3Jtc1RlbXBsYXRlLmdlb21ldHJ5O1xuICBwdWJsaWMgY3VycmVudEFudGVubmE6IEZvcm0gPSBBbnRlbm5hcy5nZW5lcmljQW50ZW5uYTtcbiAgcHVibGljIGF0bW9zcGhlcmU6IEZvcm0gPSB0aGlzLkZvcm1zVGVtcGxhdGUuVUxfYXRtb3NwaGVyZTtcbiAgcHVibGljIGFudGVubmFOYW1lOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGhhc0FudGVubmFDYXJkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBoYXNBdG1DYXJkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB0ZW1wbGF0ZXM6IHsgW2tleTogc3RyaW5nXTogeyBuYW1lOiBzdHJpbmc7IHN0ZXA6IHN0cmluZzsgZm9ybTogRm9ybTsgYXRtPzogRm9ybTsgYW50ZW5uYT86IEZvcm0gfSB9ID0ge307XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy52YWxpZGl0eS5zdGVwcyA9IHtcbiAgICAgIGdlb21ldHJ5OiAnbm9uZScsXG4gICAgICB1cGxpbms6ICdub25lJyxcbiAgICAgIGRvd25saW5rOiAnbm9uZScsXG4gICAgICByZXN1bHRzOiAnbm9uZScsXG4gICAgfTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMudGVtcGxhdGVzKS5mb3JFYWNoKChbcGFnZUtleSwgcGFnZVZhbHVlXSkgPT4ge1xuICAgICAgdGhpcy5wYWdlVmFsaWRpdHlbcGFnZUtleV0gPSB7fTtcbiAgICAgIHRoaXMuZm9ybVZhbGlkaXR5W3BhZ2VLZXldID0ge307XG4gICAgICBPYmplY3QuZW50cmllcyhwYWdlVmFsdWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBpZiAoa2V5ICE9PSAnc3RlcCcgJiYga2V5ICE9PSAnbmFtZScpIHtcbiAgICAgICAgICBjb25zdCB2ID0gPEZvcm0+dmFsdWU7XG4gICAgICAgICAgdGhpcy5wYWdlVmFsaWRpdHlbcGFnZUtleV1bdi5jb21wb25lbnRJZF0gPSAndW52aXNpdGVkJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICBpZiAocGFyYW1zLmNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudElkID0gcGFyYW1zLmNvbXBvbmVudDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGN1cnJlbnRDb21wb25lbnRUZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzW3RoaXMuY29tcG9uZW50SWRdO1xuICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRUZW1wbGF0ZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gY3VycmVudENvbXBvbmVudFRlbXBsYXRlLnN0ZXA7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TmFtZSA9IGN1cnJlbnRDb21wb25lbnRUZW1wbGF0ZS5uYW1lO1xuICAgICAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IGN1cnJlbnRDb21wb25lbnRUZW1wbGF0ZS5mb3JtO1xuICAgICAgICB0aGlzLmhhc0FudGVubmFDYXJkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzQXRtQ2FyZCA9IGZhbHNlO1xuICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudFRlbXBsYXRlLmFudGVubmEpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRBbnRlbm5hID0gY3VycmVudENvbXBvbmVudFRlbXBsYXRlLmFudGVubmE7XG4gICAgICAgICAgdGhpcy5hbnRlbm5hTmFtZSA9IHRoaXMuY3VycmVudEFudGVubmEuY29tcG9uZW50TmFtZSB8fCAnQW50ZW5uYSc7XG4gICAgICAgICAgdGhpcy5oYXNBbnRlbm5hQ2FyZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRUZW1wbGF0ZS5hdG0pIHtcbiAgICAgICAgICB0aGlzLmF0bW9zcGhlcmUgPSBjdXJyZW50Q29tcG9uZW50VGVtcGxhdGUuYXRtO1xuICAgICAgICAgIHRoaXMuaGFzQXRtQ2FyZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiVGhlIHNlbGVjdGVkIHRlbXBsYXRlIGRvZXNuJ3QgZXhpc3QsIHBsZWFzZSBjaGVjayB0aGUgdmFyaWFibGUgbmFtZSB1c2VkXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUVycm9yKGV2ZW50OiB7IGlkOiBzdHJpbmc7IHZhbGlkaXR5OiAndmFsaWQnIHwgJ2ludmFsaWQnIHwgJ25vbmUnIH0pIHtcbiAgICBpZiAoZXZlbnQuaWQgIT09ICcnICYmIHRoaXMuY29tcG9uZW50SWQpIHtcbiAgICAgIC8vIHRoaXMubG9nZ2VyLmVycm9yKGV2ZW50LmlkLCBldmVudC52YWxpZGl0eSk7XG4gICAgICB0aGlzLnBhZ2VWYWxpZGl0eVt0aGlzLmNvbXBvbmVudElkXVtldmVudC5pZF0gPSBldmVudC52YWxpZGl0eTtcbiAgICAgIHRoaXMucmVmcmVzaFBhZ2VWYWxpZGl0eSh0aGlzLmNvbXBvbmVudElkKTtcbiAgICAgIHRoaXMudXBkYXRlU3RlcHNWYWxpZGl0eSh0aGlzLmNvbXBvbmVudElkKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaFBhZ2VWYWxpZGl0eShwYWdlSWQ6IHN0cmluZykge1xuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyB0aGUgdmFsaWRpdHkgb2YgYSBwYWdlIGJhc2VkIG9uIGl0cyBpbnRlcm5hbCAnZm9ybUZyYWdtZW50cycgdmFsaWRpdGllcy5cbiAgICAgKiBPbmNlIGFnYWluLCB0aGUgZGVwZW5kZW5jeSBpcyB0aGUgZm9sbG93aW5nIDpcbiAgICAgKiBcIlN0ZXAvR3JvdXBzIHZhbGlkaXR5XCIgLS0+IFwiUGFnZXMgdmFsaWRpdHlcIiAtLT4gXCJGb3JtRnJhZ21lbnRzIHZhbGlkaXR5XCJcbiAgICAgKiBleDogVXBsaW5rIHZhbGlkaXR5IC0tPiBDYXJyaWVyLCBUcmFuc21pdHRlciwgUmVjZWl2ZXIgdmFsaWRpdGllcyAtLT4gQ2FycmllciwgRW52aXJvbm1lbnQsIFJ4IEFudGVubmEsIC4uLiB2YWxpZGl0aWVzXG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNvdWxkIGJlIHRpZGllZCB1cC4gQXQgbGVhc3QgaXQgaXMgdGVzdGVkLlxuICAgICAqL1xuICAgIGxldCB2YWxpZCA9ICdub25lJztcbiAgICBpZiAoT2JqZWN0LnZhbHVlcyh0aGlzLnBhZ2VWYWxpZGl0eVtwYWdlSWRdKS5pbmNsdWRlcygnaW52YWxpZCcpKSB2YWxpZCA9ICdpbnZhbGlkJztcbiAgICBpZiAoT2JqZWN0LnZhbHVlcyh0aGlzLnBhZ2VWYWxpZGl0eVtwYWdlSWRdKS5ldmVyeSgoaXRlbSkgPT4gaXRlbSA9PT0gJ3ZhbGlkJykpIHZhbGlkID0gJ3ZhbGlkJztcbiAgICB0aGlzLmZvcm1WYWxpZGl0eVtwYWdlSWRdID0gdmFsaWQ7XG4gICAgaWYgKCF2YWxpZCkgdGhpcy5sb2dnZXIuZXJyb3IocGFnZUlkKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVTdGVwc1ZhbGlkaXR5KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCB7IHN0ZXAgfSA9IHRoaXMudGVtcGxhdGVzW3RoaXMuY29tcG9uZW50SWRdO1xuICAgIGxldCB2YWxpZDogYm9vbGVhbiA9IHRydWU7XG4gICAgbGV0IHVudmlzaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCB2YWxpZGl0eTogc3RyaW5nID0gJ3ZhbGlkJztcblxuICAgIC8vIHRoaXMubG9nZ2VyLndhcm4oJ3ZhbGlkaXR5JywgdGhpcy5mb3JtVmFsaWRpdHkpO1xuICAgIHRoaXMuaW52ZW50b3J5W3N0ZXBdLmZvckVhY2goKG5laWdoYm9yKSA9PiB7XG4gICAgICBpZiAodGhpcy5mb3JtVmFsaWRpdHlbbmVpZ2hib3JdID09PSAnaW52YWxpZCcpIHtcbiAgICAgICAgLy8gdGhpcy5sb2dnZXIuZXJyb3IoJ2ludmFsaWQgbmVpZ2hib3InLCBuZWlnaGJvcik7XG4gICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZm9ybVZhbGlkaXR5W25laWdoYm9yXSkge1xuICAgICAgICB1bnZpc2l0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghdmFsaWQpIHZhbGlkaXR5ID0gJ2ludmFsaWQnO1xuICAgIGlmICh1bnZpc2l0ZWQpIHZhbGlkaXR5ID0gJ3VudmlzaXRlZCc7XG4gICAgdGhpcy52YWxpZGl0eS5zdGVwc1tzdGVwXSA9IHZhbGlkaXR5O1xuXG4gICAgLy8gdGhpcy5sb2dnZXIud2FybignQ3VycmVudCBzdGVwcyB2YWxpZGl0eScsIHRoaXMudmFsaWRpdHkuc3RlcHMpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1mdWxsaGVpZ2h0XCI+XG4gIDxsaWItbmF2aWdhdGlvbi1zaWRlYmFyIGNsYXNzPVwiY29sdW1uIGlzLW5hcnJvd1wiIFtjdXJyZW50Q29tcG9uZW50XT1cInRoaXMuY29tcG9uZW50SWRcIj48L2xpYi1uYXZpZ2F0aW9uLXNpZGViYXI+XG4gIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLWZ1bGxoZWlnaHRcIj5cbiAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gcC0wXCI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uIHB0LTJcIj5cblxuICAgIDxsaWItc3RlcGJhciBbdmFsaWRpdHldPVwidGhpcy52YWxpZGl0eVwiIFtzdGVwXT1cInRoaXMuY3VycmVudFN0ZXBcIj48L2xpYi1zdGVwYmFyPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIiAqbmdJZj1cInRoaXMuY29tcG9uZW50SWQgIT09ICdyZXN1bHRzJ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLWhhbGZcIj5cbiAgICAgICAgICA8bGliLWNhcmQgW3RpdGxlXT1cIidJbXBvcnQgZnJvbSBKU2F0T3JiJ1wiICpuZ0lmPVwiIXRoaXMuaXNTdGFuZGFsb25lICYmIHRoaXMuY29tcG9uZW50SWQgPT0gJ2dlb21ldHJ5J1wiPlxuICAgICAgICAgICAgPGxpYi1sdXBsaW5rLWpzYXRvcmItaW1wb3J0PjwvbGliLWx1cGxpbmstanNhdG9yYi1pbXBvcnQ+XG4gICAgICAgICAgPC9saWItY2FyZD5cbiAgICAgICAgICA8bGliLWNhcmQgW3RpdGxlXT1cInRoaXMuY29tcG9uZW50TmFtZVwiPlxuICAgICAgICAgICAgPGxpYi1mb3JtIChmb3JtU3RhdHVzKT1cImhhbmRsZUVycm9yKCRldmVudClcIiBbZm9ybVRlbXBsYXRlXT1cInRoaXMuY3VycmVudFRlbXBsYXRlXCI+PC9saWItZm9ybT5cbiAgICAgICAgICA8L2xpYi1jYXJkPlxuICAgICAgICAgIDxsaWItY2FyZCAgW3RpdGxlXT1cIidBdG1vc3BoZXJlJ1wiIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgJ2lzLWhpZGRlbic6ICFoYXNBdG1DYXJkXG4gICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICA8bGliLWZvcm0gKGZvcm1TdGF0dXMpPVwiaGFuZGxlRXJyb3IoJGV2ZW50KVwiIFtmb3JtVGVtcGxhdGVdPVwidGhpcy5hdG1vc3BoZXJlXCI+PC9saWItZm9ybT5cbiAgICAgICAgICA8L2xpYi1jYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1oYWxmXCI+XG4gICAgICAgICAgPGxpYi1jYXJkIFt0aXRsZV09XCJhbnRlbm5hTmFtZVwiIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgJ2lzLWhpZGRlbic6ICFoYXNBbnRlbm5hQ2FyZFxuICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgPGxpYi1mb3JtIChmb3JtU3RhdHVzKT1cImhhbmRsZUVycm9yKCRldmVudClcIiBbZm9ybVRlbXBsYXRlXT1cImN1cnJlbnRBbnRlbm5hXCI+PC9saWItZm9ybT5cbiAgICAgICAgICA8L2xpYi1jYXJkPlxuICAgICAgICAgIDxsaWItY2FyZCBbdGl0bGVdPVwiJ0RvY3VtZW50YXRpb24nXCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAnaXMtaGlkZGVuJzogaGFzQW50ZW5uYUNhcmRcbiAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgIDxsaWItc2ltcGxlLWRvY3VtZW50YXRpb24gW2NvbXBvbmVudF09XCJ0aGlzLmNvbXBvbmVudElkXCI+PC9saWItc2ltcGxlLWRvY3VtZW50YXRpb24+XG4gICAgICAgICAgPC9saWItY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxsaWItY2FyZCBbdGl0bGVdPVwiJ0RvY3VtZW50YXRpb24nXCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICdpcy1oaWRkZW4nOiAoIWhhc0FudGVubmFDYXJkIHx8IHRoaXMuY29tcG9uZW50SWQgPT09ICdyZXN1bHRzJylcbiAgICAgICAgfVwiPlxuICAgICAgICA8bGliLXNpbXBsZS1kb2N1bWVudGF0aW9uIFtjb21wb25lbnRdPVwidGhpcy5jb21wb25lbnRJZFwiPjwvbGliLXNpbXBsZS1kb2N1bWVudGF0aW9uPlxuICAgICAgPC9saWItY2FyZD5cbiAgICA8L3NlY3Rpb24+XG4gIDwvZGl2PlxuICBcbiAgPGRpdiBjbGFzcz1cImNvbHVtbiBwLTAgaXMtb25lLXF1YXJ0ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbiBwbC0wXCI+XG4gICAgPGxpYi1yZXN1bHQtc2lkZWJhcj48L2xpYi1yZXN1bHQtc2lkZWJhcj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2x1bW4gcGwtMCBpcy1vbmUtZmlmdGhcIiAqbmdJZj1cInRoaXMubG9nZ2VyLmRldmVsb3BlclwiPlxuICAgIDxwcmUgPnt7IGZvcm1TZXJ2aWNlLmdsb2JhbEZvcm0udmFsdWUgfCBqc29uIH19PC9wcmU+XG4gIDwvZGl2PlxuPC9kaXY+XG48L2Rpdj5cbjwhLS0gPGxpYi1uYXZpZ2F0aW9uLXNpZGViYXIgW2N1cnJlbnRDb21wb25lbnRdPVwidGhpcy5jb21wb25lbnRJZFwiPjwvbGliLW5hdmlnYXRpb24tc2lkZWJhcj5cbjxsaWItY2FyZCBbdGl0bGVdPVwidGhpcy5jb21wb25lbnROYW1lXCI+XG4gIDxsaWItZm9ybSAoZm9ybVN0YXR1cyk9XCJoYW5kbGVFcnJvcigkZXZlbnQpXCIgW2Zvcm1UZW1wbGF0ZV09XCJ0aGlzLmN1cnJlbnRUZW1wbGF0ZVwiPjwvbGliLWZvcm0+XG48L2xpYi1jYXJkPiAtLT5cbiJdfQ==