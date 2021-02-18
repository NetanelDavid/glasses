import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  
  numbers:number[];
  nRight:number;
  nLeft:number;
  cRight:number;
  cLeft:number;
  constructor(private dataservich :DataService) { }

  ngOnInit(): void {  }

  send():void{
    this.dataservich.glasse.numbres=[...[this.nRight,this.nLeft,this.cRight,this.cLeft]];
    console.log(this.dataservich.glasse);
  }


}
