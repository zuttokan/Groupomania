import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from './components/new-post/new-post.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NewPostComponent,
    SinglePostComponent,
    PostListComponent,
    PostFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  exports: [
    NewPostComponent,
    SinglePostComponent,
    PostListComponent,
    PostFormComponent,
  ],
})
export class ForumModule {}
