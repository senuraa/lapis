import {Routes} from "@angular/router";
import {ViewComponent} from "./profile/view/view.component";
import {EditComponent} from "./profile/edit/edit.component";
import {CreateComponent} from "./profile/create/create.component";

export const AppRoutes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/view'
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
]
