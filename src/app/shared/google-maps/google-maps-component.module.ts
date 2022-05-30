import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleMapsModule} from "@angular/google-maps";
import {GoogleMapsComponent} from "./google-maps.component";



@NgModule({
  declarations: [
    GoogleMapsComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports: [
    GoogleMapsComponent
  ]
})
export class GoogleMapsComponentModule { }
