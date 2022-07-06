import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupomania',
  templateUrl: './groupomania.component.html',
  styleUrls: ['./groupomania.component.scss'],
})
export class GroupomaniaComponent implements OnInit {
  title!: String;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit() {
    this.title = 'Bienvenue';
    this.description = 'Vous etes chez vous';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl =
      'https://www.lescanalous.com/wp-content/uploads/2020/11/carnon-plage.jpg';
  }
}
