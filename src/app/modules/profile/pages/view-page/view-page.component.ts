import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../profile.service";
import {User} from "../../../../shared/models/User";
import {Router} from "@angular/router";

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
  location: google.maps.LatLngLiteral | undefined;
  isProfileAvail: boolean = false;
  constructor(private profileService: ProfileService, private router:Router) {
  }

  ngOnInit(): void {
    this.profileService.getProfileInfo().subscribe(res => {
      if(res)this.isProfileAvail = true
      this.userData = res
      this.userName = res.name
      this.dob = `${res.dob.year}-${res.dob.month}-${res.dob.day}`
      this.email = res.email
      this.location = res.location
    })
  }
  onCreate():void{
    this.router.navigate(['/create'],{})
  }

  onEditClick(): void{
    this.router.navigate(['/edit'])
  }

}
