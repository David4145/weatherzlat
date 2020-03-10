import { Injectable } from "@angular/core";
import { Prevision } from '../model/prevision_model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class PrevisionService {

    private hydrateForecast: Prevision = new Prevision;
    private prevision: Prevision;
    constructor(
        private http: HttpClient,
    ) { }

    public getPrevision(): Prevision {
        return this.hydrateForecast;
    }

    public apiForecast(name): Promise<any> {
        return this.http.get<any>('https://api.openweathermap.org/data/2.5/forecast/?q=' + name + '&units=metric&lang=fr&appid=0b238560ac9a9de8f6933200cd469dd0')
            .toPromise()
    }

    public displayForecast(name): any {
        return new Promise((resolve, reject) => {
            this.apiForecast(name)
                .then((forecast) => {
                    this.hydrateForecast.date = forecast.list[8].dt_txt;
                    this.hydrateForecast.description = forecast.list[8].weather[0].description;
                    this.hydrateForecast.temp = Math.round(forecast.list[8].main.temp);
                    this.hydrateForecast.dateTwo = forecast.list[16].dt_txt;
                    this.hydrateForecast.descriptionTwo = forecast.list[16].weather[0].description;
                    this.hydrateForecast.tempTwo = Math.round(forecast.list[16].main.temp);
                    this.hydrateForecast.dateThird = forecast.list[24].dt_txt;
                    this.hydrateForecast.descriptionThird = forecast.list[24].weather[0].description;
                    this.hydrateForecast.tempThird = Math.round(forecast.list[24].main.temp);
                    this.prevision = this.hydrateForecast;
                    resolve(this.prevision)
                })
                .catch((error) => console.log('error dans le displayforecast'))
        })
    }
}