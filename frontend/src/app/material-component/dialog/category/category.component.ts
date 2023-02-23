import { Component, OnInit,Inject, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CategoryService } from 'src/app/services/category.service';
import { GlobalConstant } from 'src/app/shared/global-constant';
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
 onAddCategory = new EventEmitter();
 onEditCategory = new EventEmitter();
  categoryForm:any = FormGroup;
  dialogAction:any = 'Add';
  responseMessage:any;
  action: any='Add';


  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any,
    private categoryService:CategoryService,
    private ngxService:NgxUiLoaderService,
    private dialog:MatDialog,
    private formBuilder:FormBuilder,
    private snackbarService:SnackbarService,
    private router:Router,
    private dialogRef:MatDialogRef<CategoryComponent>
    ) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name:[null,[Validators.required]]
    });

    if(this.dialogData.action === 'Edit')
    {
      this.dialogAction = "Edit";
      this.action = "Update";
      this.categoryForm.patchValue(this.dialogData.data);
    }

    
   
  }

  handleSubmit()
    {
      if(this.dialogAction === 'Edit')
      {
        this.edit();
      }
      else
      {
        this.add();
      }
    }

    add()
    {
      var formData = this.categoryForm.value;
      var data = {
        name:formData.name,
      }
      this.categoryService.add(data).subscribe((response:any)=>{
        this.dialogRef.close();
        this.onAddCategory.emit();
        this.responseMessage = response.message;
        this.snackbarService.openSnackBar(this.responseMessage,"sucess")
      },(error)=>{
        this.dialogRef.close();
        if(error.error?.message)
        {
          this.responseMessage = error.error?.message;
        }
        else
        {
          this.responseMessage = GlobalConstant.genericError;;
        }
        this.snackbarService.openSnackBar(this.responseMessage,GlobalConstant.error)
      })
    }
    edit()
    {
      var formData = this.categoryForm.value;
      var data = {
        id:this.dialogData.data.id,
        name:formData.name,
      }
      this.categoryService.update(data).subscribe((response:any)=>{
        this.dialogRef.close();
        this.onEditCategory.emit();
        this.responseMessage = response.message;
        this.snackbarService.openSnackBar(this.responseMessage,"sucess")
      },(error)=>{
        this.dialogRef.close();
        if(error.error?.message)
        {
          this.responseMessage = error.error?.message;
        }
        else
        {
          this.responseMessage = GlobalConstant.genericError;;
        }
        this.snackbarService.openSnackBar(this.responseMessage,GlobalConstant.error)
      })

    }

 

}
