import { Component, OnInit } from '@angular/core';
import { Groupomania } from './models/groupo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myGroupomania!: Groupomania;
  myOtherGroupomania!: Groupomania;
  myLastGroupomania!: Groupomania;

  ngOnInit() {
    this.myGroupomania = {
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      like: 0,
      location: 'Paris',
    };
    this.myOtherGroupomania = {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      like: 0,
      location: 'la Montagne',
    };
    this.myLastGroupomania = {
      title: 'Un bon repas',
      description: "Mmmh que c'est bon !",
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      like: 0,
    };
  }
}
