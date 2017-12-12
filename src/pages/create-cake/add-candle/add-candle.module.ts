import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCandle } from './add-candle';

@NgModule({
  declarations: [
    AddCandle,
  ],
  imports: [
    IonicPageModule.forChild(AddCandle),
  ],
})
export class AddCandlePageModule {}
