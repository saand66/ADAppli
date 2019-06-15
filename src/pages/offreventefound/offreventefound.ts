import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AlloDakarService } from '../../services/AlloDakarApi.service';
import { OffreventeDetailsPage } from '../offrevente-details/offrevente-details';

/**
 * Generated class for the OffreventefoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offreventefound',
  templateUrl: 'offreventefound.html',
})
export class OffreventefoundPage {
  offreVentesfound : any;
  pathoffrevente :string = "http://damaydem.com/images/damaydem/offreventes/"

  constructor(public navCtrl: NavController, public navParams: NavParams, private alloDakarService: AlloDakarService, public alertCtrl: AlertController) {
    this.offreVentesfound = this.navParams.get('myoffrefound');
    console.log('offreVentesfound a afficher' ,  this.offreVentesfound  );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffreventefoundPage');
  }

  goToOffreVenteDetails(offre){

   console.log('myoffrefound ' , offre );
    this.navCtrl.push(OffreventeDetailsPage, {loffre : offre});
  }
  


}
