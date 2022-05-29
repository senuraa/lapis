import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../shared/models/User";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
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

  model: NgbDateStruct | undefined;
  form!: FormGroup;

  constructor(private router:Router, private profileService:ProfileService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.userData?.name, [Validators.required, Validators.minLength(2)]],
      email: [this.userData?.email, [Validators.email, Validators.required]],
      dob: [this.userData?.dob, [Validators.required]],
      location: [this.userData?.location]
    })
  }
  onSubmit():void {
    if (this.submitForm && this.form) {
      this.submitForm(this.form.value, this.profileService)
    }
  }
  onViewClick():void{
    this.router.navigate(['/view'])
  }
}
