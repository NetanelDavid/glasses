import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-frames',
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.css']
})
export class FramesComponent implements OnInit {
  frames:string[];
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.get();
  }

  get():void{
    this.dataservice.get('frames').subscribe(
      (f) =>{
        this.frames=f;
      }
    )
  }

}
