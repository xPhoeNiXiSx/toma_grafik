import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StudiohomeComponent } from './studiohome/studiohome.component';
import { ArchiComponent } from './archi/archi.component';
import { ConceptComponent } from './archi/concept/concept.component';
import { ArchiHeroComponent } from './archi/hero/archi-hero.component';
import { ParallaxDirective } from 'src/app/directives/parallax.directive';


@NgModule({
  declarations: [
    StudiohomeComponent,
    ArchiComponent,
    ConceptComponent,
    ArchiHeroComponent,
    ParallaxDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  providers: [],
  bootstrap: []
})
export class StudioModule { }
