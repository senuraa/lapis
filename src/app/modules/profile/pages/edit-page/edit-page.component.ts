import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../profile.service";
import {User} from "../../../../shared/models/User";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  formData: User = {
    dob: {
      year: 1970,
      month: 1,
      day: 1
    },
    email: "",
    location: "",
    name: ""

  };

  constructor(private profile:ProfileService) { }
  onSubmit(formData:User,service:ProfileService){
    service.setProfileInfo(formData)
  }
  ngOnInit(): void {
    this.profile.getProfileInfo().subscribe(res=> this.formData = res)
  }

}
