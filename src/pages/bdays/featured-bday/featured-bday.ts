import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CreateCake } from '../../create-cake/create-cake';

/**
 * Generated class for the FeaturedBdayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-featured-bday',
  templateUrl: 'featured-bday.html',
})
export class FeaturedBday {
    output;
    posts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
      this.output = this.navParams.get('data');

      this.posts = null;

      this.http.get('http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo').map(res => res.json()).subscribe(
          data => {
                this.posts = data.status;
          },
          err => {
                console.log("Oops!");
          }
);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeaturedBday');
  }

  goToCreateCake() {
    this.navCtrl.push(CreateCake);
  }
}
