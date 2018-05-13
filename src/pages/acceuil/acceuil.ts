import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AlloDakarPage } from '../allo-dakar/allo-dakar';
import { AcceuilLocationPage } from '../acceuil-location/acceuil-location';
import { AcceuilVentePage } from '../acceuil-vente/acceuil-vente';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController, ) {
    this.menu.enable(true);
  }

 
  goToCovoit() {
    this.navCtrl.setRoot(AlloDakarPage);
  }

  goToJaayauto() {
    this.navCtrl.setRoot(AcceuilVentePage);
  }

  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceuilPage');
  }


}
