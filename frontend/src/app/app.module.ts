import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupomaniaComponent } from './groupomania/groupomania.component';
import { GroupomaniaListComponent } from './groupomania-list/groupomania-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleGroupomaniaPostComponent } from './single-groupomania-post/single-groupomania-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { NewGroupomaniaComponent } from './new-groupomania/new-groupomania.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupomaniaComponent,
    GroupomaniaListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleGroupomaniaPostComponent,
    NewGroupomaniaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
