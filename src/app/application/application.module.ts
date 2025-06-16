import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonContent, IonicModule } from '@ionic/angular';
import { ApplicationRoutingModule } from './application-routing.module';
import { HomePage } from './home/home.page';
import { ItineraryService } from '../api/ecollect-api';
import { AboutAppPage } from './about-app/about-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationRoutingModule
  ],
  declarations: [
    HomePage,
    AboutAppPage
  ],
  providers: [DatePipe, IonContent, ItineraryService],
})
export class ApplicationModule {}
