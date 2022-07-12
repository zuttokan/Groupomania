import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { LoginComponent } from './components/login/login.component';
import { AuthRoutinModule } from './auth-routing.module';
//import { LogoutComponent } from './components/logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { Post } from '../models/post.model';
import { PostFormComponent } from '../post-form/post-form.component';
import { PostListComponent } from '../post-list/post-list.component';
import { NewPostComponent } from '../new-post/new-post.component';
import { SinglePostComponent } from '../single-post/single-post.component';

@NgModule({
  declarations: [
    PostFormComponent,
    PostListComponent,
    NewPostComponent,
    SinglePostComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutinModule],
  exports: [
    PostFormComponent,
    PostListComponent,
    NewPostComponent,
    SinglePostComponent,
  ],
})
export class AuthModule {}
