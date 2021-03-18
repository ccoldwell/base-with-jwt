import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ComplaintListComponent } from './components/complaint/complaint-list/complaint-list.component';
// import { ComplaintDetailsComponent } from './components/complaint/complaint-details/complaint-details.component';
// import { ComplaintAddComponent } from './components/complaint/complaint-add/complaint-add.component';
// import { OrgAddComponent } from './components/org/org-add/org-add.component';
// import { OrgDetailComponent } from './components/org/org-detail/org-detail.component';
// import { OrgListComponent } from './components/org/org-list/org-list.component';

import { AppComponent } from './app.component';
// import { NavigationComponent } from './navigation/navigation.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from '@_components';
import { HomeComponent } from './home/home.component';

// import { MatSliderModule } from '@angular/material/slider';
// import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatCardModule } from '@angular/material/card';
// import { MatMenuModule } from '@angular/material/menu';
// // import { AddresFormComponent } from './addres-form/addres-form.component';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatRadioModule } from '@angular/material/radio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Toaster } from '@_components';

import { ErrorInterceptor, AuthInterceptor } from '@_helpers';


@NgModule({
	declarations: [
		AppComponent,
		// ComplaintListComponent,
		// ComplaintDetailsComponent,
		// ComplaintAddComponent,
		// OrgAddComponent,
		// OrgDetailComponent,
		// OrgListComponent,
		// NavigationComponent,
		// DashboardComponent,
		AlertComponent,
		Toaster,
		// AddresFormComponent,
		HomeComponent
	],
	imports: [
		// MatSliderModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		// LayoutModule,
		// MatToolbarModule,
		// MatButtonModule,
		// MatSidenavModule,
		// MatIconModule,
		// MatListModule,
		// MatGridListModule,
		// MatCardModule,
		// MatMenuModule,
		// MatInputModule,
		// MatSelectModule,
		// MatRadioModule,
		NgbModule,
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: ErrorInterceptor,
		multi: true
	},
	{
		provide: HTTP_INTERCEPTORS,
		useClass: AuthInterceptor,
		multi: true
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
