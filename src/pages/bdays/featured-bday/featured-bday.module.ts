import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeaturedBday } from './featured-bday';

@NgModule({
  declarations: [
    FeaturedBday,
  ],
  imports: [
    IonicPageModule.forChild(FeaturedBday),
  ],
})
export class FeaturedBdayModule {}
