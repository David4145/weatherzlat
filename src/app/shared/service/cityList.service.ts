import { Injectable } from '@angular/core';
import { City } from '../model/city_model';

@Injectable({
    providedIn: 'root'
})

export class CityListService {

    private cities: City[] = [];

    constructor() {

    }

    //     var names = [];
    // names[0] = prompt("New member name?");
    // localStorage.setItem("names", JSON.stringify(names));

    // //...
    // var storedNames = JSON.parse(localStorage.getItem("names"));

    // public saveArray(name): City[] {
    //     const cityList = this.cities.push(name);
    //     localStorage.setItem("cityList", JSON.stringify(this.cities));
    //     return
    // }

}