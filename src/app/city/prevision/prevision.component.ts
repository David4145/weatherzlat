import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PrevisionService } from 'src/app/shared/service/prevision.service';
import { Prevision } from 'src/app/shared/model/prevision_model';




@Component({
  selector: 'app-prevision',
  templateUrl: './prevision.component.html',
  styleUrls: ['./prevision.component.scss'],
})
export class PrevisionComponent implements OnInit, AfterViewInit {

  
private prevision : Prevision;

constructor(
  private previsionService : PrevisionService,
  ) { 
    
    
  }
  
  ngOnInit() {
    
  }
  
  ngAfterViewInit(){}
  
  public hydrateForecast(){
    this.previsionService.displayForecast(name)
    .then((prevision)=>{
      console.log("j'appel mon forecast dans le component");
      console.log(prevision);
      console.log(name);
    })
    .catch((reject)=>{
      console.log('erreur');
    }) 
    
    
  }
}