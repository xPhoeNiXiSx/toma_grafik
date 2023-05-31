import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectService } from './services/project/project.service';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectItemComponent } from './components/projects/project-item/project-item.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LastComponent } from './components/home/last/last.component';
import { OneComponent } from './components/home/one/one.component';
import { IconComponent } from './components/icon/icon.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { ProcessComponent } from './components/process/process.component';
import { ContactComponent } from './components/contact/contact.component';
import { CollectionsModule } from './components/collections/collections.module';
import { RouterModule } from '@angular/router';
import { HomeCollectionsComponent } from './components/home/home-collections/home-collections.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    ProjectItemComponent,
    HomeComponent,
    MenuComponent,
    LastComponent,
    OneComponent,
    IconComponent,
    WorkComponent,
    AboutComponent,
    ProcessComponent,
    ContactComponent,
    HomeCollectionsComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CollectionsModule,
    RouterModule
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
