(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["material-component-material-module"],{

/***/ "/sgR":
/*!***************************************************************************!*\
  !*** ./src/app/material-component/manage-order/manage-order.component.ts ***!
  \***************************************************************************/
/*! exports provided: ManageOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageOrderComponent", function() { return ManageOrderComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/global-constant */ "9VvO");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/category.service */ "cPV5");
/* harmony import */ var src_app_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/snackbar.service */ "6YzU");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var src_app_services_bill_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/bill.service */ "ZRiD");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





















function ManageOrderComponent_mat_error_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_mat_error_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, ManageOrderComponent_mat_error_18_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, ManageOrderComponent_mat_error_18_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r0.manageOrderForm.controls.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r0.manageOrderForm.controls.name.errors.pattern);
} }
function ManageOrderComponent_mat_error_23_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_mat_error_23_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, ManageOrderComponent_mat_error_23_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, ManageOrderComponent_mat_error_23_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.manageOrderForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.manageOrderForm.controls.email.errors.pattern);
} }
function ManageOrderComponent_mat_error_28_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_mat_error_28_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, ManageOrderComponent_mat_error_28_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, ManageOrderComponent_mat_error_28_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.manageOrderForm.controls.contactNumber.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.manageOrderForm.controls.contactNumber.errors.pattern);
} }
function ManageOrderComponent_mat_error_39_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, ManageOrderComponent_mat_error_39_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r3.manageOrderForm.controls.paymentMethod.errors.required);
} }
function ManageOrderComponent_mat_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const category_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", category_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", category_r30.name, " ");
} }
function ManageOrderComponent_mat_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const product_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", product_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", product_r31.name, " ");
} }
function ManageOrderComponent_mat_error_67_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_mat_error_67_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_mat_error_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, ManageOrderComponent_mat_error_67_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, ManageOrderComponent_mat_error_67_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r7.manageOrderForm.controls.quantity.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r7.manageOrderForm.controls.quantity.errors.pattern);
} }
function ManageOrderComponent_mat_error_72_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_mat_error_72_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_mat_error_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, ManageOrderComponent_mat_error_72_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, ManageOrderComponent_mat_error_72_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r8.manageOrderForm.controls.total.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r8.manageOrderForm.controls.total.errors.pattern);
} }
function ManageOrderComponent_th_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_td_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](element_r36.name);
} }
function ManageOrderComponent_th_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_td_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](element_r37.category);
} }
function ManageOrderComponent_th_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_td_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](element_r38.price);
} }
function ManageOrderComponent_th_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_td_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](element_r39.quantity);
} }
function ManageOrderComponent_th_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_td_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](element_r40.total);
} }
function ManageOrderComponent_th_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_td_100_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ManageOrderComponent_td_100_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r44); const i_r42 = ctx.index; const element_r41 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r43.handleDeleteAction(i_r42, element_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ManageOrderComponent_tr_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "tr", 40);
} }
function ManageOrderComponent_tr_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "tr", 41);
} }
class ManageOrderComponent {
    constructor(categoryService, formBuilder, snackbarService, ngxService, productService, billService) {
        this.categoryService = categoryService;
        this.formBuilder = formBuilder;
        this.snackbarService = snackbarService;
        this.ngxService = ngxService;
        this.productService = productService;
        this.billService = billService;
        this.displayedColumns = ['name', 'category', 'price', 'quantity', 'total', 'edit'];
        this.dataSource = [];
        this.manageOrderForm = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"];
        this.categories = [];
        this.products = [];
        this.totalAmount = 0;
    }
    ngOnInit() {
        this.ngxService.start();
        this.getCategory();
        this.manageOrderForm = this.formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].nameRegex)]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].emailRegex)]],
            contactNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].contactNumberRegex)]],
            paymentMethod: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            product: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            category: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            quantity: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            total: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    getCategory() {
        this.categoryService.getCategories().subscribe((response) => {
            this.ngxService.stop();
            this.categories = response;
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].error);
        });
    }
    getProductByCategory(value) {
        this.productService.getProductsByCategory(value.id).subscribe((response) => {
            this.products = response;
            this.manageOrderForm.controls['price'].setValue('');
            this.manageOrderForm.controls['quantity'].setValue('1');
            this.manageOrderForm.controls['total'].setValue(0);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].error);
        });
    }
    getProductDetails(value) {
        this.productService.getById(value.id).subscribe((response) => {
            this.price = response.price;
            this.manageOrderForm.controls['price'].setValue(response.price);
            this.manageOrderForm.controls['quantity'].setValue('1');
            this.manageOrderForm.controls['total'].setValue(this.price * 1);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].error);
        });
    }
    setQuantity(value) {
        var temp = this.manageOrderForm.controls['quantity'].value;
        if (temp > 0) {
            this.manageOrderForm.controls['total'].setValue(this.manageOrderForm.controls['quantity'].value * this.manageOrderForm.controls['price'].value);
        }
        else if (temp != '') {
            this.manageOrderForm.controls['quantity'].setValue('1');
            this.manageOrderForm.controls['total'].setValue(this.manageOrderForm.controls['quantity'].value * this.manageOrderForm.controls['price'].value);
        }
    }
    validateProductAdd() {
        if (this.manageOrderForm.controls['total'].value === 0 || this.manageOrderForm.controls['total'].value === null || this.manageOrderForm.controls['quantity'].value <= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    validateSubmit() {
        if (this.totalAmount == 0 || this.manageOrderForm.controls['name'].value == null || this.manageOrderForm.controls['email'].value == null || this.manageOrderForm.controls['contactNumber'].value == null || this.manageOrderForm.controls['paymentMethod'].value == null || !(this.manageOrderForm.controls['contactNumber'].valid) || !(this.manageOrderForm.controls['email'].valid)) {
            return true;
        }
        else {
            return false;
        }
    }
    add() {
        var formdata = this.manageOrderForm.value;
        var productName = this.dataSource.find((e) => e.id == formdata.product.id);
        if (productName === undefined) {
            this.totalAmount = this.totalAmount + formdata.total;
            this.dataSource.push({
                id: formdata.product.id, name: formdata.product.name, category: formdata.category.name, quantity: formdata.quantity, price: formdata.price, total: formdata.total
            });
            this.dataSource = [...this.dataSource];
            this.snackbarService.openSnackBar(src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].productAdded, 'success');
        }
        else {
            this.snackbarService.openSnackBar(src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].productExistError, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].error);
        }
    }
    handleDeleteAction(value, element) {
        this.totalAmount = this.totalAmount - element.total;
        this.dataSource.splice(value, 1);
        this.dataSource = [...this.dataSource];
    }
    submitAction() {
        this.ngxService.start();
        var formData = this.manageOrderForm.value;
        var data = {
            name: formData.name,
            email: formData.email,
            contactNumber: formData.contactNumber,
            paymentMethod: formData.paymentMethod,
            totalAmount: this.totalAmount,
            productDetails: JSON.stringify(this.dataSource)
        };
        this.billService.generateReport(data).subscribe((response) => {
            this.downloadFile(response === null || response === void 0 ? void 0 : response.uuid);
            this.manageOrderForm.reset();
            this.dataSource = [];
            this.totalAmount = 0;
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].error);
        });
    }
    downloadFile(fileName) {
        var data = {
            uuid: fileName
        };
        this.billService.getPDF(data).subscribe((response) => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(response, fileName + '.pdf');
            this.ngxService.stop();
        });
    }
}
ManageOrderComponent.??fac = function ManageOrderComponent_Factory(t) { return new (t || ManageOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_bill_service__WEBPACK_IMPORTED_MODULE_8__["BillService"])); };
ManageOrderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: ManageOrderComponent, selectors: [["app-manage-order"]], decls: 103, vars: 17, consts: [["mat-flat-button", "", "color", "primary", 1, "float-right", 3, "disabled", "click"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["fxLayout", "row wrap"], ["appearance", "outline", "fxFlex", ""], ["matInput", "", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "contactNumber", "required", ""], ["matInput", "", "formControlName", "paymentMethod", "required", ""], ["value", "Cash"], ["value", "Credit Card"], ["value", "Debit Card"], ["formControlName", "category", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "product", 3, "selectionChange"], ["matInput", "", "formControlName", "price", "required", "", "readonly", ""], ["matInput", "", "formControlName", "quantity", "required", "", 3, "keyup"], ["input", ""], ["matInput", "", "formControlName", "total", "required", "", "readonly", ""], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-flat-button", "", "color", "primary", 1, "float-right"], [1, "responsive_table"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "price"], ["matColumnDef", "quantity"], ["matColumnDef", "total"], ["matColumnDef", "edit"], ["mat-cell", "", "class", "action-link", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "action-link"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ManageOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "Manage Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ManageOrderComponent_Template_button_click_4_listener() { return ctx.submitAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Submit & GetBill");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, "Customer Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](18, ManageOrderComponent_mat_error_18_Template, 3, 2, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](22, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](23, ManageOrderComponent_mat_error_23_Template, 3, 2, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](27, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](28, ManageOrderComponent_mat_error_28_Template, 3, 2, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](31, "Payment Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](34, " Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](36, " Credit Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](38, " Debit Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](39, ManageOrderComponent_mat_error_39_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](44, "Select Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](50, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("selectionChange", function ManageOrderComponent_Template_mat_select_selectionChange_51_listener($event) { return ctx.getProductByCategory($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](52, ManageOrderComponent_mat_option_52_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](55, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("selectionChange", function ManageOrderComponent_Template_mat_select_selectionChange_56_listener($event) { return ctx.getProductDetails($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](57, ManageOrderComponent_mat_option_57_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](58, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](60, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](61, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](62, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](64, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](65, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("keyup", function ManageOrderComponent_Template_input_keyup_65_listener($event) { return ctx.setQuantity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](67, ManageOrderComponent_mat_error_67_Template, 3, 2, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](68, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](69, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](70, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](71, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](72, ManageOrderComponent_mat_error_72_Template, 3, 2, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](74, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ManageOrderComponent_Template_button_click_74_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](75, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](76, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](78, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](79, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](80, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](81, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](82, ManageOrderComponent_th_82_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](83, ManageOrderComponent_td_83_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](84, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](85, ManageOrderComponent_th_85_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](86, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](87, ManageOrderComponent_td_87_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](88, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](89, ManageOrderComponent_th_89_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](90, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](91, ManageOrderComponent_td_91_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](92, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](93, ManageOrderComponent_th_93_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](94, ManageOrderComponent_td_94_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](95, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](96, ManageOrderComponent_th_96_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](97, ManageOrderComponent_td_97_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](98, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](99, ManageOrderComponent_th_99_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](100, ManageOrderComponent_td_100_Template, 4, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](101, ManageOrderComponent_tr_101_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](102, ManageOrderComponent_tr_102_Template, 1, 0, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx.validateSubmit());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.manageOrderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.manageOrderForm.controls.name.touched && ctx.manageOrderForm.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.manageOrderForm.controls.email.touched && ctx.manageOrderForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.manageOrderForm.controls.contactNumber.touched && ctx.manageOrderForm.controls.contactNumber.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.manageOrderForm.controls.paymentMethod.touched && ctx.manageOrderForm.controls.paymentMethod.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.manageOrderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.manageOrderForm.controls.quantity.touched && ctx.manageOrderForm.controls.quantity.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.manageOrderForm.controls.total.touched && ctx.manageOrderForm.controls.total.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx.validateProductAdd());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("Total Amount : ", ctx.totalAmount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatRow"]], styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  margin: -24px;\n  width: auto;\n  margin-bottom: 10px;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYW5hZ2Utb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUVJLFlBQUE7QUFGSjs7QUFLQTtFQUVJLFlBQUE7QUFISjs7QUFNQTtFQUVJLFdBQUE7QUFKSiIsImZpbGUiOiJtYW5hZ2Utb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXJcclxue1xyXG4gICAgbWFyZ2luOiAtMjRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRpdGxlLWNlbnRlclxyXG57XHJcbiAgICBmbGV4OjEgMSBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZFxyXG57XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi5mbG9hdC1yaWdodFxyXG57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbnRhYmxlXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyBtYXQtY2FyZFxyXG4vLyB7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG4vLyB9Il19 */"] });


/***/ }),

/***/ "1KUO":
/*!*********************************************************************************!*\
  !*** ./src/app/material-component/manage-category/manage-category.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ManageCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCategoryComponent", function() { return ManageCategoryComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global-constant */ "9VvO");
/* harmony import */ var _dialog_category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/category/category.component */ "9zJD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var src_app_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/snackbar.service */ "6YzU");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/category.service */ "cPV5");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");

















const _c0 = ["class", "category"];
function ManageCategoryComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ManageCategoryComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](element_r7.name);
} }
function ManageCategoryComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ManageCategoryComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ManageCategoryComponent_td_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r10); const element_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r9.handleEditActions(element_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ManageCategoryComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "tr", 17);
} }
function ManageCategoryComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "tr", 18);
} }
class ManageCategoryComponent {
    constructor(dialog, router, ngxService, snackbarService, categoryService) {
        this.dialog = dialog;
        this.router = router;
        this.ngxService = ngxService;
        this.snackbarService = snackbarService;
        this.categoryService = categoryService;
        this.displayedColumns = ['name', 'edit'];
    }
    ngOnInit() {
        this.ngxService.start();
        this.tableData();
    }
    tableData() {
        this.categoryService.getCategories().subscribe((response) => {
            this.ngxService.stop();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](response);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__["GlobalConstant"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__["GlobalConstant"].error);
        });
    }
    applyFiter(event) {
        const fiterValue = event.target.value;
        this.dataSource.filter = fiterValue.trim().toLocaleLowerCase();
    }
    handleAddActions() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            action: 'Add'
        };
        dialogConfig.width = '550px';
        const dialogRef = this.dialog.open(_dialog_category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"], dialogConfig);
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
        const sub = dialogRef.componentInstance.onAddCategory.subscribe((response) => {
            this.tableData();
        });
    }
    handleEditActions(values) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            action: 'Edit',
            data: values
        };
        dialogConfig.width = '550px';
        const dialogRef = this.dialog.open(_dialog_category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"], dialogConfig);
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
        const sub = dialogRef.componentInstance.onEditCategory.subscribe((response) => {
            this.tableData();
        });
    }
}
ManageCategoryComponent.??fac = function ManageCategoryComponent_Factory(t) { return new (t || ManageCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"])); };
ManageCategoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: ManageCategoryComponent, selectors: [["app-manage", 8, "category"]], attrs: _c0, decls: 24, vars: 4, consts: [["mat-flat-button", "", "color", "primary", 1, "float-right", 3, "click"], ["appearance", "outline"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "responsive_table"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "edit"], ["mat-cell", "", "class", "action-link", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "action-link"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ManageCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "Manage Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ManageCategoryComponent_Template_button_click_4_listener() { return ctx.handleAddActions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](5, "Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](10, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("keyup", function ManageCategoryComponent_Template_input_keyup_11_listener($event) { return ctx.applyFiter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](16, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](17, ManageCategoryComponent_th_17_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](18, ManageCategoryComponent_td_18_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](20, ManageCategoryComponent_th_20_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](21, ManageCategoryComponent_td_21_Template, 4, 0, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](22, ManageCategoryComponent_tr_22_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](23, ManageCategoryComponent_tr_23_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: [".float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYW5hZ2UtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0FBQUo7O0FBR0E7RUFFSSxhQUFBO0FBREo7O0FBSUE7RUFFSSxXQUFBO0FBRkoiLCJmaWxlIjoibWFuYWdlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsb2F0LXJpZ2h0XHJcbntcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxubWF0LWNhcmRcclxue1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxudGFibGVcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "76PZ":
/*!*******************************************************!*\
  !*** ./src/app/material-component/material.module.ts ***!
  \*******************************************************/
/*! exports provided: MaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _material_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.routing */ "wYia");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/material-module */ "qAUw");
/* harmony import */ var _dialog_view_bill_products_view_bill_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog/view-bill-products/view-bill-products.component */ "AD1o");
/* harmony import */ var _dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog/confirmation/confirmation.component */ "TAl4");
/* harmony import */ var _dialog_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog/change-password/change-password.component */ "Mq+F");
/* harmony import */ var _manage_category_manage_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage-category/manage-category.component */ "1KUO");
/* harmony import */ var _dialog_category_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialog/category/category.component */ "9zJD");
/* harmony import */ var _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./manage-product/manage-product.component */ "kseh");
/* harmony import */ var _dialog_product_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog/product/product.component */ "h1U/");
/* harmony import */ var _manage_order_manage_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./manage-order/manage-order.component */ "/sgR");
/* harmony import */ var _view_bill_view_bill_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view-bill/view-bill.component */ "tEOd");
/* harmony import */ var _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./manage-user/manage-user.component */ "Q4hc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class MaterialComponentsModule {
}
MaterialComponentsModule.??fac = function MaterialComponentsModule_Factory(t) { return new (t || MaterialComponentsModule)(); };
MaterialComponentsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineNgModule"]({ type: MaterialComponentsModule });
MaterialComponentsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_material_routing__WEBPACK_IMPORTED_MODULE_6__["MaterialRoutes"]),
            _shared_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["????setNgModuleScope"](MaterialComponentsModule, { declarations: [_dialog_view_bill_products_view_bill_products_component__WEBPACK_IMPORTED_MODULE_8__["ViewBillProductsComponent"],
        _dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationComponent"],
        _dialog_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"],
        _manage_category_manage_category_component__WEBPACK_IMPORTED_MODULE_11__["ManageCategoryComponent"],
        _dialog_category_category_component__WEBPACK_IMPORTED_MODULE_12__["CategoryComponent"],
        _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_13__["ManageProductComponent"],
        _dialog_product_product_component__WEBPACK_IMPORTED_MODULE_14__["ProductComponent"],
        _manage_order_manage_order_component__WEBPACK_IMPORTED_MODULE_15__["ManageOrderComponent"],
        _view_bill_view_bill_component__WEBPACK_IMPORTED_MODULE_16__["ViewBillComponent"],
        _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_17__["ManageUserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"]] }); })();


/***/ }),

/***/ "9zJD":
/*!**************************************************************************!*\
  !*** ./src/app/material-component/dialog/category/category.component.ts ***!
  \**************************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/global-constant */ "9VvO");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/category.service */ "cPV5");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var src_app_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/snackbar.service */ "6YzU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");

















function CategoryComponent_mat_error_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CategoryComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CategoryComponent_mat_error_11_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.categoryForm.controls.name.required);
} }
class CategoryComponent {
    constructor(dialogData, categoryService, ngxService, dialog, formBuilder, snackbarService, router, dialogRef) {
        this.dialogData = dialogData;
        this.categoryService = categoryService;
        this.ngxService = ngxService;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.snackbarService = snackbarService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.onAddCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.categoryForm = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"];
        this.dialogAction = 'Add';
        this.action = 'Add';
    }
    ngOnInit() {
        this.categoryForm = this.formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        if (this.dialogData.action === 'Edit') {
            this.dialogAction = "Edit";
            this.action = "Update";
            this.categoryForm.patchValue(this.dialogData.data);
        }
    }
    handleSubmit() {
        if (this.dialogAction === 'Edit') {
            this.edit();
        }
        else {
            this.add();
        }
    }
    add() {
        var formData = this.categoryForm.value;
        var data = {
            name: formData.name,
        };
        this.categoryService.add(data).subscribe((response) => {
            this.dialogRef.close();
            this.onAddCategory.emit();
            this.responseMessage = response.message;
            this.snackbarService.openSnackBar(this.responseMessage, "sucess");
        }, (error) => {
            var _a, _b;
            this.dialogRef.close();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_3__["GlobalConstant"].genericError;
                ;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_3__["GlobalConstant"].error);
        });
    }
    edit() {
        var formData = this.categoryForm.value;
        var data = {
            id: this.dialogData.data.id,
            name: formData.name,
        };
        this.categoryService.update(data).subscribe((response) => {
            this.dialogRef.close();
            this.onEditCategory.emit();
            this.responseMessage = response.message;
            this.snackbarService.openSnackBar(this.responseMessage, "sucess");
        }, (error) => {
            var _a, _b;
            this.dialogRef.close();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_3__["GlobalConstant"].genericError;
                ;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_3__["GlobalConstant"].error);
        });
    }
}
CategoryComponent.??fac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
CategoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], decls: 17, vars: 5, consts: [["color", "primary"], ["fxLayout", "row"], [1, "title-center"], [1, "mat-typography"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["appearance", "outline", "fxFlex", ""], ["matInput", "", "formControlName", "name", "required", ""], [4, "ngIf"], ["align", "center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-dialog-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, CategoryComponent_mat_error_11_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-dialog-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CategoryComponent_Template_button_click_13_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.dialogData.action, " Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.categoryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.categoryForm.controls.name.touched && ctx.categoryForm.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !(ctx.categoryForm.valid && ctx.categoryForm.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.action);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]], styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  margin: -24px;\n  width: auto;\n  margin-bottom: 10px;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUVJLFlBQUE7QUFGSiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhclxyXG57XHJcbiAgICBtYXJnaW46IC0yNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGl0bGUtY2VudGVyXHJcbntcclxuICAgIGZsZXg6MSAxIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkXHJcbntcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "AD1o":
/*!**********************************************************************************************!*\
  !*** ./src/app/material-component/dialog/view-bill-products/view-bill-products.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ViewBillProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBillProductsComponent", function() { return ViewBillProductsComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");








function ViewBillProductsComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function ViewBillProductsComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](element_r12.name);
} }
function ViewBillProductsComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function ViewBillProductsComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](element_r13.category);
} }
function ViewBillProductsComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function ViewBillProductsComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](element_r14.price);
} }
function ViewBillProductsComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function ViewBillProductsComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](element_r15.quantity);
} }
function ViewBillProductsComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function ViewBillProductsComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](element_r16.total);
} }
function ViewBillProductsComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 20);
} }
function ViewBillProductsComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 21);
} }
class ViewBillProductsComponent {
    constructor(dialogData, dialogRef) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
        this.displayColumns = ['name', 'category', 'price', 'quantity', 'total'];
    }
    ngOnInit() {
        this.data = this.dialogData.data;
        this.dataSource = JSON.parse(this.dialogData.data.productDetails);
    }
}
ViewBillProductsComponent.??fac = function ViewBillProductsComponent_Factory(t) { return new (t || ViewBillProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"])); };
ViewBillProductsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ViewBillProductsComponent, selectors: [["app-view-bill-products"]], decls: 48, vars: 8, consts: [["color", "primary"], ["fxLayout", "row"], [1, "title-center"], [1, "spacer"], ["mat-dialog-close", "", "mat-icon-button", "", 1, "mat-dialog-close"], [1, "mat-typography"], ["id", "customers"], [1, "responsive_table"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "price"], ["matColumnDef", "quantity"], ["matColumnDef", "total"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ViewBillProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "View Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "mat-dialog-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Contact Number :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Payment Method :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](31, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, ViewBillProductsComponent_th_32_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, ViewBillProductsComponent_td_33_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](34, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](35, ViewBillProductsComponent_th_35_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](36, ViewBillProductsComponent_td_36_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](37, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](38, ViewBillProductsComponent_th_38_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](39, ViewBillProductsComponent_td_39_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](40, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](41, ViewBillProductsComponent_th_41_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](42, ViewBillProductsComponent_td_42_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](43, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](44, ViewBillProductsComponent_th_44_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](45, ViewBillProductsComponent_td_45_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](46, ViewBillProductsComponent_tr_46_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](47, ViewBillProductsComponent_tr_47_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.data.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.data.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.data.contactNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.data.paymentMethod, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matHeaderRowDef", ctx.displayColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matRowDefColumns", ctx.displayColumns);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  margin: -24px;\n  margin-bottom: 0;\n  width: auto;\n  margin-bottom: 10PX;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #04AA6D;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlldy1iaWxsLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFDTjs7QUFFSTtFQUNJLFlBQUE7QUFDUjs7QUFFSTtFQUNJLFlBQUE7QUFDUjs7QUFFSTtFQUNJLGFBQUE7QUFDUjs7QUFFSTtFQUNJLFdBQUE7QUFDUjs7QUFHTTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQVI7O0FBR007RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFBUjs7QUFHTTtFQUE4Qix5QkFBQTtBQUNwQzs7QUFDTTtFQUFxQixzQkFBQTtBQUczQjs7QUFETTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUlSIiwiZmlsZSI6InZpZXctYmlsbC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhciB7XHJcbiAgICBtYXJnaW46IC0yNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBQWDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLWNlbnRlciB7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsb2F0LXJpZ2h0e1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbWF0LWNhcmR7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgI2N1c3RvbWVycyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gICAgICBcclxuICAgICAgI2N1c3RvbWVycyB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcbiAgICAgIFxyXG4gICAgICAjY3VzdG9tZXJzIHRoIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9Il19 */"] });


/***/ }),

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ProductService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    add(data) {
        return this.http.post(this.url + '/product/add', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', "application/json")
        });
    }
    update(data) {
        return this.http.patch(this.url + '/product/update/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
        });
    }
    getProducts() {
        return this.http.get(this.url + '/product/get/');
    }
    updateStatus(data) {
        return this.http.patch(this.url + '/product/updateStatus/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
        });
    }
    delete(id) {
        return this.http.delete(this.url + "/product/delete/" + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', "application/json")
        });
    }
    getProductsByCategory(id) {
        return this.http.get(this.url + '/product/getByCategory/' + id);
    }
    getById(id) {
        return this.http.get(this.url + '/product/getById/' + id);
    }
}
ProductService.??fac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ProductService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: ProductService, factory: ProductService.??fac, providedIn: 'root' });


/***/ }),

/***/ "Iab2":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "Q4hc":
/*!*************************************************************************!*\
  !*** ./src/app/material-component/manage-user/manage-user.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManageUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserComponent", function() { return ManageUserComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/global-constant */ "9VvO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var src_app_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/snackbar.service */ "6YzU");
/* harmony import */ var src_app_services_userservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/userservice.service */ "bUPt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");












function ManageUserComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ManageUserComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](element_r11.name);
} }
function ManageUserComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ManageUserComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](element_r12.email);
} }
function ManageUserComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ManageUserComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](element_r13.contactNumber);
} }
function ManageUserComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ManageUserComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-slide-toggle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function ManageUserComponent_td_25_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r16); const element_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r15.handleChangeAction($event.checked, element_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("checked", element_r14.status);
} }
function ManageUserComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "tr", 18);
} }
function ManageUserComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "tr", 19);
} }
class ManageUserComponent {
    constructor(ngxService, snackbarService, userService) {
        this.ngxService = ngxService;
        this.snackbarService = snackbarService;
        this.userService = userService;
        this.displayedColumns = ['name', 'email', 'contactNumber', 'status'];
    }
    ngOnInit() {
        this.ngxService.start();
        this.tableData();
    }
    tableData() {
        this.userService.getUsers().subscribe((response) => {
            this.ngxService.stop();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](response);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].error);
        });
    }
    applyFiter(event) {
        const fiterValue = event.target.value;
        this.dataSource.filter = fiterValue.trim().toLocaleLowerCase();
    }
    handleChangeAction(status, id) {
        this.ngxService.start();
        var data = {
            status: status.toString(),
            id: id
        };
        this.userService.update(data).subscribe((response) => {
            this.ngxService.stop();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.snackbarService.openSnackBar(this.responseMessage, 'Sucecess');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_1__["GlobalConstant"].error);
        });
    }
}
ManageUserComponent.??fac = function ManageUserComponent_Factory(t) { return new (t || ManageUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_services_userservice_service__WEBPACK_IMPORTED_MODULE_5__["UserserviceService"])); };
ManageUserComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ManageUserComponent, selectors: [["app-manage-user"]], decls: 28, vars: 4, consts: [["appearance", "outline"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "responsive_table"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "contactNumber"], ["matColumnDef", "status"], ["mat-cell", "", "class", "action-link", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "action-link"], ["matTooltip", "Activate or Deactivate User", 3, "checked", "change"], ["mat-header-row", ""], ["mat-row", ""]], template: function ManageUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Manage User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("keyup", function ManageUserComponent_Template_input_keyup_9_listener($event) { return ctx.applyFiter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](14, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, ManageUserComponent_th_15_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, ManageUserComponent_td_16_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](17, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](18, ManageUserComponent_th_18_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](19, ManageUserComponent_td_19_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](20, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](21, ManageUserComponent_th_21_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](22, ManageUserComponent_td_22_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](23, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](24, ManageUserComponent_th_24_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](25, ManageUserComponent_td_25_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](26, ManageUserComponent_tr_26_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](27, ManageUserComponent_tr_27_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: ["mat-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYW5hZ2UtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJtYW5hZ2UtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxudGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZRiD":
/*!******************************************!*\
  !*** ./src/app/services/bill.service.ts ***!
  \******************************************/
/*! exports provided: BillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillService", function() { return BillService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class BillService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    generateReport(data) {
        return this.httpClient.post(this.url + 'bill/generateReport/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set("Content-Type", 'application/json')
        });
    }
    getPDF(data) {
        return this.httpClient.post(this.url + '/bill/getPdf', data, { responseType: 'blob' });
    }
    getBills() {
        return this.httpClient.get(this.url + '/bill/getBills/');
    }
    delete(id) {
        return this.httpClient.delete(this.url + '/bill/delete/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
        });
    }
}
BillService.??fac = function BillService_Factory(t) { return new (t || BillService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BillService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: BillService, factory: BillService.??fac, providedIn: 'root' });


/***/ }),

/***/ "cPV5":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CategoryService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    add(data) {
        return this.http.post(this.url + '/category/add', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', "application/json")
        });
    }
    update(data) {
        return this.http.patch(this.url + '/category/update', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', "application/json")
        });
    }
    getCategories() {
        return this.http.get(this.url + '/category/get');
    }
}
CategoryService.??fac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CategoryService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: CategoryService, factory: CategoryService.??fac, providedIn: 'root' });


/***/ }),

/***/ "h1U/":
/*!************************************************************************!*\
  !*** ./src/app/material-component/dialog/product/product.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/global-constant */ "9VvO");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/category.service */ "cPV5");
/* harmony import */ var src_app_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/snackbar.service */ "6YzU");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


















function ProductComponent_mat_error_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductComponent_mat_error_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "This field is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductComponent_mat_error_12_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProductComponent_mat_error_12_span_2_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.productForm.controls.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.productForm.controls.name.errors.pattern);
} }
function ProductComponent_mat_error_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductComponent_mat_error_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "This field is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductComponent_mat_error_18_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProductComponent_mat_error_18_span_2_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.productForm.controls.price.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.productForm.controls.price.errors.pattern);
} }
function ProductComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const category_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", category_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", category_r8.name, " ");
} }
function ProductComponent_mat_error_29_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductComponent_mat_error_29_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "This field is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductComponent_mat_error_29_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProductComponent_mat_error_29_span_2_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.productForm.controls.description.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.productForm.controls.description.errors.pattern);
} }
class ProductComponent {
    constructor(dialogData, formBuilder, productService, dialogRef, categoryService, snackbarService) {
        this.dialogData = dialogData;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.dialogRef = dialogRef;
        this.categoryService = categoryService;
        this.snackbarService = snackbarService;
        this.onAddProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.productForm = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"];
        this.dialogAction = "Add";
        this.action = "Add";
        this.category = [];
    }
    ngOnInit() {
        this.productForm = this.formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_3__["GlobalConstant"].nameRegex)]],
            categoryId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        if (this.dialogData.action === 'Edit') {
            this.dialogAction = 'Edit';
            this.action = "Update";
            this.productForm.patchValue(this.dialogData.data);
        }
        this.getCategories();
    }
    getCategories() {
        this.categoryService.getCategories().subscribe((response) => {
            this.categories = response;
        }, (error) => {
            var _a, _b;
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responsemessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responsemessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_3__["GlobalConstant"].genericError;
            }
        });
        this.snackbarService.openSnackBar(this.responsemessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_3__["GlobalConstant"].error);
    }
    handleSubmit() {
        if (this.dialogAction === "Edit") {
            this.edit();
        }
        else {
            this.add();
        }
    }
    edit() {
        var formData = this.productForm.value;
        var data = {
            id: this.dialogData.data.id,
            name: formData.name,
            categoryId: formData.categoryId,
            price: formData.price,
            description: formData.description,
        };
        this.productService.update(data).subscribe((response) => {
            this.dialogRef.close();
            this.onEditProduct.emit();
            this.responsemessage = response.message;
            this.snackbarService.openSnackBar(this.responsemessage, 'success');
        }, (error) => {
            var _a, _b;
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responsemessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responsemessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_3__["GlobalConstant"].genericError;
            }
            this.snackbarService.openSnackBar(this.responsemessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_3__["GlobalConstant"].error);
        });
    }
    add() {
        var formData = this.productForm.value;
        var data = {
            name: formData.name,
            categoryId: formData.categoryId,
            price: formData.price,
            description: formData.description,
        };
        this.productService.add(data).subscribe((response) => {
            this.dialogRef.close();
            this.onAddProduct.emit();
            this.responsemessage = response.message;
            this.snackbarService.openSnackBar(this.responsemessage, 'success');
        }, (error) => {
            var _a, _b;
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responsemessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responsemessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_3__["GlobalConstant"].genericError;
            }
            this.snackbarService.openSnackBar(this.responsemessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_3__["GlobalConstant"].error);
        });
    }
}
ProductComponent.??fac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"])); };
ProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 35, vars: 8, consts: [["color", "primary"], ["fxLayout", "row"], [1, "title-center"], [1, "mat-typography"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["fxLayout", "row wrap"], ["appearance", "outline", "fxFlex", ""], ["matInput", "", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "price", "required", ""], ["formControlName", "categoryId"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "description", "required", ""], ["align", "center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], [3, "value"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-dialog-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ProductComponent_mat_error_12_Template, 3, 2, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ProductComponent_mat_error_18_Template, 3, 2, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ProductComponent_mat_option_23_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ProductComponent_mat_error_29_Template, 3, 2, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-dialog-actions", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductComponent_Template_button_click_31_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.dialogData.action, " Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.productForm.controls.name.touched && ctx.productForm.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.productForm.controls.price.touched && ctx.productForm.controls.price.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.productForm.controls.description.touched && ctx.productForm.controls.description.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !(ctx.productForm.valid && ctx.productForm.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.action);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: [".float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  margin: -24px;\n  width: auto;\n  margin-bottom: 10px;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7QUFBSjs7QUFHQTtFQUVJLGFBQUE7QUFESjs7QUFJQTtFQUVJLFdBQUE7QUFGSjs7QUFLQTtFQUVJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUVJLGNBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9BO0VBRUksWUFBQTtBQUxKIiwiZmlsZSI6InByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXQtcmlnaHRcclxue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5tYXQtY2FyZFxyXG57XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG50YWJsZVxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC10b29sYmFyXHJcbntcclxuICAgIG1hcmdpbjogLTI0cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1jZW50ZXJcclxue1xyXG4gICAgZmxleDoxIDEgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGRcclxue1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "kseh":
/*!*******************************************************************************!*\
  !*** ./src/app/material-component/manage-product/manage-product.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ManageProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductComponent", function() { return ManageProductComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global-constant */ "9VvO");
/* harmony import */ var _dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/confirmation/confirmation.component */ "TAl4");
/* harmony import */ var _dialog_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/product/product.component */ "h1U/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var src_app_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/snackbar.service */ "6YzU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");



















function ManageProductComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ManageProductComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](element_r13.name);
} }
function ManageProductComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ManageProductComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](element_r14.categoryName);
} }
function ManageProductComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ManageProductComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](element_r15.description);
} }
function ManageProductComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ManageProductComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](element_r16.price);
} }
function ManageProductComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ManageProductComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ManageProductComponent_td_30_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r19); const element_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r18.handleEditAction(element_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ManageProductComponent_td_30_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r19); const element_r17 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r20.handleDeleteAction(element_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "mat-slide-toggle", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function ManageProductComponent_td_30_Template_mat_slide_toggle_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r19); const element_r17 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r21.onChange($event.checked, element_r17.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("checked", element_r17.status);
} }
function ManageProductComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "tr", 22);
} }
function ManageProductComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "tr", 23);
} }
class ManageProductComponent {
    constructor(productService, ngxService, dialog, snackbarService, router) {
        this.productService = productService;
        this.ngxService = ngxService;
        this.dialog = dialog;
        this.snackbarService = snackbarService;
        this.router = router;
        this.displayedColumns = ['name', 'categoryName', 'description', 'price', 'edit'];
    }
    ngOnInit() {
        this.ngxService.start();
        this.tableData();
    }
    tableData() {
        this.productService.getProducts().subscribe((response) => {
            this.ngxService.stop();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](response);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            console.log(error);
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__["GlobalConstant"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__["GlobalConstant"].error);
        });
    }
    applyFiter(event) {
        const fiterValue = event.target.value;
        this.dataSource.filter = fiterValue.trim().toLocaleLowerCase();
    }
    handleAddAction() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            action: 'Add'
        };
        dialogConfig.width = '550px';
        const dialogRef = this.dialog.open(_dialog_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], dialogConfig);
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
        const sub = dialogRef.componentInstance.onAddProduct.subscribe((response) => {
            this.tableData();
        });
    }
    handleEditAction(values) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            action: 'Edit',
            data: values
        };
        dialogConfig.width = '550px';
        const dialogRef = this.dialog.open(_dialog_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], dialogConfig);
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
        const sub = dialogRef.componentInstance.onEditProduct.subscribe((response) => {
            this.tableData();
        });
    }
    handleDeleteAction(values) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            message: ' delete' + ' ' + values.name + ' product'
        };
        const dialogRef = this.dialog.open(_dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationComponent"], dialogConfig);
        const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((response) => {
            this.ngxService.start();
            this.deleteProduct(values.id);
            dialogRef.close();
        });
    }
    deleteProduct(id) {
        this.productService.delete(id).subscribe((response) => {
            this.ngxService.stop();
            this.tableData();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.snackbarService.openSnackBar(this.responseMessage, 'success');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            console.log(error);
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__["GlobalConstant"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__["GlobalConstant"].error);
        });
    }
    onChange(status, id) {
        var data = {
            status: status.toString(),
            id: id
        };
        this.productService.updateStatus(data).subscribe((response) => {
            this.ngxService.stop();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.snackbarService.openSnackBar(this.responseMessage, 'success');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            console.log(error);
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__["GlobalConstant"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__["GlobalConstant"].error);
        });
    }
}
ManageProductComponent.??fac = function ManageProductComponent_Factory(t) { return new (t || ManageProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_snackbar_service__WEBPACK_IMPORTED_MODULE_8__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
ManageProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: ManageProductComponent, selectors: [["app-manage-product"]], decls: 33, vars: 4, consts: [["mat-flat-button", "", "color", "primary", 1, "float-right", 3, "click"], ["appearance", "fill"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "responsive_table"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "categoryName"], ["matColumnDef", "description"], ["matColumnDef", "price"], ["matColumnDef", "edit"], ["mat-cell", "", "class", "action-link", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "action-link"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Delete", 3, "click"], ["matTooltip", "Activate or Deactivate Product", 3, "checked", "change"], ["mat-header-row", ""], ["mat-row", ""]], template: function ManageProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Manage Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ManageProductComponent_Template_button_click_4_listener() { return ctx.handleAddAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](10, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("keyup", function ManageProductComponent_Template_input_keyup_11_listener($event) { return ctx.applyFiter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](16, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](17, ManageProductComponent_th_17_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](18, ManageProductComponent_td_18_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](20, ManageProductComponent_th_20_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](21, ManageProductComponent_td_21_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](22, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](23, ManageProductComponent_th_23_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](24, ManageProductComponent_td_24_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](25, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](26, ManageProductComponent_th_26_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](27, ManageProductComponent_td_27_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](28, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](29, ManageProductComponent_th_29_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](30, ManageProductComponent_td_30_Template, 8, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](31, ManageProductComponent_tr_31_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](32, ManageProductComponent_tr_32_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: [".float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYW5hZ2UtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7QUFBSjs7QUFHQTtFQUVJLGFBQUE7QUFESjs7QUFJQTtFQUVJLFdBQUE7QUFGSiIsImZpbGUiOiJtYW5hZ2UtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbG9hdC1yaWdodFxyXG57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbm1hdC1jYXJkXHJcbntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbnRhYmxlXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "tEOd":
/*!*********************************************************************!*\
  !*** ./src/app/material-component/view-bill/view-bill.component.ts ***!
  \*********************************************************************/
/*! exports provided: ViewBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBillComponent", function() { return ViewBillComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global-constant */ "9VvO");
/* harmony import */ var _dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/confirmation/confirmation.component */ "TAl4");
/* harmony import */ var _dialog_view_bill_products_view_bill_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/view-bill-products/view-bill-products.component */ "AD1o");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_bill_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/bill.service */ "ZRiD");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_snackbar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/snackbar.service */ "6YzU");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



















function ViewBillComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function ViewBillComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](element_r15.name);
} }
function ViewBillComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function ViewBillComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](element_r16.email);
} }
function ViewBillComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function ViewBillComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](element_r17.contactNumber);
} }
function ViewBillComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function ViewBillComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](element_r18.paymentMethod);
} }
function ViewBillComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function ViewBillComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](element_r19.total);
} }
function ViewBillComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function ViewBillComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function ViewBillComponent_td_31_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r21.handleViewAction(element_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function ViewBillComponent_td_31_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r23.downloadReportAction(element_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](6, "summarize");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function ViewBillComponent_td_31_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r24.handleDeleteAction(element_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function ViewBillComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "tr", 22);
} }
function ViewBillComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "tr", 23);
} }
class ViewBillComponent {
    constructor(billService, ngxService, dialog, router, snackbarService) {
        this.billService = billService;
        this.ngxService = ngxService;
        this.dialog = dialog;
        this.router = router;
        this.snackbarService = snackbarService;
        this.displayColumns = ['name', 'email', 'contactNumber', 'paymentMethod', 'total', 'view'];
    }
    ngOnInit() {
        this.tableData();
    }
    tableData() {
        this.billService.getBills().subscribe((response) => {
            this.ngxService.stop();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](response);
        }, (error) => {
            var _a;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
            }
            else {
                this.responseMessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__["GlobalConstant"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__["GlobalConstant"].error);
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
    handleViewAction(values) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            data: values
        };
        dialogConfig.width = '100%';
        const dialogRef = this.dialog.open(_dialog_view_bill_products_view_bill_products_component__WEBPACK_IMPORTED_MODULE_4__["ViewBillProductsComponent"], dialogConfig);
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
    }
    handleDeleteAction(values) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            message: 'delete' + ' ' + values.name + ' bill'
        };
        const dialogRef = this.dialog.open(_dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationComponent"], dialogConfig);
        const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((response) => {
            this.ngxService.start();
            this.deleteProduct(values.id);
            dialogRef.close();
        });
    }
    deleteProduct(id) {
        this.billService.delete(id).subscribe((response) => {
            this.ngxService.stop();
            this.tableData();
            this.responseMessage = response === null || response === void 0 ? void 0 : response.message;
            this.snackbarService.openSnackBar(this.responseMessage, 'success');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__["GlobalConstant"].genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, src_app_shared_global_constant__WEBPACK_IMPORTED_MODULE_2__["GlobalConstant"].error);
        });
    }
    downloadReportAction(values) {
        this.ngxService.start();
        var data = {
            name: values.name,
            email: values.email,
            uuid: values.uuid,
            contactNumber: values.contactNumber,
            paymentMethod: values.paymentMethod,
            totalAmount: values.total,
            productDetails: values.productDetails
        };
        this.billService.getPDF(data).subscribe((response) => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(response, values.uuid + '.pdf');
            this.ngxService.stop();
        });
    }
}
ViewBillComponent.??fac = function ViewBillComponent_Factory(t) { return new (t || ViewBillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_services_bill_service__WEBPACK_IMPORTED_MODULE_7__["BillService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_snackbar_service__WEBPACK_IMPORTED_MODULE_10__["SnackbarService"])); };
ViewBillComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: ViewBillComponent, selectors: [["app-view-bill"]], decls: 35, vars: 4, consts: [["appearance", "outline"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "responsive_table"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "contactNumber"], ["matColumnDef", "paymentMethod"], ["matColumnDef", "total"], ["matColumnDef", "view"], ["mat-cell", "", "class", "class-link", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "class-link"], ["mat-icon-button", "", "color", "primary", "matTooltip", "View", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Download Bill", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ViewBillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "View Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](8, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("keyup", function ViewBillComponent_Template_input_keyup_9_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](14, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](15, ViewBillComponent_th_15_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](16, ViewBillComponent_td_16_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](17, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](18, ViewBillComponent_th_18_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](19, ViewBillComponent_td_19_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](20, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](21, ViewBillComponent_th_21_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](22, ViewBillComponent_td_22_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](23, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](24, ViewBillComponent_th_24_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](25, ViewBillComponent_td_25_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](26, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](27, ViewBillComponent_th_27_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](28, ViewBillComponent_td_28_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](29, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](30, ViewBillComponent_th_30_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](31, ViewBillComponent_td_31_Template, 10, 0, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](32, ViewBillComponent_tr_32_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](33, ViewBillComponent_tr_33_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("matHeaderRowDef", ctx.displayColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("matRowDefColumns", ctx.displayColumns);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3LWJpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFFSSxhQUFBO0FBQUoiLCJmaWxlIjoidmlldy1iaWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LWNhcmRcclxue1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "wYia":
/*!********************************************************!*\
  !*** ./src/app/material-component/material.routing.ts ***!
  \********************************************************/
/*! exports provided: MaterialRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRoutes", function() { return MaterialRoutes; });
/* harmony import */ var _services_route_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/route-guard.service */ "mReP");
/* harmony import */ var _manage_category_manage_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-category/manage-category.component */ "1KUO");
/* harmony import */ var _manage_order_manage_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-order/manage-order.component */ "/sgR");
/* harmony import */ var _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-product/manage-product.component */ "kseh");
/* harmony import */ var _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-user/manage-user.component */ "Q4hc");
/* harmony import */ var _view_bill_view_bill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-bill/view-bill.component */ "tEOd");






const MaterialRoutes = [
    {
        path: 'category',
        component: _manage_category_manage_category_component__WEBPACK_IMPORTED_MODULE_1__["ManageCategoryComponent"],
        canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_0__["RouteGuardService"]],
        data: {
            expectedRole: ['admin']
        }
    },
    {
        path: 'product',
        component: _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_3__["ManageProductComponent"],
        canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_0__["RouteGuardService"]],
        data: {
            expectedRole: ['admin']
        }
    },
    {
        path: 'order',
        component: _manage_order_manage_order_component__WEBPACK_IMPORTED_MODULE_2__["ManageOrderComponent"],
        canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_0__["RouteGuardService"]],
        data: {
            expectedRole: ['admin', 'user']
        }
    },
    {
        path: 'bill',
        component: _view_bill_view_bill_component__WEBPACK_IMPORTED_MODULE_5__["ViewBillComponent"],
        canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_0__["RouteGuardService"]],
        data: {
            expectedRole: ['admin', 'user']
        }
    },
    {
        path: 'user',
        component: _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_4__["ManageUserComponent"],
        canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_0__["RouteGuardService"]],
        data: {
            expectedRole: ['admin']
        }
    },
];


/***/ })

}]);
//# sourceMappingURL=material-component-material-module.js.map