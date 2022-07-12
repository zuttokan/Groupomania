import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from '../forum/components/new-post/new-post.component';
import { SinglePostComponent } from '../forum/components/single-post/single-post.component';
import { PostListComponent } from '../forum/components/post-list/post-list.component';

const routes: Routes = [
  {
    path: 'create',
    component: NewPostComponent,
  },
  {
    path: ':id',
    component: SinglePostComponent,
  },
  {
    path: '',
    component: PostListComponent,
  },

  // {
  //   path: 'auth/login',
  //   component: LoginComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumRoutingModule {}
