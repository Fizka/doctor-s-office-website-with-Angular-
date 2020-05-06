import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {Profil1Component} from './profil1/profil1.component';
import {Profil2Component} from './profil2/profil2.component';
import {Profil3Component} from './profil3/profil3.component';
import {Harmonogram1Component} from './harmonogram1/harmonogram1.component';
import {Harmonogram2Component} from './harmonogram2/harmonogram2.component';
import {ContactComponent} from './contact/contact.component';
import { AllptofilesComponent } from './allptofiles/allptofiles.component';
import {ContentsComponent} from './contents/contents.component';
import {AllharmonogramComponent} from './allharmonogram/allharmonogram.component';

const routes: Routes = [
  {path: '', redirectTo: 'contents', pathMatch: 'full' },
  { path: 'profil1', component: Profil1Component },
  { path: 'profil2', component: Profil2Component },
  { path: 'profil3', component: Profil3Component },
  { path: 'harmonogram1', component: Harmonogram1Component },
  { path: 'harmonogram2', component: Harmonogram2Component },
  { path: 'contact', component: ContactComponent },
  { path: 'allprofiles', component: AllptofilesComponent },
  { path: 'allharm', component: AllharmonogramComponent },
  { path: 'contents', component: ContentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
