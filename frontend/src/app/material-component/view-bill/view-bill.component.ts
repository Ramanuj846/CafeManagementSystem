import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BillService } from 'src/app/services/bill.service';
import { GlobalConstant } from 'src/app/shared/global-constant';
import { SnackbarService } from 'src/app/snackbar.service';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';
import { ViewBillProductsComponent } from '../dialog/view-bill-products/view-bill-products.component';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.scss']
})
export class ViewBillComponent implements OnInit {
  displayColumns:string[]=['name','email','contactNumber','paymentMethod','total','view'];
  dataSource:any;
  responseMessage:any;
  constructor(private billService:BillService,
    private ngxService:NgxUiLoaderService,
    private dialog:MatDialog,
    private router:Router,
    private snackbarService:SnackbarService) { }

  ngOnInit(): void {
    this.tableData();
  }

  tableData()
  {
    this.billService.getBills().subscribe((response:any)=>{
      this.ngxService.stop();
      this.dataSource = new MatTableDataSource(response)
    },(error:any)=>{
      this.ngxService.stop();
      if(error.error?.message)
      {
        
      }
      else
      {
        this.responseMessage = GlobalConstant.genericError; 
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstant.error);
    })
  }

  applyFilter(event:Event)
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  handleViewAction(values:any)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data ={
      data:values
    };
    dialogConfig.width ='100%';
    const dialogRef = this.dialog.open(ViewBillProductsComponent,dialogConfig);
    this.router.events.subscribe(()=>{
      dialogRef.close();
    })
  }

  handleDeleteAction(values:any)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data ={
      message:'delete' + ' '+ values.name+' bill'
    };
    const dialogRef = this.dialog.open(ConfirmationComponent,dialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((response:any)=>{
    this.ngxService.start();
    this.deleteProduct(values.id);
    dialogRef.close();
    })
  }

  deleteProduct(id:any)
  {
    this.billService.delete(id).subscribe((response:any)=>{
      this.ngxService.stop();
      this.tableData();
      this.responseMessage = response?.message;
      this.snackbarService.openSnackBar(this.responseMessage,'success');
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

  downloadReportAction(values:any)
  {
    this.ngxService.start();
    var data = {
      name:values.name,
      email:values.email,
      uuid:values.uuid,
      contactNumber:values.contactNumber,
      paymentMethod:values.paymentMethod,
      totalAmount:values.total,
      productDetails:values.productDetails
    }
    this.billService.getPDF(data).subscribe((response:any)=>{
      saveAs(response,values.uuid+'.pdf');
      this.ngxService.stop();
    })
  }
}