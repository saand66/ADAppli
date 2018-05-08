import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlloDakarService } from '../../services/AlloDakarApi.service';

/**
 * Generated class for the AcceuilLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acceuil-location',
  templateUrl: 'acceuil-location.html',
})
export class AcceuilLocationPage implements OnInit{
  ngOnInit(): void {
  this.getOffreVente(null);    
  }
  offreVentes : any;
  pathoffrevente :string =  "http://damaydem.com/images/damaydem/offreventes/"
  constructor(public navCtrl: NavController, public navParams: NavParams, private alloDakarService: AlloDakarService,) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceuilLocationPage');
  }

   // Chargement des trajets
   public getOffreVente(refresher) {
   
    this.alloDakarService.getOffreVente()
    .then(newsFetched => {
       
      this.offreVentes = newsFetched ;
      // Si la variable refresher est null alors on ne fait rien
      (refresher) ? refresher.complete() : null;
      console.log(this.offreVentes);
      console.log('Données récupérées depuis le serveur !');
    });
  }

  GoToOffreVenteDetails(offre) {
    console.log('offre details');
  }

  

}
