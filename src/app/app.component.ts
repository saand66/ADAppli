import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CloudPage } from '../pages/cloud/cloud';
import { ConnexionPage } from '../pages/connexion/connexion';
import { AlloDakarPage } from '../pages/allo-dakar/allo-dakar';
import { InscriptionPage } from '../pages/inscription/inscription';
import { ProposerDamayTukkiPage } from '../pages/proposer-damay-tukki/proposer-damay-tukki';
import { UsersInfosService } from '../services/UsersInfosService';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp{
  @ViewChild(Nav) navCtrl: Nav;
  theme:String = 'facebook-messenger-theme';
    rootPage:any = AlloDakarPage;
  userprenom : string;
  usernom : string;
  islogin : string;
  usersInfosService: UsersInfosService;
  task : number;
  numberofresh: number = 1;

  
  constructor(platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen,
      usersInfosService: UsersInfosService,
      private nativeStorage: NativeStorage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    usersInfosService.setNumberofrefresh(this.numberofresh );
    this.numberofresh = usersInfosService.getNumberofrefresh();
    console.log(" numberofresh : ", this.numberofresh )
    /* this.userprenom = usersInfosService.getUserPrenom();
     this.usernom =  usersInfosService.getUserNom();
     this.islogin =  usersInfosService.getUserIsLogin();*/
    this.goUserInfos();
     //this.task  = setInterval(this.goUserInfos.bind(this), 1000)
    /*if (!this.usernom){
      clearInterval(this.task);
      console.log(this.task)
    }*/
    
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
     
    //this.usersInfosService.setUserIsLogin(false);
    this.islogin = "false";
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

  goUserInfos() {
    // Put here the code you want to execute
    console.log("mangui fi ")
    this.userprenom = localStorage.getItem("UserPrenom");
    this.usernom = localStorage.getItem("UserNom");
    this.islogin = localStorage.getItem("islogin")
    /*this.userprenom = this.nativeStorage.getItem("UserPrenom");
    this.usernom =  this.nativeStorage.getItem("UserNom");
    this.islogin =  this.nativeStorage.getItem("islogin")*/
    console.log(" this.userprenom " , this.userprenom);

    console.log("  this.islogin " ,  this.islogin );
  
  }

  ionViewDidLoad() {
    // Put here the code you want to execute
  }
  
  
}
