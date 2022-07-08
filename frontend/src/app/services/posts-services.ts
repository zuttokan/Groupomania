import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsServices {
  constructor(private http: HttpClient) {}

  posts: Post[] = [];

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/post');
  }

  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/post/${postId}`);
  }

  postById(postId: number, postType: 'Like' | 'Dislike'): void {
    // const post = this.getPostById(postId);
    // postType === 'Like' ? post.like++ : post.like--;
  }

  addPost(formValue: {
    title: string;
    description: string;
    imageUrl: string;
    location?: string;
  }): void {
    const post: Post = {
      ...formValue,
      createdDate: new Date(),
      like: 0,
      id: this.posts[this.posts.length - 1].id + 1,
    };
    this.posts.push(post);
  }
}
