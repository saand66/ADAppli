import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Trajet} from '../../models/AlloDakar-Trajet';
import { AlloDakarService } from '../../services/AlloDakarApi.service';
/**
 * Generated class for the TrajetDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trajet-details',
  templateUrl: 'trajet-details.html',
})
export class TrajetDetailsPage {
  
   
   trajetstodetails : Trajet = new Trajet();

  constructor(public navCtrl: NavController, public navParams: NavParams, private alloDakarService: AlloDakarService, public alertCtrl: AlertController) {

   console.log('le trajet : ' + this.navParams.get('letrajet'));
    this.trajetstodetails = this.navParams.get('letrajet');
  }


  ionViewDidLoad() {

    console.log('ionViewDidLoad TrajetDetailsPage');
  }

  goToReservation(trajet) {

    //console.log(" trajet det" , trajet)

    let alert = this.alertCtrl.create({
      title: 'Reservation',
      inputs:[
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
     
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Continuer',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    
    alert.present();

    }

  }


