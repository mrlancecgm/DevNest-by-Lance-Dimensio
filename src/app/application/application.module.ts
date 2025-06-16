import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonicModule } from '@ionic/angular';
import { ApplicationRoutingModule } from './application-routing.module';
import { HomePage } from './home/home.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ApplicationRoutingModule
  ],
  declarations: [
    HomePage,
  ],
  providers: [IonContent],
})
export class ApplicationModule {}
