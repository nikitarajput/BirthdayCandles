import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCake } from './create-cake';
import { CakeSteps } from './cake-steps/cake-steps';
import { AddCandle } from './add-candle/add-candle';

@NgModule({
  declarations: [
    CreateCake,
    CakeSteps,
    AddCandle
  ],
  imports: [
    IonicPageModule.forChild(CreateCake),
  ],
})
export class CreateCakePageModule {}
