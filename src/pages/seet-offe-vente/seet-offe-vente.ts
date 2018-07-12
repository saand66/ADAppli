import { Component, ViewChild, OnInit, Output, EventEmitter } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";
import { RechercheutilPage } from "../rechercheutil/rechercheutil";
import { RecherchemotoPage } from "../recherchemoto/recherchemoto";
import { RechercheautoPage } from "../rechercheauto/rechercheauto";
import { RecherchecamionPage } from "../recherchecamion/recherchecamion";
import { SuperTabsController } from "ionic2-super-tabs";
import { SuperTabs } from "ionic2-super-tabs";
import { AlloDakarService } from "../../services/AlloDakarApi.service";
/**
 * Generated class for the SeetOffeVentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: "seet-offe-vente/:type"
})
@Component({
  selector: "page-seet-offe-vente",
  templateUrl: "seet-offe-vente.html"
})
export class SeetOffeVentePage {
 
  @ViewChild(SuperTabs) superTabs: SuperTabs;
  @ViewChild(RechercheautoPage) rechercheautoPage: RechercheautoPage; 

  //rechercheauto: any = 'RechercheautoPage';
  rechercheauto: any = RechercheautoPage;
  recherchemoto: any = RecherchemotoPage;
  recherchecamion: any = RecherchecamionPage;
  rechercheutil: any = RechercheutilPage;

  alloffrefound: any;
  nbOffre: any;

  nbObjectCrite = 0;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    private superTabsCtrl: SuperTabsController,
    private alloDakarService: AlloDakarService
  ) {
    this.menu.swipeEnable(true);
    this.menu.enable(true);
    this.getNbOffreByCritre(null);
  }


  ngAfterViewInit() {}

  getObjet() {
    if(this.alloDakarService.getObjetCritere()) {
      return this.nbObjectCrite = Object.keys(this.alloDakarService.getObjetCritere()).length;
    }else{
      return 0;
    }
  }

  removeObjectCriter() {
      this.rechercheautoPage.getObjet(this.alloDakarService.getObjetCritere());
  }

  hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }

  onTabSelect(tab: { index: number; id: string }) {
    console.log(`Selected tab: `, tab);
  }

  getNbOffreByCritre(objectCritere) {
    this.alloDakarService
      .getOffreVentebycritere(objectCritere)
      .then(newsFetched => {
        this.alloffrefound = newsFetched;
        console.log("alloffrefound nb", this.alloffrefound);
        this.nbOffre = this.alloffrefound.length;
      });
  }
}
