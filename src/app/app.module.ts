import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContentsComponent } from './contents/contents.component';
import { ContactComponent } from './contact/contact.component';
import { Profil1Component } from './profil1/profil1.component';
import { Profil2Component } from './profil2/profil2.component';
import { Profil3Component } from './profil3/profil3.component';
import { Harmonogram1Component } from './harmonogram1/harmonogram1.component';
import { Harmonogram2Component } from './harmonogram2/harmonogram2.component';
import { AppRoutingModule } from './app-routing.module';
import { AllptofilesComponent } from './allptofiles/allptofiles.component';
import { AllharmonogramComponent } from './allharmonogram/allharmonogram.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentsComponent,
    ContactComponent,
    Profil1Component,
    Profil2Component,
    Profil3Component,
    Harmonogram1Component,
    Harmonogram2Component,
    AllptofilesComponent,
    AllharmonogramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
