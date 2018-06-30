import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { OffreVente } from '../../models/OffreVente';
import { AlloDakarService } from '../../services/AlloDakarApi.service';

/**
 * Generated class for the OffreventeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offrevente-details',
  templateUrl: 'offrevente-details.html',
})
export class OffreventeDetailsPage {

  offredetails : OffreVente = new OffreVente();
  public nbplace : number = 1;
  pathoffrevente :string =  "http://damaydem.com/images/damaydem/offreventes/"

  constructor(public navCtrl: NavController, public navParams: NavParams, private alloDakarService: AlloDakarService, public alertCtrl: AlertController) {
    console.log('le offre : ' + this.navParams.get('loffre'));
    this.offredetails = this.navParams.get('loffre');
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad TrajetDetailsPage');
  }
  
  // minus adult when click minus button
  minusAdult() {
    this.nbplace--;
  }

  // plus adult when click plus button
  plusAdult() {
    this.nbplace++;
    console.log("Nbpalce", this.nbplace)
  }

  // minus children when click minus button
  minusChildren() {
    this.nbplace--;
  }

  // plus children when click plus button
  plusChildren() {
    this.nbplace++;
  }
  goToReservation(offre) {

    console.log(" trajet det" , offre)

    let alert = this.alertCtrl.create({
      title: 'Reservation',
      
      message: 'Le numero de Télephone est :',


      inputs:[
        {
          name: 'Votre Téléphone',
          placeholder: 'Votre numero Orange Money',
          type: 'number',
        },
      ],

  
     
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Continuer',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    
    alert.present();

    }

  

  // go to checkout page
  /*checkout(trip) {
    this.nav.push('page-checkout-trip', {
      'id': trip.id
    });
  }*/

}
