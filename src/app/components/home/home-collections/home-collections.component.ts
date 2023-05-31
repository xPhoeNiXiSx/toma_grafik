import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-collections',
  templateUrl: './home-collections.component.html',
  styleUrls: ['./home-collections.component.scss']
})
export class HomeCollectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
