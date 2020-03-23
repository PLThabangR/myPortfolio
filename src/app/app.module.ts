
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeComponent } from '../home/home.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { EducationComponent } from '../education/education.component';
import { ContactComponent } from '../contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { BioComponent } from '../bio/bio.component';
import { AddressComponent } from '../address/address.component';
import { SkillsComponent } from '../skills/skills.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectsComponent } from '../projects/projects.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    WorkExperienceComponent,
    EducationComponent,
    ContactComponent,
    BioComponent,
    AddressComponent,
    SkillsComponent,
    FooterComponent,
    ProjectsComponent,
    NavbarComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
