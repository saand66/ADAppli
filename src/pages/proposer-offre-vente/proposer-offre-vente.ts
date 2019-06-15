import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { OffreVente } from '../../models/OffreVente';
import { AlloDakarService } from '../../services/AlloDakarApi.service';

/**
 * Generated class for the ProposerOffreVentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proposer-offre-vente',
  templateUrl: 'proposer-offre-vente.html',
})
export class ProposerOffreVentePage {
  
  objectOffre = new  OffreVente();
  allmarques : any;
  allmodeles  : any;
  erreur : string;

  ngOnInit(): void {
    this.getAllMarque(null);   
    }

  constructor(public navCtrl: NavController, public navParams: NavParams, private alloDakarService: AlloDakarService,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProposerOffreVentePage');
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
    });
  }

  createOffreVente (objectOffre){
    this.alloDakarService.createOffreVente(objectOffre)
    .then(data => {
      if (data){
       /*localStorage.setItem("UserPrenom", data.UserPrenom);
       localStorage.setItem("UserNom", data.UserNom);
       localStorage.setItem("Token", data.token);
       localStorage.setItem("islogin","true");
        this.navCtrl.setRoot(AlloDakarPage);*/
      }else  if (data && data.error){
       this.erreur = data.error;

       let alert = this.alertCtrl.create({
        title: 'Probleme',
        subTitle: this.erreur,
        buttons: ['OK']
      });
      alert.present();

      }
       
      
    }).catch(function(err){
     //return res.status(500).json({ 'error':'impossible de verifier user'});
  
    });
  }

}
