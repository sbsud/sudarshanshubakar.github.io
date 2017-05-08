import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AboutComponent }  from './about/about.component';
import { HomeComponent }  from './home/home.component';

import { routing } from './app.routes';


@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, AboutComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
