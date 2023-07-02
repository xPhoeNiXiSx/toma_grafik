import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {
  @ViewChild('line1') public line1: ElementRef;
  @ViewChild('line2') public line2: ElementRef;
  @ViewChild('line3') public line3: ElementRef;

  constructor() {}

  ngOnInit(): void {
    AOS.init();
    setTimeout(() => {
      this.line1.nativeElement.classList.add('animated');
    }, 500);
    setTimeout(() => {
      this.line2.nativeElement.classList.add('animated');
    }, 2000);
    setTimeout(() => {
      this.line3.nativeElement.classList.add('animated');
    }, 1000);
  }

}
