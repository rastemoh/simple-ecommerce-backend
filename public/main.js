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

/***/ "./src/app/admin/edit-product/edit-product.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/edit-product/edit-product.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/edit-product/edit-product.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/edit-product/edit-product.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-product works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/edit-product/edit-product.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/edit-product/edit-product.component.ts ***!
  \**************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditProductComponent = /** @class */ (function () {
    function EditProductComponent() {
    }
    EditProductComponent.prototype.ngOnInit = function () {
    };
    EditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/admin/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.css */ "./src/app/admin/edit-product/edit-product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/admin/list/list.component.css":
/*!***********************************************!*\
  !*** ./src/app/admin/list/list.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/list/list.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/list/list.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <h1>List of Products</h1>\n    <a class=\"btn btn-link\" routerLink=\"/product/create\">Add Product</a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-3 mb-4\" *ngFor=\"let product of products\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{product.title}}</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Available in {{product.variants.length}} variants</h6>\n        <p class=\"card-text\">{{product.description}}</p>\n        <a routerLink=\"/product/view\" class=\"card-link\">Details</a>\n        <button class=\"btn btn-danger float-right\" (click)=\"onDelete(product.id)\">Delete</button>\n      </div>\n      <ul class=\"list-group list-group-flush\" *ngIf=\"product.variants && product.variants.length\">\n        <li class=\"list-group-item\" *ngFor=\"let variant of product.variants\">\n          Color: <strong>{{variant.color}}</strong> - Price: <strong>${{variant.price}}</strong>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/list/list.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/list/list.component.ts ***!
  \**********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(api) {
        this.api = api;
        this.products = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.loadProducts();
    };
    ListComponent.prototype.loadProducts = function () {
        var _this = this;
        this.api.allProducts().subscribe(function (result) {
            _this.products = result.products;
        });
    };
    ListComponent.prototype.onDelete = function (productId) {
        var _this = this;
        this.api.deleteProduct(productId).subscribe(function (success) {
            _this.loadProducts();
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/admin/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/admin/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/admin/new-product/new-product.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/new-product/new-product.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/new-product/new-product.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/new-product/new-product.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n    <div class=\"col-8 my-4\">\n      <h1>New Product</h1>\n      <form [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n        <div class=\"row\">\n          <div class=\"col\">\n            <label for=\"\">Title:</label>\n            <input class=\"form-control\" formControlName=\"title\">\n            <br>\n            <label for=\"\">Description:</label>\n            <textarea name=\"summary\" class=\"form-control\" formControlName=\"description\" rows=\"3\"></textarea>\n            <br>\n            <button class=\"btn btn-link\" type=\"button\" (click)=\"addVariant()\">\n              <i class=\"fa fa-plus\"></i>Add Variant\n            </button>\n            <div formArrayName=\"variants\">\n              <div *ngFor=\"let variant of variants.controls; let i=index\" [formGroupName]=\"i\">\n                <div class=\"input-group mb-2\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"color\" placeholder=\"Color\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"price\" placeholder=\"Price\">\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-secondary\" type=\"button\" (click)=\"removeAVariant(i)\">Delete</button>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <br>\n          </div>\n        </div>\n        <br>\n        <button type=\"submit\" [disabled]=\"productForm.pristine\" class=\"btn btn-success\">Submit</button> &nbsp;\n        <button type=\"button\" (click)=\"location.back()\" class=\"btn btn-default\">Back</button>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin/new-product/new-product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/new-product/new-product.component.ts ***!
  \************************************************************/
/*! exports provided: NewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function() { return NewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/common.service */ "./src/app/shared/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(api, location, common) {
        this.api = api;
        this.location = location;
        this.common = common;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            variants: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
    }
    Object.defineProperty(NewProductComponent.prototype, "variants", {
        get: function () {
            return this.productForm.get('variants');
        },
        enumerable: true,
        configurable: true
    });
    NewProductComponent.prototype.ngOnInit = function () {
    };
    NewProductComponent.prototype.addVariant = function () {
        this.variants.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        }));
    };
    NewProductComponent.prototype.removeAVariant = function (index) {
        this.variants.removeAt(index);
    };
    NewProductComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.productForm.value;
        this.api.addProduct(data.title, data.description, data.variants).subscribe(function () {
            _this.common.navigateToLink('/admin');
        });
    };
    NewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product',
            template: __webpack_require__(/*! ./new-product.component.html */ "./src/app/admin/new-product/new-product.component.html"),
            styles: [__webpack_require__(/*! ./new-product.component.css */ "./src/app/admin/new-product/new-product.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _shared_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "./src/app/admin/view-product/view-product.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/view-product/view-product.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/view-product/view-product.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/view-product/view-product.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center mt-4\">\n  <div class=\"col-6\" *ngIf=\"product\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h3 class=\"card-title\">{{product.title}}</h3>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Available in {{product.variants.length}} variants</h6>\n        <p class=\"card-text\">{{product.description}}</p>\n        <button class=\"btn btn-danger float-right\" (click)=\"onDelete(product.id)\">Delete Product</button>\n      </div>\n      <ul class=\"list-group list-group-flush\" *ngIf=\"product.variants && product.variants.length\">\n        <li class=\"list-group-item\" *ngFor=\"let variant of product.variants\">\n          Color: <strong>{{variant.color}}</strong> - Price: <strong>${{variant.price}}</strong>\n          <button class=\"btn btn-danger float-right\" (click)=\"onDeleteVariant(variant.id)\">Delete Variant</button>\n        </li>\n        <li class=\"list-group-item\">\n          <form [formGroup]=\"variantForm\" (ngSubmit)=\"onSubmitVariant()\" novalidate>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"color\" placeholder=\"Color\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"price\" placeholder=\"Price\">\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-primary\" type=\"submit\">Submit Variant</button>\n              </span>\n            </div>\n          </form>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row justify-content-center mt-4\">\n  <div class=\"col-6\">\n    <a routerLink=\"/admin\" class=\"btn btn-secondary\">Back to Product List</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/view-product/view-product.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/view-product/view-product.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductComponent", function() { return ViewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/common.service */ "./src/app/shared/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewProductComponent = /** @class */ (function () {
    function ViewProductComponent(route, api, common) {
        this.route = route;
        this.api = api;
        this.common = common;
        this.product = null;
        this.variantForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    ViewProductComponent.prototype.ngOnInit = function () {
        this.productId = this.route.snapshot.paramMap.get('id');
        this.loadProduct();
    };
    ViewProductComponent.prototype.loadProduct = function () {
        var _this = this;
        this.api.loadAProduct(this.productId).subscribe(function (result) {
            _this.product = result.product;
        });
    };
    ViewProductComponent.prototype.onSubmitVariant = function () {
        var _this = this;
        var formData = this.variantForm.value;
        this.api.addVariant(this.productId, formData.color, formData.price).subscribe(function () {
            _this.loadProduct();
            _this.variantForm.reset();
        });
    };
    ViewProductComponent.prototype.onDelete = function (productId) {
        var _this = this;
        this.api.deleteProduct(productId).subscribe(function () {
            _this.common.navigateToLink('/home');
        });
    };
    ViewProductComponent.prototype.onDeleteVariant = function (variantId) {
        var _this = this;
        this.api.deleteVariant(variantId).subscribe(function () {
            _this.loadProduct();
        });
    };
    ViewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-product',
            template: __webpack_require__(/*! ./view-product.component.html */ "./src/app/admin/view-product/view-product.component.html"),
            styles: [__webpack_require__(/*! ./view-product.component.css */ "./src/app/admin/view-product/view-product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], ViewProductComponent);
    return ViewProductComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _admin_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/list/list.component */ "./src/app/admin/list/list.component.ts");
/* harmony import */ var _admin_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/new-product/new-product.component */ "./src/app/admin/new-product/new-product.component.ts");
/* harmony import */ var _admin_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/view-product/view-product.component */ "./src/app/admin/view-product/view-product.component.ts");
/* harmony import */ var _admin_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/edit-product/edit-product.component */ "./src/app/admin/edit-product/edit-product.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'admin', component: _admin_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"] },
    { path: 'product/view/:id', component: _admin_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_7__["ViewProductComponent"] },
    { path: 'product/create', component: _admin_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_6__["NewProductComponent"] },
    { path: 'product/edit/:id', component: _admin_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_8__["EditProductComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n  <!-- <app-footer></app-footer> -->\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dk-commerce-front';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/list/list.component */ "./src/app/admin/list/list.component.ts");
/* harmony import */ var _admin_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/new-product/new-product.component */ "./src/app/admin/new-product/new-product.component.ts");
/* harmony import */ var _admin_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/edit-product/edit-product.component */ "./src/app/admin/edit-product/edit-product.component.ts");
/* harmony import */ var _admin_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/view-product/view-product.component */ "./src/app/admin/view-product/view-product.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _admin_list_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"],
                _admin_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_12__["NewProductComponent"],
                _admin_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_13__["EditProductComponent"],
                _admin_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_14__["ViewProductComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">My e-Commerce</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/search\">Search</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <h1>List of Products</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-3 mb-4\" *ngFor=\"let product of products\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{product.title}}</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Available in {{product.variants.length}} variants</h6>\n        <p class=\"card-text\">{{product.description}}</p>\n        <!-- <a href=\"#\" class=\"card-link\">Card link</a> -->\n      </div>\n      <ul class=\"list-group list-group-flush\" *ngIf=\"product.variants && product.variants.length\">\n          <li class=\"list-group-item\" *ngFor=\"let variant of product.variants\">\n            Color: <strong>{{variant.color}}</strong> - Price: <strong>${{variant.price}}</strong>\n          </li>\n        </ul>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(api) {
        this.api = api;
        this.products = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.allProducts().subscribe(function (result) {
            _this.products = result.products;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center my-4\">\n  <div class=\"col-lg-4 col-xs-12 col-sm-6\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"username\">Email:</label>\n        <input type=\"text\" id=\"username\" class=\"form-control\" formControlName=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password:</label>\n        <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary mr-2\">Login</button>\n      <a routerLink=\"/register\">Register</a>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "./src/app/shared/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, common) {
        this.api = api;
        this.common = common;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var credentials = this.loginForm.value;
        this.api.login(credentials.email, credentials.password)
            .then(function (result) {
            if (result) {
                _this.common.navigateToLink('/admin');
            }
            else {
                _this.error = 'Login failed';
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center my-4\">\n    <div class=\"col-lg-4 col-xs-12 col-sm-6\">\n      <h2>Register new user</h2>\n      <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"username\">Email: </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Name: </label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password </label>\n          <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary mr-2\">Register</button> or\n        <a routerLink=\"/login\" class=\"ml-2\">Login</a>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "./src/app/shared/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(api, common) {
        this.api = api;
        this.common = common;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.error = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var cred = this.signupForm.value;
        this.api.register(cred.email, cred.password, cred.name)
            .then(function () {
            _this.common.navigateToLink('/login');
        })
            .catch(function (error) {
            _this.error = error;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-8 my-4\">\n    <h1>Search Products</h1>\n    <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n      <input class=\"form-control mb-2\" formControlName=\"query\">\n      <button type=\"submit\" [disabled]=\"searchForm.pristine\" class=\"btn btn-success mb-4\">Submit</button>\n    </form>\n    <div class=\"row\">\n        <div class=\"col-3 mb-4\" *ngFor=\"let product of results\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{product.title}}</h5>\n              <p class=\"card-text\">{{product.description}}</p>\n              <a routerLink=\"/product/view/{{product.productId}}\" class=\"card-link\">Details</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h6 *ngIf=\"noResult\">No results</h6>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/common.service */ "./src/app/shared/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(api, location, common) {
        this.api = api;
        this.location = location;
        this.common = common;
        this.results = [];
        this.noResult = false;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onSubmit = function () {
        var _this = this;
        this.noResult = false;
        this.api.search(this.searchForm.value.query).subscribe(function (queryResult) {
            var rawArray = queryResult.result.hits.hits;
            var reducer = function (acc, currentItem, index, array) {
                if (acc.find(function (item) { return currentItem.productId === item.productId; })) {
                    return acc;
                }
                return acc.slice(0).concat(Array.of(currentItem));
            };
            if (!rawArray.length) {
                _this.noResult = true;
            }
            _this.results = rawArray.map(function (item) { return item._source; }).reduce(reducer, []);
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _shared_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.token = null;
        this.baseURL = '/api/';
    }
    ApiService.prototype.allProducts = function () {
        var url = this.baseURL + "products";
        return this.http.get(url);
    };
    ApiService.prototype.login = function (email, password) {
        var _this = this;
        var request = this.http.post(this.baseURL + "login", { email: email, password: password }).toPromise();
        return request.then(function (result) {
            console.log(result);
            _this.token = result.api_key;
            return true;
        })
            .catch(function (error) {
            console.error(error);
            return false;
        });
    };
    ApiService.prototype.register = function (email, password, name) {
        return this.http.post(this.baseURL + "register", { email: email, password: password, name: name }).toPromise();
    };
    ApiService.prototype.logout = function () {
        var _this = this;
        var promise = this.http.post(this.baseURL + "logout", { api_key: this.token }).toPromise();
        return promise
            .then(function () {
            _this.token = null;
            return true;
        })
            .catch(function () { return false; });
    };
    ApiService.prototype.isAuthorized = function () {
        return this.token ? true : false;
    };
    ApiService.prototype.addProduct = function (title, description, variants) {
        if (variants === void 0) { variants = []; }
        return this.http.post(this.baseURL + "product/create", { title: title, description: description, variants: variants, api_key: this.token });
    };
    ApiService.prototype.editProduct = function (productId, title, description) {
        return this.http.post(this.baseURL + "product/update", { title: title, description: description, api_key: this.token });
    };
    ApiService.prototype.loadAProduct = function (productId) {
        return this.http.get(this.baseURL + "product/show/" + productId);
    };
    ApiService.prototype.deleteProduct = function (productId) {
        return this.http.post(this.baseURL + "product/delete/" + productId, { api_key: this.token });
    };
    ApiService.prototype.addVariant = function (productId, color, price) {
        return this.http.post(this.baseURL + "variant/add/" + productId, { color: color, price: price, api_key: this.token });
    };
    ApiService.prototype.editVariant = function (variantId, color, price) {
        return this.http.post(this.baseURL + "variant/edit/" + variantId, { color: color, price: price, api_key: this.token });
    };
    ApiService.prototype.deleteVariant = function (variantId) {
        return this.http.post(this.baseURL + "variant/delete/" + variantId, { api_key: this.token });
    };
    ApiService.prototype.search = function (query) {
        return this.http.get(this.baseURL + "search/" + query);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/common.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/common.service.ts ***!
  \******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonService = /** @class */ (function () {
    function CommonService(titleSerivce, router) {
        this.titleSerivce = titleSerivce;
        this.router = router;
    }
    CommonService.prototype.navigateToLink = function (link) {
        this.router.navigate([link]);
    };
    CommonService.prototype.setTitle = function (title) {
        this.titleSerivce.setTitle(title);
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CommonService);
    return CommonService;
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

module.exports = __webpack_require__(/*! /home/mofid/dev/simple-ecommerce-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map