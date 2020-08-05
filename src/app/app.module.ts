import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { DynamicTypeComponent } from './dynamic-type/dynamic-type.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './services/project/project.service';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    DynamicTypeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
