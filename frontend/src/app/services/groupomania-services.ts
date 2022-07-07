import { Injectable } from '@angular/core';
import { Groupomania } from '../models/groupo.models';

@Injectable({
  providedIn: 'root',
})
export class GroupomaniaService {
  groupomania: Groupomania[] = [
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

  getAllGroupomania(): Groupomania[] {
    return this.groupomania;
  }

  getGroupomaniaById(groupomaniaId: number): Groupomania {
    const groupomania = this.groupomania.find(
      (groupomania) => groupomania.id === groupomaniaId
    );
    if (!groupomania) {
      throw new Error('Post not found !');
    } else {
      return groupomania;
    }
  }

  groupomaniaById(
    groupomaniaId: number,
    groupomaniaType: 'Like' | 'Dislike'
  ): void {
    const groupomania = this.getGroupomaniaById(groupomaniaId);
    groupomaniaType === 'Like' ? groupomania.like++ : groupomania.like--;
  }
}
