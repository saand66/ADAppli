import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
   erreur : string;
  constructor(public navCtrl: NavController, private alloDakarService: AlloDakarService ,public alertCtrl: AlertController) {
      
   // this.Connexion();
  }

   // connexion 
   public Connexion() {
    console.log(this.login);
    this.alloDakarService.Connexion(this.login)
    .then(data => {
      console.log(data.error);

      if (data && data.token){
       localStorage.setItem("UserPrenom", data.UserPrenom);
       localStorage.setItem("UserNom", data.UserNom);
       localStorage.setItem("Token", data.token);
       localStorage.setItem("islogin","true");
        this.navCtrl.setRoot(AlloDakarPage);
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
  

  Inscription(params){
    if (!params) params = {};
    this.navCtrl.push(InscriptionPage);
  }

  }



