import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CakeStepsPage } from './cake-steps';

@NgModule({
  declarations: [
    CakeStepsPage,
  ],
  imports: [
    IonicPageModule.forChild(CakeStepsPage),
  ],
})
export class CakeStepsPageModule {}
