import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the CreateCakePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-cake',
  templateUrl: 'create-cake.html',
})
export class CreateCake {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCakePage');
  }
  changeBackground(){
    $('#cake').css('background-color', "gainsboro");
  }

  // addBorder() {
  //   $('#cake').css('border', "solid 2px LIGHTSKYBLUE");
  // }

}
