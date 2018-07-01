import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { MyApp } from './app.component';
import { AlloDakarPage } from '../pages/allo-dakar/allo-dakar';
import { CartPage } from '../pages/cart/cart';
import { CloudPage } from '../pages/cloud/cloud';
import { SeetVoyagePage } from '../pages/seet-voyage/seet-voyage';
import { TrajetPage } from '../pages/trajet/trajet';
import { ConnexionPage } from '../pages/connexion/connexion';
import { InscriptionPage } from '../pages/inscription/inscription';
import { ProposerDamayTukkiPage } from '../pages/proposer-damay-tukki/proposer-damay-tukki';
import { HttpModule } from '@angular/http';
import { AlloDakarService } from '../services/AlloDakarApi.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { TrajetDetailsPage } from '../pages/trajet-details/trajet-details';
import { UsersInfosService } from '../services/UsersInfosService';
import { NativeStorage } from '@ionic-native/native-storage';
import { AcceuilPage } from '../pages/acceuil/acceuil';
import { UserprofilPage } from '../pages/userprofil/userprofil';
import { UsertrajetPage } from '../pages/usertrajet/usertrajet';
import { UsermessagePage } from '../pages/usermessage/usermessage';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { AcceuilLocationPage } from '../pages/acceuil-location/acceuil-location';
import { AcceuilVentePage } from '../pages/acceuil-vente/acceuil-vente';
import { SeetOffeVentePage } from '../pages/seet-offe-vente/seet-offe-vente';
import { RechercheutilPage } from '../pages/rechercheutil/rechercheutil';
import { RechercheautoPage } from '../pages/rechercheauto/rechercheauto';
import { RecherchemotoPage } from '../pages/recherchemoto/recherchemoto';
import { RecherchecamionPage } from '../pages/recherchecamion/recherchecamion';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { OffreventeDetailsPage } from '../pages/offrevente-details/offrevente-details';
import { OffreventefoundPage } from '../pages/offreventefound/offreventefound';
@NgModule({
  declarations: [
    MyApp,
    AlloDakarPage,
    CartPage,
    CloudPage,
    SeetVoyagePage,
    ProposerDamayTukkiPage,
    TrajetPage,
    ConnexionPage,
    InscriptionPage,
    TrajetDetailsPage,
    AcceuilPage,
    UserprofilPage,
    UsertrajetPage,
    UsermessagePage,
    EditProfilePage,
    AcceuilLocationPage,
    AcceuilVentePage,
    SeetOffeVentePage,
    RechercheautoPage,
    RecherchemotoPage,
    RechercheutilPage,
    RecherchecamionPage,
    OffreventeDetailsPage,
    OffreventefoundPage
    
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlloDakarPage,
    CartPage,
    CloudPage,
    SeetVoyagePage,
    ProposerDamayTukkiPage,
    TrajetPage,
    ConnexionPage,
    InscriptionPage,
    TrajetDetailsPage,
    AcceuilPage,
    UserprofilPage,
    UsertrajetPage,
    UsermessagePage,
    EditProfilePage,
    AcceuilLocationPage,
    AcceuilVentePage,
    SeetOffeVentePage,
    RechercheautoPage,
    RecherchemotoPage,
    RechercheutilPage,
    RecherchecamionPage,
    OffreventeDetailsPage,
    OffreventefoundPage
  ],
  providers: [
    AlloDakarService,
    StatusBar,
    SplashScreen,
    UsersInfosService,
    NativeStorage,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
    
}