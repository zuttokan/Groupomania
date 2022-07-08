import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post-services';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit {
  post!: Post;

  buttonText!: string;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonText = 'Like !';
    const postId = +this.route.snapshot.params['id'];
    this.post = this.postService.getPostById(postId);
  }

  onLike() {
    if (this.buttonText === 'Like !') {
      this.postService.postById(this.post.id, 'Like');
      this.buttonText = 'Merci !';
    } else {
      this.postService.postById(this.post.id, 'Dislike');
      this.buttonText = 'Like !';
    }
  }
}
