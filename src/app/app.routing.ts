import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from './components/LayoutComponents/about/about.component';
import { ExperienceComponent } from './components/LayoutComponents/experience/experience.component';
import { EducationComponent } from './components/LayoutComponents/education/education.component';
import { SkillsComponent } from './components/LayoutComponents/skills/skills.component';
import { ContactComponent } from './components/LayoutComponents/contact/contact.component';

const routes: Routes = [
    { path: '', component: AboutComponent ,data: {animation: 'AboutPage'}},
    { path: 'about', component: AboutComponent ,data: {animation: 'AboutPage'} },
    { path: 'experience', component: ExperienceComponent ,data: {animation: 'ExperiencePage'}},
    { path: 'education', component: EducationComponent ,data: {animation: 'EducationPage'}},
    { path: 'skills', component: SkillsComponent ,data: {animation: 'SkillsPage'}},
    { path: 'contact', component: ContactComponent ,data: {animation: 'ContactPage'}},
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);