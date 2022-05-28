import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './profile/edit/edit.component';
import { CreateComponent } from './profile/create/create.component';
import { ViewComponent } from './profile/view/view.component';
import { HeaderComponent } from './shared/header/header.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    CreateComponent,
    ViewComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
