import { Injectable } from "@angular/core";
import { City } from '../model/city_model';
import { HttpClient } from '@angular/common/http';
import { PrevisionService } from './prevision.service';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  private dataWeather: City = new City;
  private city: City;
  private longitude: number;
  private latitude: number;

  constructor(
    private http: HttpClient,
    private previsionService: PrevisionService,
  ) {

  }

  public getCity(): City {
    return this.dataWeather;
  }

  public displayWeather(name): any {
    return new Promise((resolve, reject) => {
      console.log('je suis dans displayWeather');
      console.log(name);
      this.previsionService.displayForecast(name)
        .then(() => {
          this.get(name)
            .then((data) => {
              this.dataWeather['cityName'] = data['name'];
              this.dataWeather['tempActual'] = Math.round(data['main']['temp']) ;
              this.dataWeather['description'] = data['weather'][0]['description'];
              this.dataWeather['windSpeed'] = data['wind']['speed'];
              this.dataWeather['humidity'] = data['main']['humidity'];
              this.dataWeather['tempMax'] = Math.round(data['main']['temp_max']);
              this.dataWeather['tempMin'] = Math.round(data['main']['temp_min']);
              resolve(this.dataWeather);
            })
        });
    })
  }

  public get(name) {
    return this.http.get
      ("https://api.openweathermap.org/data/2.5/weather?q=" + name + "&units=metric&lang=fr&appid=0b238560ac9a9de8f6933200cd469dd0")
      .toPromise()
  }

  public hydrateGeoloc(): any {
    return new Promise((resolve, reject) => {
      this.getGeolocApi()
        .then((geolocVar) => {
          this.dataWeather.cityName = geolocVar.name;
          this.dataWeather.tempActual = Math.round(geolocVar.main.temp);
          this.dataWeather.description = geolocVar.weather[0].description;
          this.dataWeather.windSpeed = geolocVar.wind.speed;
          this.dataWeather.humidity = geolocVar.main.humidity;
          this.dataWeather.tempMax = Math.round(geolocVar.main.temp_max);
          this.dataWeather.tempMin = Math.round(geolocVar.main.temp_min);
          this.previsionService.displayForecast(this.dataWeather.cityName);
          resolve(this.dataWeather)
        })
        .catch((error) => console.log('error dans la geoloc'))
    })
  }

  public getGeolocApi(): any {
    return new Promise((resolve, reject) => {
      this.getGeoloc()
        .then((position) => {
          this.longitude = position.coords.longitude;
          this.latitude = position.coords.latitude;
          const geolocVar = this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?lat=' + this.latitude + '&lon=' + this.longitude + '&units=metric&lang=fr&appid=0b238560ac9a9de8f6933200cd469dd0')
            .toPromise();
          resolve(geolocVar)
        })
    });
  }

  public getGeoloc(): any {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position)
      })
    });
  }
};