import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlloDakarService } from '../../services/AlloDakarApi.service';
import { Marque } from '../../models/marque';
import { OffreVente } from '../../models/OffreVente';
import { OffreventefoundPage } from '../offreventefound/offreventefound';
import { ModeleVoit } from '../../models/ModeleVoit';

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
  nbOffre : number;

  objectCritere = new  OffreVente();
  alloffretrouves: any;
  alloffrefound: any;
  prixMin: number;
  prixMax: number;
  
  ngOnInit(): void {
    this.getAllMarque(null);  
    this.getNbOffreByCritre(this.objectCritere);  
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
    this.objectCritere.modele = null;
    this.getNbOffreByCritre(this.objectCritere);
    this.alloDakarService.getModelsbyMarque(marque.id)
    .then(newsFetched => {
      this.allmodeles = newsFetched ;
    });
  }

  getoffrebycritre (objectCritere){
    console.log('marque' , objectCritere);
    this.alloDakarService.getOffreVentebycritere(objectCritere)
    .then(newsFetched => {
      this.alloffrefound = newsFetched ;
      console.log('alloffrefound' , this.alloffrefound);
      // Si la variable refresher est null alors on ne fait rien
       this.goToOffreVenteFound(this.alloffrefound) ;
    });
  }

  getNbOffreByCritre (objectCritere) {
   console.log('objectCritere', objectCritere);
    this.alloDakarService.getOffreVentebycritere(objectCritere)
    .then(newsFetched => {
     this.alloffrefound = newsFetched;
     console.log('alloffrefound nb' , this.alloffrefound);
     this.nbOffre =   this.alloffrefound.length;
    
    });
  }

  goToOffreVenteFound(offrefound){
  console.log('offre à afficher',offrefound );
    this.navCtrl.push(OffreventefoundPage, {myoffrefound : offrefound});
  }
  
}
