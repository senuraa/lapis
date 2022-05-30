import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../shared/models/User";
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProfileService} from "../../profile.service";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  faCalendar = faCalendar
  @Input() userData: User | undefined
  @Input() submitForm: ((formData: any, service:ProfileService) => void) | undefined
  form!: FormGroup;
  selectedLocation: google.maps.LatLngLiteral | undefined
  constructor(private router:Router, private profileService:ProfileService, private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    if(this.userData){
      this.selectedLocation = this.userData.location
    }
    this.form = this.formBuilder.group({
      name: [this.userData?.name, [Validators.required, Validators.minLength(2)]],
      email: [this.userData?.email, [Validators.email, Validators.required]],
      dob: [this.userData?.dob, [Validators.required]],
      location: [this.selectedLocation]
    })
    console.log('previous location ->',this.selectedLocation)
  }
  onSubmit():void {
    if (this.submitForm && this.form && this.selectedLocation) {
      const {name, email, dob} = this.form.value as User
      const submitData: User = {
        dob: dob,
        email: email,
        location: this.selectedLocation,
        name:name
      }
      this.submitForm(submitData, this.profileService)
    }
  }
  onViewClick():void{
    this.router.navigate(['/view'])
  }
  onLocationUpdate(location: google.maps.LatLngLiteral): void{
    this.selectedLocation = location
  }
}
