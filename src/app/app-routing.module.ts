import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramesComponent } from './components/frames/frames.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TypeComponent } from './components/type/type.component';

const routes: Routes = [
  {path:'', component:FramesComponent},
  {path: 'type' , component :TypeComponent},
  {path: 'numbers' , component:NumbersComponent},
  {path: 'summary' , component:SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
