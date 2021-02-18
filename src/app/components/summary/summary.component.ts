import { Component, OnInit } from '@angular/core';
import { glasseModel } from 'src/app/models/glasses.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  glasse:glasseModel;

  constructor(private dataservich :DataService) { }

  ngOnInit(): void {
    this.get();
  }
  get():void{
    this.dataservich.get('glasse').subscribe(
      g=>{
        this.glasse=g;
      }
    );

  }

}
