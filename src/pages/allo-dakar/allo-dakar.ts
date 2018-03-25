import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SeetVoyagePage } from '../seet-voyage/seet-voyage';
import { ProposerDamayTukkiPage } from '../proposer-damay-tukki/proposer-damay-tukki';
import { TrajetPage } from '../trajet/trajet';

@Component({
  selector: 'page-allo-dakar',
  templateUrl: 'allo-dakar.html'
})
export class AlloDakarPage {
  username: string;

  constructor(public navCtrl: NavController) {
    this.username = localStorage.getItem("Username");
  }
  goToSeetVoyage(params){
    if (!params) params = {};
    this.navCtrl.push(SeetVoyagePage);
  }goToProposerDamayTukki(params){
    if (!params) params = {};
    this.navCtrl.push(ProposerDamayTukkiPage);
  }goToTrajet(params){
    if (!params) params = {};
    this.navCtrl.push(TrajetPage);
  }
}
