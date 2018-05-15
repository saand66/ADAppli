import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcceuilPage } from '../acceuil/acceuil';
import { RechercheutilPage } from '../rechercheutil/rechercheutil';
import { RecherchemotoPage } from '../recherchemoto/recherchemoto';
import { RechercheautoPage } from '../rechercheauto/rechercheauto';
import { RecherchecamionPage } from '../recherchecamion/recherchecamion';
import { SuperTabsController } from  'ionic2-super-tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';
import {SuperTabs} from  'ionic2-super-tabs';
/**
 * Generated class for the SeetOffeVentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'seet-offe-vente/:type'
})
@Component({
  selector: 'page-seet-offe-vente',
  templateUrl: 'seet-offe-vente.html',
})
export class SeetOffeVentePage {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  //rechercheauto: any = 'RechercheautoPage';
  rechercheauto: any =  RechercheautoPage ;
  recherchemoto: any = RecherchemotoPage;
  recherchecamion: any = RecherchecamionPage;
  rechercheutil: any =  RechercheutilPage;


  constructor(public navCtrl: NavController, public navParams: NavParams, private superTabsCtrl: SuperTabsController) {
  }

 

  /*slideToIndex(index: number) {
    console.log("index" + index)
    this.superTabsCtrl.slideTo(index);
  }*/
  
 
  ngAfterViewInit() {
  
    // must wait for AfterViewInit if you want to modify the tabs instantly
   // this.superTabsCtrl.setBadge('homeTab', 5);
  
  }
  
  hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }
  
  /*showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }*/
  
  onTabSelect(tab: { index: number; id: string; }) {
    console.log(`Selected tab: `, tab);
  }


}
