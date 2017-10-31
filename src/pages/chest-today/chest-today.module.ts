import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChestToday } from './chest-today';

@NgModule({
  declarations: [
    ChestToday,
  ],
  imports: [
    IonicPageModule.forChild(ChestToday),
  ],
})
export class ChestTodayPageModule {}
