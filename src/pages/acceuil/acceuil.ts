import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlloDakarPage } from '../allo-dakar/allo-dakar';
import { AcceuilLocationPage } from '../acceuil-location/acceuil-location';

/**
 * Generated class for the AcceuilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acceuil',
  templateUrl: 'acceuil.html',
})
export class AcceuilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
  goToCovoit() {
    this.navCtrl.setRoot(AlloDakarPage);
  }

  goToJaayauto() {
    this.navCtrl.setRoot(AcceuilLocationPage);
  }

  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceuilPage');
  }


}
