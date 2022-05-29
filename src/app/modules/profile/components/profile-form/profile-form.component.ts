import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../shared/models/User";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ProfileService} from "../../profile.service";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  faCalendar = faCalendar
  @Input() userData: User = {
    name: '',
    email: '',
    dob: '',
    location: ''
  }
  @Input() submitForm: ((formData: any, service:ProfileService) => void) | undefined

  model: NgbDateStruct | undefined;
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    location: new FormControl('')
  })
  constructor(private router:Router, private profileService:ProfileService) { }

  ngOnInit(): void {
  }
  onSubmit():void {
    if (this.submitForm) {
      this.submitForm(this.profileForm.value, this.profileService)
    }
  }
}
