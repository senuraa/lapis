import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {ProfileModule} from "./modules/profile/profile.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ProfileService} from "./modules/profile/profile.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    ProfileModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
