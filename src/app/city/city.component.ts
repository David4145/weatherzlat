import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CityService } from '../shared/service/city.service';
import { City } from '../shared/model/city_model';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit, AfterViewInit {
  private city: City;
 
  constructor(
    private cityService: CityService,
  ) {
    this.city = cityService.getCity();
    
    
  }

  ngOnInit() {

  }

  ngAfterViewInit() { 
    if(!this.city.cityName){
      this.cityService.hydrateGeoloc()
      .then((dataWeather) => {})
    }
  }
}


