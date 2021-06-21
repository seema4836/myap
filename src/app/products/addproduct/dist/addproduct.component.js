"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddproductComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddproductComponent = /** @class */ (function () {
    function AddproductComponent(catservices, router, http, formBuilder) {
        this.catservices = catservices;
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.category = [];
        this.disabled = false;
    }
    AddproductComponent.prototype.showPreviewImage = function (event) {
        var _a;
        var file = event.target.files[0];
        this.userForm.patchValue({ image: file });
        (_a = this.userForm.get('image')) === null || _a === void 0 ? void 0 : _a.updateValueAndValidity();
        console.log(file);
        console.log(this.userForm);
        // if (event.target.files && event.target.files[0]) {
        //     var reader = new FileReader();
        //     reader.onload = (event: any) => {
        //         this.localUrl = event.target.result;
        //     }
        //     reader.readAsDataURL(event.target.files[0]);
        //     if (event.target.files.length > 0) {
        //       const file = (event.target as HTMLInputElement).files[0]
        //       this.images = file;
        //     }
        // }
    };
    AddproductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catservices.getcat().subscribe(function (res) {
            _this.category = res;
            _this.result = _this.category.userData;
            //alert(JSON.stringify(this.result))
        });
        this.userForm = this.formBuilder.group({
            pname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            price: ['', [forms_1.Validators.required]],
            catid: ['', [forms_1.Validators.required]],
            description: ['', [forms_1.Validators.required]],
            image: [null]
        });
    };
    Object.defineProperty(AddproductComponent.prototype, "getControl", {
        // onSubmit(f:NgForm){
        //  //console.log(f.value)
        //  const formData = new FormData();
        //  formData.append('pname',f.value.pname);
        //  formData.append('price',f.value.price);
        //  formData.append('catid',f.value.catid);
        //  formData.append('description',f.value.description);
        //  formData.append('image',this.images.name);
        //  // this.catservices.addproducts(this.formData).subscribe((res)=>{
        //   this.http.post('http://localhost:3000/api/product',formData).subscribe((res)=>{
        //    console.log(JSON.stringify(res))
        //    //this.router.navigate(['/viewproducts']);
        //   })
        get: function () {
            return this.userForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddproductComponent.prototype.onSubmit = function () {
        console.log(this.userForm.pname.controls);
        var postData = new FormData();
        // postData.append("pname",this.userForm.pname)
    };
    AddproductComponent = __decorate([
        core_1.Component({
            selector: 'app-addproduct',
            templateUrl: './addproduct.component.html',
            styleUrls: ['./addproduct.component.scss']
        })
    ], AddproductComponent);
    return AddproductComponent;
}());
exports.AddproductComponent = AddproductComponent;
