import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {
  @Input() prevLocation: google.maps.LatLngLiteral | undefined;
  @Output() location = new EventEmitter<google.maps.LatLngLiteral>()
  apiLoaded: Observable<boolean>;
  map: google.maps.Map | undefined;
  infoWindow: google.maps.InfoWindow | undefined;
  markerPosition: google.maps.LatLngLiteral = {
    lat: 0, lng: 0
  }
  center: google.maps.LatLngLiteral = {
    lat: -25, lng: 134
  }
  markerOptions: google.maps.MarkerOptions = {draggable: true};

  constructor(private httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
    if (navigator.geolocation && !this.prevLocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          this.markerPosition = this.center
          this.location.emit(this.center)
        }, undefined, undefined
      )
    }else if(this.prevLocation){
      this.center = this.prevLocation
      this.markerPosition = this.prevLocation
      console.log('marker position ->', this.markerPosition)
      this.location.emit(this.prevLocation)
    }
  }

  onMarkerPositionChange(event: any): void {
    if(event){
      this.location.emit({
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      })
    }
  }

}
