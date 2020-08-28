import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './pages/projects/projects.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {ResumeComponent} from './pages/resume/resume.component';

const routes: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: 'resume', component: ResumeComponent},
  {path: '**', component: WelcomeComponent},
  {path: '', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
