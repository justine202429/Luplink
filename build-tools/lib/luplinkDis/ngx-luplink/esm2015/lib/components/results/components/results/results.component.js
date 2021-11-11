import { Component, Input } from '@angular/core';
import { faAngleDown, faCheckCircle, faExclamationTriangle, faFileDownload, faTimesCircle, } from '@fortawesome/free-solid-svg-icons';
import ComputeLinkBudgetService from '../../../../services/compute-link-budget.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../shared/logger/logger.service";
import * as i2 from "../../../../form/form.service";
import * as i3 from "../../../synthetic-drawing/synthetic-drawing-form.service";
import * as i4 from "@angular/common";
import * as i5 from "@fortawesome/angular-fontawesome";
import * as i6 from "../../../card/card.component";
import * as i7 from "../../../navigation-sidebar/navigation-sidebar.component";
import * as i8 from "../../../synthetic-drawing/synthetic-drawing-display/synthetic-drawing.component";
const _c0 = function (a0) { return { "active-row": a0 }; };
function ResultsComponent_lib_card_0_ng_container_11_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const elt_r7 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx_r6.showUplink ? ctx_r6.deltaUL.includes(elt_r7.name) : ctx_r6.deltaDL.includes(elt_r7.name)));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.params[elt_r7.name].label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(6, 4, elt_r7.value, ".1-2"), " ", elt_r7.unit, " ");
} }
function ResultsComponent_lib_card_0_ng_container_11_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ResultsComponent_lib_card_0_ng_container_11_ng_container_7_ng_container_1_Template, 7, 9, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const section_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", section_r4.elt);
} }
function ResultsComponent_lib_card_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 15);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 16);
    i0.ɵɵlistener("click", function ResultsComponent_lib_card_0_ng_container_11_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r10); const section_r4 = ctx.$implicit; const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.showUplink ? (ctx_r9.collapsed.uplink[section_r4.group] = !ctx_r9.collapsed.uplink[section_r4.group]) : (ctx_r9.collapsed.downlink[section_r4.group] = !ctx_r9.collapsed.downlink[section_r4.group]); });
    i0.ɵɵelementStart(5, "span", 17);
    i0.ɵɵelement(6, "fa-icon", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ResultsComponent_lib_card_0_ng_container_11_ng_container_7_Template, 2, 1, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(section_r4.group);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("transform", "rotate-", (ctx_r3.showUplink ? ctx_r3.collapsed.uplink[section_r4.group] : ctx_r3.collapsed.downlink[section_r4.group]) ? 0 : 180, "");
    i0.ɵɵproperty("icon", ctx_r3.faAngleDown);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.showUplink ? !ctx_r3.collapsed.uplink[section_r4.group] : !ctx_r3.collapsed.downlink[section_r4.group]);
} }
const _c1 = function (a0) { return { "is-active": a0 }; };
function ResultsComponent_lib_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "lib-card");
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "ul", 11);
    i0.ɵɵelementStart(3, "li", 12);
    i0.ɵɵlistener("click", function ResultsComponent_lib_card_0_Template_li_click_3_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.showUplink = true; });
    i0.ɵɵelementStart(4, "a");
    i0.ɵɵtext(5, "Uplink");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "li", 12);
    i0.ɵɵlistener("click", function ResultsComponent_lib_card_0_Template_li_click_6_listener() { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.showUplink = false; });
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
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1, ctx_r0.showUplink));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c1, !ctx_r0.showUplink));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r0.showUplink ? "animate__slideInLeft" : "animate__slideInRight");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.showUplink ? ctx_r0.fullResult2.uplink : ctx_r0.fullResult2.downlink);
} }
function ResultsComponent_lib_navigation_sidebar_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-navigation-sidebar", 22);
} if (rf & 2) {
    i0.ɵɵproperty("currentComponent", "results");
} }
function ResultsComponent_div_15_lib_card_3_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 33);
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("icon", ctx_r18.faCheck);
} }
function ResultsComponent_div_15_lib_card_3_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 33);
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("icon", ctx_r19.faWarn);
} }
function ResultsComponent_div_15_lib_card_3_fa_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 33);
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("icon", ctx_r20.faError);
} }
function ResultsComponent_div_15_lib_card_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "lib-card", 29);
    i0.ɵɵelementStart(1, "div", 30);
    i0.ɵɵtemplate(2, ResultsComponent_div_15_lib_card_3_fa_icon_2_Template, 1, 1, "fa-icon", 31);
    i0.ɵɵtemplate(3, ResultsComponent_div_15_lib_card_3_fa_icon_3_Template, 1, 1, "fa-icon", 31);
    i0.ɵɵtemplate(4, ResultsComponent_div_15_lib_card_3_fa_icon_4_Template, 1, 1, "fa-icon", 31);
    i0.ɵɵelement(5, "p", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("styleClass", ctx_r14.linkStatus.uplink.status || "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r14.linkStatus.uplink.status === "is-success");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r14.linkStatus.uplink.status === "is-warning");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r14.linkStatus.uplink.status === "is-danger");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r14.linkStatus.uplink.message, i0.ɵɵsanitizeHtml);
} }
function ResultsComponent_div_15_ng_container_6_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const elt_r24 = ctx.$implicit;
    const ctx_r23 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx_r23.deltaUL.includes(elt_r24.name)));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r23.params[elt_r24.name].label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(6, 4, elt_r24.value, ".1-2"), " ", elt_r24.unit, " ");
} }
function ResultsComponent_div_15_ng_container_6_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ResultsComponent_div_15_ng_container_6_ng_container_7_ng_container_1_Template, 7, 9, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const section_r21 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", section_r21.elt);
} }
function ResultsComponent_div_15_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 15);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 16);
    i0.ɵɵlistener("click", function ResultsComponent_div_15_ng_container_6_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r27); const section_r21 = ctx.$implicit; const ctx_r26 = i0.ɵɵnextContext(2); return (ctx_r26.collapsed.uplink[section_r21.group] = !ctx_r26.collapsed.uplink[section_r21.group]); });
    i0.ɵɵelementStart(5, "span", 17);
    i0.ɵɵelement(6, "fa-icon", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ResultsComponent_div_15_ng_container_6_ng_container_7_Template, 2, 1, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const section_r21 = ctx.$implicit;
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(section_r21.group);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("transform", "rotate-", ctx_r15.collapsed.uplink[section_r21.group] ? 0 : 180, "");
    i0.ɵɵproperty("icon", ctx_r15.faAngleDown);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r15.collapsed.uplink[section_r21.group]);
} }
function ResultsComponent_div_15_lib_card_14_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 33);
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("icon", ctx_r28.faCheck);
} }
function ResultsComponent_div_15_lib_card_14_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 33);
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("icon", ctx_r29.faWarn);
} }
function ResultsComponent_div_15_lib_card_14_fa_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 33);
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("icon", ctx_r30.faError);
} }
function ResultsComponent_div_15_lib_card_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "lib-card", 29);
    i0.ɵɵelementStart(1, "div", 30);
    i0.ɵɵtemplate(2, ResultsComponent_div_15_lib_card_14_fa_icon_2_Template, 1, 1, "fa-icon", 31);
    i0.ɵɵtemplate(3, ResultsComponent_div_15_lib_card_14_fa_icon_3_Template, 1, 1, "fa-icon", 31);
    i0.ɵɵtemplate(4, ResultsComponent_div_15_lib_card_14_fa_icon_4_Template, 1, 1, "fa-icon", 31);
    i0.ɵɵelement(5, "p", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("styleClass", ctx_r16.linkStatus.downlink.status || "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r16.linkStatus.downlink.status === "is-success");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r16.linkStatus.downlink.status === "is-warning");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r16.linkStatus.downlink.status === "is-danger");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r16.linkStatus.downlink.message, i0.ɵɵsanitizeHtml);
} }
function ResultsComponent_div_15_ng_container_17_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const elt_r34 = ctx.$implicit;
    const ctx_r33 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx_r33.deltaDL.includes(elt_r34.name)));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r33.params[elt_r34.name].label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(6, 4, elt_r34.value, ".1-2"), " ", elt_r34.unit, " ");
} }
function ResultsComponent_div_15_ng_container_17_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ResultsComponent_div_15_ng_container_17_ng_container_7_ng_container_1_Template, 7, 9, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const section_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", section_r31.elt);
} }
function ResultsComponent_div_15_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 15);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 16);
    i0.ɵɵlistener("click", function ResultsComponent_div_15_ng_container_17_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r37); const section_r31 = ctx.$implicit; const ctx_r36 = i0.ɵɵnextContext(2); return (ctx_r36.collapsed.downlink[section_r31.group] = !ctx_r36.collapsed.downlink[section_r31.group]); });
    i0.ɵɵelementStart(5, "span", 17);
    i0.ɵɵelement(6, "fa-icon", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ResultsComponent_div_15_ng_container_17_ng_container_7_Template, 2, 1, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const section_r31 = ctx.$implicit;
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(section_r31.group);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("transform", "rotate-", ctx_r17.collapsed.downlink[section_r31.group] ? 0 : 180, "");
    i0.ɵɵproperty("icon", ctx_r17.faAngleDown);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r17.collapsed.downlink[section_r31.group]);
} }
function ResultsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
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
} }
export class ResultsComponent {
    constructor(computeLinkBudget, logger, formService, drawingService) {
        this.computeLinkBudget = computeLinkBudget;
        this.logger = logger;
        this.formService = formService;
        this.drawingService = drawingService;
        this.faCheck = faCheckCircle;
        this.faWarn = faExclamationTriangle;
        this.faError = faTimesCircle;
        this.download = faFileDownload;
        this.statusStyle = '';
        this.previousCalculationResults = { uplink: [], downlink: [] };
        this.deltaUL = []; // Stores the difference with previous value
        this.deltaDL = [];
        this.showUplink = true;
        // public diagramComponents: any;
        // public powerIn: number;
        this.faAngleDown = faAngleDown;
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
        this.fullKeys2.forEach((section) => {
            // Building a default array before the first calculation
            const k = section.value.map((id) => ({ name: id, value: 0, unit: '' }));
            this.fullResult2.uplink.push({ group: section.key, elt: k });
            this.fullResult2.downlink.push({ group: section.key, elt: k });
            // Updating the collapsed object
            this.collapsed.uplink[section.key] = false;
            this.collapsed.downlink[section.key] = false;
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
    ngOnInit() {
        this.computeLinkBudget.getResult$().subscribe((calculationResult) => {
            this.deltaUL = this.computeDelta(calculationResult.uplink, this.previousCalculationResults.uplink);
            this.deltaDL = this.computeDelta(calculationResult.downlink, this.previousCalculationResults.downlink);
            // this.deltaDL = this.computeDelta(calculationResult.downlink, this.fullResult2.downlink);
            this.previousCalculationResults = calculationResult;
            if (calculationResult.uplink || calculationResult.downlink) {
                const currentResult = this.formatResults(calculationResult, this.params);
                this.fullResult2 = currentResult;
                // console.log(this.diagramParams);
                if (calculationResult.uplink) {
                    // This makes our array an object so we can pick the values we want
                    const res = calculationResult.uplink.reduce((acc, { name, value, unit }) => (Object.assign(Object.assign({}, acc), { [name]: { value, unit } })), {});
                    // This updates the data passed to the diagram
                    // console.log('a');
                    const diagramResults = this.refreshDiagramComponents(res);
                    this.diagramParamsUplink = {
                        powerIn: diagramResults.powerIn,
                        diagramComponents: diagramResults.diagramComponents,
                    };
                }
                if (calculationResult.downlink) {
                    // This makes our array an object so we can pick the values we want
                    const res = calculationResult.downlink.reduce((acc, { name, value, unit }) => (Object.assign(Object.assign({}, acc), { [name]: { value, unit } })), {});
                    // This updates the data passed to the diagram
                    // console.log('b');
                    const diagramResults = this.refreshDiagramComponents(res);
                    this.diagramParamsDownlink = {
                        powerIn: diagramResults.powerIn,
                        diagramComponents: diagramResults.diagramComponents,
                    };
                }
                // console.log(this.diagramParams);
            }
        });
    }
    computeDelta(current, previous) {
        // This computes the difference between previous data and current
        const delta = [];
        // result is null or undefined
        if (!previous || !current)
            return delta;
        for (let i = 0; i < current.length; i += 1) {
            if (i < previous.length && JSON.stringify(current[i]) !== JSON.stringify(previous[i])) {
                delta.push(current[i].name);
            }
        }
        return delta;
    }
    exportResults(format) {
        // This function is supposed to take the results and export them to the markdown format, allowing user to download them.
        // mardown-pdf is a module that even allows the conversion from markdown to pdf.
        let configURL = '';
        switch (format) {
            case 'md':
                configURL = `data:application/md;charset=UTF-8,${encodeURIComponent(this.resultsToMD())}`;
                break;
            // case 'pdf':
            //   configURL = `data:application/pdf;charset=UTF-8,${this.resultToPDF()}`;
            //   break;
            case 'json':
                configURL = `data:application/json;charset=UTF-8,${encodeURIComponent(JSON.stringify(this.fullResult2, null, 2))}`;
                break;
            default:
                // this.logger.debug()
                configURL = `data:application/json;charset=UTF-8,${encodeURIComponent(JSON.stringify(this.fullResult2, null, 2))}`;
        }
        // Create a placeholder element for this data
        const anchor = document.createElement('a');
        anchor.href = configURL;
        anchor.target = '_blank';
        anchor.download = `results.${format}`;
        anchor.click();
        // Removing placeholder element
        anchor.remove();
    }
    resultsToMD() {
        let markdownOutput = '';
        markdownOutput += '# Uplink link budget\n';
        markdownOutput += '| Component | Value | Link Budget |\n';
        markdownOutput += '|---|---|---|\n';
        this.fullResult2.uplink.forEach((value) => {
            markdownOutput += `|**${value.group}**| | |\n`;
            // markdownOutput += '||||\n';
            value.elt.forEach((line) => {
                markdownOutput += `|${this.params[line.name].label}|${line.value.toPrecision(3)} ${line.unit}| |\n`;
            });
        });
        markdownOutput += '# Downlink link budget\n';
        markdownOutput += '| Component | Value | Link Budget |\n';
        markdownOutput += '|---|---|---|\n';
        this.fullResult2.downlink.forEach((value) => {
            markdownOutput += `|**${value.group}**| | |\n`;
            // markdownOutput += '||||\n';
            value.elt.forEach((line) => {
                markdownOutput += `|${this.params[line.name].label}|${line.value.toPrecision(3)} ${line.unit}| |\n`;
            });
        });
        return markdownOutput;
    }
    formatResults(newResults, params = this.params) {
        // This function formats the result from an array of values/units pair to group with sections name.
        // This provides 'discoverable' results that can be used by the template with ngFor
        // Temporary result allows us to make the conversion from APIResult to Result
        const result = { uplink: [], downlink: [] };
        let tempResult = {};
        // FIXME: redundancy
        if (newResults.uplink) {
            newResults.uplink.forEach((element) => {
                const { section } = params[element.name];
                const line = { name: element.name, value: element.value, unit: element.unit };
                if (tempResult[section]) {
                    tempResult[section].push(line);
                }
                else {
                    tempResult[section] = [line];
                }
            });
            // console.log(tempResult);
            result.uplink = Object.entries(tempResult).map(([group, elt]) => ({ group, elt }));
        }
        tempResult = {};
        if (newResults.downlink) {
            newResults.downlink.forEach((element) => {
                const { section } = params[element.name];
                const line = { name: element.name, value: element.value, unit: element.unit };
                if (tempResult[section]) {
                    tempResult[section].push(line);
                }
                else {
                    tempResult[section] = [line];
                }
            });
            // console.log(tempResult);
            result.downlink = Object.entries(tempResult).map(([group, elt]) => ({ group, elt }));
        }
        this.calculateLinkSummary(newResults.uplink, newResults.downlink);
        return result;
    }
    calculateLinkSummary(resultUL, resultDL) {
        var _a, _b, _c, _d;
        const uplinkMargin = resultUL[resultUL.length - 1];
        const downlinkMargin = resultDL[resultDL.length - 1];
        // Bad code, fix it #FIXME
        const systemMarginUplink = (_b = (_a = this.formService.getComponentValues('system_margin', 'uplink', 'carrier')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 6;
        const systemMarginDownlink = (_d = (_c = this.formService.getComponentValues('system_margin', 'downlink', 'carrier')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : 6;
        // The default success message
        this.linkStatus = {
            uplink: {
                margin: uplinkMargin.value,
                status: 'is-success',
                message: `<b>This link closes</b><br>Eb/N0 margin = ${(Math.round(uplinkMargin.value * 100) / 100).toFixed(2)} ${uplinkMargin.unit} > ${systemMarginUplink} dB = System Margin`,
            },
            downlink: {
                margin: downlinkMargin.value,
                status: 'is-success',
                message: `<b>This link closes</b><br>Eb/N0 margin = ${(Math.round(downlinkMargin.value * 100) / 100).toFixed(2)} ${downlinkMargin.unit} > ${systemMarginDownlink} dB = System Margin`,
            },
        };
        // In other cases, warning or danger message
        Object.entries(this.linkStatus).map(([key, link]) => {
            const localLinkStatus = link;
            // console.log(key);
            const localSystemMargin = key === 'uplink' ? systemMarginUplink : systemMarginDownlink;
            if (link.margin < localSystemMargin) {
                localLinkStatus.status = 'is-warning';
                localLinkStatus.message = `<b>This link closes with a low margin</b><br>Eb/N0 margin = ${(Math.round(link.margin * 100) / 100).toFixed(2)} dB < ${localSystemMargin} dB = System Margin`;
            }
            if (link.margin < 0) {
                localLinkStatus.status = 'is-danger';
                localLinkStatus.message = `<b>This link does not close</b><br>Eb/N0 margin = ${(Math.round(link.margin * 100) / 100).toFixed(2)} dB < 0dB`;
            }
            return { key, localLinkStatus };
        });
    }
    refreshDiagramComponents(results) {
        // console.log(results);
        const powerIn = results.tx_amplifier_power.value;
        const diagramComponents = [
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
        return { powerIn, diagramComponents };
    }
}
ResultsComponent.ɵfac = function ResultsComponent_Factory(t) { return new (t || ResultsComponent)(i0.ɵɵdirectiveInject(ComputeLinkBudgetService), i0.ɵɵdirectiveInject(i1.LoggerService), i0.ɵɵdirectiveInject(i2.FormService), i0.ɵɵdirectiveInject(i3.SyntheticDrawingFormService)); };
ResultsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ResultsComponent, selectors: [["lib-results"]], inputs: { minimal: "minimal" }, decls: 16, vars: 5, consts: [[4, "ngIf"], [1, "columns"], ["class", "column is-narrow", 3, "currentComponent", 4, "ngIf"], [1, "column", "is-wide"], [1, "pt-3", "pr-3"], [1, "section", "p-0", "pb3-3", "export-bar"], [1, "buttons", "is-grouped"], [1, "button", 3, "click"], ["size", "lg", 2, "margin-right", "12px", 3, "icon"], ["class", "columns", 4, "ngIf"], [1, "tabs", "is-centered"], [2, "margin", "auto"], [3, "ngClass", "click"], [1, "animate__animated", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["colspan", "2", 2, "display", "block"], ["aria-label", "collapse", 1, "is-text", "is-link", 3, "click"], [1, "icon"], ["aria-hidden", "true", 3, "icon", "transform"], [1, "result-row", 3, "ngClass"], [1, "result-label"], ["align", "right", 1, "result-value"], [1, "column", "is-narrow", 3, "currentComponent"], [1, "column", "is-one-quarter"], [3, "title"], [3, "styleClass", 4, "ngIf"], [1, "table"], [1, "column", "is-half"], [3, "scenarioId", "components", "linkType", "powerIn"], [3, "styleClass"], [1, "link-closed-container"], ["size", "2x", 3, "icon", 4, "ngIf"], [1, "link-closed", 3, "innerHTML"], ["size", "2x", 3, "icon"]], template: function ResultsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.minimal);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.minimal);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("icon", ctx.download);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("icon", ctx.download);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.minimal);
    } }, directives: [i4.NgIf, i5.FaIconComponent, i6.CardComponent, i4.NgClass, i4.NgForOf, i7.NavigationSidebarComponent, i8.SyntheticDrawingComponent], pipes: [i4.DecimalPipe], styles: [".active-row[_ngcontent-%COMP%]{-webkit-animation-delay:0s;-webkit-animation-direction:alternate;-webkit-animation-duration:.4s;-webkit-animation-name:emphasis;animation-delay:0s;animation-direction:alternate;animation-duration:.4s;animation-name:emphasis;border:solid;border-color:#3e8ed0;border-width:0 0 0 5px}.link-closed-container[_ngcontent-%COMP%]{align-items:center;display:flex}.link-closed[_ngcontent-%COMP%]{display:inline-block;margin:0 0 0 15px}@-webkit-keyframes emphasis{0%{background-color:#3e8ed0;color:#fff}}@keyframes emphasis{0%{background-color:#3e8ed0;color:#fff}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResultsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-results',
                templateUrl: './results.component.html',
                styleUrls: ['./results.component.scss'],
            }]
    }], function () { return [{ type: ComputeLinkBudgetService }, { type: i1.LoggerService }, { type: i2.FormService }, { type: i3.SyntheticDrawingFormService }]; }, { minimal: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2NvbXBvbmVudHMvcmVzdWx0cy9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2NvbXBvbmVudHMvcmVzdWx0cy9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsV0FBVyxFQUNYLGFBQWEsRUFDYixxQkFBcUIsRUFDckIsY0FBYyxFQUNkLGFBQWEsR0FDZCxNQUFNLG1DQUFtQyxDQUFDO0FBRTNDLE9BQU8sd0JBQXdCLE1BQU0sa0RBQWtELENBQUM7Ozs7Ozs7Ozs7OztJQ2dCOUUsNkJBQThDO0lBQzVDLDhCQUVLO0lBQ0gsOEJBQXlCO0lBQUEsWUFBNEI7SUFBQSxpQkFBSztJQUMxRCw4QkFBdUM7SUFFckMsWUFDRjs7SUFBQSxpQkFBSztJQUNQLGlCQUFLO0lBQ1AsMEJBQWU7Ozs7SUFUVSxlQUVuQjtJQUZtQixxSkFFbkI7SUFDdUIsZUFBNEI7SUFBNUIsc0RBQTRCO0lBR25ELGVBQ0Y7SUFERSw2RkFDRjs7O0lBVE4sNkJBQXlHO0lBQ3ZHLDhIQVVlO0lBQ2pCLDBCQUFlOzs7SUFYaUIsZUFBYztJQUFkLHdDQUFjOzs7O0lBUmhELDZCQUF5RztJQUN2Ryw4QkFBd0M7SUFDdEMseUJBQUc7SUFBQSxZQUFtQjtJQUFBLGlCQUFJO0lBQzFCLDZCQUFxTjtJQUExTCxnYUFBbUs7SUFDNUwsZ0NBQW1CO0lBQUEsOEJBQStLO0lBQUEsaUJBQU87SUFDM00saUJBQUk7SUFD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Q0FBMkI7UUFFekIsa0NBQThDO1FBQzVDLDhCQUFnQztRQUM5Qiw0QkFBZ0Q7UUFBOUIsd0ZBQVMsa0JBQWMsSUFBSSxDQUFDLElBQUM7UUFDN0MsNkJBQTJFO1FBQzNFLDJCQUFLO1FBQUEsc0NBQXFCO1FBQUEsaUJBQU07UUFDbEMsaUJBQUk7UUFLSiw2QkFBa0Q7UUFBaEMseUZBQVMsa0JBQWMsTUFBTSxDQUFDLElBQUM7UUFDL0MsOEJBQXlFO1FBQ3pFLDRCQUFLO1FBQUEsd0NBQXVCO1FBQUEsaUJBQU07UUFDcEMsaUJBQUk7UUFDTixpQkFBTTtRQUNSLGlCQUFVO1FBQ1YscUVBdUZRO1FBQ1osaUJBQVU7UUFDVixpQkFBTTtRQUNSLGlCQUFNOztRQTNKSyxrQ0FBYTtRQTZDNEQsZUFBYztRQUFkLG1DQUFjO1FBT3ZDLGVBQWlCO1FBQWpCLG1DQUFpQjtRQVFqQixlQUFlO1FBQWYsbUNBQWU7UUFLOUMsZUFBYztRQUFkLG1DQUFjOzt1RkQ5QzdCLGdCQUFnQjtjQUw1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3hDO3NDQVRNLHdCQUF3QiwwR0E4Q3BCLE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgZmFBbmdsZURvd24sXG4gIGZhQ2hlY2tDaXJjbGUsXG4gIGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcbiAgZmFGaWxlRG93bmxvYWQsXG4gIGZhVGltZXNDaXJjbGUsXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBBUElSZXN1bHQsIFJlc3VsdCwgRWxlbWVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvUmVzdWx0cy5tb2RlbCc7XG5pbXBvcnQgQ29tcHV0ZUxpbmtCdWRnZXRTZXJ2aWNlIGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2NvbXB1dGUtbGluay1idWRnZXQuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Zvcm0vZm9ybS5zZXJ2aWNlJztcbmltcG9ydCB7IFN5bnRoZXRpY0RyYXdpbmdGb3JtU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3N5bnRoZXRpYy1kcmF3aW5nL3N5bnRoZXRpYy1kcmF3aW5nLWZvcm0uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1yZXN1bHRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3VsdHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXN1bHRzLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgZnVsbFJlc3VsdDI6IFJlc3VsdDtcblxuICBwdWJsaWMgZmFDaGVjayA9IGZhQ2hlY2tDaXJjbGU7XG4gIHB1YmxpYyBmYVdhcm4gPSBmYUV4Y2xhbWF0aW9uVHJpYW5nbGU7XG4gIHB1YmxpYyBmYUVycm9yID0gZmFUaW1lc0NpcmNsZTtcblxuICBwdWJsaWMgZG93bmxvYWQgPSBmYUZpbGVEb3dubG9hZDtcbiAgcHVibGljIGxpbmtTdGF0dXM/OiB7XG4gICAgdXBsaW5rOiB7XG4gICAgICBtYXJnaW46IG51bWJlcjtcbiAgICAgIHN0YXR1czogc3RyaW5nO1xuICAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIH07XG4gICAgZG93bmxpbms6IHtcbiAgICAgIG1hcmdpbjogbnVtYmVyO1xuICAgICAgc3RhdHVzOiBzdHJpbmc7XG4gICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbiAgcHVibGljIHN0YXR1c1N0eWxlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBwcmV2aW91c0NhbGN1bGF0aW9uUmVzdWx0czogQVBJUmVzdWx0ID0geyB1cGxpbms6IFtdLCBkb3dubGluazogW10gfTtcbiAgcHVibGljIGRlbHRhVUw6IHN0cmluZ1tdID0gW107IC8vIFN0b3JlcyB0aGUgZGlmZmVyZW5jZSB3aXRoIHByZXZpb3VzIHZhbHVlXG4gIHB1YmxpYyBkZWx0YURMOiBzdHJpbmdbXSA9IFtdO1xuICBwdWJsaWMgZGlhZ3JhbVBhcmFtc1VwbGluazogeyBwb3dlckluOiBudW1iZXI7IGRpYWdyYW1Db21wb25lbnRzOiBhbnkgfTtcbiAgcHVibGljIGRpYWdyYW1QYXJhbXNEb3dubGluazogeyBwb3dlckluOiBudW1iZXI7IGRpYWdyYW1Db21wb25lbnRzOiBhbnkgfTtcbiAgc2hvd1VwbGluazogYm9vbGVhbiA9IHRydWU7XG4gIC8vIHB1YmxpYyBkaWFncmFtQ29tcG9uZW50czogYW55O1xuICAvLyBwdWJsaWMgcG93ZXJJbjogbnVtYmVyO1xuICBmYUFuZ2xlRG93biA9IGZhQW5nbGVEb3duO1xuXG4gIHB1YmxpYyBjb2xsYXBzZWQ6IHtcbiAgICB1cGxpbms6IHsgW3NlY3Rpb246IHN0cmluZ106IGJvb2xlYW4gfTtcbiAgICBkb3dubGluazogeyBbc2VjdGlvbjogc3RyaW5nXTogYm9vbGVhbiB9O1xuICB9ID0geyB1cGxpbms6IHt9LCBkb3dubGluazoge30gfTtcblxuICBASW5wdXQoKSBtaW5pbWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gQElucHV0KCkga2V5czogc3RyaW5nW10gPSBbXG4gIC8vICAgJ3R4X2FtcGxpZmllcl9wb3dlcicsXG4gIC8vICAgJ3R4X2NpcmN1aXRfbG9zcycsXG4gIC8vICAgJ3R4X2FudGVubmFfZ2FpbicsXG4gIC8vICAgJ2VpcnAnLFxuICAvLyAgICdlYm5vX3JhdGlvX21hcmdpbicsXG4gIC8vIF07XG5cbiAgcHVibGljIGZ1bGxLZXlzMjogeyBrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZ1tdIH1bXSA9IFtcbiAgICB7XG4gICAgICBrZXk6ICdUcmFuc21pdHRlcicsXG4gICAgICB2YWx1ZTogWyd0eF9hbXBsaWZpZXJfcG93ZXInLCAndHhfY2lyY3VpdF9sb3NzJywgJ3R4X2FudGVubmFfZ2FpbicsICdlaXJwJ10sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGtleTogJ1BhdGgnLFxuICAgICAgdmFsdWU6IFsnc2xhbnRfcmFuZ2UnLCAndHhfYW50ZW5uYV9hbmdsZScsICdmcmVlX3NwYWNlX3BhdGhfbG9zcycsICdtZWRpdW1fbG9zcycsICd0b3RhbF9wYXRoX2xvc3MnXSxcbiAgICB9LFxuXG4gICAge1xuICAgICAga2V5OiAnUmVjZWl2ZXInLFxuICAgICAgdmFsdWU6IFtcbiAgICAgICAgJ3JlY2VpdmVkX2lzb3Ryb3BpY19zaWduYWxfbGV2ZWwnLFxuICAgICAgICAncnhfYW50ZW5uYV9wb2ludGluZ19sb3NzJyxcbiAgICAgICAgJ3J4X2FudGVubmFfZ2FpbicsXG4gICAgICAgICdyeF9jaXJjdWl0X2xvc3MnLFxuICAgICAgICAncnhfc3lzdGVtX25vaXNlX3RlbXBlcmF0dXJlJyxcbiAgICAgICAgJ2dfdF9maWd1cmVfb2ZfbWVyaXQnLFxuICAgICAgICAncmVjZWl2ZWRfbm9pc2VfcG93ZXJfZGVuc2l0eScsXG4gICAgICAgICdjbm9fcmF0aW8nLFxuICAgICAgICAnYml0X3JhdGUnLFxuICAgICAgICAnZWJub19yYXRpbycsXG4gICAgICAgICdlYm5vX3JhdGlvX3RocmVzaG9sZCcsXG4gICAgICAgICdlYm5vX3JhdGlvX21hcmdpbicsXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG4gIHB1YmxpYyBmdWxsS2V5czogc3RyaW5nW10gPSBbXG4gICAgJ3R4X2FtcGxpZmllcl9wb3dlcicsXG4gICAgJ3R4X2NpcmN1aXRfbG9zcycsXG4gICAgJ3R4X2FudGVubmFfZ2FpbicsXG4gICAgJ2VpcnAnLFxuICAgICdzbGFudF9yYW5nZScsXG4gICAgJ3R4X2FudGVubmFfcG9pbnRpbmdfbG9zcycsXG4gICAgJ2ZyZWVfc3BhY2VfcGF0aF9sb3NzJyxcbiAgICAnbWVkaXVtX2xvc3MnLFxuICAgICd0b3RhbF9wYXRoX2xvc3MnLFxuICAgICdyZWNlaXZlZF9pc290cm9waWNfc2lnbmFsX2xldmVsJyxcbiAgICAncnhfYW50ZW5uYV9wb2ludGluZ19sb3NzJyxcbiAgICAncnhfYW50ZW5uYV9nYWluJyxcbiAgICAncnhfY2lyY3VpdF9sb3NzJyxcbiAgICAncnhfc3lzdGVtX25vaXNlX3RlbXBlcmF0dXJlJyxcbiAgICAnZ190X2ZpZ3VyZV9vZl9tZXJpdCcsXG4gICAgJ3JlY2VpdmVkX25vaXNlX3Bvd2VyX2RlbnNpdHknLFxuICAgICdjbm9fcmF0aW8nLFxuICAgICdiaXRfcmF0ZScsXG4gICAgJ2Vibm9fcmF0aW8nLFxuICAgICdlYm5vX3JhdGlvX3RocmVzaG9sZCcsXG4gICAgJ2Vibm9fcmF0aW9fbWFyZ2luJyxcbiAgXTtcblxuICBwdWJsaWMgcGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHsgbGFiZWw6IHN0cmluZzsgc2VjdGlvbjogc3RyaW5nIH0gfSA9IHtcbiAgICB0eF9hbXBsaWZpZXJfcG93ZXI6IHsgbGFiZWw6ICdBbXBsaWZpZXIgcG93ZXInLCBzZWN0aW9uOiAnVHJhbnNtaXR0ZXInIH0sXG4gICAgdHhfY2lyY3VpdF9sb3NzOiB7IGxhYmVsOiAnQ2lyY3VpdCBMb3NzJywgc2VjdGlvbjogJ1RyYW5zbWl0dGVyJyB9LFxuICAgIHR4X2FudGVubmFfZ2FpbjogeyBsYWJlbDogJ0FudGVubmEgR2FpbicsIHNlY3Rpb246ICdUcmFuc21pdHRlcicgfSxcbiAgICB0eF9hbnRlbm5hX2FuZ2xlOiB7IGxhYmVsOiAnRGVwb2ludGluZyBBbmdsZScsIHNlY3Rpb246ICdUcmFuc21pdHRlcicgfSxcbiAgICBlaXJwOiB7IGxhYmVsOiAnRUlSUCcsIHNlY3Rpb246ICdUcmFuc21pdHRlcicgfSxcbiAgICBzbGFudF9yYW5nZTogeyBsYWJlbDogJ1NsYW50IFJhbmdlJywgc2VjdGlvbjogJ1BhdGgnIH0sXG5cbiAgICB0eF9hbnRlbm5hX3BvaW50aW5nX2xvc3M6IHsgbGFiZWw6ICdQb2ludGluZyBMb3NzZXMnLCBzZWN0aW9uOiAnUGF0aCcgfSxcbiAgICBmcmVlX3NwYWNlX3BhdGhfbG9zczogeyBsYWJlbDogJ0ZTTCcsIHNlY3Rpb246ICdQYXRoJyB9LFxuICAgIG1lZGl1bV9sb3NzOiB7IGxhYmVsOiAnTWVkaXVtIExvc3NlcycsIHNlY3Rpb246ICdQYXRoJyB9LFxuICAgIHRvdGFsX3BhdGhfbG9zczogeyBsYWJlbDogJ1RvdGFsIFBhdGggTG9zcycsIHNlY3Rpb246ICdQYXRoJyB9LFxuICAgIHJlY2VpdmVkX2lzb3Ryb3BpY19zaWduYWxfbGV2ZWw6IHsgbGFiZWw6ICdJc290cm9waWMgcG93ZXIgcmVjZWl2ZWQnLCBzZWN0aW9uOiAnUmVjZWl2ZXInIH0sXG4gICAgcnhfYW50ZW5uYV9wb2ludGluZ19sb3NzOiB7IGxhYmVsOiAnUG9pbnRpbmcgTG9zc2VzJywgc2VjdGlvbjogJ1JlY2VpdmVyJyB9LFxuICAgIHJ4X2FudGVubmFfYW5nbGU6IHsgbGFiZWw6ICdEZXBvaW50aW5nIEFuZ2xlJywgc2VjdGlvbjogJ1JlY2VpdmVyJyB9LFxuICAgIHJ4X2FudGVubmFfZ2FpbjogeyBsYWJlbDogJ0FudGVubmEgR2FpbicsIHNlY3Rpb246ICdSZWNlaXZlcicgfSxcbiAgICByeF9jaXJjdWl0X2xvc3M6IHsgbGFiZWw6ICdDaXJjdWl0IExvc3MnLCBzZWN0aW9uOiAnUmVjZWl2ZXInIH0sXG4gICAgcnhfc3lzdGVtX25vaXNlX3RlbXBlcmF0dXJlOiB7IGxhYmVsOiAnTm9pc2UgVGVtcGVyYXR1cmUnLCBzZWN0aW9uOiAnUmVjZWl2ZXInIH0sXG4gICAgZ190X2ZpZ3VyZV9vZl9tZXJpdDogeyBsYWJlbDogJ0cvVCBGaWd1cmUgb2YgTWVyaXQnLCBzZWN0aW9uOiAnUmVjZWl2ZXInIH0sXG4gICAgcmVjZWl2ZWRfbm9pc2VfcG93ZXJfZGVuc2l0eTogeyBsYWJlbDogJ05vaXNlIFBvd2VyIERlbnNpdHknLCBzZWN0aW9uOiAnUmVjZWl2ZXInIH0sXG4gICAgY25vX3JhdGlvOiB7IGxhYmVsOiAnQy9OMCByYXRpbycsIHNlY3Rpb246ICdSZWNlaXZlcicgfSxcbiAgICBiaXRfcmF0ZTogeyBsYWJlbDogJ0JpdCBSYXRlJywgc2VjdGlvbjogJ1JlY2VpdmVyJyB9LFxuICAgIGVibm9fcmF0aW86IHsgbGFiZWw6ICdFYi9OMCByYXRpbycsIHNlY3Rpb246ICdSZWNlaXZlcicgfSxcbiAgICBlYm5vX3JhdGlvX3RocmVzaG9sZDogeyBsYWJlbDogJ0ViL04wIHRocmVzaG9sZCcsIHNlY3Rpb246ICdSZWNlaXZlcicgfSxcbiAgICBlYm5vX3JhdGlvX21hcmdpbjogeyBsYWJlbDogJ0ViL04wIG1hcmdpbicsIHNlY3Rpb246ICdSZWNlaXZlcicgfSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXB1dGVMaW5rQnVkZ2V0OiBDb21wdXRlTGlua0J1ZGdldFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkcmF3aW5nU2VydmljZTogU3ludGhldGljRHJhd2luZ0Zvcm1TZXJ2aWNlXG4gICkge1xuICAgIC8vIFNldHRpbmcgdXAga2V5IHRvIGRpc3BsYXkgd2hlbiBubyBkYXRhIGhhcyBhbHJlYWR5IGJlZW4gcHJvdmlkZWRcbiAgICB0aGlzLmZ1bGxSZXN1bHQyID0geyB1cGxpbms6IFtdLCBkb3dubGluazogW10gfTtcbiAgICB0aGlzLmZ1bGxLZXlzMi5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICAvLyBCdWlsZGluZyBhIGRlZmF1bHQgYXJyYXkgYmVmb3JlIHRoZSBmaXJzdCBjYWxjdWxhdGlvblxuICAgICAgY29uc3QgazogRWxlbWVudFtdID0gc2VjdGlvbi52YWx1ZS5tYXAoKGlkKSA9PiAoeyBuYW1lOiBpZCwgdmFsdWU6IDAsIHVuaXQ6ICcnIH0pKTtcbiAgICAgIHRoaXMuZnVsbFJlc3VsdDIudXBsaW5rLnB1c2goeyBncm91cDogc2VjdGlvbi5rZXksIGVsdDogayB9KTtcbiAgICAgIHRoaXMuZnVsbFJlc3VsdDIuZG93bmxpbmsucHVzaCh7IGdyb3VwOiBzZWN0aW9uLmtleSwgZWx0OiBrIH0pO1xuICAgICAgLy8gVXBkYXRpbmcgdGhlIGNvbGxhcHNlZCBvYmplY3RcbiAgICAgIHRoaXMuY29sbGFwc2VkLnVwbGlua1tzZWN0aW9uLmtleV0gPSBmYWxzZTtcbiAgICAgIHRoaXMuY29sbGFwc2VkLmRvd25saW5rW3NlY3Rpb24ua2V5XSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuZGlhZ3JhbVBhcmFtc1VwbGluayA9IHtcbiAgICAgIHBvd2VySW46IHRoaXMuZHJhd2luZ1NlcnZpY2UucG93ZXJJbixcbiAgICAgIGRpYWdyYW1Db21wb25lbnRzOiB0aGlzLmRyYXdpbmdTZXJ2aWNlLmNvbXBvbmVudHMsXG4gICAgfTtcbiAgICB0aGlzLmRpYWdyYW1QYXJhbXNEb3dubGluayA9IHtcbiAgICAgIHBvd2VySW46IHRoaXMuZHJhd2luZ1NlcnZpY2UucG93ZXJJbixcbiAgICAgIGRpYWdyYW1Db21wb25lbnRzOiB0aGlzLmRyYXdpbmdTZXJ2aWNlLmNvbXBvbmVudHMsXG4gICAgfTtcbiAgICAvLyB0aGlzLmRpYWdyYW1Db21wb25lbnRzID0gdGhpcy5kcmF3aW5nU2VydmljZS5kZWZhdWx0Q29tcG9uZW50cztcbiAgICAvLyB0aGlzLnBvd2VySW4gPSB0aGlzLmRyYXdpbmdTZXJ2aWNlLnBvd2VySW47XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbXB1dGVMaW5rQnVkZ2V0LmdldFJlc3VsdCQoKS5zdWJzY3JpYmUoKGNhbGN1bGF0aW9uUmVzdWx0OiBBUElSZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuZGVsdGFVTCA9IHRoaXMuY29tcHV0ZURlbHRhKGNhbGN1bGF0aW9uUmVzdWx0LnVwbGluaywgdGhpcy5wcmV2aW91c0NhbGN1bGF0aW9uUmVzdWx0cy51cGxpbmspO1xuICAgICAgdGhpcy5kZWx0YURMID0gdGhpcy5jb21wdXRlRGVsdGEoY2FsY3VsYXRpb25SZXN1bHQuZG93bmxpbmssIHRoaXMucHJldmlvdXNDYWxjdWxhdGlvblJlc3VsdHMuZG93bmxpbmspO1xuICAgICAgLy8gdGhpcy5kZWx0YURMID0gdGhpcy5jb21wdXRlRGVsdGEoY2FsY3VsYXRpb25SZXN1bHQuZG93bmxpbmssIHRoaXMuZnVsbFJlc3VsdDIuZG93bmxpbmspO1xuICAgICAgdGhpcy5wcmV2aW91c0NhbGN1bGF0aW9uUmVzdWx0cyA9IGNhbGN1bGF0aW9uUmVzdWx0O1xuXG4gICAgICBpZiAoY2FsY3VsYXRpb25SZXN1bHQudXBsaW5rIHx8IGNhbGN1bGF0aW9uUmVzdWx0LmRvd25saW5rKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRSZXN1bHQgPSB0aGlzLmZvcm1hdFJlc3VsdHMoY2FsY3VsYXRpb25SZXN1bHQsIHRoaXMucGFyYW1zKTtcbiAgICAgICAgdGhpcy5mdWxsUmVzdWx0MiA9IGN1cnJlbnRSZXN1bHQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGlhZ3JhbVBhcmFtcyk7XG4gICAgICAgIGlmIChjYWxjdWxhdGlvblJlc3VsdC51cGxpbmspIHtcbiAgICAgICAgICAvLyBUaGlzIG1ha2VzIG91ciBhcnJheSBhbiBvYmplY3Qgc28gd2UgY2FuIHBpY2sgdGhlIHZhbHVlcyB3ZSB3YW50XG4gICAgICAgICAgY29uc3QgcmVzID0gY2FsY3VsYXRpb25SZXN1bHQudXBsaW5rLnJlZHVjZShcbiAgICAgICAgICAgIChhY2MsIHsgbmFtZSwgdmFsdWUsIHVuaXQgfSkgPT4gKHsgLi4uYWNjLCBbbmFtZV06IHsgdmFsdWUsIHVuaXQgfSB9KSxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBUaGlzIHVwZGF0ZXMgdGhlIGRhdGEgcGFzc2VkIHRvIHRoZSBkaWFncmFtXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2EnKTtcbiAgICAgICAgICBjb25zdCBkaWFncmFtUmVzdWx0cyA9IHRoaXMucmVmcmVzaERpYWdyYW1Db21wb25lbnRzKHJlcyk7XG4gICAgICAgICAgdGhpcy5kaWFncmFtUGFyYW1zVXBsaW5rID0ge1xuICAgICAgICAgICAgcG93ZXJJbjogZGlhZ3JhbVJlc3VsdHMucG93ZXJJbixcbiAgICAgICAgICAgIGRpYWdyYW1Db21wb25lbnRzOiBkaWFncmFtUmVzdWx0cy5kaWFncmFtQ29tcG9uZW50cyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxjdWxhdGlvblJlc3VsdC5kb3dubGluaykge1xuICAgICAgICAgIC8vIFRoaXMgbWFrZXMgb3VyIGFycmF5IGFuIG9iamVjdCBzbyB3ZSBjYW4gcGljayB0aGUgdmFsdWVzIHdlIHdhbnRcbiAgICAgICAgICBjb25zdCByZXMgPSBjYWxjdWxhdGlvblJlc3VsdC5kb3dubGluay5yZWR1Y2UoXG4gICAgICAgICAgICAoYWNjLCB7IG5hbWUsIHZhbHVlLCB1bml0IH0pID0+ICh7IC4uLmFjYywgW25hbWVdOiB7IHZhbHVlLCB1bml0IH0gfSksXG4gICAgICAgICAgICB7fVxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gVGhpcyB1cGRhdGVzIHRoZSBkYXRhIHBhc3NlZCB0byB0aGUgZGlhZ3JhbVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdiJyk7XG4gICAgICAgICAgY29uc3QgZGlhZ3JhbVJlc3VsdHMgPSB0aGlzLnJlZnJlc2hEaWFncmFtQ29tcG9uZW50cyhyZXMpO1xuICAgICAgICAgIHRoaXMuZGlhZ3JhbVBhcmFtc0Rvd25saW5rID0ge1xuICAgICAgICAgICAgcG93ZXJJbjogZGlhZ3JhbVJlc3VsdHMucG93ZXJJbixcbiAgICAgICAgICAgIGRpYWdyYW1Db21wb25lbnRzOiBkaWFncmFtUmVzdWx0cy5kaWFncmFtQ29tcG9uZW50cyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGlhZ3JhbVBhcmFtcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY29tcHV0ZURlbHRhKGN1cnJlbnQ6IEVsZW1lbnRbXSwgcHJldmlvdXM6IEVsZW1lbnRbXSkge1xuICAgIC8vIFRoaXMgY29tcHV0ZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBwcmV2aW91cyBkYXRhIGFuZCBjdXJyZW50XG4gICAgY29uc3QgZGVsdGE6IHN0cmluZ1tdID0gW107XG4gICAgLy8gcmVzdWx0IGlzIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgaWYgKCFwcmV2aW91cyB8fCAhY3VycmVudCkgcmV0dXJuIGRlbHRhO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGkgPCBwcmV2aW91cy5sZW5ndGggJiYgSlNPTi5zdHJpbmdpZnkoY3VycmVudFtpXSkgIT09IEpTT04uc3RyaW5naWZ5KHByZXZpb3VzW2ldKSkge1xuICAgICAgICBkZWx0YS5wdXNoKGN1cnJlbnRbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWx0YTtcbiAgfVxuXG4gIGV4cG9ydFJlc3VsdHMoZm9ybWF0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHN1cHBvc2VkIHRvIHRha2UgdGhlIHJlc3VsdHMgYW5kIGV4cG9ydCB0aGVtIHRvIHRoZSBtYXJrZG93biBmb3JtYXQsIGFsbG93aW5nIHVzZXIgdG8gZG93bmxvYWQgdGhlbS5cbiAgICAvLyBtYXJkb3duLXBkZiBpcyBhIG1vZHVsZSB0aGF0IGV2ZW4gYWxsb3dzIHRoZSBjb252ZXJzaW9uIGZyb20gbWFya2Rvd24gdG8gcGRmLlxuICAgIGxldCBjb25maWdVUkw6IHN0cmluZyA9ICcnO1xuICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICBjYXNlICdtZCc6XG4gICAgICAgIGNvbmZpZ1VSTCA9IGBkYXRhOmFwcGxpY2F0aW9uL21kO2NoYXJzZXQ9VVRGLTgsJHtlbmNvZGVVUklDb21wb25lbnQodGhpcy5yZXN1bHRzVG9NRCgpKX1gO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIGNhc2UgJ3BkZic6XG4gICAgICAvLyAgIGNvbmZpZ1VSTCA9IGBkYXRhOmFwcGxpY2F0aW9uL3BkZjtjaGFyc2V0PVVURi04LCR7dGhpcy5yZXN1bHRUb1BERigpfWA7XG4gICAgICAvLyAgIGJyZWFrO1xuICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgIGNvbmZpZ1VSTCA9IGBkYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCwke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLmZ1bGxSZXN1bHQyLCBudWxsLCAyKVxuICAgICAgICApfWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoKVxuICAgICAgICBjb25maWdVUkwgPSBgZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgsJHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5mdWxsUmVzdWx0MiwgbnVsbCwgMilcbiAgICAgICAgKX1gO1xuICAgIH1cbiAgICAvLyBDcmVhdGUgYSBwbGFjZWhvbGRlciBlbGVtZW50IGZvciB0aGlzIGRhdGFcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYW5jaG9yLmhyZWYgPSBjb25maWdVUkw7XG4gICAgYW5jaG9yLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGFuY2hvci5kb3dubG9hZCA9IGByZXN1bHRzLiR7Zm9ybWF0fWA7XG5cbiAgICBhbmNob3IuY2xpY2soKTtcbiAgICAvLyBSZW1vdmluZyBwbGFjZWhvbGRlciBlbGVtZW50XG4gICAgYW5jaG9yLnJlbW92ZSgpO1xuICB9XG5cbiAgcmVzdWx0c1RvTUQoKTogc3RyaW5nIHtcbiAgICBsZXQgbWFya2Rvd25PdXRwdXQ6IHN0cmluZyA9ICcnO1xuICAgIG1hcmtkb3duT3V0cHV0ICs9ICcjIFVwbGluayBsaW5rIGJ1ZGdldFxcbic7XG4gICAgbWFya2Rvd25PdXRwdXQgKz0gJ3wgQ29tcG9uZW50IHwgVmFsdWUgfCBMaW5rIEJ1ZGdldCB8XFxuJztcbiAgICBtYXJrZG93bk91dHB1dCArPSAnfC0tLXwtLS18LS0tfFxcbic7XG4gICAgdGhpcy5mdWxsUmVzdWx0Mi51cGxpbmsuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIG1hcmtkb3duT3V0cHV0ICs9IGB8Kioke3ZhbHVlLmdyb3VwfSoqfCB8IHxcXG5gO1xuICAgICAgLy8gbWFya2Rvd25PdXRwdXQgKz0gJ3x8fHxcXG4nO1xuICAgICAgdmFsdWUuZWx0LmZvckVhY2goKGxpbmUpID0+IHtcbiAgICAgICAgbWFya2Rvd25PdXRwdXQgKz0gYHwke3RoaXMucGFyYW1zW2xpbmUubmFtZV0ubGFiZWx9fCR7bGluZS52YWx1ZS50b1ByZWNpc2lvbigzKX0gJHtsaW5lLnVuaXR9fCB8XFxuYDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIG1hcmtkb3duT3V0cHV0ICs9ICcjIERvd25saW5rIGxpbmsgYnVkZ2V0XFxuJztcbiAgICBtYXJrZG93bk91dHB1dCArPSAnfCBDb21wb25lbnQgfCBWYWx1ZSB8IExpbmsgQnVkZ2V0IHxcXG4nO1xuICAgIG1hcmtkb3duT3V0cHV0ICs9ICd8LS0tfC0tLXwtLS18XFxuJztcblxuICAgIHRoaXMuZnVsbFJlc3VsdDIuZG93bmxpbmsuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIG1hcmtkb3duT3V0cHV0ICs9IGB8Kioke3ZhbHVlLmdyb3VwfSoqfCB8IHxcXG5gO1xuICAgICAgLy8gbWFya2Rvd25PdXRwdXQgKz0gJ3x8fHxcXG4nO1xuICAgICAgdmFsdWUuZWx0LmZvckVhY2goKGxpbmUpID0+IHtcbiAgICAgICAgbWFya2Rvd25PdXRwdXQgKz0gYHwke3RoaXMucGFyYW1zW2xpbmUubmFtZV0ubGFiZWx9fCR7bGluZS52YWx1ZS50b1ByZWNpc2lvbigzKX0gJHtsaW5lLnVuaXR9fCB8XFxuYDtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duT3V0cHV0O1xuICB9XG5cbiAgZm9ybWF0UmVzdWx0cyhcbiAgICBuZXdSZXN1bHRzOiBBUElSZXN1bHQsXG4gICAgcGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHsgbGFiZWw6IHN0cmluZzsgc2VjdGlvbjogc3RyaW5nIH0gfSA9IHRoaXMucGFyYW1zXG4gICk6IFJlc3VsdCB7XG4gICAgLy8gVGhpcyBmdW5jdGlvbiBmb3JtYXRzIHRoZSByZXN1bHQgZnJvbSBhbiBhcnJheSBvZiB2YWx1ZXMvdW5pdHMgcGFpciB0byBncm91cCB3aXRoIHNlY3Rpb25zIG5hbWUuXG4gICAgLy8gVGhpcyBwcm92aWRlcyAnZGlzY292ZXJhYmxlJyByZXN1bHRzIHRoYXQgY2FuIGJlIHVzZWQgYnkgdGhlIHRlbXBsYXRlIHdpdGggbmdGb3JcblxuICAgIC8vIFRlbXBvcmFyeSByZXN1bHQgYWxsb3dzIHVzIHRvIG1ha2UgdGhlIGNvbnZlcnNpb24gZnJvbSBBUElSZXN1bHQgdG8gUmVzdWx0XG4gICAgY29uc3QgcmVzdWx0OiBSZXN1bHQgPSB7IHVwbGluazogW10sIGRvd25saW5rOiBbXSB9O1xuICAgIGxldCB0ZW1wUmVzdWx0OiB7IFtncm91cDogc3RyaW5nXTogRWxlbWVudFtdIH0gPSB7fTtcbiAgICAvLyBGSVhNRTogcmVkdW5kYW5jeVxuICAgIGlmIChuZXdSZXN1bHRzLnVwbGluaykge1xuICAgICAgbmV3UmVzdWx0cy51cGxpbmsuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IHNlY3Rpb24gfSA9IHBhcmFtc1tlbGVtZW50Lm5hbWVdO1xuICAgICAgICBjb25zdCBsaW5lID0geyBuYW1lOiBlbGVtZW50Lm5hbWUsIHZhbHVlOiBlbGVtZW50LnZhbHVlLCB1bml0OiBlbGVtZW50LnVuaXQgfTtcbiAgICAgICAgaWYgKHRlbXBSZXN1bHRbc2VjdGlvbl0pIHtcbiAgICAgICAgICB0ZW1wUmVzdWx0W3NlY3Rpb25dLnB1c2gobGluZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcFJlc3VsdFtzZWN0aW9uXSA9IFtsaW5lXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0ZW1wUmVzdWx0KTtcbiAgICAgIHJlc3VsdC51cGxpbmsgPSBPYmplY3QuZW50cmllcyh0ZW1wUmVzdWx0KS5tYXAoKFtncm91cCwgZWx0XSkgPT4gKHsgZ3JvdXAsIGVsdCB9KSk7XG4gICAgfVxuICAgIHRlbXBSZXN1bHQgPSB7fTtcbiAgICBpZiAobmV3UmVzdWx0cy5kb3dubGluaykge1xuICAgICAgbmV3UmVzdWx0cy5kb3dubGluay5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc2VjdGlvbiB9ID0gcGFyYW1zW2VsZW1lbnQubmFtZV07XG4gICAgICAgIGNvbnN0IGxpbmUgPSB7IG5hbWU6IGVsZW1lbnQubmFtZSwgdmFsdWU6IGVsZW1lbnQudmFsdWUsIHVuaXQ6IGVsZW1lbnQudW5pdCB9O1xuICAgICAgICBpZiAodGVtcFJlc3VsdFtzZWN0aW9uXSkge1xuICAgICAgICAgIHRlbXBSZXN1bHRbc2VjdGlvbl0ucHVzaChsaW5lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wUmVzdWx0W3NlY3Rpb25dID0gW2xpbmVdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRlbXBSZXN1bHQpO1xuICAgICAgcmVzdWx0LmRvd25saW5rID0gT2JqZWN0LmVudHJpZXModGVtcFJlc3VsdCkubWFwKChbZ3JvdXAsIGVsdF0pID0+ICh7IGdyb3VwLCBlbHQgfSkpO1xuICAgIH1cbiAgICB0aGlzLmNhbGN1bGF0ZUxpbmtTdW1tYXJ5KG5ld1Jlc3VsdHMudXBsaW5rLCBuZXdSZXN1bHRzLmRvd25saW5rKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY2FsY3VsYXRlTGlua1N1bW1hcnkocmVzdWx0VUw6IGFueSwgcmVzdWx0REw6IGFueSkge1xuICAgIGNvbnN0IHVwbGlua01hcmdpbiA9IHJlc3VsdFVMW3Jlc3VsdFVMLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGRvd25saW5rTWFyZ2luID0gcmVzdWx0RExbcmVzdWx0REwubGVuZ3RoIC0gMV07XG5cbiAgICAvLyBCYWQgY29kZSwgZml4IGl0ICNGSVhNRVxuICAgIGNvbnN0IHN5c3RlbU1hcmdpblVwbGluayA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0Q29tcG9uZW50VmFsdWVzKCdzeXN0ZW1fbWFyZ2luJywgJ3VwbGluaycsICdjYXJyaWVyJyk/LnZhbHVlID8/IDY7XG4gICAgY29uc3Qgc3lzdGVtTWFyZ2luRG93bmxpbmsgPVxuICAgICAgdGhpcy5mb3JtU2VydmljZS5nZXRDb21wb25lbnRWYWx1ZXMoJ3N5c3RlbV9tYXJnaW4nLCAnZG93bmxpbmsnLCAnY2FycmllcicpPy52YWx1ZSA/PyA2O1xuICAgIC8vIFRoZSBkZWZhdWx0IHN1Y2Nlc3MgbWVzc2FnZVxuICAgIHRoaXMubGlua1N0YXR1cyA9IHtcbiAgICAgIHVwbGluazoge1xuICAgICAgICBtYXJnaW46IHVwbGlua01hcmdpbi52YWx1ZSxcbiAgICAgICAgc3RhdHVzOiAnaXMtc3VjY2VzcycsXG4gICAgICAgIG1lc3NhZ2U6IGA8Yj5UaGlzIGxpbmsgY2xvc2VzPC9iPjxicj5FYi9OMCBtYXJnaW4gPSAkeyhNYXRoLnJvdW5kKHVwbGlua01hcmdpbi52YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoXG4gICAgICAgICAgMlxuICAgICAgICApfSAke3VwbGlua01hcmdpbi51bml0fSA+ICR7c3lzdGVtTWFyZ2luVXBsaW5rfSBkQiA9IFN5c3RlbSBNYXJnaW5gLFxuICAgICAgfSxcbiAgICAgIGRvd25saW5rOiB7XG4gICAgICAgIG1hcmdpbjogZG93bmxpbmtNYXJnaW4udmFsdWUsXG4gICAgICAgIHN0YXR1czogJ2lzLXN1Y2Nlc3MnLFxuICAgICAgICBtZXNzYWdlOiBgPGI+VGhpcyBsaW5rIGNsb3NlczwvYj48YnI+RWIvTjAgbWFyZ2luID0gJHsoTWF0aC5yb3VuZChkb3dubGlua01hcmdpbi52YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoXG4gICAgICAgICAgMlxuICAgICAgICApfSAke2Rvd25saW5rTWFyZ2luLnVuaXR9ID4gJHtzeXN0ZW1NYXJnaW5Eb3dubGlua30gZEIgPSBTeXN0ZW0gTWFyZ2luYCxcbiAgICAgIH0sXG4gICAgfTtcbiAgICAvLyBJbiBvdGhlciBjYXNlcywgd2FybmluZyBvciBkYW5nZXIgbWVzc2FnZVxuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMubGlua1N0YXR1cykubWFwKChba2V5LCBsaW5rXSkgPT4ge1xuICAgICAgY29uc3QgbG9jYWxMaW5rU3RhdHVzOiB7IG1hcmdpbjogbnVtYmVyOyBzdGF0dXM6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH0gPSBsaW5rO1xuICAgICAgLy8gY29uc29sZS5sb2coa2V5KTtcbiAgICAgIGNvbnN0IGxvY2FsU3lzdGVtTWFyZ2luID0ga2V5ID09PSAndXBsaW5rJyA/IHN5c3RlbU1hcmdpblVwbGluayA6IHN5c3RlbU1hcmdpbkRvd25saW5rO1xuICAgICAgaWYgKGxpbmsubWFyZ2luIDwgbG9jYWxTeXN0ZW1NYXJnaW4pIHtcbiAgICAgICAgbG9jYWxMaW5rU3RhdHVzLnN0YXR1cyA9ICdpcy13YXJuaW5nJztcbiAgICAgICAgbG9jYWxMaW5rU3RhdHVzLm1lc3NhZ2UgPSBgPGI+VGhpcyBsaW5rIGNsb3NlcyB3aXRoIGEgbG93IG1hcmdpbjwvYj48YnI+RWIvTjAgbWFyZ2luID0gJHsoXG4gICAgICAgICAgTWF0aC5yb3VuZChsaW5rLm1hcmdpbiAqIDEwMCkgLyAxMDBcbiAgICAgICAgKS50b0ZpeGVkKDIpfSBkQiA8ICR7bG9jYWxTeXN0ZW1NYXJnaW59IGRCID0gU3lzdGVtIE1hcmdpbmA7XG4gICAgICB9XG4gICAgICBpZiAobGluay5tYXJnaW4gPCAwKSB7XG4gICAgICAgIGxvY2FsTGlua1N0YXR1cy5zdGF0dXMgPSAnaXMtZGFuZ2VyJztcbiAgICAgICAgbG9jYWxMaW5rU3RhdHVzLm1lc3NhZ2UgPSBgPGI+VGhpcyBsaW5rIGRvZXMgbm90IGNsb3NlPC9iPjxicj5FYi9OMCBtYXJnaW4gPSAkeyhcbiAgICAgICAgICBNYXRoLnJvdW5kKGxpbmsubWFyZ2luICogMTAwKSAvIDEwMFxuICAgICAgICApLnRvRml4ZWQoMil9IGRCIDwgMGRCYDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGtleSwgbG9jYWxMaW5rU3RhdHVzIH07XG4gICAgfSk7XG4gIH1cblxuICByZWZyZXNoRGlhZ3JhbUNvbXBvbmVudHMocmVzdWx0czogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0cyk7XG4gICAgY29uc3QgcG93ZXJJbjogbnVtYmVyID0gcmVzdWx0cy50eF9hbXBsaWZpZXJfcG93ZXIudmFsdWU7XG4gICAgY29uc3QgZGlhZ3JhbUNvbXBvbmVudHMgPSBbXG4gICAgICB7XG4gICAgICAgIGlkOiAndHgnLFxuICAgICAgICBjb21wb25lbnQ6IHtcbiAgICAgICAgICBsYWJlbDogJ1B0eCcsXG4gICAgICAgICAgZ2FpbjogMCxcbiAgICAgICAgICBsaW5lYXI6IHRydWUsXG4gICAgICAgICAgcG9zaXRpb246IDAsXG4gICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdjYWJsZVR4JyxcbiAgICAgICAgY29tcG9uZW50OiB7XG4gICAgICAgICAgbGFiZWw6ICdMdHgnLFxuICAgICAgICAgIGdhaW46IC1yZXN1bHRzLnR4X2NpcmN1aXRfbG9zcy52YWx1ZSxcbiAgICAgICAgICBsaW5lYXI6IHRydWUsXG4gICAgICAgICAgcG9zaXRpb246IDE1LFxuICAgICAgICAgIHdpZHRoOiAxMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnYW50VHgnLFxuICAgICAgICBjb21wb25lbnQ6IHtcbiAgICAgICAgICBsYWJlbDogJ0d0eCcsXG4gICAgICAgICAgZ2FpbjogcmVzdWx0cy50eF9hbnRlbm5hX2dhaW4udmFsdWUsXG4gICAgICAgICAgbGluZWFyOiBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbjogMjUsXG4gICAgICAgICAgd2lkdGg6IDEwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdmc2wnLFxuICAgICAgICBjb21wb25lbnQ6IHtcbiAgICAgICAgICBsYWJlbDogJ0xwYXRoJyxcbiAgICAgICAgICBnYWluOiAtcmVzdWx0cy50b3RhbF9wYXRoX2xvc3MudmFsdWUsXG4gICAgICAgICAgbGluZWFyOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiAzNSxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2FudFJ4JyxcbiAgICAgICAgY29tcG9uZW50OiB7XG4gICAgICAgICAgbGFiZWw6ICdHcngnLFxuICAgICAgICAgIGdhaW46IHJlc3VsdHMucnhfYW50ZW5uYV9nYWluLnZhbHVlLFxuICAgICAgICAgIGxpbmVhcjogZmFsc2UsXG4gICAgICAgICAgcG9zaXRpb246IDY1LFxuICAgICAgICAgIHdpZHRoOiAxMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnY2FibGVSeCcsXG4gICAgICAgIGNvbXBvbmVudDoge1xuICAgICAgICAgIGxhYmVsOiAnTHJ4JyxcbiAgICAgICAgICBnYWluOiAtcmVzdWx0cy5yeF9jaXJjdWl0X2xvc3MudmFsdWUsXG4gICAgICAgICAgbGluZWFyOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiA3NSxcbiAgICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3J4JyxcbiAgICAgICAgY29tcG9uZW50OiB7XG4gICAgICAgICAgbGFiZWw6ICdQcngnLFxuICAgICAgICAgIGdhaW46IDAsXG4gICAgICAgICAgbGluZWFyOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiA4NSxcbiAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF07XG4gICAgcmV0dXJuIHsgcG93ZXJJbiwgZGlhZ3JhbUNvbXBvbmVudHMgfTtcbiAgfVxufVxuIiwiPGxpYi1jYXJkICpuZ0lmPVwibWluaW1hbFwiPlxuICA8ZGl2IGNsYXNzPVwidGFicyBpcy1jZW50ZXJlZFwiPlxuICAgIDx1bCBzdHlsZT1cIm1hcmdpbjphdXRvO1wiPlxuICAgICAgPGxpIFtuZ0NsYXNzXT1cInsgJ2lzLWFjdGl2ZSc6IHNob3dVcGxpbmsgfVwiIChjbGljayk9XCJzaG93VXBsaW5rID0gdHJ1ZVwiPlxuICAgICAgICA8YT5VcGxpbms8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIFtuZ0NsYXNzXT1cInsgJ2lzLWFjdGl2ZSc6ICFzaG93VXBsaW5rIH1cIiAoY2xpY2spPVwic2hvd1VwbGluayA9IGZhbHNlXCI+XG4gICAgICAgIDxhPkRvd25saW5rPC9hPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbiAgPCEtLSA8ZGl2IGNsYXNzPVwiYnV0dG9ucyBoYXMtYWRkb25zIGlzLXJvdW5kIGlzLWNlbnRlcmVkXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBpZD1cImZ1bGxcIiBocmVmPScjJyAoY2xpY2spPVwibWluaW1hbD1mYWxzZTsgZGlzcGxheWVkUmVzdWx0PWZ1bGxSZXN1bHRcIiBbbmdDbGFzc109XCJ7J2lzLXN1Y2Nlc3MnOiAhbWluaW1hbH1cIj5GdWxsPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBpZD1cIm1pbmltYWxcIiBocmVmPScjJyAoY2xpY2spPVwibWluaW1hbD10cnVlOyBkaXNwbGF5ZWRSZXN1bHQ9bWluaW1hbFJlc3VsdFwiW25nQ2xhc3NdPVwieydpcy1zdWNjZXNzJzogbWluaW1hbH1cIj5NaW5pbWFsPC9idXR0b24+XG4gIDwvZGl2PiAtLT5cbiAgPHRhYmxlIGNsYXNzPVwidGFibGVcIiBjbGFzcz1cImFuaW1hdGVfX2FuaW1hdGVkXCIgIFtuZ0NsYXNzXT1cInNob3dVcGxpbmsgPyAnYW5pbWF0ZV9fc2xpZGVJbkxlZnQnIDogJ2FuaW1hdGVfX3NsaWRlSW5SaWdodCdcIj5cbiAgICA8dGJvZHk+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzZWN0aW9uIG9mIChzaG93VXBsaW5rID8gdGhpcy5mdWxsUmVzdWx0Mi51cGxpbmsgOiB0aGlzLmZ1bGxSZXN1bHQyLmRvd25saW5rKVwiPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjJcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiPlxuICAgICAgICAgIDxiPnt7IHNlY3Rpb24uZ3JvdXAgfX08L2I+XG4gICAgICAgICAgPGEgY2xhc3M9XCJpcy10ZXh0IGlzLWxpbmtcIiAoY2xpY2spPVwic2hvd1VwbGluayA/ICBjb2xsYXBzZWQudXBsaW5rW3NlY3Rpb24uZ3JvdXBdID0gIWNvbGxhcHNlZC51cGxpbmtbc2VjdGlvbi5ncm91cF0gOiBjb2xsYXBzZWQuZG93bmxpbmtbc2VjdGlvbi5ncm91cF0gPSAhY29sbGFwc2VkLmRvd25saW5rW3NlY3Rpb24uZ3JvdXBdXCIgYXJpYS1sYWJlbD1cImNvbGxhcHNlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj48ZmEtaWNvbiBbaWNvbl09XCJmYUFuZ2xlRG93blwiIHRyYW5zZm9ybT1cInJvdGF0ZS17eyhzaG93VXBsaW5rID8gY29sbGFwc2VkLnVwbGlua1tzZWN0aW9uLmdyb3VwXSA6IGNvbGxhcHNlZC5kb3dubGlua1tzZWN0aW9uLmdyb3VwXSkgPyAwIDogMTgwfX1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2ZhLWljb24+PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90aD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dVcGxpbmsgPyAhY29sbGFwc2VkLnVwbGlua1tzZWN0aW9uLmdyb3VwXSA6ICFjb2xsYXBzZWQuZG93bmxpbmtbc2VjdGlvbi5ncm91cF1cIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlbHQgb2Ygc2VjdGlvbi5lbHRcIj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cInJlc3VsdC1yb3dcIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgJ2FjdGl2ZS1yb3cnOiBzaG93VXBsaW5rID8gdGhpcy5kZWx0YVVMLmluY2x1ZGVzKGVsdC5uYW1lKSA6IHRoaXMuZGVsdGFETC5pbmNsdWRlcyhlbHQubmFtZSlcbiAgICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHQtbGFiZWxcIj57eyBwYXJhbXNbZWx0Lm5hbWVdLmxhYmVsIH19PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0LXZhbHVlXCIgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIDwhLS0ge3sgZWx0LnZhbHVlLnRvUHJlY2lzaW9uKDIpIH19IHt7IGVsdC51bml0IH19IC0tPlxuICAgICAgICAgICAgICAgIHt7IGVsdC52YWx1ZSB8IG51bWJlcjogXCIuMS0yXCJ9fSB7eyBlbHQudW5pdCB9fVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuXG4gIDwhLS0gPGEgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibGlua1wiIHN0eWxlPVwiZmxvYXQ6cmlnaHQ7XCIgKGNsaWNrKT1cIm1pbmltYWw9IW1pbmltYWw7IGRpc3BsYXllZFJlc3VsdD0gbWluaW1hbCA/IG1pbmltYWxSZXN1bHQ6ZnVsbFJlc3VsdFwiPnt7bWluaW1hbCA/ICdTaG93IG1vcmUnIDogJ1Nob3cgbGVzcyd9fTwvYT4gLS0+XG4gIDwhLS0gPHByZT57e3RoaXMua2V5IHwganNvbiB9fTwvcHJlPiAtLT5cbjwvbGliLWNhcmQ+XG48ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxuICA8bGliLW5hdmlnYXRpb24tc2lkZWJhciAgY2xhc3M9XCJjb2x1bW4gaXMtbmFycm93XCIgW2N1cnJlbnRDb21wb25lbnRdPVwiJ3Jlc3VsdHMnXCIgKm5nSWY9XCIhbWluaW1hbFwiPjwvbGliLW5hdmlnYXRpb24tc2lkZWJhcj5cbiAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy13aWRlXCI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwdC0zIHByLTNcIj5cbiAgICA8IS0tIDxsaWItc3RlcGJhciBbc3RlcF09XCIncmVzdWx0cydcIiAqbmdJZj1cIiFtaW5pbWFsXCI+PC9saWItc3RlcGJhcj4gLS0+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24gcC0wIHBiMy0zIGV4cG9ydC1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnMgaXMtZ3JvdXBlZFwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uXCIgKGNsaWNrKT1cImV4cG9ydFJlc3VsdHMoJ21kJylcIj5cbiAgICAgICAgICAgIDxmYS1pY29uIHN0eWxlID0gXCJtYXJnaW4tcmlnaHQ6MTJweFwiIHNpemU9XCJsZ1wiIFtpY29uXT1cImRvd25sb2FkXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgPGRpdj5FeHBvcnQgcmVzdWx0cyBhcyAubWQ8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPCEtLSA8YSBjbGFzcz1cImJ1dHRvblwiIChjbGljayk9XCJleHBvcnRSZXN1bHRzKCdwZGYnKVwiPlxuICAgICAgICAgICAgPGZhLWljb24gc3R5bGUgPSBcIm1hcmdpbi1yaWdodDoxMnB4XCIgc2l6ZT1cImxnXCIgW2ljb25dPVwiZG93bmxvYWRcIj48L2ZhLWljb24+XG4gICAgICAgICAgICA8ZGl2PkV4cG9ydCByZXN1bHRzIGFzIC5wZGY8L2Rpdj5cbiAgICAgICAgICA8L2E+IC0tPlxuICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uXCIgKGNsaWNrKT1cImV4cG9ydFJlc3VsdHMoJ2pzb24nKVwiPlxuICAgICAgICAgICAgPGZhLWljb24gc3R5bGUgPSBcIm1hcmdpbi1yaWdodDoxMnB4XCIgc2l6ZT1cImxnXCIgW2ljb25dPWRvd25sb2FkPjwvZmEtaWNvbj5cbiAgICAgICAgICAgIDxkaXY+RXhwb3J0IHJlc3VsdHMgYXMgLmpzb248L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiAqbmdJZj1cIiFtaW5pbWFsXCI+XG4gICAgICAgIDwhLS0gPGEgY2xhc3M9XCJidXR0b25cIiBocmVmPScjJz5TYXZlIFJlc3VsdHM8L2E+IC0tPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXJcIj5cbiAgICAgICAgICA8bGliLWNhcmQgW3RpdGxlXT1cIidVcGxpbmsnXCI+XG4gICAgICAgICAgICA8bGliLWNhcmQgKm5nSWY9XCJ0aGlzLmxpbmtTdGF0dXNcIiBbc3R5bGVDbGFzc109XCJ0aGlzLmxpbmtTdGF0dXMudXBsaW5rLnN0YXR1cyB8fCAnJ1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay1jbG9zZWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGZhLWljb24gc2l6ZT1cIjJ4XCIgW2ljb25dPVwiZmFDaGVja1wiICpuZ0lmPVwidGhpcy5saW5rU3RhdHVzLnVwbGluay5zdGF0dXMgPT09ICdpcy1zdWNjZXNzJ1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDxmYS1pY29uIHNpemU9XCIyeFwiIFtpY29uXT1cImZhV2FyblwiICpuZ0lmPVwidGhpcy5saW5rU3RhdHVzLnVwbGluay5zdGF0dXMgPT09ICdpcy13YXJuaW5nJ1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDxmYS1pY29uIHNpemU9XCIyeFwiIFtpY29uXT1cImZhRXJyb3JcIiAqbmdJZj1cInRoaXMubGlua1N0YXR1cy51cGxpbmsuc3RhdHVzID09PSAnaXMtZGFuZ2VyJ1wiID48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaW5rLWNsb3NlZFwiIFtpbm5lckhUTUxdPVwidGhpcy5saW5rU3RhdHVzLnVwbGluay5tZXNzYWdlXCI+PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGliLWNhcmQ+XG4gICAgICAgICAgICAgICAgPCEtLSA8YiBjbGFzcz1cInRpdGxlIGlzLWNlbnRlcmVkXCI+VXBsaW5rPC9iPiAtLT5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzZWN0aW9uIG9mIHRoaXMuZnVsbFJlc3VsdDIudXBsaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IHNlY3Rpb24uZ3JvdXAgfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImlzLXRleHQgaXMtbGlua1wiIChjbGljayk9XCJjb2xsYXBzZWQudXBsaW5rW3NlY3Rpb24uZ3JvdXBdID0gIWNvbGxhcHNlZC51cGxpbmtbc2VjdGlvbi5ncm91cF1cIiBhcmlhLWxhYmVsPVwiY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+PGZhLWljb24gW2ljb25dPVwiZmFBbmdsZURvd25cIiB0cmFuc2Zvcm09XCJyb3RhdGUte3tjb2xsYXBzZWQudXBsaW5rW3NlY3Rpb24uZ3JvdXBdID8gMCA6IDE4MH19XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9mYS1pY29uPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sbGFwc2VkLnVwbGlua1tzZWN0aW9uLmdyb3VwXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZWx0IG9mIHNlY3Rpb24uZWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInJlc3VsdC1yb3dcIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWN0aXZlLXJvdyc6IHRoaXMuZGVsdGFVTC5pbmNsdWRlcyhlbHQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0LWxhYmVsXCI+e3sgcGFyYW1zW2VsdC5uYW1lXS5sYWJlbCB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0LXZhbHVlXCIgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZWx0LnZhbHVlIHwgbnVtYmVyOiBcIi4xLTJcIiB9fSB7eyBlbHQudW5pdCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9saWItY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtaGFsZlwiID5cbiAgICAgICAgICA8bGliLWNhcmQgW3RpdGxlXT1cIidTeW50aGVzaXMgVXBsaW5rJ1wiPlxuICAgICAgICAgICAgPGxpYi1zeW50aGV0aWMtZHJhd2luZyBbc2NlbmFyaW9JZF09XCIndXBsaW5rJ1wiIFtjb21wb25lbnRzXT1cInRoaXMuZGlhZ3JhbVBhcmFtc1VwbGluay5kaWFncmFtQ29tcG9uZW50c1wiIFtsaW5rVHlwZV09XCIndXBsaW5rJ1wiIFtwb3dlckluXT1cInRoaXMuZGlhZ3JhbVBhcmFtc1VwbGluay5wb3dlckluXCI+PC9saWItc3ludGhldGljLWRyYXdpbmc+XG4gICAgICAgICAgPC9saWItY2FyZD5cbiAgICAgICAgICA8bGliLWNhcmQgW3RpdGxlXT1cIidTeW50aGVzaXMgRG93bmxpbmsnXCI+XG4gICAgICAgICAgICA8bGliLXN5bnRoZXRpYy1kcmF3aW5nIFtzY2VuYXJpb0lkXT1cIidkb3dubGluaydcIiBbY29tcG9uZW50c109XCJ0aGlzLmRpYWdyYW1QYXJhbXNEb3dubGluay5kaWFncmFtQ29tcG9uZW50c1wiICBbbGlua1R5cGVdPVwiJ2Rvd25saW5rJ1wiIFtwb3dlckluXT1cInRoaXMuZGlhZ3JhbVBhcmFtc0Rvd25saW5rLnBvd2VySW5cIj48L2xpYi1zeW50aGV0aWMtZHJhd2luZz5cbiAgICAgICAgICA8L2xpYi1jYXJkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1vbmUtcXVhcnRlclwiPlxuICAgICAgICAgICAgICA8bGliLWNhcmQgW3RpdGxlXT1cIidEb3dubGluaydcIiA+XG5cbiAgICAgICAgICAgICAgICA8bGliLWNhcmQgKm5nSWY9XCJ0aGlzLmxpbmtTdGF0dXNcIiBbc3R5bGVDbGFzc109XCJ0aGlzLmxpbmtTdGF0dXMuZG93bmxpbmsuc3RhdHVzIHx8ICcnXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay1jbG9zZWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIHNpemU9XCIyeFwiIFtpY29uXT1cImZhQ2hlY2tcIiAqbmdJZj1cInRoaXMubGlua1N0YXR1cy5kb3dubGluay5zdGF0dXMgPT09ICdpcy1zdWNjZXNzJ1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gc2l6ZT1cIjJ4XCIgW2ljb25dPVwiZmFXYXJuXCIgKm5nSWY9XCJ0aGlzLmxpbmtTdGF0dXMuZG93bmxpbmsuc3RhdHVzID09PSAnaXMtd2FybmluZydcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIHNpemU9XCIyeFwiIFtpY29uXT1cImZhRXJyb3JcIiAqbmdJZj1cInRoaXMubGlua1N0YXR1cy5kb3dubGluay5zdGF0dXMgPT09ICdpcy1kYW5nZXInXCIgPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaW5rLWNsb3NlZFwiIFtpbm5lckhUTUxdPVwidGhpcy5saW5rU3RhdHVzLmRvd25saW5rLm1lc3NhZ2VcIj48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpYi1jYXJkPlxuICAgICAgICAgICAgICAgIDwhLS0gPGIgY2xhc3M9XCJ0aXRsZSBpcy1jZW50ZXJlZFwiPkRvd25saW5rPC9iPiAtLT5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzZWN0aW9uIG9mIHRoaXMuZnVsbFJlc3VsdDIuZG93bmxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj1cIjJcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgc2VjdGlvbi5ncm91cCB9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaXMtdGV4dCBpcy1saW5rXCIgKGNsaWNrKT1cImNvbGxhcHNlZC5kb3dubGlua1tzZWN0aW9uLmdyb3VwXSA9ICFjb2xsYXBzZWQuZG93bmxpbmtbc2VjdGlvbi5ncm91cF1cIiBhcmlhLWxhYmVsPVwiY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+PGZhLWljb24gW2ljb25dPVwiZmFBbmdsZURvd25cIiB0cmFuc2Zvcm09XCJyb3RhdGUte3tjb2xsYXBzZWQuZG93bmxpbmtbc2VjdGlvbi5ncm91cF0gPyAwIDogMTgwfX1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2ZhLWljb24+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2xsYXBzZWQuZG93bmxpbmtbc2VjdGlvbi5ncm91cF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGVsdCBvZiBzZWN0aW9uLmVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJyZXN1bHQtcm93XCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjdGl2ZS1yb3cnOiB0aGlzLmRlbHRhREwuaW5jbHVkZXMoZWx0Lm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdC1sYWJlbFwiPnt7IHBhcmFtc1tlbHQubmFtZV0ubGFiZWwgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdC12YWx1ZVwiIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVsdC52YWx1ZSB8IG51bWJlcjogXCIuMS0yXCIgfX0ge3sgZWx0LnVuaXQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICA8L2xpYi1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tIDxhIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImxpbmtcIiBzdHlsZT1cImZsb2F0OnJpZ2h0O1wiIChjbGljayk9XCJtaW5pbWFsPSFtaW5pbWFsOyBkaXNwbGF5ZWRSZXN1bHQ9IG1pbmltYWwgPyBtaW5pbWFsUmVzdWx0OmZ1bGxSZXN1bHRcIj57e21pbmltYWwgPyAnU2hvdyBtb3JlJyA6ICdTaG93IGxlc3MnfX08L2E+IC0tPlxuICAgICAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19