import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Album } from './album';
import { MyCakes } from './my-cakes/my-cakes';
import { MyPhotos } from './my-photos/my-photos';

@NgModule({
  declarations: [
    Album,
    MyCakes,
    MyPhotos
  ],
  imports: [
    IonicPageModule.forChild(Album),
  ],
})
export class AlbumPageModule {}
