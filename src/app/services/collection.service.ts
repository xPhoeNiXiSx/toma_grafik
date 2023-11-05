import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collection } from '../entity/collection.class';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private collectionsUrl = 'data/collections.json';

  constructor(private http: HttpClient) {}

  getCollections(): Observable<Collection[]> {
    return this.http.get<Collection[]>(this.collectionsUrl);
  }

}
