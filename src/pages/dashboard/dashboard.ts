import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Album } from '../album/album';
import { ChestToday } from '../chest-today/chest-today';
import { CreateCake } from '../create-cake/create-cake';
import { PhotoBooth } from '../photo-booth/photo-booth';
import { Bdays } from '../bdays/bdays';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  goToBdays() {
    this.navCtrl.push(Bdays);
  }

  goToCreateCake() {
    this.navCtrl.push(CreateCake);
  }

  goToChestToday() {
    this.navCtrl.push(ChestToday);
  }

  goToAlbum() {
    this.navCtrl.push(Album);
  }

  goToPhotoBooth() {
    this.navCtrl.push(PhotoBooth);
  }

}
