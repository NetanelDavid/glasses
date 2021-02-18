import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FramesComponent } from './components/frames/frames.component';
import { TypeComponent } from './components/type/type.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { SummaryComponent } from './components/summary/summary.component';
import { FrameComponent } from './components/frame/frame.component';

@NgModule({
  declarations: [
    AppComponent,
    FramesComponent,
    TypeComponent,
    NumbersComponent,
    SummaryComponent,
    FrameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
