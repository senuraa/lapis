import { Component, OnInit } from '@angular/core';
import {User} from "../../../../shared/models/User";
import {ProfileService} from "../../profile.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  user: User = {
    name: '',
    location: {
      lat: 0,
      lng: 0
    },
    dob: {
      year: 1970,
      month: 1,
      day: 1
    },
    email: ''
  };
  constructor() { }

  ngOnInit(): void {}
  onSubmit(formData:User,service:ProfileService){
    service.setProfileInfo(formData)
  }
}
