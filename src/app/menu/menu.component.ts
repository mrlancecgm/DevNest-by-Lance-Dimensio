import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonAlert, IonMenu, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: false,
})
export class MenuComponent implements OnInit {
  public profilePhoto!: string | null;
  public currentUser: any;

  @ViewChild(IonMenu) menu!: IonMenu;
  @ViewChild(IonAlert) alertUpdate!: IonAlert;

  constructor(
    private menuController: MenuController,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  goTo(targetRoute: string) {
    targetRoute = '/application/' + targetRoute;
    const currentUrl = this.router.url;
    if (currentUrl.includes(targetRoute)) {
      this.menuController.close('main-menu');
    } else {
      this.menuController.close();
      this.router.navigate([targetRoute]);
    }
  }
}
