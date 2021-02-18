import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  @Input() frame:string;
  @Input() isbl:number;

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }

  select():void{
    this.dataservice.glasse.frame=this.frame;
    console.log(this.dataservice.glasse);
  }

}
