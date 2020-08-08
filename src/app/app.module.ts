import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DynamicTypeComponent } from './components/dynamic-type/dynamic-type.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './services/project/project.service';
import { TypingComponent } from './components/typing/typing.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { ProjectsComponent} from './pages/projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    DynamicTypeComponent,
    TypingComponent,
    WelcomeComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
