import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city.component';
// import { PrevisionComponent } from './prevision/prevision.component';
import { CityRoutingModule } from './city-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CityComponent,
    // PrevisionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CityRoutingModule
  ]
})
export class CityModule { }
