import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'projects', component: ProjectListComponent },
    { path: 'work', component: WorkComponent },
    { path: 'about', component: AboutComponent },
    { path: 'process', component: AboutComponent },
    { path: 'contact', component: AboutComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
