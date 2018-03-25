import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AlloDakarPage } from '../pages/allo-dakar/allo-dakar';
import { CartPage } from '../pages/cart/cart';
import { CloudPage } from '../pages/cloud/cloud';
import { SeetVoyagePage } from '../pages/seet-voyage/seet-voyage';
import { TrajetPage } from '../pages/trajet/trajet';
import { ConnexionPage } from '../pages/connexion/connexion';
import { ProposerDamayTukkiPage } from '../pages/proposer-damay-tukki/proposer-damay-tukki';
import { HttpModule } from '@angular/http';
import {AlloDakarService} from '../services/AlloDakarApi.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AlloDakarPage,
    CartPage,
    CloudPage,
    SeetVoyagePage,
    ProposerDamayTukkiPage,
    TrajetPage,
    ConnexionPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    ConnexionPage
  ],
  providers: [
    AlloDakarService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}