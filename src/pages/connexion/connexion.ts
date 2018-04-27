

import { NativeStorage } from '@ionic-native/native-storage';

import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {IonicPage, NavController, AlertController, ToastController, MenuController,NavParams} from "ionic-angular";


import {AlloDakarService} from '../../services/AlloDakarApi.service';
import {Login} from '../../models/AlloDakar-Login';
import { TrajetPage } from '../trajet/trajet';
import { AlloDakarPage } from '../allo-dakar/allo-dakar';
import { InscriptionPage} from '../inscription/inscription';
import { UsersInfosService } from '../../services/UsersInfosService';
import { AcceuilPage } from '../acceuil/acceuil';
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
export class ConnexionPage implements OnInit {
  public onLoginForm: FormGroup;

    login : Login = new Login();
    erreur : string;
    messageerreur : string;

   
   
  constructor(public navCtrl: NavController,
      private alloDakarService: AlloDakarService,
      private usersInfosService: UsersInfosService ,    
      public alertCtrl: AlertController,
      private nativeStorage: NativeStorage,
      private _fb: FormBuilder,
      public menu: MenuController, 
      public toastCtrl: ToastController
      ) {
        this.menu.swipeEnable(false);
        this.menu.enable(false);
   // this.Connexion();
  }

ngOnInit() {
    this.onLoginForm = this._fb.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }
   // connexion 
   public Connexion() {
    console.log(this.login);
    this.alloDakarService.Connexion(this.login)
    .then(data => {
   
      if (data && data.token){
       localStorage.setItem("UserPrenom", data.UserPrenom);
       localStorage.setItem("UserNom", data.UserNom);
       localStorage.setItem("UserTel", data.UserTel);
       localStorage.setItem("Token", data.token);
       localStorage.setItem("islogin","true");
       this.usersInfosService.setUserToken(data.token);
        this.usersInfosService.setUserPreNom(data.UserPrenom);
        this.usersInfosService.setUserNom(data.UserNom);
        this.usersInfosService.setUserIsLogin(true);
       /* this.nativeStorage.setItem("UserPrenom", data.UserPrenom);
        this.nativeStorage.setItem("UserNom", data.UserNom);
        this.nativeStorage.setItem("Token", data.token);
        this.nativeStorage.setItem("islogin",true);*/

       // this.alloDakarService.userNom = data.UserNom;
      //  this.alloDakarService.userToken = data.token;
      //  this.alloDakarService.userIsLogin = "true";

        this.navCtrl.setRoot(AcceuilPage);

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



