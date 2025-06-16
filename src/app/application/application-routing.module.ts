import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { AboutAppPage } from './about-app/about-app.page';


const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'about-app',
    component: AboutAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
