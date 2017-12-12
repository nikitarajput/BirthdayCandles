import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeaturedBday } from './featured-bday/featured-bday';

/**
 * Generated class for the BdaysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bdays',
  templateUrl: 'bdays.html',
})
export class Bdays {

  bdays = [
      ['Frank Sinatra', "../../assets/imgs/bdays/FrankSinatra.png", "Singer • 1915"],
      ['Jennifer Connelly', "../../assets/imgs/bdays/JenniferConnelly.png", "Actress • 1970"],
      ['Burton Lesnick', "../../assets/imgs/bdays/BurtonLesnick.png", "Pulmonologist"],
      ['Bob Barker', "../../assets/imgs/bdays/BobBarker.png", "TV Host • 1923"],
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BdaysPage');
  }

  featuredBday(e) {
    this.navCtrl.push(FeaturedBday, {data: this.bdays});
  }

}
