import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { ProcessComponent } from './components/process/process.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CollectionsComponent } from './components/collections/collections.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CollectionPageComponent } from './components/collections/collection-page/collection-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full' ,
    redirectTo: 'home'
  },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' }},
  { path: 'collections', component: CollectionPageComponent, data: { animation: 'CollectionsPage' }},
  { path: 'collections/:slug', component: ProjectListComponent, data: { animation: 'CollectionDetailPage' }},
  { path: 'projects', component: ProjectListComponent, data: { animation: 'ProjectPage' }},
  { path: 'work', component: WorkComponent, data: { animation: 'WorkPage' }},
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' }},
  { path: 'process', component: ProcessComponent, data: { animation: 'ProcessPage' }},
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' }},
  { path: '**', pathMatch: 'full', component: NotfoundComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
