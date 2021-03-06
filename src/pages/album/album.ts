import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyCakes } from './my-cakes/my-cakes';
import { MyPhotos } from './my-photos/my-photos';

/**
 * Generated class for the AlbumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-album',
  templateUrl: 'album.html',
})
export class Album {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumPage');
  }

  goToCakes(){
    this.navCtrl.push(MyCakes);
  }

  goToPhotos(){
    this.navCtrl.push(MyPhotos);
  }

}
