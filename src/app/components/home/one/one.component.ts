import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  @ViewChild('line1') public line1: ElementRef;
  @ViewChild('line2') public line2: ElementRef;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.line1.nativeElement.classList.add('animated');
    }, 500);
    setTimeout(() => {
      this.line2.nativeElement.classList.add('animated');
    }, 3000);
  }

}
