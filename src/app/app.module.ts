import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TravelDashboardComponent } from './shared/components/travel-dashboard/travel-dashboard.component';
import { TravelFormComponent } from './shared/components/travel-form/travel-form.component';
import { TravelListComponent } from './shared/components/travel-list/travel-list.component';
import { FormsModule } from '@angular/forms';
import { GetConfirmedComponent } from './shared/components/get-confirmed/get-confirmed.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TravelDashboardComponent,
    TravelFormComponent,
    TravelListComponent,
    GetConfirmedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
