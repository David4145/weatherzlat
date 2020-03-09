import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CityListComponent } from './city-list.component';


const routes: Routes = [
    {
        path: "city-list", component: CityListComponent
    },
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ]
})
export class CityListRoutingModule { }