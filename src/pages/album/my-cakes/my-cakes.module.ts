import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCakes } from './my-cakes';

@NgModule({
  declarations: [
    MyCakes,
  ],
  imports: [
    IonicPageModule.forChild(MyCakes),
  ],
})
export class MyCakesPageModule {}
