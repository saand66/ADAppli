import { Component } from '@angular/core';
import { NavController, DateTime } from 'ionic-angular';
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
  myDate: string = new Date().toISOString();
  myTime: string = new Date().toISOString();
  constructor(public navCtrl: NavController,private alloDakarService: AlloDakarService,public alertCtrl: AlertController) {
  }
  

  public CreerTrajet() {
    console.log("myDate : " + this.myDate)
    console.log("myTime : " + this.myTime);
   
    this.newTrajet.dateDep = this.myDate.slice(0,10)
    this.newTrajet.heureDep = this.myTime.slice(11,16)

    console.log("myDate : " + this.newTrajet.dateDep)
    console.log("myTime : " + this.newTrajet.heureDep);
    this.alloDakarService.NewTrajet(this.newTrajet)
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
