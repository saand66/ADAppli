import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlloDakarService} from '../../services/AlloDakarApi.service';
import { NewUser } from '../../models/AlloDakar-NewUser';
import { ConnexionPage } from '../../pages/connexion/connexion';

/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage {


  newuser : NewUser = new NewUser();

  constructor(public navCtrl: NavController, public alloDakarService: AlloDakarService) {
  }


   // connexion 
   public inscription() {
    console.log(this.newuser);
    this.alloDakarService.inscription(this.newuser)
    .then(data => {
      console.log(data);
      if(data.userID){
      this.navCtrl.setRoot(ConnexionPage);
      }
    });
  }
}
