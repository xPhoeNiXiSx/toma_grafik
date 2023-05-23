import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsComponent } from './collections.component';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';

import { ProjectService } from 'src/app/services/project/project.service';


@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionDetailComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [CollectionsComponent]
})
export class CollectionsModule { }
