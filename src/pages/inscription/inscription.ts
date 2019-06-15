import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlloDakarService } from '../../services/AlloDakarApi.service';
import { NewUser } from '../../models/AlloDakar-NewUser';
import { ConnexionPage } from '../../pages/connexion/connexion';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { CustomValidators } from '../../commons/customValidators';
import { AcceuilPage } from '../acceuil/acceuil';
import { Login } from '../../models/AlloDakar-Login';
import { OffreVente } from '../../models/OffreVente';
import { UsersInfosService } from '../../services/UsersInfosService';
import { SeetOffeVentePage } from '../seet-offe-vente/seet-offe-vente';

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

  newuser: NewUser = new NewUser();
  message: string;
  login: Login = new Login();

  onInscriptionForm: FormGroup;
  constructor(public navCtrl: NavController,
    public alloDakarService: AlloDakarService,
    private usersInfosService: UsersInfosService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.onInscriptionForm = this.formBuilder.group({
      nom: ['', Validators.compose([
        Validators.required
      ])],
      prenom: ['', Validators.compose([
        Validators.required
      ])],
      tel: ['', Validators.compose([
        Validators.required
      ])],
      motDePasse: ['', Validators.compose([
        Validators.required
      ])]
    });
  }


  // connexion 
  public inscription() {
    if (this.newuser && this.newuser.isValidUser()) {
      this.alloDakarService.inscription(this.newuser)
        .then(data => {
          if (data && data.error) {
            this.message = data.error.error;
          } else if (data) {
            this.message = "Votre compte a été crée avec succés";
            this.login.numtel = this.newuser.numtel;
            this.login.motdepass = this.newuser.motdepass;
            // 1 - Connecter l'utilisateur
            this.alloDakarService.connexion(this.login)
              .then(data => {
                if (data && data.token) {
                  // 2 - Redirigé vers la page des offres
                  this.usersInfosService.setUserToken(data.token);
                  this.usersInfosService.setUserPreNom(data.UserPrenom);
                  this.usersInfosService.setUserNom(data.UserNom);
                  this.usersInfosService.setUserIsLogin(true);
                  this.navCtrl.setRoot(SeetOffeVentePage);
                } else if (data && data.error) {
                  this.message = data.error.error;
                }
              }).catch(e => { console.log("test " + e); })
          };
        });
    } else {
      this.message = "Renseigner les champs obligatoires";
    }
  }
}
