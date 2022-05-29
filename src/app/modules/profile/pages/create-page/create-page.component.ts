import { Component, OnInit } from '@angular/core';
import {User} from "../../../../shared/models/User";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  user: User = {
    name: '',
    location: '',
    dob: '',
    email: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
