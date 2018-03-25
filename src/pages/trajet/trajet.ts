import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {AlloDakarService} from '../../services/AlloDakarApi.service';
import {Trajet} from '../../models/AlloDakar-Trajet';
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
  
   constructor(public navCtrl: NavController, private alloDakarService: AlloDakarService) {
    
    this.getTrajet(null);
   
  }

  // Chargement des articles
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

   
  

}
