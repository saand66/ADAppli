import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrajetDetailsPage } from './trajet-details';

@NgModule({
  declarations: [
    TrajetDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrajetDetailsPage),
  ],
})
export class TrajetDetailsPageModule {}
