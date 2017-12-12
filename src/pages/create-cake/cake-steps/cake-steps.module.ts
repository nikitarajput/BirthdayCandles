import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CakeSteps } from './cake-steps';

@NgModule({
  declarations: [
    CakeSteps,
  ],
  imports: [
    IonicPageModule.forChild(CakeSteps),
  ],
})
export class CakeStepsPageModule {}
