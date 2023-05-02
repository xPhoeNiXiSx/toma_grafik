import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

}
