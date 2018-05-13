import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceuilVentePage } from './acceuil-vente';

@NgModule({
  declarations: [
    AcceuilVentePage,
  ],
  imports: [
    IonicPageModule.forChild(AcceuilVentePage),
  ],
})
export class AcceuilVentePageModule {}
