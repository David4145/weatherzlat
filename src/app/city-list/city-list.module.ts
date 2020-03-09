import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListComponent } from './city-list.component';
import { SharedModule } from '../shared/shared.module';
import { CityListRoutingModule } from './city-list-routing.module';



@NgModule({
  declarations: [
    CityListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CityListRoutingModule
  ]
})
export class CityListModule { }
