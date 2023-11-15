import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';
import { TranslateModule } from '@ngx-translate/core';
import { ArchiHeroComponent } from './hero/archi-hero.component';
import { ArchiComponent } from './archi.component';
import { ConceptComponent } from './concept/concept.component';


@NgModule({
  declarations: [
    ArchiHeroComponent,
    ArchiComponent,
    ConceptComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  providers: [],
  bootstrap: []
})
export class ArchiModule { }
