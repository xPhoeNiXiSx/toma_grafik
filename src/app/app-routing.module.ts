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

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full' ,
    redirectTo: '/home'
  },
  {
    path: 'home', 
    component: HomeComponent, 
    data: { animation: 'HomePage' }
  },
  { 
    path: 'projects', 
    component: ProjectListComponent,
    data: { animation: 'ProjectPage' }
  },
  {
    path: 'work', 
    component: WorkComponent,
    data: { animation: 'WorkPage' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'AboutPage' }
  },
  {
    path: 'process',
    component: ProcessComponent,
    data: { animation: 'ProcessPage' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'ContactPage' }
  },
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
