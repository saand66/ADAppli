import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CloudPage } from '../pages/cloud/cloud';
import { ConnexionPage } from '../pages/connexion/connexion';
import { AlloDakarPage } from '../pages/allo-dakar/allo-dakar';
import { InscriptionPage } from '../pages/inscription/inscription';
import { ProposerDamayTukkiPage } from '../pages/proposer-damay-tukki/proposer-damay-tukki';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  theme:String = 'facebook-messenger-theme';
    rootPage:any = AlloDakarPage;
  userprenom : string;
  usernom : string;
  islogin : string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.userprenom = localStorage.getItem("UserPrenom");
    this.usernom = localStorage.getItem("UserNom");
    this.islogin = localStorage.getItem("islogin");
    console.log(this.islogin);
  }
  goToCloud(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CloudPage);
  }
  goToConnexion(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ConnexionPage);
  }
  goToAlloDakar(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AlloDakarPage);
  }
  goToDeconnexion(){
    localStorage.clear();
    this.navCtrl.setRoot(AlloDakarPage);
  }
  
  goToInscription(params){
    if (!params) params = {};
    this.navCtrl.push(InscriptionPage);
  }

  goToDamayTukki(params){
    if (!params) params = {};
    this.navCtrl.push(ProposerDamayTukkiPage);
  }
  
}
