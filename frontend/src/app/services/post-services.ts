//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  //constructor(private http: HttpClient) {}

  post: Post[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      like: 0,
      location: 'Paris',
    },

    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      like: 0,
      location: 'la Montagne',
    },

    {
      id: 3,
      title: 'Un bon repas',
      description: "Mmmh que c'est bon !",
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      like: 0,
    },
  ];

  getAllPost(): Post[] {
    return this.post;
  }

  // getAllGroupomania(): Observable<Groupomania[]> {
  //   return this.http.get<Groupomania[]>('http://localhost:3000/groupomania');
  // }

  getPostById(postId: number): Post {
    const post = this.post.find((post) => post.id === postId);
    if (!post) {
      throw new Error('Post not found !');
    } else {
      return post;
    }
  }

  postById(postId: number, postType: 'Like' | 'Dislike'): void {
    const post = this.getPostById(postId);
    postType === 'Like' ? post.like++ : post.like--;
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
      id: this.post[this.post.length - 1].id + 1,
    };
    this.post.push(post);
  }
}
