import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { CategoryService } from "src/app/services/category.service";
import { GlobalConstant } from "src/app/shared/global-constant";
import { SnackbarService } from "src/app/snackbar.service";
import { CategoryComponent } from "../dialog/category/category.component";

@Component({
    selector: 'app-manage.category',
    templateUrl: './manage-category.component.html',
    styleUrls: ['./manage-category.component.scss']
})

export class ManageCategoryComponent implements OnInit {
displayedColumns:string[]=['name','edit'];
dataSource:any;
responseMessage:any;

constructor(private dialog:MatDialog,
    private router:Router,
    private ngxService:NgxUiLoaderService,
    private snackbarService:SnackbarService,
    private categoryService:CategoryService)
{
    
}

ngOnInit(): void {
    this.ngxService.start();
    this.tableData();
}

    tableData()
    {
        this.categoryService.getCategories().subscribe((response:any)=>{
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
            this.snackbarService.openSnackBar(this.responseMessage,GlobalConstant.error)
        })

    }

    applyFiter(event:Event)
    {
        const fiterValue =(event.target as HTMLInputElement).value
        this.dataSource.filter = fiterValue.trim().toLocaleLowerCase();
    }

    handleAddActions()
    {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data ={
            action:'Add'
        }
        dialogConfig.width ='550px';
        const dialogRef = this.dialog.open(CategoryComponent,dialogConfig)
        this.router.events.subscribe(()=>{
            dialogRef.close();
        });
        const sub = dialogRef.componentInstance.onAddCategory.subscribe(
            (response)=>{
                this.tableData();
            }
        )
    }

    handleEditActions(values:any)
    {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data ={
            action:'Edit',
            data:values
        }
        dialogConfig.width ='550px';
        const dialogRef = this.dialog.open(CategoryComponent,dialogConfig)
        this.router.events.subscribe(()=>{
            dialogRef.close();
        });
        const sub = dialogRef.componentInstance.onEditCategory.subscribe(
            (response)=>{
                this.tableData();
            }
        )
    }
}