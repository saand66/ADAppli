import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import {AlloDakarService} from '../../services/AlloDakarApi.service';
import {Trajet} from '../../models/AlloDakar-Trajet';
import {TrajetDetailsPage} from '../../pages/trajet-details/trajet-details';

import { INTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser/src/browser';
/**
 * Generated class for the TrajetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trajet',
  templateUrl: 'trajet.html',
})
export class TrajetPage {

 // trajets : Trajet = new Trajet();
  trajets : any;
  pathcovoit : string = "http://damaydem.com/images/damaydem/covoit/dest/"
   constructor(public navCtrl: NavController, private alloDakarService: AlloDakarService, public navParams: NavParams) {
    
    this.getTrajet(null);
   
  }

  // Chargement des trajets
  public getTrajet(refresher) {
   
    this.alloDakarService.getTrajet()
   
    .then(newsFetched => {
       
      this.trajets = newsFetched ;
      // Si la variable refresher est null alors on ne fait rien
      (refresher) ? refresher.complete() : null;
      console.log(this.trajets);
      console.log('Données récupérées depuis le serveur !');
    });
  }

  GoToDetails(trajet){
    //this.navParams.data = trajet ;
   // this.navCtrl.push(trajet, {status: true})
    this.navCtrl.push(TrajetDetailsPage, {letrajet : trajet});

   // let modal = this.modalCtrl.create(TrajetDetailsPage);
  //  modal.present();
  }
  

}
