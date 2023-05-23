import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Project } from '../../entity/project.class';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = 'assets/data/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  getCollectionProjects(slug: string): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl)
    .pipe(
      map(projects => {
        return projects.filter(project => {
          if(project.collection instanceof Array) {
            return project.collection.some(item => item.title === slug)
          } else {
            return;
          }
        });
      })
    )
  }
}
