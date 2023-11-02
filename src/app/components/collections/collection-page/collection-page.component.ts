import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/entity/collection.class';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {
  public filter = "";
  public collections:Collection[];

  constructor(
    private readonly collectionService: CollectionService,
  ) { }

  ngOnInit(): void {
    this.collectionService.getCollections().subscribe(collections => this.collections = collections);
  }

  public filterReinit(): void {
  }

  public filterBlack(): void {
  }

  public filterColored(): void {
  }

}
