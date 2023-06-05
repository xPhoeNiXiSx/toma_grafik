import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/entity/project.class';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  public collectionSlug: string | null;
  public collectionProjects: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) {}

  ngOnInit(): void {
    this.collectionSlug = this.route.snapshot.paramMap.get('slug');
    if(this.collectionSlug) {
      this.getCollectionProjects(this.collectionSlug);
    }
    console.log(this.collectionSlug);
  }

  getCollectionProjects(slug: string): void {
    this.projectService.getCollectionProjects(slug).subscribe(
      projects => {
        this.collectionProjects = projects;
        console.log(projects);
      }
    );
  }

}
