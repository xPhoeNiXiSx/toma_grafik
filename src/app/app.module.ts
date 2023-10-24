import { HttpClientModule } from '@angular/common/http';
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
import { HomeCollectionsComponent } from './components/home/home-collections/home-collections.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeOneComponent } from './components/home/home-one/home-one.component';
import { MenuComponent } from './components/menu/menu.component';

//Firebase & Firestore
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import { environment } from 'src/environments/environment';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    ProjectItemComponent,
    HomeComponent,
    LastComponent,
    HomeOneComponent,
    IconComponent,
    WorkComponent,
    AboutComponent,
    ProcessComponent,
    ContactComponent,
    HomeCollectionsComponent,
    NotfoundComponent,
    MenuComponent,
    LandingComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CollectionsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
