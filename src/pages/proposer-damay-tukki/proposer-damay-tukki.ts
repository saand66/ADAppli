import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AlloDakarService} from '../../services/AlloDakarApi.service';
import { NewTrajet } from '../../models/AlloDakar-NewTrajet';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-proposer-damay-tukki',
  templateUrl: 'proposer-damay-tukki.html'
})
export class ProposerDamayTukkiPage {
  newTrajet : NewTrajet = new NewTrajet();
  erreur : string;
  constructor(public navCtrl: NavController,private alloDakarService: AlloDakarService,public alertCtrl: AlertController) {
  }
  

  public CreerTrajet() {
    console.log(this.newTrajet);
    this.alloDakarService.NewTrajet(this.newTrajet)
    .then(data => {
      console.log(data.error);

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
