import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import {AlloDakarService} from '../../services/AlloDakarApi.service';
import {Login} from '../../models/AlloDakar-Login';
import { TrajetPage } from '../trajet/trajet';
import { AlloDakarPage } from '../allo-dakar/allo-dakar';
import { InscriptionPage} from '../inscription/inscription';
import { UsersInfosService } from '../../services/UsersInfosService';
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
    messageerreur : string;

   
   
  constructor(public navCtrl: NavController,
      private alloDakarService: AlloDakarService,
      private usersInfosService: UsersInfosService ,    
      public alertCtrl: AlertController,
      private nativeStorage: NativeStorage) {
      
   // this.Connexion();
  }

   // connexion 
   public Connexion() {
    console.log(this.login);
    this.alloDakarService.Connexion(this.login)
    .then(data => {
   
      if (data && data.token){
       localStorage.setItem("UserPrenom", data.UserPrenom);
       localStorage.setItem("UserNom", data.UserNom);
       localStorage.setItem("Token", data.token);
       localStorage.setItem("islogin","true");
        this.usersInfosService.setUserToken(data.token);
        this.usersInfosService.setUserPreNom(data.UserPrenom);
        this.usersInfosService.setUserNom(data.UserNom);
        this.usersInfosService.setUserIsLogin(true);
        this.nativeStorage.setItem("UserPrenom", data.UserPrenom);
        this.nativeStorage.setItem("UserNom", data.UserNom);
        this.nativeStorage.setItem("Token", data.token);
        this.nativeStorage.setItem("islogin",true);

       // this.alloDakarService.userNom = data.UserNom;
      //  this.alloDakarService.userToken = data.token;
      //  this.alloDakarService.userIsLogin = "true";

        this.navCtrl.setRoot(AlloDakarPage);

      }else if ( data && data.error){
    
         this.messageerreur  = data.error.error;
        console.log( "mon erreur : " + this.erreur) ;
       
       /* let alert = this.alertCtrl.create({
        title: 'Probleme',
        subTitle: this.erreur,
        buttons: ['OK']
      });
      alert.present();*/

      }
       }).catch(e => { console.log("test " +  e);  })
  }
  
 


  Inscription(params){
    if (!params) params = {};
    this.navCtrl.push(InscriptionPage);
  }

  }



