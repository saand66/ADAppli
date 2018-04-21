import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserprofilPage } from './userprofil';

@NgModule({
  declarations: [
    UserprofilPage,
  ],
  imports: [
    IonicPageModule.forChild(UserprofilPage),
  ],
})
export class UserprofilPageModule {}
