import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { SpecialitiesComponent } from './resume/specialities/specialities.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { LanguagesComponent } from './resume/languages/languages.component';
import { JobsComponent } from './resume/jobs/jobs.component';
import { EducationComponent } from './resume/education/education.component';
import { HobbiesComponent } from './resume/hobbies/hobbies.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SpecialitiesComponent,
    SkillsComponent,
    LanguagesComponent,
    JobsComponent,
    EducationComponent,
    HobbiesComponent,
    HeaderComponent,
    PresentationComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
