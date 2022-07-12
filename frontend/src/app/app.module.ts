import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { AuthModule } from './auth/auth.module';
//import { registerLocaleData } from '@angular/common';
//import * as fr from '@angular/common/locales/fr';
//import { PostFormComponent } from './post-form/post-form.component';
//import { PostListComponent } from './post-list/post-list.component';
//import { SinglePostComponent } from './single-post/single-post.component';
//import { AuthModule } from './auth/auth.module';
//import { HeaderComponent } from './core/components/header/header.component';
//import { HttpInterceptorProviders } from './core/interceptors';
//import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    // PostFormComponent,
    // PostListComponent,
    //HeaderComponent,
    LandingPageComponent,
    // SinglePostComponent,
    // NewPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    //LadingPageModule not created !!!
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // AuthModule,
    //HeaderComponent,
  ],
  //providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
