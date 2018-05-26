import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlloDakarService} from '../../services/AlloDakarApi.service';
import { NewUser } from '../../models/AlloDakar-NewUser';
import { ConnexionPage } from '../../pages/connexion/connexion';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
export class InscriptionPage implements OnInit {



  newuser : NewUser = new NewUser();
  message : string;
  public onInscriptionForm: FormGroup;

  constructor(public navCtrl: NavController, public alloDakarService: AlloDakarService, private _fb: FormBuilder,) {
  }

  ngOnInit() {
    this.onInscriptionForm = this._fb.group({
      nom: ['', Validators.compose([
        Validators.required
      ])],
      tel: ['', Validators.compose([
        Validators.required
      ])],
      motdepass: ['', Validators.compose([
        Validators.required
      ])],
      prenom: ['', Validators.compose([
        Validators.required
      ])]
    });
  }
   // connexion 
   public inscription() {
    console.log(this.newuser);
    this.alloDakarService.inscription(this.newuser)
    .then(data => {
      console.log(data);
       if(data && data.error){
        this.message = data.error.error;
       }else if (data){
        this.message = "Votre compte a été crée avec succés";
      };
      
    });
  }
}
