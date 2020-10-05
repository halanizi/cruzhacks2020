(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <!-- <img src=\"/assets/shapes.svg\" alt=\"\"/>  -->\n    <img src=\"/assets/slugcycle.jpg\" alt=\"\"/>\n    <!--<img src=\"/assets/gruNo.png\" alt=\"\"/>  -->\n    <ion-card-header>\n      <ion-card-subtitle>I need help to do this :c</ion-card-subtitle>\n      <ion-card-title>Welcome to Hell</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <a href=\"#\" class=\"tempButton\">Buttonzz</a>\n      <a href=\"plasticRecycle2.html\">Try this out?</a>\n\n      <p>\n        Now that your app has been created, you'll want to start yeeting yourself out and calling them features\n        and components. Please give me some of the resources below for next steps on what tf to do.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Resources</ion-label>\n      <!--<p><a href=\"http://www.google.com\">Open plastic text 1</a></p>-->\n      <!--<a href=\"https://www.gavgavian.com\">Open this and work plz</a>-->\n        <p>\n          <a href=\"http://youtube.com\">Here it is :3</a>\n        </p>\n\n    </ion-list-header>\n    <!--<ion-item href=\"https://ionicframework.com/docs/\">  -->\n      <ion-item href=\"https://cats.com\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n      <ion-label>Hanna don't tap on this tab plz</ion-label>\n    </ion-item>\n    <ion-item href=\"https://ionicframework.com/docs/building/scaffolding\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\n      <ion-label>Scaffold Out Your App</ion-label>\n    </ion-item>\n    <ion-item href=\"https://ionicframework.com/docs/layout/structure\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"grid\"></ion-icon>\n      <ion-label>Change Your App Layout</ion-label>\n    </ion-item>\n    <ion-item href=\"https://ionicframework.com/docs/theming/basics\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"color-fill\"></ion-icon>\n      <ion-label>Theme Your App</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.tempButton {\n  box-shadow: 0px 1px 0px 0px #fff6af;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #ffec64), to(#ffab23));\n  background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\n  background-color: #ffec64;\n  border-radius: 6px;\n  border: 1px solid #ffaa22;\n  display: inline-block;\n  cursor: pointer;\n  color: #333333;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffee66;\n}\n\n.tempButton:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #ffab23), to(#ffec64));\n  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\n  background-color: #ffab23;\n}\n\n.tempButton:active {\n  position: relative;\n  top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXG1hcnRpXFxjcnV6SGFja3MyMDIwL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNDLG1DQUFBO0VBQ0EsaUdBQUE7RUFBQSxnRUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQ0NEOztBRENBO0VBQ0MsaUdBQUE7RUFBQSxnRUFBQTtFQUNBLHlCQUFBO0FDRUQ7O0FEQUE7RUFDQyxrQkFBQTtFQUNBLFFBQUE7QUNHRCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZW1wQnV0dG9uIHtcblx0Ym94LXNoYWRvdzogMHB4IDFweCAwcHggMHB4ICNmZmY2YWY7XG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZWM2NCA1JSwgI2ZmYWIyMyAxMDAlKTtcblx0YmFja2dyb3VuZC1jb2xvcjojZmZlYzY0O1xuXHRib3JkZXItcmFkaXVzOjZweDtcblx0Ym9yZGVyOjFweCBzb2xpZCAjZmZhYTIyO1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0Y3Vyc29yOnBvaW50ZXI7XG5cdGNvbG9yOiMzMzMzMzM7XG5cdGZvbnQtZmFtaWx5OkFyaWFsO1xuXHRmb250LXNpemU6MTVweDtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0cGFkZGluZzo2cHggMjRweDtcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdHRleHQtc2hhZG93OjBweCAxcHggMHB4ICNmZmVlNjY7XG59XG4udGVtcEJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmYWIyMyA1JSwgI2ZmZWM2NCAxMDAlKTtcblx0YmFja2dyb3VuZC1jb2xvcjojZmZhYjIzO1xufVxuLnRlbXBCdXR0b246YWN0aXZlIHtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdHRvcDoxcHg7XG59XG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZW1wQnV0dG9uIHtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggMHB4ICNmZmY2YWY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmVjNjQgNSUsICNmZmFiMjMgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVjNjQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmYWEyMjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDZweCAyNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCAjZmZlZTY2O1xufVxuXG4udGVtcEJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmFiMjMgNSUsICNmZmVjNjQgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFiMjM7XG59XG5cbi50ZW1wQnV0dG9uOmFjdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() { }
};
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map