import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
      this.clicked = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad sCreateCakePage');
    this.showConfirm();
  }

  addBorder() {
    this.clicked++;
    if(this.clicked % 2 != 0) {
      $(event.currentTarget).css("border", "solid 2px SkyBlue");
    } else{
      $(event.currentTarget).css("border", "0px");
    }
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Quick Fact',
      message: 'According to the CDC, 1 in 12 people have asthma.',
      buttons: [
        {
          text: 'Got it!',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  toCakeSteps(){
    this.navCtrl.push(CakeSteps);
  }
}
