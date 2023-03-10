import { Component, AfterViewInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DashboardService } from '../services/dashboard.service';
import { GlobalConstant } from '../shared/global-constant';
import { SnackbarService } from '../snackbar.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
	responseMessage:any;
	data:any;
	ngAfterViewInit() { }

	constructor(private dashboardService:DashboardService,
		private snckbarService:SnackbarService,
		private ngxService:NgxUiLoaderService) {
			this.ngxService.start();
			this.dashboardData();
	}

	dashboardData()
	{
		this.dashboardService.getDetails().subscribe((response:any)=>{
			this.ngxService.stop();
			this.data = response;

		},
		(error:any)=>{
			this.ngxService.stop();
			console.log(error)
			if(error.error?.message)
			{
				this.responseMessage = error.error?.message;
			}
			else
			{
				this.responseMessage = GlobalConstant.genericError
			}
			this.snckbarService.openSnackBar(this.responseMessage,GlobalConstant.error)
		})
	}
}
