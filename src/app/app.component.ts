import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CloudPage } from '../pages/cloud/cloud';
import { ConnexionPage } from '../pages/connexion/connexion';


import { AlloDakarPage } from '../pages/allo-dakar/allo-dakar';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = AlloDakarPage;
  username : string;
 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.username = localStorage.getItem("Username");
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

  
}
