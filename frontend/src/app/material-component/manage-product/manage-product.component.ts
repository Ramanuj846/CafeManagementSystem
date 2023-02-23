import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from 'src/app/services/product.service';
import { GlobalConstant } from 'src/app/shared/global-constant';
import { SnackbarService } from 'src/app/snackbar.service';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';
import { ProductComponent } from '../dialog/product/product.component';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  displayedColumns:string[]=['name','categoryName','description','price','edit'];
  dataSource:any;
  responseMessage:any;
  constructor(private productService:ProductService,
    private ngxService:NgxUiLoaderService,
    private dialog:MatDialog,
    private snackbarService:SnackbarService,
    private router:Router) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.tableData();
  }

  tableData()
  {
    this.productService.getProducts().subscribe((response:any)=>{
      this.ngxService.stop();
      this.dataSource = new MatTableDataSource(response)
    },(error)=>{
      this.ngxService.stop();
      console.log(error)
      if(error.error?.message)
      {
        this.responseMessage = error.error?.message;
      }
      else
      {
        this.responseMessage = GlobalConstant.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstant.error)
    })
  }

  applyFiter(event:Event)
  {
      const fiterValue =(event.target as HTMLInputElement).value
      this.dataSource.filter = fiterValue.trim().toLocaleLowerCase();
  }

 

  handleAddAction()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data ={
      action:'Add'
    }
    dialogConfig.width ='550px';
    const dialogRef = this.dialog.open(ProductComponent,dialogConfig);
    this.router.events.subscribe(()=>{
      dialogRef.close();

    });
    const sub = dialogRef.componentInstance.onAddProduct.subscribe(
      (response)=>{
        this.tableData();
      }
    )
  }

  handleEditAction(values:any)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data ={
      action:'Edit',
      data:values
    }
    dialogConfig.width ='550px';
    const dialogRef = this.dialog.open(ProductComponent,dialogConfig);
    this.router.events.subscribe(()=>{
      dialogRef.close();

    })
    const sub = dialogRef.componentInstance.onEditProduct.subscribe(
      (response)=>{
        this.tableData();
      }
    )

  }

  handleDeleteAction(values:any)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data={
      message:' delete' + ' '+ values.name + ' product'  
    }

    const dialogRef = this.dialog.open(ConfirmationComponent,dialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((response)=>{
      this.ngxService.start();
      this.deleteProduct(values.id)
      dialogRef.close();
    })

  }

  deleteProduct(id:any)
  {
    this.productService.delete(id).subscribe((response:any)=>{
      this.ngxService.stop();
      this.tableData();
      this.responseMessage = response?.message;
      this.snackbarService.openSnackBar(this.responseMessage,'success');
    },(error:any)=>{
      this.ngxService.stop();
      console.log(error)
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

  onChange(status:any,id:any)
  {
    var data = {
      status:status.toString(),
      id:id
    }
    this.productService.updateStatus(data).subscribe((response:any)=>{
      this.ngxService.stop();
      this.responseMessage = response?.message;
      this.snackbarService.openSnackBar(this.responseMessage,'success')
    },(error)=>{
      this.ngxService.stop();
      console.log(error)
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

}
