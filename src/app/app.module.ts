import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TravelDashboardComponent } from './shared/components/travel-dashboard/travel-dashboard.component';
import { TravelFormComponent } from './shared/components/travel-form/travel-form.component';
import { TravelListComponent } from './shared/components/travel-list/travel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelDashboardComponent,
    TravelFormComponent,
    TravelListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
