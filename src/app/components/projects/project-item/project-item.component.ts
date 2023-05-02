import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/entity/project.class';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() project:Project;
  @Input() isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  public goToPhoto(index: number) {
    this.project.thumbnail = this.project.photos?.[index];
  }

}
