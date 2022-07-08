import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsServices } from '../services/posts-services';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @Input() post!: Post;

  buttonText!: string;

  constructor(private postService: PostsServices) {}

  ngOnInit() {
    this.buttonText = 'Like !';
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
