import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserserviceService } from '../services/userservice.service';
import { GlobalConstant } from '../shared/global-constant';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  responseMessage: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserserviceService,
    private ngxService: NgxUiLoaderService,
    private snackBarService: SnackbarService,
    public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      email:[null,[Validators.required,Validators.pattern]],
      password:[null,[Validators.required]]
    })
  }

  handleSubmit()
  {
    this.ngxService.start();
    var formData= this.loginForm.value;
    var data={
      email:formData.email,
      password:formData.password
    }
    this.userService.login(data).subscribe((response:any)=>
    {
      this.ngxService.stop();
      this.dialogRef.close();
      localStorage.setItem('token',response.token);
      this.router.navigate(['/cafe/dashboard'])
    },(error)=>{
      if(error.error?.message)
      {
        this.responseMessage = error?.message;
      }
      else
      {
        this.responseMessage= GlobalConstant.genericError
      }
    })
    this.snackBarService.openSnackBar(this.responseMessage,GlobalConstant.error);
  }

}
