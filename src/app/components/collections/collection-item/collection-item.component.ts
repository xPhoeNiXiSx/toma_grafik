import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/entity/project.class';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {
  @Input() collectionSlug:string;
  @Input() collectionNumber:string;
  public collectionProjects: Project[] = [];
  public collectionProjectsFiltered: Project[] = [];
  public filter: string = '';

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) {}

  ngOnInit(): void {
    // this.collectionSlug = this.route.snapshot.paramMap.get('slug');
    if(this.collectionSlug) {
      this.getCollectionProjects(this.collectionSlug);
    }
    // console.log(this.collectionSlug);
  }

  getCollectionProjects(slug: string): void {
    this.projectService.getCollectionProjects(slug).subscribe(
      projects => {
        this.collectionProjects = projects;
        console.log(this.collectionProjects);
        // this.collectionProjectsFiltered = projects;
      }
    );
    // this.projectService.getCollectionProjects(slug).subscribe(
    //   projects => {
    //     this.collectionProjects = projects;
    //     // this.collectionProjectsFiltered = projects;
    //     // console.log(projects);
    //   }
    // );
  }

  public filterReinit(): void {
    this.collectionProjectsFiltered = this.collectionProjects;
    this.filter = '';
  }

  public filterBlack(): void {
    this.collectionProjectsFiltered = this.collectionProjects.filter( project => project.black);
    this.filter = 'black';
  }

  public filterColored(): void {
    this.collectionProjectsFiltered = this.collectionProjects.filter( project => !project.black);
    this.filter = 'colored';
  }

}
