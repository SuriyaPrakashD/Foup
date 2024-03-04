// Import necessary Angular modules
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import your components, services, and other modules
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
//import {AppRoutes} from './app.routes';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   // AppRoutes,
    AppRoutingModule

 ],
  providers: [SharedService],
  bootstrap: [AppComponent ],
})



export class AppModule {}
