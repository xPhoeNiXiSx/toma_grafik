import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectService } from './services/project/project.service';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectItemComponent } from './components/projects/project-item/project-item.component';
import { HomeComponent } from './components/home/home.component';
import { LastComponent } from './components/home/last/last.component';
import { IconComponent } from './components/icon/icon.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { ProcessComponent } from './components/process/process.component';
import { ContactComponent } from './components/contact/contact.component';
import { CollectionsModule } from './components/collections/collections.module';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';

//Firebase & Firestore
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import { environment } from 'src/environments/environment';
import { LandingComponent } from './components/landing/landing.component';
import { HeroComponent } from './components/landing/hero/hero.component';
import { GridComponent } from './components/landing/grid/grid.component';
import { CategoryComponent } from './components/landing/category/category.component';
import { SlideshowComponent } from './components/landing/slideshow/slideshow.component';
import { FooterComponent } from './components/landing/footer/footer.component';
import { BandComponent } from './components/landing/band/band.component';
import { SocialsComponent } from './components/socials/socials.component';
// Translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ArchiComponent } from './components/studio/archi/archi.component';
import { ArchiModule } from './components/studio/archi/collections.module';
import { DefaultComponent } from './components/layout/default/default.component';
import { StudioComponent } from './components/layout/studio/studio.component';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    ProjectItemComponent,
    HomeComponent,
    LastComponent,
    IconComponent,
    WorkComponent,
    AboutComponent,
    ProcessComponent,
    ContactComponent,
    NotfoundComponent,
    LandingComponent,
    HeroComponent,
    GridComponent,
    CategoryComponent,
    SlideshowComponent,
    FooterComponent,
    BandComponent,
    SocialsComponent,
    DefaultComponent,
    StudioComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CollectionsModule,
    RouterModule,
    ArchiModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    })
  ],
  providers: [
    ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
