import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/entity/project.class';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss']
})
export class CollectionDetailComponent implements OnInit {
  @Input() project:Project;

  // public slug: string | null;

  // constructor(
  //   private route: ActivatedRoute
  // ) {}

  ngOnInit(): void {
  //   this.slug = this.route.snapshot.paramMap.get('slug');
  }

}
