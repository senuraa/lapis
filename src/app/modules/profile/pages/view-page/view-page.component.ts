import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../profile.service";
import {User} from "../../../../shared/models/User";

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {
  userData: User | undefined;
  userName: string | undefined;
  dob: string | undefined;
  email: string | undefined;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.profileService.getProfileInfo().subscribe(res => {
      this.userData = res
      this.userName = res.name
      this.dob = res.dob
      this.email = res.email
    })
  }

}
