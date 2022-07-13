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
    return this.http.get<Post[]>('http://localhost:3000/api/post');
  }

  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/api/post/${postId}`);
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
  }): Observable<any> {
    const post = {
      posterId: formValue.title,
      message: formValue.description,
      picture: formValue.imageUrl,
    };
    return this.http.post('http://localhost:3000/api/post', post);
  }
}
