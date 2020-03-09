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
    
  }

  ngOnInit() {
   
  }

  ngAfterViewInit() {
    this.cityService.hydrateGeoloc()
      .then((dataWeather) => {
        this.city = dataWeather
      });
  }
public hydrateWeather(){
  this.cityService.displayWeather(name)
  .then((dataWeather) => {
    console.log('dans le hydrateWeather');
    
    this.city = dataWeather
  })
  .catch(() => { console.log('erreur de display dans le component');
  })
}
}


