import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcceuilPage } from '../acceuil/acceuil';

/**
 * Generated class for the SeetOffeVentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seet-offe-vente',
  templateUrl: 'seet-offe-vente.html',
})
export class SeetOffeVentePage {

  tab1Root = AcceuilPage;
  tab2Root = AcceuilPage;
  tab3Root = AcceuilPage;
  tab4Root = AcceuilPage;
  tab5Root = AcceuilPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeetOffeVentePage');
  }

}
