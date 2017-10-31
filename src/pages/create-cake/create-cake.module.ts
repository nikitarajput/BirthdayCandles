import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCake } from './create-cake';

@NgModule({
  declarations: [
    CreateCake,
  ],
  imports: [
    IonicPageModule.forChild(CreateCake),
  ],
})
export class CreateCakePageModule {}
