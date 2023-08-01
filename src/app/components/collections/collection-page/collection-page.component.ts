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
      name :'cocktail',
      id : '01',
    },
    {
      name :'japan',
      id : '02',
    },
    {
      name :'houses',
      id : '03',
    },
    // {
    //   name :'projects',
    //   id : '04',
    // }
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
