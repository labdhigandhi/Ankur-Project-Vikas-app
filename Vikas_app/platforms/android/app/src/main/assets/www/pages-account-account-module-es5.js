(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/account/account.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/account/account.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-content padding>   \n    <div *ngIf=\"condition == 'intro'\">\n        <h2 class=\"heading\">Hi! I’m Nano, here to help you use AI Tutor.</h2>\n        <p class=\"subheading\">My friends and I prepared a quick tour to help you get the most out of AI Tutor.</p>\n      \n        <ion-slides #slides (ionSlideWillChange)=\"onSlideChangeStart($event)\" pager=\"true\">\n          <ion-slide>\n            <img src=\"../../../assets/img/slider1.jpg\" class=\"slide-image\" />\n          </ion-slide>\n      \n          <ion-slide>\n            <img src=\"../../../assets/img/slider1.jpg\" class=\"slide-image\" />\n          </ion-slide>\n      \n          <ion-slide>\n            <img src=\"../../../assets/img/slider1.jpg\" class=\"slide-image\" />\n          </ion-slide>    \n        </ion-slides>\n      \n        <ion-button class=\"wechatbtn\" expand=\"block\" color=\"transparent\">\n          <ion-img src=\"../../../assets/img/wechat.png\"></ion-img>\n          WECHAT SIGN UP / IN\n        </ion-button>\n      \n        <ion-text class=\"ion-text-center\">\n          <p class=\"periwinkle\">OR</p>\n          <p class=\"periwinkle\" (click)=\"route('login')\">Log in with your email</p>\n        </ion-text>\n        \n        <ion-item lines=\"none\" class=\"languages\">\n          <ion-label>English</ion-label>\n          <ion-select>\n            <ion-select-option value=\"English\">English</ion-select-option>\n            <ion-select-option value=\"Chinese\">Chinese</ion-select-option>\n          </ion-select>\n        </ion-item>\n    </div>\n  \n   <div *ngIf=\"condition == 'login'\">\n      <h2 class=\"heading\">LOGIN</h2>\n  \n    <ion-input type=\"text\" placeholder=\"Email\"></ion-input>\n    <ion-input type=\"text\" placeholder=\"Password\"></ion-input>\n  \n    <ion-text>\n      <p class=\"periwinkle\" (click)=\"route('forgotpassword')\">Forgot password?</p>\n    </ion-text>\n  \n    <ion-button expand=\"block\" class=\"login-btn\" (click)=\"route('onboarding')\" color=\"transparent\">LOGIN</ion-button>\n  \n    <ion-text>\n      <p class=\"periwinkle\" (click)=\"route('resendactivation')\">Re-send activation email › </p>\n    </ion-text>\n   </div>\n  \n    <div *ngIf=\"condition == 'onboarding'\">\n        <h2 class=\"heading\">INTRODUCTION & ONBORDING VIDEO  </h2>\n        <video text-center #player playsinline autoplay muted loop poster=\"assets/video/video-cover.jpg\" id=\"bgvid\">\n          <source src=\"../../../assets/video/background-480.mp4\" type=\"video/mp4\"> Your browser does not support the video tag.\n        </video>\n        <ion-text class=\"ion-text-center\">\n          <p (click)=\"route('signup')\">SKIP</p>\n        </ion-text>\n    </div>\n\n     <!-- Forgot Password -->\n     <div id=\"forgotpassword\" *ngIf=\"condition == 'forgotpassword'\">\n                 \n        <h1 class=\"ion-padding ion-text-center\">Reset password</h1>\n  \n        <div>\n           <ion-item>\n               <p>Enter the email you used to sign up for your Square Panda account. We’ll email you a link to reset your password.</p>\n               <ion-input></ion-input>\n             </ion-item>\n           <ion-item class=\"ion-padding-top\" lines=\"none\">\n               <ion-input class=\"form-login-input block\" type=\"email\" placeholder=\"Email\" required></ion-input>\n           </ion-item>\n           <div class=\"ion-text-center\">\n               <a (click)=\"route('login')\" class=\"login-links\">Cancel</a>\n               <ion-button expand=\"block\" class=\"login-btn\" color=\"transparent\" (click)=\"route('login')\" >Log in</ion-button>\n               <a (click)=\"route('Privacy')\" class=\"login-links\">Privacy Policy</a>\n             </div>\n\n           </div>\n</div>\n<!-- End of Forgot Password -->\n\n\n<!-- Resend Activation Email -->\n<div id=\"resendactivation\" *ngIf=\"condition == 'resendactivation'\">\n<h1 class=\"ion-padding ion-text-center header-text\">Re-send activation email</h1>\n\n    <div>\n       <ion-item>\n           <p>Enter the email you used to sign up for your Square Panda account. We’ll email you a link to activate your account.</p>\n           <ion-input></ion-input>\n         </ion-item>\n       <ion-item class=\"ion-padding-top\" lines=\"none\">\n           <ion-input class=\"form-login-input block\" type=\"email\" placeholder=\"Email\" required></ion-input>\n       </ion-item>\n       <div class=\"ion-text-center\" padding>\n          <ion-button expand=\"block\" class=\"login-btn\" color=\"transparent\" (click)=\"resendactivation()\" >Submit</ion-button>\n           <a (click)=\"route('login')\" class=\"login-links\">Cancel</a>\n           <br /><br />\n           <a (click)=\"route('privacy')\" class=\"login-links\">Privacy Policy</a>\n         </div>\n\n</div>\n</div>\n<!-- End of Resend Activation Email -->\n  \n   <div *ngIf=\"condition == 'signup'\">\n      <h2 class=\"heading\">PARENT DETAILS</h2>\n    <p class=\"subheading\">We need just a bit of info to complete your account.</p>\n  \n    <ion-input type=\"text\" placeholder=\"*Firstname\"></ion-input>\n    <ion-input type=\"text\" placeholder=\"*Lastname\"></ion-input>\n    \n    <ion-item class=\"country\">\n      <ion-label>*Country</ion-label>\n      <ion-select>\n        <ion-select-option value=\"India\">India</ion-select-option>\n        <ion-select-option value=\"China\">China</ion-select-option>\n        <ion-select-option value=\"USA\">USA</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-input type=\"number\" placeholder=\"Phone Number\">\n      <ion-label>+91</ion-label>\n      <ion-select no-padding>\n        <ion-select-option>+91</ion-select-option>\n        <ion-select-option>+1</ion-select-option>\n        <ion-select-option>+86</ion-select-option>\n      </ion-select>\n    </ion-input>\n  \n    <ion-input type=\"text\" placeholder=\"*6-digit code\">\n      <span class=\"periwinkle\">Text code again</span>\n    </ion-input>\n  \n    <ion-input type=\"text\" placeholder=\"*Relationship with child\">\n    </ion-input>\n  \n    <ion-button expand=\"block\" (click)=\"route('addchild')\" class=\"save-btn\" color=\"transparent\">SAVE</ion-button>  \n   </div>\n  \n    <div *ngIf=\"condition == 'addchild'\">\n        <h2 class=\"heading\">ADD A CHILD</h2>\n        <p class=\"subheading\">We need just a bit of info to complete your account.</p>\n      \n        <ion-input type=\"text\" placeholder=\"Child's first name*\"></ion-input>\n        <ion-input type=\"text\" placeholder=\"Birthday* MM-DD-YYYY\"></ion-input>\n      \n        <ion-item class=\"gender\">\n          <ion-label>Gender</ion-label>\n          <ion-select>\n            <ion-select-option value=\"Male\">Male</ion-select-option>\n            <ion-select-option value=\"Female\">Female</ion-select-option>\n          </ion-select>\n        </ion-item>\n      \n        <ion-text>\n          <p>Upload or pick a personal avatar.</p>\n        </ion-text>  \n      \n        <ion-slides #slides [options]=\"sliderConfig\">\n          <ion-slide>\n            <img src=\".././../../assets/img/add-avatar.jpg\">              \n          </ion-slide>\n      \n          <ion-slide>\n            <img src=\"../../../assets/img/avatar-1.jpg\">        \n          </ion-slide>\n      \n          <ion-slide>\n            <img src=\"../../../assets/img/avatar-2.jpg\">        \n          </ion-slide>\n      \n          <ion-slide>\n            <img src=\"../../../assets/img/avatar-3.jpg\">        \n          </ion-slide>\n      \n          <ion-slide>\n            <img src=\"../../../assets/img/avatar-4.jpg\">        \n          </ion-slide>\n        </ion-slides>\n      \n        <ion-button expand=\"block\" class=\"save-btn\" (click)=\"startApp()\" color=\"transparent\">SAVE</ion-button>\n      \n        <ion-text class=\"ion-text-center\">\n          <p class=\"periwinkle\">CANCEL</p>\n        </ion-text>\n    </div>\n  \n  </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/account/account-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account */ "./src/app/pages/account/account.ts");




var routes = [
    {
        path: '',
        component: _account__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }
];
var AccountPageRoutingModule = /** @class */ (function () {
    function AccountPageRoutingModule() {
    }
    AccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountPageRoutingModule);
    return AccountPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/account/account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account */ "./src/app/pages/account/account.ts");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/pages/account/account-routing.module.ts");






var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]
            ],
            declarations: [
                _account__WEBPACK_IMPORTED_MODULE_4__["AccountPage"],
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/pages/account/account.scss":
/*!********************************************!*\
  !*** ./src/app/pages/account/account.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Averta-Bold\";\n  src: url('AvertaStd-Bold.eot');\n  src: url('AvertaStd-Bold.otf');\n  src: url('AvertaStd-Bold.ttf');\n  src: url('AvertaStd-Bold.woff');\n}\n@font-face {\n  font-family: \"Averta-regular\";\n  src: url('AvertaStd-Regular.eot');\n  src: url('AvertaStd-Regular.otf');\n  src: url('AvertaStd-Regular.ttf');\n  src: url('AvertaStd-Regular.woff');\n}\n* {\n  font-family: Averta-regular;\n}\nion-content {\n  --ion-background-color: #faf6ff;\n}\n.heading {\n  font-family: \"Averta-Bold\";\n  color: #454545;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 32px;\n}\n.subheading {\n  color: #454545;\n  font-size: 15px;\n  line-height: 24px;\n}\n.swiper-slide {\n  display: block;\n}\n.slide-title {\n  margin-top: 2.8rem;\n}\n.slide-image {\n  max-height: 50%;\n  max-width: 100%;\n  margin: 0px 0px 30px 0;\n}\n.wechatbtn {\n  border-radius: 4px;\n  background: #1aad19;\n  height: 50px;\n  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.4);\n}\n.wechatbtn ion-img {\n  margin-right: 20px;\n}\n.periwinkle {\n  color: #9b64ff;\n}\n.languages {\n  text-align: center;\n}\n.languages ion-select {\n  padding: 0px;\n  position: absolute;\n  right: 38%;\n}\nion-input {\n  height: 50px;\n  margin-bottom: 15px;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #e5dfef;\n}\nion-input span {\n  position: absolute;\n  right: 2%;\n}\n.country {\n  height: 50px;\n  margin-bottom: 15px;\n  --ion-background-color:#fff;\n  border-radius: 4px;\n  border: 1px solid #e5dfef;\n}\n.login-btn, .save-btn {\n  background-color: #552f91;\n  border-radius: 4px;\n  height: 50px;\n}\nion-input[type=number] ion-label {\n  padding: 0px 15px;\n}\n.gender {\n  --ion-background-color: rgba(255,255,255,1);\n  --ion-background-color: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(247,243,255,1) 100%);\n  --ion-background-color: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(100%, rgba(247,243,255,1)));\n  --ion-background-color: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(247,243,255,1) 100%);\n  --ion-background-color: -o-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(247,243,255,1) 100%);\n  --ion-background-color: -ms-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(247,243,255,1) 100%);\n  --ion-background-color: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(247,243,255,1) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#f7f3ff\", GradientType=0 );\n  border-radius: 4px;\n  border: 1px solid #e5dfef;\n}\n.border {\n  border: 4px solid #552f91;\n  border-radius: 6px;\n}\n.avatar-slide {\n  margin: 0px 10px 0px 0px;\n  width: auto !important;\n}\nvideo {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5kYW4vU3BfUmVwb19QYXJlbnQvc3BfcGFyZW50X2FwcC9zcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUNBSjtBREdBO0VBRUksNkJBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtBQ0ZKO0FEaUJBO0VBQ0ksMkJBQUE7QUNmSjtBRG1CQTtFQUNJLCtCQUFBO0FDaEJKO0FEbUJBO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNoQko7QURtQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDaEJKO0FEbUJBO0VBQ0UsY0FBQTtBQ2hCRjtBRG1CQTtFQUNFLGtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ2hCRjtBRG1CQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBR0EsOENBQUE7QUNoQko7QURtQkE7RUFDSSxrQkFBQTtBQ2hCSjtBRG1CQTtFQUNJLGNBQUE7QUNoQko7QURtQkE7RUFDSSxrQkFBQTtBQ2hCSjtBRG1CQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNoQko7QURtQkE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNoQko7QURrQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNmSjtBRGtCQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ2ZKO0FEa0JBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNmSjtBRGtCQTtFQUNJLGlCQUFBO0FDZko7QURrQkE7RUFDSSwyQ0FBQTtFQUNBLG1HQUFBO0VBQ0EsMklBQUE7RUFDQSxzR0FBQTtFQUNBLGlHQUFBO0VBQ0Esa0dBQUE7RUFDQSxvR0FBQTtFQUNBLG9IQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ2ZKO0FEa0JBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQ2ZKO0FEa0JBO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtBQ2ZKO0FEa0JBO0VBRUksV0FBQTtBQ2hCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSBcbntcbiAgICBmb250LWZhbWlseTonQXZlcnRhLUJvbGQnO1xuICAgIHNyYzp1cmwoXCIuLi8uLi8uLi9mb250cy9BdmVydGFTdGQtQm9sZC5lb3RcIik7XG4gICAgc3JjOnVybChcIi4uLy4uLy4uL2ZvbnRzL0F2ZXJ0YVN0ZC1Cb2xkLm90ZlwiKTtcbiAgICBzcmM6dXJsKFwiLi4vLi4vLi4vZm9udHMvQXZlcnRhU3RkLUJvbGQudHRmXCIpO1xuICAgIHNyYzp1cmwoXCIuLi8uLi8uLi9mb250cy9BdmVydGFTdGQtQm9sZC53b2ZmXCIpO1xufVxuXG5AZm9udC1mYWNlIFxue1xuICAgIGZvbnQtZmFtaWx5OidBdmVydGEtcmVndWxhcic7XG4gICAgc3JjOnVybChcIi4uLy4uLy4uL2ZvbnRzL0F2ZXJ0YVN0ZC1SZWd1bGFyLmVvdFwiKTtcbiAgICBzcmM6dXJsKFwiLi4vLi4vLi4vZm9udHMvQXZlcnRhU3RkLVJlZ3VsYXIub3RmXCIpO1xuICAgIHNyYzp1cmwoXCIuLi8uLi8uLi9mb250cy9BdmVydGFTdGQtUmVndWxhci50dGZcIik7XG4gICAgc3JjOnVybChcIi4uLy4uLy4uL2ZvbnRzL0F2ZXJ0YVN0ZC1SZWd1bGFyLndvZmZcIik7XG59XG4vLyB2aWRlbyNiZ3ZpZCB7XG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICAgIHRvcDogNTAlO1xuLy8gICAgIGxlZnQ6IDUwJTtcbi8vICAgICBtaW4td2lkdGg6IDEwMCU7XG4vLyAgICAgbWluLWhlaWdodDogMTAwJTtcbi8vICAgICB3aWR0aDogYXV0bztcbi8vICAgICBoZWlnaHQ6IGF1dG87XG4vLyAgICAgei1pbmRleDogLTEwMDtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICB9XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OkF2ZXJ0YS1yZWd1bGFyO1xufVxuXG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmFmNmZmO1xufVxuXG4uaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6J0F2ZXJ0YS1Cb2xkJztcbiAgICBjb2xvcjojNDU0NTQ1O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbn1cblxuLnN1YmhlYWRpbmcge1xuICAgIGNvbG9yOiAjNDU0NTQ1O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2xpZGUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyLjhyZW07XG59XG5cbi5zbGlkZS1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCAwcHggMzBweCAwO1xufVxuXG4ud2VjaGF0YnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogIzFhYWQxOTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjQpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC40KTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjQpO1xufVxuXG4ud2VjaGF0YnRuIGlvbi1pbWcge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnBlcml3aW5rbGUge1xuICAgIGNvbG9yOiM5YjY0ZmY7XG59XG5cbi5sYW5ndWFnZXMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxhbmd1YWdlcyBpb24tc2VsZWN0e1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDM4JTtcbn1cblxuaW9uLWlucHV0IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2U1ZGZlZjtcbn1cbmlvbi1pbnB1dCBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIlO1xufVxuXG4uY291bnRyeSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNlNWRmZWY7XG59XG5cbi5sb2dpbi1idG4sIC5zYXZlLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1MmY5MTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG5pb24taW5wdXRbdHlwZT1cIm51bWJlclwiXWlvbi1sYWJlbCB7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5nZW5kZXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NywyNDMsMjU1LDEpIDEwMCUpO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI0NywyNDMsMjU1LDEpKSk7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NywyNDMsMjU1LDEpIDEwMCUpO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ3LDI0MywyNTUsMSkgMTAwJSk7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ3LDI0MywyNTUsMSkgMTAwJSk7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDcsMjQzLDI1NSwxKSAxMDAlKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjZjdmM2ZmJywgR3JhZGllbnRUeXBlPTAgKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZTVkZmVmO1xufVxuXG4uYm9yZGVyIHtcbiAgICBib3JkZXI6NHB4IHNvbGlkICM1NTJmOTE7XG4gICAgYm9yZGVyLXJhZGl1czo2cHg7XG59XG5cbi5hdmF0YXItc2xpZGUge1xuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuXG52aWRlbyB7XG4gICAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gIH0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXZlcnRhLUJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9mb250cy9BdmVydGFTdGQtQm9sZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vZm9udHMvQXZlcnRhU3RkLUJvbGQub3RmXCIpO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2ZvbnRzL0F2ZXJ0YVN0ZC1Cb2xkLnR0ZlwiKTtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9mb250cy9BdmVydGFTdGQtQm9sZC53b2ZmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkF2ZXJ0YS1yZWd1bGFyXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vZm9udHMvQXZlcnRhU3RkLVJlZ3VsYXIuZW90XCIpO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2ZvbnRzL0F2ZXJ0YVN0ZC1SZWd1bGFyLm90ZlwiKTtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9mb250cy9BdmVydGFTdGQtUmVndWxhci50dGZcIik7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vZm9udHMvQXZlcnRhU3RkLVJlZ3VsYXIud29mZlwiKTtcbn1cbioge1xuICBmb250LWZhbWlseTogQXZlcnRhLXJlZ3VsYXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZhZjZmZjtcbn1cblxuLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogXCJBdmVydGEtQm9sZFwiO1xuICBjb2xvcjogIzQ1NDU0NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbi5zdWJoZWFkaW5nIHtcbiAgY29sb3I6ICM0NTQ1NDU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNsaWRlLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHggMHB4IDMwcHggMDtcbn1cblxuLndlY2hhdGJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogIzFhYWQxOTtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLndlY2hhdGJ0biBpb24taW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucGVyaXdpbmtsZSB7XG4gIGNvbG9yOiAjOWI2NGZmO1xufVxuXG4ubGFuZ3VhZ2VzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFuZ3VhZ2VzIGlvbi1zZWxlY3Qge1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM4JTtcbn1cblxuaW9uLWlucHV0IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWRmZWY7XG59XG5cbmlvbi1pbnB1dCBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMiU7XG59XG5cbi5jb3VudHJ5IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZGZlZjtcbn1cblxuLmxvZ2luLWJ0biwgLnNhdmUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1MmY5MTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1pbnB1dFt0eXBlPW51bWJlcl0gaW9uLWxhYmVsIHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5nZW5kZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ3LDI0MywyNTUsMSkgMTAwJSk7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI0NywyNDMsMjU1LDEpKSk7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDcsMjQzLDI1NSwxKSAxMDAlKTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDcsMjQzLDI1NSwxKSAxMDAlKTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ3LDI0MywyNTUsMSkgMTAwJSk7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ3LDI0MywyNTUsMSkgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiI2ZmZmZmZlwiLCBlbmRDb2xvcnN0cj1cIiNmN2YzZmZcIiwgR3JhZGllbnRUeXBlPTAgKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVkZmVmO1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiA0cHggc29saWQgIzU1MmY5MTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uYXZhdGFyLXNsaWRlIHtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuXG52aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/account/account.ts":
/*!******************************************!*\
  !*** ./src/app/pages/account/account.ts ***!
  \******************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var AccountPage = /** @class */ (function () {
    function AccountPage(alertCtrl, router, userData, storage, menu, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.userData = userData;
        this.storage = storage;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.condition = "intro";
        this.showSkip = true;
        this.sliderConfig = {
            autoplay: true,
            pages: true,
            zoom: {
                maxRatio: 1
            },
            slidesPerView: 5,
            spaceBetween: 10,
            centeredSlides: true
        };
    }
    AccountPage.prototype.route = function (pagename) {
        this.condition = pagename;
    };
    AccountPage.prototype.startApp = function () {
        // this.router
        //   .navigateByUrl('/app/tabs/main')
        //   .then(() => this.storage.set('ion_did_tutorial', true));
        ///this.router.navigate(['/app/tabs/main', { id: '' }]);
        this.navCtrl.navigateRoot('/app/tabs/main');
    };
    AccountPage.prototype.onSlideChangeStart = function (event) {
        var _this = this;
        event.target.isEnd().then(function (isEnd) {
            _this.showSkip = !isEnd;
        });
    };
    AccountPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('ion_did_tutorial').then(function (res) {
            if (res === true) {
                // this.router.navigateByUrl('/app/tabs/schedule');
                _this.router.navigateByUrl('account');
            }
        });
        this.menu.enable(false);
    };
    AccountPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    AccountPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('player', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccountPage.prototype, "player", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], AccountPage.prototype, "slides", void 0);
    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-account',
            template: __webpack_require__(/*! raw-loader!./account.html */ "./node_modules/raw-loader/index.js!./src/app/pages/account/account.html"),
            styles: [__webpack_require__(/*! ./account.scss */ "./src/app/pages/account/account.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], AccountPage);
    return AccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-account-module-es5.js.map