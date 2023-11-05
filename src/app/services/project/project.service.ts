import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
import { Project } from '../../entity/project.class';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = 'data/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  getCollectionProjects(slug: string): Observable<Project[]> {
    return this.http.get<Project[]>('data/projects.json')
    .pipe(
      map(project => project.filter(project => project.collection === slug)),
    )
  }

}
