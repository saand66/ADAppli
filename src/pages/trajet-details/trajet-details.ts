import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Trajet} from '../../models/AlloDakar-Trajet';
/**
 * Generated class for the TrajetDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trajet-details',
  templateUrl: 'trajet-details.html',
})
export class TrajetDetailsPage {
  
   
   trajetstodetails : Trajet = new Trajet();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

   console.log('le trajet : ' + this.navParams.get('letrajet'));
    this.trajetstodetails = this.navParams.get('letrajet');
  }


  ionViewDidLoad() {

    console.log('ionViewDidLoad TrajetDetailsPage');
  }

}
