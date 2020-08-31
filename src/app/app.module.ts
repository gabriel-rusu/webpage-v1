import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DynamicTypeComponent} from './components/dynamic-type/dynamic-type.component';
import {HttpClientModule} from '@angular/common/http';
import {ProjectService} from './services/project/project.service';
import {TypingComponent} from './components/typing/typing.component';

import {ProjectsComponent} from './pages/projects/projects.component';
import {AppRoutingModule} from './app-routing.module';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {ProjectComponent} from './components/project/project.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ResumeComponent } from './pages/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    DynamicTypeComponent,
    TypingComponent,
    WelcomeComponent,
    ProjectComponent,
    ExperienceComponent,
    EducationComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
