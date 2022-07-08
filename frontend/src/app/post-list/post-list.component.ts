import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { PostService } from '../services/post-services';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  post!: Post[];
  //groupomania$!: Observable<Groupomania[]>;

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.post = this.postService.getAllPost();
    //this.groupomania$ = this.groupomaniaService.getAllGroupomania();
  }
}
