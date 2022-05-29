import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../shared/models/User";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

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
  model: NgbDateStruct | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
