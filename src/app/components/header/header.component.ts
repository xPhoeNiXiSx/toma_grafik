import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isOpen = false;
  public isLightActive = false;
  public currentLang = "";

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    this.currentLang = this.translate.currentLang;
  }

  ngOnInit(): void {
  }

  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  public switchLang(): void {
    if(this.translate.currentLang === 'fr') {
      this.translate.use('en');
      this.currentLang = 'en';
    } else {
      this.translate.use('fr');
      this.currentLang = 'fr';
    }
  }

  public changeRoute(link: string): void {
    this.isOpen = !this.isOpen;
    this.router.navigate([link]);

  }

}
