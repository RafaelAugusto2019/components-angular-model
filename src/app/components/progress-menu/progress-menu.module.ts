import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressMenuComponent } from './progress-menu.component';


@NgModule({
  declarations: [
    ProgressMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProgressMenuComponent
  ]
})
export class ProgressMenuModule { }
