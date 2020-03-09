import { Component, OnInit } from '@angular/core';
import { City } from '../shared/model/city_model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CityService } from '../shared/service/city.service';
import { PrevisionService} from '../shared/service/prevision.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})
export class CityListComponent implements OnInit {
  private cityForm: FormGroup;
  private city: City[] = [];

  constructor(
    private cityService: CityService,
    private formBuilder: FormBuilder,
    private previsionService : PrevisionService
  ) {
    this.cityForm = this.formBuilder.group({
      cityName: [''],
    })
  }
  public weatherInput(inputValue) {
    const name = inputValue;
    console.log('je suis dans le weatherInput');
    console.log(name);
    this.cityService.displayWeather(name);
  }

  ngOnInit() { }

 

}
