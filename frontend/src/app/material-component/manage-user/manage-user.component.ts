import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserserviceService } from 'src/app/services/userservice.service';
import { GlobalConstant } from 'src/app/shared/global-constant';
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  displayedColumns:string[]=['name','email','contactNumber','status'];
  dataSource:any;
  responseMessage:any;
  constructor(
    private ngxService:NgxUiLoaderService,
    private snackbarService:SnackbarService,
    private userService:UserserviceService,

  ) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.tableData();
  }

  tableData()
  {
    this.userService.getUsers().subscribe((response:any)=>{
      this.ngxService.stop();
      this.dataSource = new MatTableDataSource(response);
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

  applyFiter(event:Event)
  {
      const fiterValue =(event.target as HTMLInputElement).value
      this.dataSource.filter = fiterValue.trim().toLocaleLowerCase();
  }

  handleChangeAction(status:any,id:any)
  {
    this.ngxService.start();
    var data ={
      status:status.toString(),
      id:id
    }
    this.userService.update(data).subscribe((response:any)=>{
      this.ngxService.stop();
      this.responseMessage = response?.message;
      this.snackbarService.openSnackBar(this.responseMessage,'Sucecess');
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

}
