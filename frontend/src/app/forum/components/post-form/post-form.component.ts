import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/core/models/post.model';
import { PostsServices } from 'src/app/core/services/posts-services';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @Input() post!: any;

  buttonText!: string;
  buttonTextEdit!: string;
  buttonDeletePost!: string;
  constructor(private postService: PostsServices) {}

  ngOnInit() {
    this.buttonText = 'Like !';
    this.buttonTextEdit = 'Editez';
    this.buttonDeletePost = 'Supprimer ';
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

  onEditPost() {}

  onDeletePost() {}
}
