import { Component, Input } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AlloDakarService } from "../../services/AlloDakarApi.service";
import { OffreVente } from "../../models/OffreVente";
import { OffreventefoundPage } from "../offreventefound/offreventefound";

/**
 * Generated class for the RechercheautoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-rechercheauto",
  templateUrl: "rechercheauto.html"
})
export class RechercheautoPage {
  allmarques: any;
  allmodeles: any;
  nbOffre: number;
  objectCritere = new OffreVente();
  alloffretrouves: any;
  alloffrefound: any;
  prixMin: number;
  prixMax: number;

  ngOnInit(): void {
    this.loadAuto();
  }

  loadAuto() {
    this.getAllMarque(null);
    this.getNbOffreByCritre(this.objectCritere);
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alloDakarService: AlloDakarService
  ) {
    this.getAllMarque(null);
  }

  getObjet(objectCritere) {
    debugger
    objectCritere.marque = null;
    this.loadAuto();
   // this.objectCritere = new OffreVente();

  }

  public getAllMarque(refresher) {
    this.alloDakarService.getAllMarque().then(newsFetched => {
      this.allmarques = newsFetched;
      // Si la variable refresher est null alors on ne fait rien
      refresher ? refresher.complete() : null;
    });
  }

  getModelsbyMarque(marque) {
    this.objectCritere.modele = null;
    this.getNbOffreByCritre(this.objectCritere);
    this.alloDakarService.getModelsbyMarque(marque.id).then(newsFetched => {
      this.allmodeles = newsFetched;
    });
  }

  getoffrebycritre(objectCritere) {
    this.alloDakarService
      .getOffreVentebycritere(objectCritere)
      .then(newsFetched => {
        this.alloffrefound = newsFetched;
        // Si la variable refresher est null alors on ne fait rien
        this.goToOffreVenteFound(this.alloffrefound);
      });
  }

  getNbOffreByCritre(objectCritere) {
    console.log("objectCritere :", objectCritere);
    this.alloDakarService.setObjetCritere(objectCritere);
    this.alloDakarService
      .getOffreVentebycritere(objectCritere)
      .then(newsFetched => {
        this.alloffrefound = newsFetched;
        if (this.alloffrefound) {
          console.log("m   nguiii qiii :", this.alloffrefound);
          this.nbOffre = this.alloffrefound.length;
        }
      });
  }

  goToOffreVenteFound(offrefound) {
    this.navCtrl.push(OffreventefoundPage, { myoffrefound: offrefound });
  }
}
