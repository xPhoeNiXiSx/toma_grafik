import { Component, OnInit } from '@angular/core';
import { fadeIn, fadeInOutPage, fadeOut } from './app.animations';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn, fadeOut, fadeInOutPage],
})
export class AppComponent implements OnInit {
  isShown = false;

  constructor(
    private contexts: ChildrenOutletContexts
  ) {}

  ngOnInit(): void {}

  fadeInOut(): void {
    this.isShown = !this.isShown;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

}
