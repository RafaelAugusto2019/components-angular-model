import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {ProgressMenuModule } from '././components/progress-menu/progress-menu.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProgressMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
