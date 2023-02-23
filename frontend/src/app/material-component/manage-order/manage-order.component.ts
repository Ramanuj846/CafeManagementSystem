import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { GlobalConstant } from 'src/app/shared/global-constant';
import { SnackbarService } from 'src/app/snackbar.service';
import { saveAs } from 'file-saver';
import { BillService } from 'src/app/services/bill.service';
@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.scss']
})
export class ManageOrderComponent implements OnInit {
  displayedColumns:string[]=['name','category','price','quantity','total','edit'];
  dataSource:any=[];
  manageOrderForm:any=FormGroup;
  categories:any=[];
  products:any =[];
  price:any;
  totalAmount:number = 0;
  responseMessage:any
  constructor(private categoryService:CategoryService,
    private formBuilder:FormBuilder,
    private snackbarService:SnackbarService,
    private ngxService:NgxUiLoaderService,
    private productService:ProductService,
    private billService:BillService ) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.getCategory();
    this.manageOrderForm = this.formBuilder.group({
      name:[null,[Validators.required,Validators.pattern(GlobalConstant.nameRegex)]],
      email:[null,[Validators.required,Validators.pattern(GlobalConstant.emailRegex)]],
      contactNumber:[null,[Validators.required,Validators.pattern(GlobalConstant.contactNumberRegex)]],
      paymentMethod:[null,[Validators.required]],
      product:[null,[Validators.required]],
      category:[null,[Validators.required]],
      quantity:[null,[Validators.required]],
      price:[null,[Validators.required]],
      total:[null,[Validators.required]]
    })
  }
  
  
  getCategory()
  {
    this.categoryService.getCategories().subscribe((response:any)=>{
      this.ngxService.stop();
      this.categories = response;
    },(error)=>{
      this.ngxService.stop();
      if(error.error?.message)
      {
        this.responseMessage = error.error?.message;
      }
      else
      {
        this.responseMessage = GlobalConstant.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstant.error);
    })
  }

  getProductByCategory(value:any)
  {
    this.productService.getProductsByCategory(value.id).subscribe((response:any)=>{
      this.products = response;
      this.manageOrderForm.controls['price'].setValue('');
      this.manageOrderForm.controls['quantity'].setValue('1');
      this.manageOrderForm.controls['total'].setValue(0);
    },(error:any)=>{
      this.ngxService.stop();
      if(error.error?.message)
      {
        this.responseMessage = error.error?.message;
      }
      else
      {
        this.responseMessage = GlobalConstant.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstant.error);
    })
  }

  getProductDetails(value:any)
  {
    this.productService.getById(value.id).subscribe((response:any)=>{
      this.price = response.price;
      this.manageOrderForm.controls['price'].setValue(response.price);
      this.manageOrderForm.controls['quantity'].setValue('1');
      this.manageOrderForm.controls['total'].setValue(this.price*1);

    },(error:any)=>{
      this.ngxService.stop();
      if(error.error?.message)
      {
        this.responseMessage = error.error?.message;
      }
      else
      {
        this.responseMessage = GlobalConstant.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstant.error);
   
    })
  }

  setQuantity(value:any)
  {
    var temp = this.manageOrderForm.controls['quantity'].value;
    if(temp > 0)
    {
      this.manageOrderForm.controls['total'].setValue(this.manageOrderForm.controls['quantity'].value * this.manageOrderForm.controls['price'].value)
    }
    else if(temp !='')
    {
      this.manageOrderForm.controls['quantity'].setValue('1');
      this.manageOrderForm.controls['total'].setValue(this.manageOrderForm.controls['quantity'].value * this.manageOrderForm.controls['price'].value)
    }
  }

  validateProductAdd()
  {
    if(this.manageOrderForm.controls['total'].value ===0 || this.manageOrderForm.controls['total'].value === null || this.manageOrderForm.controls['quantity'].value <= 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  validateSubmit()
  {
    if(this.totalAmount == 0  || this.manageOrderForm.controls['name'].value ==null || this.manageOrderForm.controls['email'].value ==null || this.manageOrderForm.controls['contactNumber'].value ==null || this.manageOrderForm.controls['paymentMethod'].value ==null ||!(this.manageOrderForm.controls['contactNumber'].valid) ||!(this.manageOrderForm.controls['email'].valid ))
    {
      return true;
    }
    else
    {
      return false
    }

  }

  add()
  {
    var formdata = this.manageOrderForm.value
    var productName = this.dataSource.find((e:{id:number;})=>e.id == formdata.product.id);
    if(productName === undefined)
    {
      this.totalAmount = this.totalAmount + formdata.total;
      this.dataSource.push({
        id:formdata.product.id,name:formdata.product.name,category:formdata.category.name,quantity:formdata.quantity,price:formdata.price, total:formdata.total});
      this.dataSource =[...this.dataSource];
      this.snackbarService.openSnackBar(GlobalConstant.productAdded,'success');
    }
    else{
      this.snackbarService.openSnackBar(GlobalConstant.productExistError,GlobalConstant.error)
    }
  }

  handleDeleteAction(value:any,element:any)
  {
    this.totalAmount = this.totalAmount - element.total;
    this.dataSource.splice(value,1);
    this.dataSource = [...this.dataSource];
  }

  submitAction()
  {
    this.ngxService.start();
    var formData = this.manageOrderForm.value;
    var data = {
      name:formData.name,
      email:formData.email,
      contactNumber:formData.contactNumber,
      paymentMethod:formData.paymentMethod,
      totalAmount:this.totalAmount,
      productDetails:JSON.stringify(this.dataSource)
    }
    this.billService.generateReport(data).subscribe((response:any)=>{
      this.downloadFile(response?.uuid);
      this.manageOrderForm.reset();
      this.dataSource =[];
      this.totalAmount = 0;

    },(error:any)=>{
      this.ngxService.stop();
      if(error.error?.message)
      {
        this.responseMessage = error.error?.message;
      }
      else
      {
        this.responseMessage = GlobalConstant.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstant.error);
   
    })
  }

  downloadFile(fileName:any)
  {
    var data = {
      uuid:fileName
    }
    this.billService.getPDF(data).subscribe((response:any)=>{
      saveAs(response,fileName +'.pdf');
      this.ngxService.stop();
    })
  }


}
