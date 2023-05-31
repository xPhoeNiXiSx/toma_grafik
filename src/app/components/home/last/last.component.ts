import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.scss']
})
export class LastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
