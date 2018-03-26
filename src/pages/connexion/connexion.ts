import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AlloDakarService} from '../../services/AlloDakarApi.service';
import {Login} from '../../models/AlloDakar-Login';
import { TrajetPage } from '../trajet/trajet';
import { AlloDakarPage } from '../allo-dakar/allo-dakar';
import { InscriptionPage} from '../inscription/inscription';
/**
 * Generated class for the ConnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {

  login : Login = new Login();

  constructor(public navCtrl: NavController, private alloDakarService: AlloDakarService) {
      
   // this.Connexion();
  }

   // connexion 
   public Connexion() {
    console.log(this.login);
    this.alloDakarService.Connexion(this.login)
    .then(data => {
      console.log(data);
      if (data.token){
       localStorage.setItem("UserPrenom", data.UserPrenom);
       localStorage.setItem("UserNom", data.UserNom);
       localStorage.setItem("Token", data.token);
        this.navCtrl.setRoot(AlloDakarPage);
      }
    });
  }
  

  Inscription(params){
    if (!params) params = {};
    this.navCtrl.push(InscriptionPage);
  }
  }



