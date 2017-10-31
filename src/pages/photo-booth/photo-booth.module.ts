import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoBooth } from './photo-booth';

@NgModule({
  declarations: [
    PhotoBooth,
  ],
  imports: [
    IonicPageModule.forChild(PhotoBooth),
  ],
})
export class PhotoBoothPageModule {}
