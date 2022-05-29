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
  @Input() userData: User = {
    name: '',
    email: '',
    dob: {
      year: 1970,
      month: 1,
      day: 1
    },
    location: ''
  }
  @Input() submitForm: ((formData: any, service:ProfileService) => void) | undefined

  model: NgbDateStruct | undefined;
  form!: FormGroup;

  constructor(private router:Router, private profileService:ProfileService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.email, Validators.required]],
      dob: [null, [Validators.required]],
      location: []
    })
  }
  onSubmit():void {
    if (this.submitForm && this.form) {
      this.submitForm(this.form.value, this.profileService)
    }
  }
}
