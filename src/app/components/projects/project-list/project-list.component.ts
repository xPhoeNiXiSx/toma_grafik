import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/entity/project.class';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  public collectionSlug: string;
  projects: Project[] = [];
  selectedIndex = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private projectService: ProjectService,
  ) {

  }

  ngOnInit(): void {
    const routeSlug = this.activatedRoute.snapshot.paramMap.get('slug');
    if(routeSlug) {
      this.collectionSlug = routeSlug;
      this.getProjects();
    }
    this.activatedRoute.queryParamMap.subscribe(params => {
      let paramId = Number(params.get('id'));
      this.selectedIndex = paramId - 1;
    })
  }

  getProjects(): void {
    this.projectService.getCollectionProjects(this.collectionSlug).subscribe(projects => this.projects = projects);
  }

  public prevProject(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.projects.length - 1;
    } else {
      this.selectedIndex --;
    }
    // this.route.navigate([], { queryParams: {'id': this.selectedIndex}})
  }

  public nextProject(): void {
    if(this.selectedIndex === this.projects.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex ++;
    }
    // this.route.navigate([], { queryParams: {'id': this.selectedIndex}})
  }

  public goToProject(index: number): void {
    this.selectedIndex = index;
  }

  public goToPhoto(index: number, project: Project) {
    project.thumbnail = project.photos?.[index];
  }

  public getPhotoThumbnail(project: Project) {
    return project.photos?.[0].url;
  }

  public autoSliding(): void {
    setInterval(() => {
      this.nextProject()
    }, 2000);
  }
}
