import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../entity/project.class';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = 'assets/data/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }
}
