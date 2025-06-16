import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public tabBarShown: boolean = false;

  constructor(
    private router: Router,
    private platform: Platform
  ) {}

  ngOnInit() {
  }
}
