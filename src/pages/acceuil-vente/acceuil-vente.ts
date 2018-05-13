import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlloDakarService } from '../../services/AlloDakarApi.service';
import { SeetOffeVentePage } from '../seet-offe-vente/seet-offe-vente';

/**
 * Generated class for the AcceuilVentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acceuil-vente',
  templateUrl: 'acceuil-vente.html',
})
export class AcceuilVentePage {
  ngOnInit(): void {
    this.getOffreVente(null);    
    }
    offreVentes : any;
    pathoffrevente :string =  "http://damaydem.com/images/damaydem/offreventes/"

  constructor(public navCtrl: NavController, public navParams: NavParams,private alloDakarService: AlloDakarService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceuilVentePage');
  }

    // Chargement des offreventes
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
  
    goToSeetOffreVentes(params){
      if (!params) params = {};
      this.navCtrl.push(SeetOffeVentePage);
    }

}
