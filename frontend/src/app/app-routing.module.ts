import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupomaniaListComponent } from './groupomania-list/groupomania-list.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Groupomania } from './models/groupo.models';
import { SingleGroupomaniaPostComponent } from './single-groupomania-post/single-groupomania-post.component';

const routes: Routes = [
  {
    path: 'groupomania/:id',
    component: SingleGroupomaniaPostComponent,
  },
  {
    path: 'groupomania',
    component: GroupomaniaListComponent,
  },

  {
    path: '',
    component: LandingPageComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
