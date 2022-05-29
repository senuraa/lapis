import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

export interface User{
  name: string;
  email: string;
  dob: NgbDateStruct
  location: string;
}
