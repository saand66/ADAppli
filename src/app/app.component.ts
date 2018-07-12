import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CloudPage } from '../pages/cloud/cloud';
import { ConnexionPage } from '../pages/connexion/connexion';
import { AlloDakarPage } from '../pages/allo-dakar/allo-dakar';
import { InscriptionPage } from '../pages/inscription/inscription';
import { ProposerDamayTukkiPage } from '../pages/proposer-damay-tukki/proposer-damay-tukki';
import { UsersInfosService } from '../services/UsersInfosService';
import { NativeStorage } from '@ionic-native/native-storage';
import { AcceuilPage } from '../pages/acceuil/acceuil';
import { SeetVoyagePage } from '../pages/seet-voyage/seet-voyage';
import { UsertrajetPage } from '../pages/usertrajet/usertrajet';
import { UserprofilPage } from '../pages/userprofil/userprofil';
import { UsermessagePage } from '../pages/usermessage/usermessage';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { SeetOffeVentePage } from '../pages/seet-offe-vente/seet-offe-vente';
import { ProposerOffreVentePage } from '../pages/proposer-offre-vente/proposer-offre-vente';

@Component({
  selector: "page-app",
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
 
  @ViewChild(Nav) navCtrl: Nav;
    //page par defaut
    rootPage:any = SeetOffeVentePage;
   // rootPage:any = AcceuilPage;
    showMenu: boolean = true;

  userprenom : string;
  usernom : string;
  islogin : string;
  usertel : string;
/*   usersInfosService: UsersInfosService;
 */  task : number;
  numberofresh: number = 1;

  ngOnInit(): void {
   console.log("oninit APP")
  }

  constructor(
      public usersInfosService: UsersInfosService,
       public platform: Platform,
      public statusBar: StatusBar,
      public splashScreen: SplashScreen,
      public keyboard: Keyboard) {
    this.initializeApp();

     //platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     // statusBar.styleDefault();
      //splashScreen.hide();
    //});
    usersInfosService.setNumberofrefresh(this.numberofresh );
    this.numberofresh = usersInfosService.getNumberofrefresh();
    console.log(" numberofresh : ", this.numberofresh )

    this.goUserInfos();
     //this.task  = setInterval(this.goUserInfos.bind(this), 1000)
    /*if (!this.usernom){
      clearInterval(this.task);
      console.log(this.task)
    }*/
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }


  goToAcceuil(){
    this.navCtrl.setRoot(AcceuilPage);
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
    this.navCtrl.setRoot(SeetOffeVentePage);
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
    this.userprenom = localStorage.getItem("UserPrenom");
    this.usernom = localStorage.getItem("UserNom");
    this.islogin = localStorage.getItem("islogin");
    this.usertel = localStorage.getItem("UserTel");

    console.log(this.userprenom);
    console.log(this.islogin);
  }


  isConnected() {
    return this.usersInfosService.getUserIsLogin();
  }
  goToSeetVoyage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SeetVoyagePage);
  }

  goToUsertrajet(params){
    if (!params) params = {};
    this.navCtrl.setRoot(UsertrajetPage);
  }

  goToUserprofil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(UserprofilPage);
  }
  goToUsermessage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(UsermessagePage);
  }
  
  
  goToProposerOffre(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProposerOffreVentePage);
  }
  goToSeetOffreVente(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SeetOffeVentePage);
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }

  logout() {
    this.navCtrl.setRoot('page-login');
  }

  editProfile() {
    this.navCtrl.setRoot(EditProfilePage);
  }

 
  ionViewDidLoad() {
    // Put here the code you want to execute
  }
  
  
}
