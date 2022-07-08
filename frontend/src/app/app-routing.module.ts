import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Post } from './models/post.model';
import { NewPostComponent } from './new-post/new-post.component';

import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  {
    path: 'create',
    component: NewPostComponent,
  },
  {
    path: 'post/:id',
    component: SinglePostComponent,
  },
  {
    path: 'post',
    component: PostListComponent,
  },

  {
    path: '',
    component: LandingPageComponent,
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
