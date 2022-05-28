import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app.routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ]
})
export class AppRoutingModule { }
