import { Component } from '@angular/core';
import {ProfileService} from "./modules/profile/profile.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lapis';

  constructor(private profileService:ProfileService) {}
  ngOnInit(){
    this.profileService.getProfileInfoFromStore()
  }
}
