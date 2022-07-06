import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupomaniaComponent } from './groupomania/groupomania.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, GroupomaniaComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
