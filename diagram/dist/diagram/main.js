(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/julien/Documents/_Supaero/_Nanostar/stage-2021-julien_prissimitzis/diagram/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JwT1":
/*!*********************************************!*\
  !*** ./src/app/LinkBudgetScenario.model.ts ***!
  \*********************************************/
/*! exports provided: LinkBudgetScenario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkBudgetScenario", function() { return LinkBudgetScenario; });
class LinkBudgetScenario {
    constructor(power) {
        this.setPowerIn(power);
        this.components = {};
        this.points = [];
    }
    setPowerIn(power) {
        this.powerIn = power;
    }
    getPowerOut() {
        return this.powerOut;
    }
    getLabels() {
        /**
        * Returns the different labels for the components with their associated positions in
        * the form of a list of {label, position};
        */
        let labels = [];
        for (let key in this.components) {
            let c = this.components[key];
            let label = { name: c.label, position: c.position + c.width / 2 };
            labels.push(label);
        }
        return labels;
    }
    addComponent(id, component) {
        this.components[id] = component;
    }
    addComponents(components) {
        /**
         * This method adds multiples components at once
         */
        components.forEach((s) => {
            this.addComponent(s.id, s.component);
        });
    }
    editGain(id, value) {
        this.components[id]['gain'] = value;
    }
    editGains(gains) {
        /**
         * Edit multiple gains at once, these can be provided by a formGroup using the formGroup.formValues attribute
         */
        Object.keys(gains).forEach((key) => {
            this.editGain(key, gains[key]);
        });
    }
    numberOfComponents() {
        let componentsNumber = 0;
        for (let key in this.components) {
            componentsNumber++;
        }
        return componentsNumber;
    }
    getPoints() {
        return this.points;
    }
    randomize(amplitude = 30) {
        /**This changes the gain from the components with random values */
        for (let id in this.components) {
            this.components[id]['gain'] = (Math.random() - 0.8) * amplitude;
        }
        this.powerIn = Math.random() * amplitude;
    }
    compute() {
        /**This function gives us the points needed to plot our LB graph */
        //FIXME: Tried to make this clean (still cleaner than before) but forgot about pass by reference and now it looks like it could be way cleaner.
        let lastPoint = { x: 0, y: this.powerIn };
        let points = [{ x: lastPoint.x, y: lastPoint.y }];
        let discontinuityPoint = { x: 0, y: 0 };
        for (let id in this.components) {
            let component = this.components[id];
            if (!component.linear) {
                //Here we create the discontinuity by adding a point with same abscissa
                discontinuityPoint.x = lastPoint.x;
                discontinuityPoint.y = lastPoint.y + component.gain;
                points.push({ x: discontinuityPoint.x, y: discontinuityPoint.y });
            }
            (lastPoint.x = lastPoint.x + component.width),
                (lastPoint.y = lastPoint.y + component.gain);
            points.push({ x: lastPoint.x, y: lastPoint.y });
        }
        this.powerOut = lastPoint.y;
        this.points = points;
        //return points;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _LinkBudgetScenario_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkBudgetScenario.model */ "JwT1");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class AppComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.powerIn = 10;
        this.form = this.formBuilder.group({
            power: this.powerIn,
            gains: this.formBuilder.group({
                cableTx: -3,
                antTx: 30,
                fsl: -209,
                antRx: 26,
                cableRx: -5,
            }),
        });
    }
    ngOnInit() {
        this.DefaultLBScenario = new _LinkBudgetScenario_model__WEBPACK_IMPORTED_MODULE_0__["LinkBudgetScenario"](this.powerIn);
        this.DefaultLBScenario.addComponents([
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
                    gain: -3,
                    linear: true,
                    position: 10,
                    width: 10,
                },
            },
            {
                id: 'antTx',
                component: {
                    label: 'Gtx',
                    gain: 24,
                    linear: false,
                    position: 25,
                    width: 10,
                },
            },
            {
                id: 'fsl',
                component: {
                    label: 'Lpath',
                    gain: -125,
                    linear: true,
                    position: 35,
                    width: 30,
                },
            },
            {
                id: 'antRx',
                component: {
                    label: 'Grx',
                    gain: 35,
                    linear: false,
                    position: 65,
                    width: 10,
                },
            },
            {
                id: 'cableRx',
                component: {
                    label: 'Lrx',
                    gain: -5,
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
        ]);
        this.DefaultLBScenario.compute();
        this.drawGraph();
    }
    randomizeInputs() {
        this.DefaultLBScenario.randomize();
        this.DefaultLBScenario.compute();
        this.updateData();
    }
    onSubmit() {
        this.DefaultLBScenario.setPowerIn(this.form.value['power']);
        let formValues = this.form.value['gains'];
        this.DefaultLBScenario.editGains(formValues);
        this.DefaultLBScenario.compute();
        this.updateData();
    }
    addLabels() {
        let labels = this.DefaultLBScenario.getLabels();
        this.svg
            .append('g')
            .attr('class', 'labels')
            .attr('transform', 'translate(0,-10)')
            .selectAll('text')
            .data(labels)
            .enter()
            .append('text')
            .text((d) => d.name)
            .attr('x', (d) => d.position * 9)
            .attr('text-anchor', 'middle');
    }
    drawGraph() {
        this.points = this.DefaultLBScenario.getPoints();
        (this.margin = { top: 30, right: 30, bottom: 0, left: 30 }),
            (this.width = 960 - this.margin.left - this.margin.right), //Same value as for the drawing
            (this.height = 240 - this.margin.top - this.margin.bottom);
        this.x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([0, this.width]);
        this.y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([0, this.height]);
        this.x.domain([0, 100]);
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#diagram')
            .append('svg')
            .attr('id', 'graph')
            .attr('viewBox', -this.margin.left +
            ' ' +
            -this.margin.top +
            ' ' +
            (this.width + this.margin.left + this.margin.right) +
            ' ' +
            (this.height + this.margin.top + this.margin.bottom + 60));
        this.svg
            .append('path')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom);
        this.budget = this.svg
            .append('text')
            .attr('x', (this.width + this.margin.left + this.margin.right) / 2)
            .attr('y', this.height + this.margin.top + this.margin.bottom + 15)
            .attr('text-anchor', 'middle');
        //The vertical lines, here the *9 factor is explained by the 100px -> (960-60)px conversion
        this.svg
            .append('g')
            .attr('class', 'group')
            .selectAll('line')
            .data(this.points)
            .enter()
            .append('line')
            .attr('class', 'vert-line')
            .attr('x1', (d) => d.x * 9)
            .attr('y1', this.height)
            .attr('x2', (d) => d.x * 9)
            .attr('y2', 0)
            .attr('stroke-width', 1)
            .attr('stroke-dasharray', '5,5')
            .attr('stroke', '#888888');
        this.svg.append('g').attr('class', 'YAxis');
        this.addLabels();
        this.updateData();
    }
    updateData() {
        var _a;
        let x = this.x; //FIXME: Could be better here
        let y = this.y;
        this.points = this.DefaultLBScenario.getPoints();
        this.powerOut = this.DefaultLBScenario.getPowerOut();
        //Careful with this one, returns (min, max) but domain expects (up, down) so trouble with yaxis
        let [min, max] = (_a = (d3__WEBPACK_IMPORTED_MODULE_1__["extent"](this.points, (point) => point.y))) !== null && _a !== void 0 ? _a : [0, -150];
        this.y.domain([max, min]);
        var valueline = d3__WEBPACK_IMPORTED_MODULE_1__["line"]()
            .x(function (d) {
            var _a;
            return (_a = x(d.x)) !== null && _a !== void 0 ? _a : x(0);
        })
            .y(function (d) {
            var _a;
            return (_a = y(d.y)) !== null && _a !== void 0 ? _a : y(0);
        });
        //Adding the plot line
        this.svg
            .select('path')
            .datum(this.points)
            .attr('class', 'line')
            .transition()
            .duration(1000)
            .attr('d', valueline);
        //Adding the YAxis
        this.svg
            .select('.YAxis')
            .transition()
            .duration(1000)
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](this.y));
        //Adding the formula at bottom
        this.budget.text('Prx = Ptx - Ltx + Gtx - Lpath + Grx - Lrx = ' +
            this.powerOut.toFixed(1) +
            ' dB');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 70, vars: 1, consts: [["id", "container"], ["id", "diagram"], ["viewBox", "-10 0 320 75"], ["id", "antenna", "width", "100mm", "height", "25mm", "version", "1.1", "viewBox", "0 0 100 25", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["id", "a", "x1", "101.5", "x2", "112.65", "y1", "101.21", "y2", "101.21", "gradientTransform", "matrix(1.1223,0,0,1.2246,-14.869,-4.8265)", "gradientUnits", "userSpaceOnUse"], ["offset", "0", 2, "stop-color", "#f60"], ["offset", "1", 2, "stop-color", "#b50000"], ["id", "b", "x1", "36.839", "x2", "47.828", "y1", "101.21", "y2", "101.21", "gradientTransform", "matrix(1.1223 0 0 1.2246 -6.6383 -2.5344)", "gradientUnits", "userSpaceOnUse"], ["offset", "0", 2, "stop-color", "#005c94"], ["offset", "1", 2, "stop-color", "#009100"], ["transform", "matrix(1 0 0 1.0279 -24.935 -106.35)"], ["id", "tx", "transform", "matrix(1.236 0 0 1.3487 .69077 -18.24)"], ["d", "m31.768 102.36-11.941 5.7454v-11.491l5.9708 2.8727z", 2, "fill", "#19aeff", "stroke-linejoin", "round", "stroke-width", ".36623", "stroke", "#005c94"], ["x", "21.302406", "y", "103.92289", 0, "xml", "space", "preserve", 2, "fill", "#ffffff", "font-family", "sans-serif", "font-size", "8.922px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".22304", "word-spacing", "0px"], ["x", "21.302406", "y", "103.92289", 2, "fill", "#ffffff", "font-size", "4.1635px", "stroke-width", ".22304"], ["id", "line-tx", "transform", "matrix(1.2574 0 0 1 -3.9287 -1.604)", 2, "paint-order", "stroke fill markers"], ["d", "m34.935 121.41h11.878", 2, "fill", "#ba00ff", "paint-order", "stroke fill markers", "stroke-linejoin", "round", "stroke-width", ".46895", "stroke", "url(#b)"], ["id", "antenna-tx", "transform", "matrix(1.1223 0 0 1.2246 -5.9383 -4.1198)", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#009100"], ["d", "m54.24 101.21v-13.122", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#009100"], ["d", "m50.271 88.088 3.9688 6.8792", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#009100"], ["d", "m58.208 88.088-3.9688 6.8792", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#009100"], ["id", "antenna-rx", "transform", "matrix(-1.1223 0 0 1.2246 155.81 -4.1437)", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#f60"], [2, "stroke", "#f60"], ["d", "m54.24 101.21v-13.117", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#f60"], ["d", "m50.271 88.086 3.9688 6.8792", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#f60"], ["d", "m58.208 88.086-3.9688 6.8792", 2, "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", ".4", "stroke", "#f60"], ["id", "line-rx", "transform", "matrix(1.2451 0 0 1 -28.676 .67803)"], ["d", "m111.34 119.12h-12.06", 2, "fill", "#ba00ff", "stroke-width", ".46895", "stroke", "url(#a)"], ["id", "rx", "transform", "translate(1.7596 -.25208)"], ["transform", "matrix(-1.236 0 0 1.3487 147.46 -17.998)", 2, "fill", "#ff4141", "stroke", "#b50000"], ["d", "m31.768 102.36-11.941 5.7454v-11.491l5.9708 2.8727z", 2, "fill", "#ff4141", "stroke-linejoin", "round", "stroke-width", ".36623", "stroke", "#b50000"], ["x", "115.42167", "y", "121.30454", 0, "xml", "space", "preserve", 2, "fill", "#ffffff", "font-family", "sans-serif", "font-size", "8.922px", "letter-spacing", "0px", "line-height", "1.25", "stroke-width", ".22304", "word-spacing", "0px"], ["x", "115.42167", "y", "121.30454", 2, "fill", "#ffffff", "font-size", "4.1635px", "stroke-width", ".22304"], ["href", "#antenna", "width", "300", "height", "75"], ["id", "side"], [3, "formGroup", "ngSubmit"], ["formControlName", "power", "type", "number"], ["formArrayName", "gains"], ["formControlName", "cableTx", "type", "number"], ["formControlName", "antTx", "type", "number"], ["formControlName", "fsl", "type", "number"], ["formControlName", "antRx", "type", "number"], ["formControlName", "cableRx", "type", "number"], ["type", "submit", 1, "button"], [1, "button", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "linearGradient", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "stop", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "linearGradient", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "stop", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "stop", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "g", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "g", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "text", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tspan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Tx");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "g", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "g", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "g", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "g", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "text", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tspan", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Rx");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "use", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "form", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_40_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Power in: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Tx Cable Loss: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Tx Antenna Gain: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "FSL: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Rx Antenna Gain: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Rx Cable Loss: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Update Graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_68_listener() { return ctx.randomizeInputs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Random values");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"]], styles: ["#diagram {\n  float: left;\n  width: 50%;\n  height: 800px;\n}\n\n#side {\n  display: inline-block;\n  width: 50%;\n  height: 800px;\n}\n\npath.line {\n  fill: #FFFFFF;\n  stroke: black;\n  stroke-width: 2;\n}\n\nform {\n  width: 50%;\n  margin-right: auto;\n}\n\ninput {\n  float: right;\n}\n\ndiv {\n  margin: 10px 0px 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFFRSxVQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RpYWdyYW17XG4gIGZsb2F0OmxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogODAwcHhcbn1cbiNzaWRlIHtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogODAwcHhcbn1cblxucGF0aC5saW5lIHtcbiAgZmlsbDogI0ZGRkZGRjtcbiAgc3Ryb2tlOiBibGFjaztcbiAgc3Ryb2tlLXdpZHRoOiAyO1xufVxuXG5mb3JtIHtcbiAgLy9mbG9hdDpsZWZ0O1xuICB3aWR0aDo1MCU7XG4gIG1hcmdpbi1yaWdodDphdXRvO1xufVxuaW5wdXR7XG4gIGZsb2F0OnJpZ2h0O1xufVxuXG5kaXYge1xuICBtYXJnaW46IDEwcHggMHB4IDEwcHggIDBweDtcbn1cbi8vICNjb250YWluZXJ7XG5cbi8vIH1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map