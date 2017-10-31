import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCandlePage } from './add-candle';

@NgModule({
  declarations: [
    AddCandlePage,
  ],
  imports: [
    IonicPageModule.forChild(AddCandlePage),
  ],
})
export class AddCandlePageModule {}
