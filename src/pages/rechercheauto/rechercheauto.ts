import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlloDakarService } from '../../services/AlloDakarApi.service';
import { Marque } from '../../models/marque';
import { OffreVente } from '../../models/OffreVente';

/**
 * Generated class for the RechercheautoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rechercheauto',
  templateUrl: 'rechercheauto.html',
})
export class RechercheautoPage {

  allmarques : any;
  allmodeles  : any;
  marque : any;
  model : any
  annee : any;
  kilometre : any
  boitvit : any;
  prix : any;
  carburant : any

  objectCritere = new  OffreVente();
  alloffretrouves: any;
  alloffrefound: any;

  ngOnInit(): void {
    this.getAllMarque(null);    
    }

  constructor(public navCtrl: NavController, public navParams: NavParams,private alloDakarService: AlloDakarService) {
    this.getAllMarque(null);
    //console.log('list des marques : ' + this.allmarques);
  }



  getAllMarque (refresher){
    this.alloDakarService.getAllMarque()
    .then(newsFetched => {
      this.allmarques = newsFetched ;
      // Si la variable refresher est null alors on ne fait rien
      (refresher) ? refresher.complete() : null;
    });
  }
 

  getModelsbyMarque (marque){
    this.alloDakarService.getModelsbyMarque(marque.id)
    .then(newsFetched => {
      this.allmodeles = newsFetched ;
      // Si la variable refresher est null alors on ne fait rien
      console.log('allmarques :', this.allmodeles);
      console.log('newsFetched :', newsFetched);
      console.log('Données récupérées depuis le serveur !');
    });
  }

  getoffrebycritre (objectCritere){
    console.log('marque' , objectCritere);
    this.alloDakarService.getOffreVentebycritere(objectCritere)
    .then(newsFetched => {
      this.alloffrefound = newsFetched ;
      console.log('alloffrefound' , this.alloffrefound);
      // Si la variable refresher est null alors on ne fait rien
    
    });
  }
  
}
