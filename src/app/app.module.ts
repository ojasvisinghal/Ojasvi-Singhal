import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LayoutComponent } from './components/common/layout/layout.component';
import { AboutComponent } from './components/LayoutComponents/about/about.component';
import { ExperienceComponent } from './components/LayoutComponents/experience/experience.component';
import { EducationComponent } from './components/LayoutComponents/education/education.component';
import { SkillsComponent } from './components/LayoutComponents/skills/skills.component';
import { ContactComponent } from './components/LayoutComponents/contact/contact.component';
import { routing } from './app.routing';
import { PageHeaderComponent } from './components/LayoutComponents/common/page-header/page-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    BrowserAnimationsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
