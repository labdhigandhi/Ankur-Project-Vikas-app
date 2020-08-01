(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-tutorial-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tutorial/tutorial.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tutorial/tutorial.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color='primary' (click)=\"startApp()\" [hidden]=\"!showSkip\">Skip</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-slides #slides (ionSlideWillChange)=\"onSlideChangeStart($event)\" pager=\"false\">\n    <ion-slide>\n      <h2 class=\"slide-title\">\n        Hi! I’m Nano, here to help you use AI Tutor.\n        <b>ICA</b>\n      </h2>\n      <p>\n        My friends and I prepared a quick tour to help you get the most out of AI Tutor.\n      </p>\n      <img src=\"assets/img/ica-slidebox-img-1.png\" class=\"slide-image\" />\n    </ion-slide>\n\n    <ion-slide>\n     \n      <h2 class=\"slide-title\">\n        Hi! I’m Nano, here to help you use AI Tutor.\n        <b>ICA</b>\n      </h2>\n      <p>\n        My friends and I prepared a quick tour to help you get the most out of AI Tutor.\n      </p>\n      <img src=\"assets/img/ica-slidebox-img-2.png\" class=\"slide-image\" />\n    </ion-slide>\n\n    <ion-slide>\n      <h2 class=\"slide-title\">\n        Hi! I’m Nano, here to help you use AI Tutor.\n        <b>ICA</b>\n      </h2>\n      <p>\n        My friends and I prepared a quick tour to help you get the most out of AI Tutor.\n      </p>\n      <img src=\"assets/img/ica-slidebox-img-3.png\" class=\"slide-image\" />\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/img/ica-slidebox-img-4.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">Ready to Play?</h2>\n      <ion-button fill=\"clear\" (click)=\"startApp()\">\n        Continue\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TutorialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageRoutingModule", function() { return TutorialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorial */ "./src/app/pages/tutorial/tutorial.ts");




var routes = [
    {
        path: '',
        component: _tutorial__WEBPACK_IMPORTED_MODULE_3__["TutorialPage"]
    }
];
var TutorialPageRoutingModule = /** @class */ (function () {
    function TutorialPageRoutingModule() {
    }
    TutorialPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TutorialPageRoutingModule);
    return TutorialPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.module.ts ***!
  \***************************************************/
/*! exports provided: TutorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialModule", function() { return TutorialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tutorial */ "./src/app/pages/tutorial/tutorial.ts");
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutorial-routing.module */ "./src/app/pages/tutorial/tutorial-routing.module.ts");






var TutorialModule = /** @class */ (function () {
    function TutorialModule() {
    }
    TutorialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__["TutorialPageRoutingModule"]
            ],
            declarations: [_tutorial__WEBPACK_IMPORTED_MODULE_4__["TutorialPage"]],
            entryComponents: [_tutorial__WEBPACK_IMPORTED_MODULE_4__["TutorialPage"]],
        })
    ], TutorialModule);
    return TutorialModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Averta-Bold\";\n  src: url('AvertaStd-Bold.eot');\n  src: url('AvertaStd-Bold.otf');\n  src: url('AvertaStd-Bold.ttf');\n  src: url('AvertaStd-Bold.woff');\n}\n@font-face {\n  font-family: \"Averta-regular\";\n  src: url('AvertaStd-Regular.eot');\n  src: url('AvertaStd-Regular.otf');\n  src: url('AvertaStd-Regular.ttf');\n  src: url('AvertaStd-Regular.woff');\n}\n* {\n  font-family: Averta-regular;\n}\nion-content {\n  --ion-background-color: #faf6ff;\n}\n.heading {\n  font-family: \"Averta-Bold\";\n  color: #454545;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 32px;\n}\n.subheading {\n  color: #454545;\n  font-size: 15px;\n  line-height: 24px;\n}\n.swiper-slide {\n  display: block;\n}\n.slide-title {\n  margin-top: 2.8rem;\n}\n.slide-image {\n  max-height: 50%;\n  max-width: 100%;\n  margin: 0px 0px 30px 0;\n}\n.wechatbtn {\n  border-radius: 4px;\n  background: #1aad19;\n  height: 50px;\n  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.4);\n}\n.wechatbtn ion-img {\n  margin-right: 20px;\n}\n.periwinkle {\n  color: #9b64ff;\n}\n.languages {\n  text-align: center;\n}\n.languages ion-select {\n  padding: 0px;\n  position: absolute;\n  right: 38%;\n}\nion-input {\n  height: 50px;\n  margin-bottom: 15px;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #e5dfef;\n}\nion-input span {\n  position: absolute;\n  right: 2%;\n}\n.country {\n  height: 50px;\n  margin-bottom: 15px;\n  --ion-background-color:#fff;\n  border-radius: 4px;\n  border: 1px solid #e5dfef;\n}\n.login-btn, .save-btn {\n  background-color: #552f91;\n  border-radius: 4px;\n  height: 50px;\n}\nion-input[type=number] ion-label {\n  padding: 0px 15px;\n}\n.gender {\n  --ion-background-color: rgba(255,255,255,1);\n  --ion-background-color: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(247,243,255,1) 100%);\n  --ion-background-color: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(100%, rgba(247,243,255,1)));\n  --ion-background-color: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(247,243,255,1) 100%);\n  --ion-background-color: -o-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(247,243,255,1) 100%);\n  --ion-background-color: -ms-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(247,243,255,1) 100%);\n  --ion-background-color: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(247,243,255,1) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#f7f3ff\", GradientType=0 );\n  border-radius: 4px;\n  border: 1px solid #e5dfef;\n}\n.border {\n  border: 4px solid #552f91;\n  border-radius: 6px;\n}\n.avatar-slide {\n  margin: 0px 10px 0px 0px;\n  width: auto !important;\n}\nvideo {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5kYW4vU3BfUmVwb19QYXJlbnQvc3BfcGFyZW50X2FwcC9zcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL3R1dG9yaWFsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL3R1dG9yaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NBO0VBRUksMEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQ2xDSjtBRHFDQTtFQUVJLDZCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7QUNwQ0o7QURtREE7RUFDSSwyQkFBQTtBQ2pESjtBRHFEQTtFQUNJLCtCQUFBO0FDbERKO0FEcURBO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNsREo7QURxREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDbERKO0FEcURBO0VBQ0UsY0FBQTtBQ2xERjtBRHFEQTtFQUNFLGtCQUFBO0FDbERGO0FEcURBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ2xERjtBRHFEQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBR0EsOENBQUE7QUNsREo7QURxREE7RUFDSSxrQkFBQTtBQ2xESjtBRHFEQTtFQUNJLGNBQUE7QUNsREo7QURxREE7RUFDSSxrQkFBQTtBQ2xESjtBRHFEQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNsREo7QURxREE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNsREo7QURvREE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNqREo7QURvREE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNqREo7QURvREE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2pESjtBRG9EQTtFQUNJLGlCQUFBO0FDakRKO0FEb0RBO0VBQ0ksMkNBQUE7RUFDQSxtR0FBQTtFQUNBLDJJQUFBO0VBQ0Esc0dBQUE7RUFDQSxpR0FBQTtFQUNBLGtHQUFBO0VBQ0Esb0dBQUE7RUFDQSxvSEFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNqREo7QURvREE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FDakRKO0FEb0RBO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtBQ2pESjtBRG9EQTtFQUVJLFdBQUE7QUNsREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90dXRvcmlhbC90dXRvcmlhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLXRvb2xiYXIge1xuLy8gICAvLyBUT0RPIHRlc3QgdHJhbnNwYXJlbnQgYW5kIGZ1bGxzY3JlZW5cbi8vICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gfVxuXG4vLyAuc3dpcGVyLXNsaWRlIHtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyB9XG5cbi8vIC5zbGlkZS10aXRsZSB7XG4vLyAgIG1hcmdpbi10b3A6IDIuOHJlbTtcbi8vIH1cblxuLy8gLnNsaWRlLWltYWdlIHtcbi8vICAgbWF4LWhlaWdodDogNTAlO1xuLy8gICBtYXgtd2lkdGg6IDYwJTtcbi8vICAgbWFyZ2luOiAzNnB4IDA7XG4vLyB9XG5cbi8vIGIge1xuLy8gICBmb250LXdlaWdodDogNTAwO1xuLy8gfVxuXG4vLyBwIHtcbi8vICAgcGFkZGluZzogMCA0MHB4O1xuLy8gICBmb250LXNpemU6IDE0cHg7XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4vLyAgIGNvbG9yOiAjNjA2NDZiO1xuXG4vLyAgIGIge1xuLy8gICAgIGNvbG9yOiAjMDAwMDAwO1xuLy8gICB9XG4vLyB9XG5AZm9udC1mYWNlIFxue1xuICAgIGZvbnQtZmFtaWx5OidBdmVydGEtQm9sZCc7XG4gICAgc3JjOnVybChcIi4uLy4uLy4uL2ZvbnRzL0F2ZXJ0YVN0ZC1Cb2xkLmVvdFwiKTtcbiAgICBzcmM6dXJsKFwiLi4vLi4vLi4vZm9udHMvQXZlcnRhU3RkLUJvbGQub3RmXCIpO1xuICAgIHNyYzp1cmwoXCIuLi8uLi8uLi9mb250cy9BdmVydGFTdGQtQm9sZC50dGZcIik7XG4gICAgc3JjOnVybChcIi4uLy4uLy4uL2ZvbnRzL0F2ZXJ0YVN0ZC1Cb2xkLndvZmZcIik7XG59XG5cbkBmb250LWZhY2UgXG57XG4gICAgZm9udC1mYW1pbHk6J0F2ZXJ0YS1yZWd1bGFyJztcbiAgICBzcmM6dXJsKFwiLi4vLi4vLi4vZm9udHMvQXZlcnRhU3RkLVJlZ3VsYXIuZW90XCIpO1xuICAgIHNyYzp1cmwoXCIuLi8uLi8uLi9mb250cy9BdmVydGFTdGQtUmVndWxhci5vdGZcIik7XG4gICAgc3JjOnVybChcIi4uLy4uLy4uL2ZvbnRzL0F2ZXJ0YVN0ZC1SZWd1bGFyLnR0ZlwiKTtcbiAgICBzcmM6dXJsKFwiLi4vLi4vLi4vZm9udHMvQXZlcnRhU3RkLVJlZ3VsYXIud29mZlwiKTtcbn1cbi8vIHZpZGVvI2JndmlkIHtcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgICAgdG9wOiA1MCU7XG4vLyAgICAgbGVmdDogNTAlO1xuLy8gICAgIG1pbi13aWR0aDogMTAwJTtcbi8vICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuLy8gICAgIHdpZHRoOiBhdXRvO1xuLy8gICAgIGhlaWdodDogYXV0bztcbi8vICAgICB6LWluZGV4OiAtMTAwO1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgIH1cblxuKiB7XG4gICAgZm9udC1mYW1pbHk6QXZlcnRhLXJlZ3VsYXI7XG59XG5cblxuaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWY2ZmY7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTonQXZlcnRhLUJvbGQnO1xuICAgIGNvbG9yOiM0NTQ1NDU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG4uc3ViaGVhZGluZyB7XG4gICAgY29sb3I6ICM0NTQ1NDU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgbWF4LWhlaWdodDogNTAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IDBweCAzMHB4IDA7XG59XG5cbi53ZWNoYXRidG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjMWFhZDE5O1xuICAgIGhlaWdodDogNTBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuNCk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjQpO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuNCk7XG59XG5cbi53ZWNoYXRidG4gaW9uLWltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucGVyaXdpbmtsZSB7XG4gICAgY29sb3I6IzliNjRmZjtcbn1cblxuLmxhbmd1YWdlcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFuZ3VhZ2VzIGlvbi1zZWxlY3R7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzglO1xufVxuXG5pb24taW5wdXQge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZTVkZmVmO1xufVxuaW9uLWlucHV0IHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMiU7XG59XG5cbi5jb3VudHJ5IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2U1ZGZlZjtcbn1cblxuLmxvZ2luLWJ0biwgLnNhdmUtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTUyZjkxO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1pbnB1dFt0eXBlPVwibnVtYmVyXCJdaW9uLWxhYmVsIHtcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcbn1cblxuLmdlbmRlciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ3LDI0MywyNTUsMSkgMTAwJSk7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjQ3LDI0MywyNTUsMSkpKTtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ3LDI0MywyNTUsMSkgMTAwJSk7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDcsMjQzLDI1NSwxKSAxMDAlKTtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDcsMjQzLDI1NSwxKSAxMDAlKTtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NywyNDMsMjU1LDEpIDEwMCUpO1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNmN2YzZmYnLCBHcmFkaWVudFR5cGU9MCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNlNWRmZWY7XG59XG5cbi5ib3JkZXIge1xuICAgIGJvcmRlcjo0cHggc29saWQgIzU1MmY5MTtcbiAgICBib3JkZXItcmFkaXVzOjZweDtcbn1cblxuLmF2YXRhci1zbGlkZSB7XG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbnZpZGVvIHtcbiAgICBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgfSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBdmVydGEtQm9sZFwiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2ZvbnRzL0F2ZXJ0YVN0ZC1Cb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9mb250cy9BdmVydGFTdGQtQm9sZC5vdGZcIik7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vZm9udHMvQXZlcnRhU3RkLUJvbGQudHRmXCIpO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2ZvbnRzL0F2ZXJ0YVN0ZC1Cb2xkLndvZmZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXZlcnRhLXJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9mb250cy9BdmVydGFTdGQtUmVndWxhci5lb3RcIik7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vZm9udHMvQXZlcnRhU3RkLVJlZ3VsYXIub3RmXCIpO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2ZvbnRzL0F2ZXJ0YVN0ZC1SZWd1bGFyLnR0ZlwiKTtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9mb250cy9BdmVydGFTdGQtUmVndWxhci53b2ZmXCIpO1xufVxuKiB7XG4gIGZvbnQtZmFtaWx5OiBBdmVydGEtcmVndWxhcjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmFmNmZmO1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkF2ZXJ0YS1Cb2xkXCI7XG4gIGNvbG9yOiAjNDU0NTQ1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cblxuLnN1YmhlYWRpbmcge1xuICBjb2xvcjogIzQ1NDU0NTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2xpZGUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyLjhyZW07XG59XG5cbi5zbGlkZS1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCAwcHggMzBweCAwO1xufVxuXG4ud2VjaGF0YnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjMWFhZDE5O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ud2VjaGF0YnRuIGlvbi1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5wZXJpd2lua2xlIHtcbiAgY29sb3I6ICM5YjY0ZmY7XG59XG5cbi5sYW5ndWFnZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sYW5ndWFnZXMgaW9uLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzglO1xufVxuXG5pb24taW5wdXQge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZGZlZjtcbn1cblxuaW9uLWlucHV0IHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyJTtcbn1cblxuLmNvdW50cnkge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVkZmVmO1xufVxuXG4ubG9naW4tYnRuLCAuc2F2ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTUyZjkxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuaW9uLWlucHV0W3R5cGU9bnVtYmVyXSBpb24tbGFiZWwge1xuICBwYWRkaW5nOiAwcHggMTVweDtcbn1cblxuLmdlbmRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDcsMjQzLDI1NSwxKSAxMDAlKTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjQ3LDI0MywyNTUsMSkpKTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NywyNDMsMjU1LDEpIDEwMCUpO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NywyNDMsMjU1LDEpIDEwMCUpO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDcsMjQzLDI1NSwxKSAxMDAlKTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDcsMjQzLDI1NSwxKSAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9XCIjZmZmZmZmXCIsIGVuZENvbG9yc3RyPVwiI2Y3ZjNmZlwiLCBHcmFkaWVudFR5cGU9MCApO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWRmZWY7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXI6IDRweCBzb2xpZCAjNTUyZjkxO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5hdmF0YXItc2xpZGUge1xuICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbnZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.ts":
/*!********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.ts ***!
  \********************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var TutorialPage = /** @class */ (function () {
    function TutorialPage(menu, router, storage) {
        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.router
            .navigateByUrl('login')
            .then(function () { return _this.storage.set('ion_did_tutorial', true); });
    };
    TutorialPage.prototype.onSlideChangeStart = function (event) {
        var _this = this;
        event.target.isEnd().then(function (isEnd) {
            _this.showSkip = !isEnd;
        });
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('ion_did_tutorial').then(function (res) {
            if (res === true) {
                // this.router.navigateByUrl('/app/tabs/schedule');
                _this.router.navigateByUrl('tutorial');
            }
        });
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    TutorialPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-tutorial',
            template: __webpack_require__(/*! raw-loader!./tutorial.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tutorial/tutorial.html"),
            styles: [__webpack_require__(/*! ./tutorial.scss */ "./src/app/pages/tutorial/tutorial.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], TutorialPage);
    return TutorialPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tutorial-tutorial-module-es5.js.map