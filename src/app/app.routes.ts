import {Routes} from "@angular/router";
import {ViewPageComponent} from "./modules/profile/pages/view-page/view-page.component";
import {EditPageComponent} from "./modules/profile/pages/edit-page/edit-page.component";
import {CreatePageComponent} from "./modules/profile/pages/create-page/create-page.component";

export const AppRoutes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/view'
  },
  {
    path: 'view',
    component: ViewPageComponent
  },
  {
    path: 'edit',
    component: EditPageComponent
  },
  {
    path: 'create',
    component: CreatePageComponent
  }
]
