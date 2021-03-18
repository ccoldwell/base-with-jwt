import { Component, OnInit } from '@angular/core';

import { ToastService } from '@_services';

import { TokenStorageService } from '@_services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	isLoggedIn = false;
	username?: string;



	title = 'meank-client';
	private roles: string[] = [];


	constructor(public toastService: ToastService, private tokenStorageService: TokenStorageService) {}

	showStandard() {
		this.toastService.show('I am a standard toast');
	}

	showSuccess() {
		this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
	}

	showDanger(dangerTpl: any) {
		this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
	}

	ngOnInit(): void {
		this.isLoggedIn = !!this.tokenStorageService.getToken();

		if (this.isLoggedIn) {
			const user = this.tokenStorageService.getUser();
			this.roles = user.roles;
			this.username = user.firstName + ' '+ user.lastName;
		}
	}

	logout(): void {
		this.tokenStorageService.signOut();
		window.location.reload();
	}



}
