import { Component, OnInit } from '@angular/core';
import { fadeIn, fadeInOutPage, fadeOut } from './app.animations';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    // ).subscribe(() => {
    //   console.log("test");
      
    //   // this.isOpen = false;
    // });
  }

}
