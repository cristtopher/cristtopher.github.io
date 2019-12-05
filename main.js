(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div id=\"content\">\n  <app-presentation></app-presentation>\n  <app-resume></app-resume>\n  <app-projects></app-projects>\n</div>\n\n<a href=\"index.html#\" id=\"vertical-nav-toggle\" class=\"nav-toggle\"\n  data-toggle=\"mobile-nav\"><span><span></span></span></a>\n\n<div class=\"contact-popup-ctrl\">\n  <a href=\"index.html#\" class=\"contact-popup-toggle\" data-toggle=\"contact-popup\"><span class=\"typing\"\n      data-text='[\"Have a question?\",\"Write to me!\"]'>Write\n      to me!</span></a>\n  <a href=\"index.html#\" class=\"contact-popup-close\" data-toggle=\"contact-popup\"><em class=\"fas fa-times\"></em></a>\n</div>\n\n<div id=\"contact-popup\" class=\"contact-popup dark\">\n  <div class=\"v-center row\">\n    <div class=\"col-lg-6 col-md-9\">\n      <form id=\"contact-form\" class=\"validate-form\">\n        <div class=\"head\">\n          <span class=\"form-status\">1/2</span>\n          <h3>Write to me!</h3>\n        </div>\n        <div class=\"steps\">\n          <!-- Form Step -->\n          <div class=\"step active\" data-step=\"1\">\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\">\n                <input id=\"name\" name=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Your name\" required>\n              </div>\n              <div class=\"form-group col-md-6\">\n                <input id=\"email\" name=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Your e-mail\" required>\n              </div>\n            </div>\n            <div class=\"bottom clearfix\">\n              <nav class=\"controls\">\n                <a href=\"index.html#\" class=\"btn btn-white\" data-target=\"form-next-step\">Next\n                  step<em class=\"fas fa-arrow-right\"></em></a>\n              </nav>\n            </div>\n          </div>\n          <!-- Form Step -->\n          <div class=\"step\" data-step=\"2\">\n            <textarea name=\"message\" id=\"message\" rows=\"3\" class=\"form-control\" placeholder=\"Tap here your message...\"\n              required></textarea>\n            <div class=\"bottom clearfix\">\n              <div class=\"info\"><span>from</span> <em id=\"sender\"></em></div>\n              <nav class=\"controls\">\n                <button class=\"btn btn-link\" data-target=\"form-prev-step\"><em class=\"fas fa-arrow-left\"></em></button>\n                <button type=\"submit\" class=\"btn btn-white btn-submit\"><span>Send a message! <em\n                      class=\"fas fa-check\"></em></span></button>\n              </nav>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div id=\"ajax-modal\"></div>\n<a href=\"index.html#\" class=\"ajax-close\" data-dismiss=\"ajax-modal\"><em class=\"ti-close\"></em></a>\n<svg id=\"ajax-loader\" class=\"loader\" width=\"32px\" height=\"32px\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\">\n  <circle class=\"circle\" fill=\"none\" stroke-width=\"5\" stroke-linecap=\"round\" cx=\"32\" cy=\"32\" r=\"32\"></circle>\n</svg>\n<div class=\"modal modal-video fade\" id=\"modalVideo\" role=\"dialog\">\n  <button class=\"close\" data-dismiss=\"modal\"><em class=\"ti-close\"></em></button>\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <iframe height=\"500\" title=\"\"></iframe>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cristtopher';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _resume_specialities_specialities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/specialities/specialities.component */ "./src/app/resume/specialities/specialities.component.ts");
/* harmony import */ var _resume_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume/skills/skills.component */ "./src/app/resume/skills/skills.component.ts");
/* harmony import */ var _resume_languages_languages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume/languages/languages.component */ "./src/app/resume/languages/languages.component.ts");
/* harmony import */ var _resume_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resume/jobs/jobs.component */ "./src/app/resume/jobs/jobs.component.ts");
/* harmony import */ var _resume_education_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resume/education/education.component */ "./src/app/resume/education/education.component.ts");
/* harmony import */ var _resume_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resume/hobbies/hobbies.component */ "./src/app/resume/hobbies/hobbies.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./presentation/presentation.component */ "./src/app/presentation/presentation.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"],
                _resume_specialities_specialities_component__WEBPACK_IMPORTED_MODULE_5__["SpecialitiesComponent"],
                _resume_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
                _resume_languages_languages_component__WEBPACK_IMPORTED_MODULE_7__["LanguagesComponent"],
                _resume_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_8__["JobsComponent"],
                _resume_education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"],
                _resume_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_10__["HobbiesComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_12__["PresentationComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commons/constants/constants.ts":
/*!************************************************!*\
  !*** ./src/app/commons/constants/constants.ts ***!
  \************************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.me = {
        name: 'Cristtopher Quintana T.',
        description: 'Family Father 👨‍👩‍👧‍👦 | Software Engineer 💻 | Chile 🇨🇱 | Patagonia 🏔'
    };
    return Constants;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header {\n    position: fixed;\n    z-index: 888;\n    font-family: \"Poppins\", Helvetica, Arial, sans-serif;\n  }\n  \n  #header.dark {\n    background-color: #242424;\n    color: #fff;\n  }\n  \n  #header.light {\n    background-color: #fff;\n    color: #434343;\n    box-shadow: 5px 5px 40px 0px rgba(0, 0, 0, 0.06);\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixvREFBb0Q7RUFDdEQ7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWM7SUFHZCxnREFBZ0Q7RUFDbEQiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogODg4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgI2hlYWRlci5kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAjaGVhZGVyLmxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCA0MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCA0MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"header-vertical dark\">\n  <div class=\"logo\">\n    <h1>{{ me.name }}</h1>\n    <h4>{{ me.description }}</h4>\n  </div>\n  <nav id=\"main-menu\">\n    <ul class=\"nav nav-vertical\">\n      <li><a href=\"index.html#start\"><em class=\"fas fa-home\"></em><span> Start</span></a></li>\n      <li><a href=\"index.html#resume\"><em class=\"fas fa-file-alt\"></em><span> Resume</span></a></li>\n      <li><a href=\"index.html#projects\"><em class=\"fas fa-code\"></em><span> Projects</span></a></li>\n    </ul>\n    <span class=\"selector\"></span>\n  </nav>\n  <div class=\"bottom text-center\">\n    <ul class=\"nav-icons nav-sm\">\n      <li><a href=\"https://www.linkedin.com/in/cristtopher\"><em class=\"fab fa-linkedin fa-2x\"></em></a></li>\n      <li><a href=\"https://www.instagram.com/cristtopher\"><em class=\"fab fa-instagram fa-2x\"></em></a></li>\n      <li><a href=\"https://github.com/cristtopher\"><em class=\"fab fa-github fa-2x\"></em></a></li>\n      <li><a href=\"https://gitlab.com/cristtopher\"><em class=\"fab fa-gitlab fa-2x\"></em></a></li>\n    </ul>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _commons_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/constants/constants */ "./src/app/commons/constants/constants.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.me = _commons_constants_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].me;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/presentation/presentation.component.css":
/*!*********************************************************!*\
  !*** ./src/app/presentation/presentation.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/presentation/presentation.component.html":
/*!**********************************************************!*\
  !*** ./src/app/presentation/presentation.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"start\" class=\"section fullheight dark bg-dark\">\n  <div class=\"bg-video\"\n    data-property=\"{videoURL:'https://www.youtube.com/watch?v=4GC0jGODGeY',showControls: false,containment:'self',startAt:50,stopAt:50,mute:true,autoPlay:true,loop:true,opacity:.2}\">\n  </div>\n  <div class=\"container container-custom v-center\" data-local-scroll>\n    <h1 class=\"text-lg mb-0\"><em>Hi! I’m</em> {{ me.name }}</h1>\n    <p class=\"tags lead text-muted\">{{ me.description }}</p>\n    <a href=\"index.html#resume\" class=\"btn btn-primary btn-lg\">Check my Resume</a><a href=\"index.html#projects\"\n      class=\"btn btn-link btn-lg\">My Works</a>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/presentation/presentation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/presentation/presentation.component.ts ***!
  \********************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _commons_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/constants/constants */ "./src/app/commons/constants/constants.ts");



var PresentationComponent = /** @class */ (function () {
    function PresentationComponent() {
        this.me = _commons_constants_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].me;
    }
    PresentationComponent.prototype.ngOnInit = function () {
    };
    PresentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-presentation',
            template: __webpack_require__(/*! ./presentation.component.html */ "./src/app/presentation/presentation.component.html"),
            styles: [__webpack_require__(/*! ./presentation.component.css */ "./src/app/presentation/presentation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"projects\" class=\"section cover bg-black\">\n  <!-- Filter Bar -->\n  <nav class=\"filter-bar bg-primary dark\">\n    <div class=\"tabs-wrapper\">\n      <ul class=\"filter nav nav-tabs\" data-filter-list=\"#works-list\">\n        <li class=\"active\"><a href=\"index-vertical-dark-no-photo.html#\" data-filter=\"*\">All</a></li>\n        <li><a href=\"index-vertical-dark-no-photo.html#\" data-filter=\".webPlatforms\">Web Platforms</a></li>\n        <li><a href=\"index-vertical-dark-no-photo.html#\" data-filter=\".mobileApps\">Mobile Apps</a></li>\n        <li><a href=\"index-vertical-dark-no-photo.html#\" data-filter=\".apps\">Apps</a></li>\n      </ul>\n      <span class=\"selector\"></span>\n    </div>\n  </nav>\n\n  <!-- Works List -->\n  <div id=\"works-list\" class=\"filter-list row masonry no-spaces\">\n    <div class=\"masonry-sizer col-md-4 col-sm-6 col-xs-12\"></div>\n    <div [ngClass]=\"[project.type, 'masonry-item', 'col-md-4', 'col-sm-6', 'col-xs-12']\"\n      *ngFor=\"let project of projects\">\n      <div class=\"image-box\">\n        <div class=\"image\">\n          <a href=\"\" data-toggle=\"ajax-modal\">\n            <img *ngIf=\"project.imageType === 'base64'\" [src]=\"'data:image/jpg;base64,' + project.image\" alt=\"\">\n            <img *ngIf=\"project.imageType !== 'base64'\"\n              [src]=\"'assets/img/projects/' + project.image + '.' + project.imageType\" alt=\"\">\n          </a>\n        </div>\n        <div class=\"hover\">\n          <h4 class=\"mb-0\">{{ project.title }}</h4>\n          <span class=\"text-muted\">{{ project.description }}</span>\n          <br>\n          <em *ngFor=\"let icon of project.icons\" [ngClass]=\"[icon, 'fa-2x', 'mr-10']\"></em>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.projects = [];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.projects = [{
                title: 'Webmédica',
                type: 'webPlatforms',
                description: 'Web platform for management of clinic patients.',
                icons: ['fas fa-database', 'fab fa-internet-explorer'],
                imageType: 'png',
                image: 'webmedica'
            },
            {
                title: 'NutriPlus',
                type: 'webPlatforms',
                description: 'Web platform for the generation and management of bovine diets.',
                icons: ['fab fa-php', 'fas fa-database'],
                imageType: 'base64',
                image: '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'
            },
            {
                title: 'Rilsoft',
                type: 'webPlatforms',
                description: 'Industrial waste management web platform.',
                icons: ['fab fa-php', 'fas fa-database'],
                imageType: 'jpg',
                image: 'rilsoft'
            },
            {
                title: 'CheckEntry',
                type: 'webPlatforms',
                description: 'Biosecurity monitoring system.',
                icons: ['fab fa-php', 'fas fa-database'],
                imageType: 'png',
                image: 'checkentry'
            },
            {
                title: 'SeaLevel',
                type: 'webPlatforms',
                description: 'Web application of height of tide in ramplas in real time.',
                icons: ['fab fa-python', 'fas fa-database'],
                imageType: 'jpg',
                image: 'sealevel'
            },
            {
                title: 'Skype Bot',
                type: 'apps',
                description: 'Python skype bot for clients assistancee.',
                icons: ['fab fa-python', 'fas fa-database'],
                imageType: 'jpeg',
                image: 'skype'
            },
            {
                title: 'AccessControl',
                type: 'webPlatforms',
                description: 'People access control platform.',
                icons: ['fab fa-node', 'fab fa-angular', 'fab fa-jenkins', 'fas fa-database'],
                imageType: 'base64',
                image: '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'
            },
            {
                title: 'People Flow',
                type: 'webPlatforms',
                description: 'Web platform for analysis of flows and behaviors of people in certain spaces.',
                icons: ['fab fa-node', 'fab fa-angular', 'fas fa-database'],
                imageType: 'base64',
                image: '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'
            },
            {
                title: 'Mobile Access Register',
                type: 'mobileApps',
                description: 'Android application for registration of people access by DNI.',
                icons: ['fab fa-android', 'fab fa-java', 'fas fa-database'],
                imageType: 'base64',
                image: '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'
            },
            {
                title: 'Passenger control',
                type: 'webPlatforms',
                description: 'Web platform for control and registration of passengers in maritime vessels.',
                icons: ['fab fa-node', 'fab fa-angular', 'fab fa-jenkins', 'fas fa-database'],
                imageType: 'png',
                image: 'passenger'
            },
            {
                title: 'Mobile ticket validator',
                type: 'mobileApps',
                description: 'Android application of Registration and control of passages.',
                icons: ['fab fa-android', 'fab fa-java', 'fas fa-database'],
                imageType: 'png',
                image: 'ticket-validator'
            },
            {
                title: 'Last Planner Web App',
                type: 'webPlatforms',
                description: 'Management platform through last planner of construction works.',
                icons: ['fab fa-node', 'fab fa-angular', 'fas fa-database'],
                imageType: 'base64',
                image: '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'
            },
            {
                title: 'IOT Web platform',
                type: 'webPlatforms',
                description: 'Variable register and PLC control in real time.',
                icons: ['fab fa-node', 'fab fa-angular', 'fab fa-python', 'fas fa-microchip', 'fas fa-database'],
                imageType: 'png',
                image: 'iot'
            }
        ];
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/resume/education/education.component.css":
/*!**********************************************************!*\
  !*** ./src/app/resume/education/education.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/resume/education/education.component.html":
/*!***********************************************************!*\
  !*** ./src/app/resume/education/education.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"masonry-item col-sm-6 col-xs-12\">\n  <div class=\"resume-card\">\n    <h3 class=\"title\">Education</h3>\n    <div class=\"timeline\">\n      <div class=\"timeline-event animated\" *ngFor=\"let edu of education\">\n        <div class=\"content\">\n          <span class=\"date\">{{ edu.date }}</span>\n          <h4>{{ edu.title }}</h4>\n          <span>{{ edu.institution }}</span>\n          <br>\n          <span class=\"caption\">{{ edu.place }}, Chile</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/resume/education/education.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/resume/education/education.component.ts ***!
  \*********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
        this.education = [];
    }
    EducationComponent.prototype.ngOnInit = function () {
        this.education = [{
                title: 'Professional Title as Informatics Engineering',
                date: '2012',
                institution: 'Technological University of Chile INACAP',
                place: 'Puerto Montt'
            },
            {
                title: 'Programmer Analyst',
                date: '2010',
                institution: 'Technical Training Center INACAP',
                place: 'Puerto Montt'
            },
        ];
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/resume/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/resume/education/education.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/resume/hobbies/hobbies.component.css":
/*!******************************************************!*\
  !*** ./src/app/resume/hobbies/hobbies.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9ob2JiaWVzL2hvYmJpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/resume/hobbies/hobbies.component.html":
/*!*******************************************************!*\
  !*** ./src/app/resume/hobbies/hobbies.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"masonry-item col-sm-6 col-xs-12\">\n  <div class=\"resume-card\">\n    <h3 class=\"title\">Hobbies &amp; Interests</h3>\n    <div class=\"row\">\n      <div class=\"col-sm-4\" *ngFor=\"let hobbie of hobbies\">\n        <div class=\"feature feature-1 text-center\">\n          <span class=\"icon icon-primary\">\n            <em [ngClass]=\"hobbie.icon\"></em>\n          </span>\n          <h4>{{ hobbie.name }}</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/resume/hobbies/hobbies.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/resume/hobbies/hobbies.component.ts ***!
  \*****************************************************/
/*! exports provided: HobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesComponent", function() { return HobbiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HobbiesComponent = /** @class */ (function () {
    function HobbiesComponent() {
        this.hobbies = [];
    }
    HobbiesComponent.prototype.ngOnInit = function () {
        this.hobbies = [{
                name: 'Music',
                icon: 'fas fa-music'
            }, {
                name: 'LongBoard',
                icon: 'fas fa-skating'
            },
            {
                name: 'Trekking',
                icon: 'fas fa-skating'
            }, {
                name: 'Cycling',
                icon: 'fas fa-bicycle'
            }];
    };
    HobbiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hobbies',
            template: __webpack_require__(/*! ./hobbies.component.html */ "./src/app/resume/hobbies/hobbies.component.html"),
            styles: [__webpack_require__(/*! ./hobbies.component.css */ "./src/app/resume/hobbies/hobbies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HobbiesComponent);
    return HobbiesComponent;
}());



/***/ }),

/***/ "./src/app/resume/jobs/jobs.component.css":
/*!************************************************!*\
  !*** ./src/app/resume/jobs/jobs.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9qb2JzL2pvYnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/resume/jobs/jobs.component.html":
/*!*************************************************!*\
  !*** ./src/app/resume/jobs/jobs.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"masonry-item col-sm-6 col-xs-12\">\n  <div class=\"resume-card\">\n    <h3 class=\"title\">Jobs\n    </h3>\n    <div class=\"timeline\">\n      <div class=\"timeline-event animated\" *ngFor=\"let job of jobs\">\n        <span class=\"date\">{{ job.date }}</span>\n        <h4>{{ job.title }}</h4>\n        <span>{{ job.company }}</span>\n        <br>\n        <span class=\"caption\">{{ job.place }}, Chile</span>\n        <br>\n        <strong><a href=\"http://www.{{ job.url }}\">www.{{ job.url }}</a></strong>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/resume/jobs/jobs.component.ts":
/*!***********************************************!*\
  !*** ./src/app/resume/jobs/jobs.component.ts ***!
  \***********************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobsComponent = /** @class */ (function () {
    function JobsComponent() {
        this.jobs = [];
    }
    JobsComponent.prototype.ngOnInit = function () {
        this.jobs = [
            {
                title: 'Fullstack Developer',
                date: '05.2019 - Present',
                company: 'PeanutHub / Digital Factory Falabella',
                place: 'Santiago',
                url: 'peanuthub.cl'
            },
            {
                title: 'Fullstack Developer',
                date: '01.2019 - 05.2019',
                company: 'Kubos / Banco de Chile',
                place: 'Santiago',
                url: 'kubos.cl'
            },
            {
                title: 'Fullstack Developer',
                date: '08.2018 - 01.2019',
                company: 'Ideal Control',
                place: 'Puerto Montt',
                url: 'idealcontrol.cl'
            },
            {
                title: 'Freelance Fullstack Developer',
                date: '07.2018 - 01.2019',
                company: 'Technology Development Corporation (Cámara chilena de la construcción)',
                place: 'Puerto Montt',
                url: 'cdt.cl'
            },
            {
                title: 'Development Department Head',
                date: '01.2016 - 12.2017',
                company: 'Axxezo / Patagonia Wings',
                place: 'Puerto Montt',
                url: 'axxezo.cl'
            },
            {
                title: 'Developer Freelance QT C++',
                date: '01.2016 - 12.2017',
                company: 'Patagonia Wings',
                place: 'Puerto Montt',
                url: 'patagoniawings.cl'
            },
            {
                title: 'JAVA University Teacher',
                date: '03.2014 - 07.2014',
                company: 'Technological University of Chile INACAP',
                place: 'Puerto Montt',
                url: 'inacap.cl'
            },
            {
                title: 'IT & Tech Support Department Head',
                date: '06.2013 - 01.2016',
                company: 'Innovex',
                place: 'Puerto Montt',
                url: 'innovex.cl'
            },
            {
                title: 'Fullstack Developer',
                date: '12.2012 - 05.2013',
                company: 'Innovex',
                place: 'Puerto Montt',
                url: 'innovex.cl'
            },
            {
                title: 'Fullstack Developer',
                date: '01.2012 - 11.2012',
                company: 'Singa',
                place: 'Puerto Varas',
                url: 'singa.cl'
            }
        ];
    };
    JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! ./jobs.component.html */ "./src/app/resume/jobs/jobs.component.html"),
            styles: [__webpack_require__(/*! ./jobs.component.css */ "./src/app/resume/jobs/jobs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/resume/languages/languages.component.css":
/*!**********************************************************!*\
  !*** ./src/app/resume/languages/languages.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9sYW5ndWFnZXMvbGFuZ3VhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/resume/languages/languages.component.html":
/*!***********************************************************!*\
  !*** ./src/app/resume/languages/languages.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"masonry-item col-sm-6 col-xs-12\">\n  <div class=\"resume-card\">\n    <h3 class=\"title\">Languages</h3>\n    <div class=\"skill\" *ngFor=\"let language of languages\">\n      <h5>{{ language.name }}</h5>\n      <div class=\"progress\">\n        <div class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"language.progress\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/resume/languages/languages.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/resume/languages/languages.component.ts ***!
  \*********************************************************/
/*! exports provided: LanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return LanguagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LanguagesComponent = /** @class */ (function () {
    function LanguagesComponent() {
        this.languages = [];
    }
    LanguagesComponent.prototype.ngOnInit = function () {
        this.languages = [{
                name: 'Javascript / Typescript',
                progress: 100
            },
            {
                name: 'Python',
                progress: 95
            },
            {
                name: 'Java',
                progress: 95
            },
            {
                name: 'C++',
                progress: 80
            },
            {
                name: 'Script Bash',
                progress: 100
            }
        ];
    };
    LanguagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-languages',
            template: __webpack_require__(/*! ./languages.component.html */ "./src/app/resume/languages/languages.component.html"),
            styles: [__webpack_require__(/*! ./languages.component.css */ "./src/app/resume/languages/languages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LanguagesComponent);
    return LanguagesComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"resume\" class=\"section\">\n  <div class=\"container container-custom\">\n    <p class=\"lead text-muted mb-80\">Father of 2 beautiful children. Passionate about the development of\n      high impact solutions, curious about these new technologies, one day he wants to be an excellent\n      leader, obsessive with planning and documentation. Always try to give the best of himself, and try\n      to learn something new every day.</p>\n    <div class=\"row masonry long-spaces\">\n      <div class=\"masonry-sizer col-sm-6 col-xs-12\"></div>\n      <app-specialities></app-specialities>\n      <app-skills></app-skills>\n      <app-languages></app-languages>\n      <app-jobs></app-jobs>\n      <app-education></app-education>\n      <app-hobbies></app-hobbies>\n      <div class=\"masonry-item col-sm-6 col-xs-12\">\n        <a href=\"https://firebasestorage.googleapis.com/v0/b/back-a0ff6.appspot.com/o/cv-esp-2019.pdf?alt=media&token=ebc22f5d-9e2b-46f4-84c5-a0b04bcd1928\"\n          class=\"btn btn-primary btn-lg\">Download\n          Resume</a>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/resume/skills/skills.component.css":
/*!****************************************************!*\
  !*** ./src/app/resume/skills/skills.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/resume/skills/skills.component.html":
/*!*****************************************************!*\
  !*** ./src/app/resume/skills/skills.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"masonry-item col-sm-6 col-xs-12\">\n  <div class=\"resume-card\">\n    <h3 class=\"title\">Skills</h3>\n    <div class=\"skill\" *ngFor=\"let skill of skills\">\n        <h5>{{ skill.name }}</h5>\n        <div class=\"progress\">\n            <div class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"skill.progress\"></div>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/resume/skills/skills.component.ts":
/*!***************************************************!*\
  !*** ./src/app/resume/skills/skills.component.ts ***!
  \***************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.skills = [];
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.skills = [{
                name: 'Backend Loopback',
                progress: 95
            },
            {
                name: 'Frontend AngularJS',
                progress: 95
            },
            {
                name: 'Frontend Angular 6',
                progress: 90
            },
            {
                name: 'DevOps',
                progress: 80
            },
            {
                name: 'Server Admin',
                progress: 100
            },
            {
                name: 'Docker',
                progress: 95
            },
            {
                name: 'Kubernetes',
                progress: 80
            },
            {
                name: 'Android (Java)',
                progress: 95
            },
            {
                name: 'Jira / Confluence / Pipelines',
                progress: 100
            },
            {
                name: 'Azure',
                progress: 100
            }
        ];
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/resume/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/resume/skills/skills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/resume/specialities/specialities.component.css":
/*!****************************************************************!*\
  !*** ./src/app/resume/specialities/specialities.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9zcGVjaWFsaXRpZXMvc3BlY2lhbGl0aWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/resume/specialities/specialities.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/resume/specialities/specialities.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"masonry-item col-sm-6 col-xs-12\">\n  <div class=\"resume-card\">\n    <h3 class=\"title\">My Specialities</h3>\n    <div class=\"row\">\n      <div class=\"col-lg-6\" *ngFor=\"let specility of specialities\">\n        <div class=\"feature feature-2\">\n          <span class=\"icon icon-primary\">\n            <em [ngClass]=\"specility.icon\"></em>\n          </span>\n          <div class=\"feature-content\">\n            <h4>{{ specility.name }}</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/resume/specialities/specialities.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/resume/specialities/specialities.component.ts ***!
  \***************************************************************/
/*! exports provided: SpecialitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialitiesComponent", function() { return SpecialitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpecialitiesComponent = /** @class */ (function () {
    function SpecialitiesComponent() {
        this.specialities = [];
    }
    SpecialitiesComponent.prototype.ngOnInit = function () {
        this.specialities = [
            {
                name: 'MEAN Stack',
                icon: 'fab fa-js'
            },
            {
                name: 'People Management',
                icon: 'fas fa-users'
            },
            {
                name: 'Gnu / Linux',
                icon: 'fab fa-linux'
            },
            {
                name: 'Documentation',
                icon: 'fas fa-book'
            },
            {
                name: 'API Rest',
                icon: 'fas fa-cloud'
            },
            {
                name: 'Projects Management',
                icon: 'fas fa-project-diagram'
            },
            {
                name: 'Agile Methodologies',
                icon: 'fas fa-fighter-jet'
            },
        ];
    };
    SpecialitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-specialities',
            template: __webpack_require__(/*! ./specialities.component.html */ "./src/app/resume/specialities/specialities.component.html"),
            styles: [__webpack_require__(/*! ./specialities.component.css */ "./src/app/resume/specialities/specialities.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpecialitiesComponent);
    return SpecialitiesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cris/Repositories/Cris/cristtopher.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map