import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceuilLocationPage } from './acceuil-location';

@NgModule({
  declarations: [
    AcceuilLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceuilLocationPage),
  ],
})
export class AcceuilLocationPageModule {}
