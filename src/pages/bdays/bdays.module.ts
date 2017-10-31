import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bdays } from './bdays';

@NgModule({
  declarations: [
    Bdays,
  ],
  imports: [
    IonicPageModule.forChild(Bdays),
  ],
})
export class BdaysPageModule {}
