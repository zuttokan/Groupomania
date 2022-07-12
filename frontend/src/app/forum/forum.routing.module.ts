import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from '../forum/components/new-post/new-post.component';
import { SinglePostComponent } from '../forum/components/single-post/single-post.component';
import { PostListComponent } from '../forum/components/post-list/post-list.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'create',
    component: NewPostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: SinglePostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: PostListComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumRoutingModule {}
