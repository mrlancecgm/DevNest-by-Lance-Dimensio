import { DatePipe } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonLoading, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class HomePage implements OnInit {
  public width!: number;
  public height!: number;

  @ViewChild(IonContent, { static: false }) 'content': IonContent;
  @ViewChild('resultModal') resultModal!: IonModal;
  @ViewChild(IonLoading) loading!: IonLoading;

  constructor(
    private datePipe: DatePipe,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ionViewWillEnter() {
  }

  ngOnInit() {
  }

  getDimensions(){
    this.loading.present();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.loading.dismiss();
    this.resultModal.present();
  }

  goTo(targetRoute: string) {
    this.router.navigate([`/application/${targetRoute}`]);
  }

  ngAfterViewInit(){
    this.setStyles();
  }

  setStyles(){
    const width = window.innerWidth;
    const valFontSize = width * 0.10;
    document.documentElement.style.setProperty('--valFontSize',`${valFontSize}px`);
  }
}
