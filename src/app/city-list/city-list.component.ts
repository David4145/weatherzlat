import { Component, OnInit } from '@angular/core';
import { City } from '../shared/model/city_model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CityService } from '../shared/service/city.service';
import { CityListService } from '../shared/service/cityList.service';



@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})
export class CityListComponent implements OnInit {
  private cityForm: FormGroup;
  private cities: City[]= [];

  constructor(
    private cityService: CityService,
    private cityListService : CityListService,
    private formBuilder: FormBuilder,
  ) {
    this.cityForm = this.formBuilder.group({
      cityName: [''],
    })
  }
  public weatherInput(inputValue) {
    const name = inputValue;
    this.cityService.displayWeather(name);
    this.cities.push(name);
    console.log(this.cities);
  }

  ngOnInit() { }
}
