import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { PostsServices } from '../services/posts-services';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  //post!: Post[];
  posts$!: Observable<Post[]>;

  constructor(private postService: PostsServices, private router: Router) {}

  ngOnInit(): void {
    //this.post = this.postService.getAllPost();
    this.posts$ = this.postService.getAllPost();
    console.log(this.posts$);
  }
}
