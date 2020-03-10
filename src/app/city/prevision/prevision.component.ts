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
    this.prevision = this.previsionService.getPrevision()
    console.log(this.prevision);    
  }
  
  ngOnInit() {
  }
  
  ngAfterViewInit(){
  }
}