import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import {FormsModule} from "@angular/forms";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    ProfileFormComponent,
    CreatePageComponent,
    ViewPageComponent,
    EditPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule,
    FontAwesomeModule,
  ]
})
export class ProfileModule { }
