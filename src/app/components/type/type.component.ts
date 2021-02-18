import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  types:string[];

  constructor(private dataservich:DataService) { }

  ngOnInit(): void {
    this.get();
  }

  get():void{
    this.dataservich.get('type').subscribe(
      t => {
        this.types=t;
      }
    )
  }

  select(t:string):void{
    this.dataservich.glasse.type=t;
    console.log(this.dataservich.glasse);
  }

}
