import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LandingPageModule } from './landing-page/landing-page.module';
import { ForumModule } from './forum/forum.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ForumModule,
    LandingPageModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
