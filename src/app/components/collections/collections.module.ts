import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionItemComponent } from './collection-item/collection-item.component';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';

import { ProjectService } from 'src/app/services/project/project.service';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CollectionItemComponent,
    CollectionDetailComponent,
    CollectionPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ProjectService
  ],
  bootstrap: []
})
export class CollectionsModule { }
