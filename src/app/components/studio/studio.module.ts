import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StudiohomeComponent } from './studiohome/studiohome.component';
import { ArchiComponent } from './archi/archi.component';
import { ConceptComponent } from './archi/concept/concept.component';
import { ArchiHeroComponent } from './archi/hero/archi-hero.component';
import { ParallaxDirective } from 'src/app/directives/parallax.directive';
import { ArchilistComponent } from './archi/list/archilist.component';
import { ArchicarouselComponent } from './archi/carousel/archicarousel.component';
import { ArchivaluesComponent } from './archi/values/archivalues.component';
import { TypefacesComponent } from './typefaces/typefaces.component';


@NgModule({
  declarations: [
    StudiohomeComponent,
    ArchilistComponent,
    ArchiComponent,
    ConceptComponent,
    ArchiHeroComponent,
    ParallaxDirective,
    ArchicarouselComponent,
    ArchivaluesComponent,
    TypefacesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  providers: [],
  bootstrap: []
})
export class StudioModule { }
