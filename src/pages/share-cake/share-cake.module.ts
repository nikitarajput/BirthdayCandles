import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareCakePage } from './share-cake';

@NgModule({
  declarations: [
    ShareCakePage,
  ],
  imports: [
    IonicPageModule.forChild(ShareCakePage),
  ],
})
export class ShareCakePageModule {}
