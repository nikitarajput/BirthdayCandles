import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CakeSteps } from './cake-steps/cake-steps';
import { AddCandle } from './add-candle/add-candle';
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

    private clicked;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.clicked = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad sCreateCakePage');
  }

  addBorder() {
    this.clicked++;
    if(this.clicked % 2 != 0) {
      $(event.currentTarget).css("border", "solid 2px SkyBlue");
    } else{
      $(event.currentTarget).css("border", "0px");
    }
  }
}
