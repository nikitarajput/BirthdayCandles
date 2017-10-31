import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPhotos } from './my-photos';

@NgModule({
  declarations: [
    MyPhotos,
  ],
  imports: [
    IonicPageModule.forChild(MyPhotos),
  ],
})
export class MyPhotosPageModule {}
