import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {
  public filter = "";
  public collections = [
    {
      name :'projects',
      id : '01',
    },
    {
        name :'nantes',
        id: '02'
    },
    {
        name :'london',
        id: '03'
    },
    {
        name :'toulouse',
        id: '04'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public filterReinit(): void {
  }

  public filterBlack(): void {
  }

  public filterColored(): void {
  }

}
