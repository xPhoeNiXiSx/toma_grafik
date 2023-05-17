import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectService } from './services/project/project.service';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectItemComponent } from './components/projects/project-item/project-item.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SectionStartComponent } from './components/home/section-start/section-start.component';
import { LastComponent } from './components/home/last/last.component';
import { CollectionsComponent } from './components/home/collections/collections.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    ProjectItemComponent,
    HomeComponent,
    MenuComponent,
    SectionStartComponent,
    LastComponent,
    CollectionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
