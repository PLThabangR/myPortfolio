import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

import { BioComponent } from '../bio/bio.component';

import { EducationComponent } from '../education/education.component';
import { SkillComponent } from './skill/skill.component';
import { BackPicComponent } from './back-pic/back-pic.component';




const routes: Routes = [

  {
    path: '', redirectTo: ' /bio', pathMatch: 'full'

  },
  {
    path: 'back',
    component: BackPicComponent
  },

    {
    path: 'contact',
    component: ContactComponent
  }, { path: 'work',
  component: WorkExperienceComponent
},
  {
    path: 'bio',
    component: BioComponent
  },
   {
    path: 'edu',
     component: EducationComponent
 },
 {
  path: 'skill',
  component: SkillComponent
},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })


export class AppRoutingModule { }
