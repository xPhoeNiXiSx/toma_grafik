import { Component, OnInit } from '@angular/core';
import { Project } from './entity/project.class';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    projects: Project[];

    constructor(
      private projectService: ProjectService,
    ) {}

    ngOnInit(): void {
      this.getProjects();
    }

    getProjects(): void {
      this.projectService.getProjects().subscribe(projects => this.projects = projects);
    }




}
