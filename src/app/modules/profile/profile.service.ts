import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../shared/models/User";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileInfo = new BehaviorSubject<any>(null)
  constructor() { }

  getProfileInfo():Observable<User>{
    return this.profileInfo.asObservable();
  }

  setProfileInfo(userData:User):void{
    localStorage.setItem('profileInfo',JSON.stringify(userData))
    this.profileInfo.next(userData)
  }

  getProfileInfoFromStore():void{
    const infoString = localStorage.getItem('profileInfo')
    if(infoString){
      const info = JSON.parse(infoString) as User
      this.profileInfo.next(info)
    }
  }
}
