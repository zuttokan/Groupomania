import { Component, OnInit, Input } from '@angular/core';
import { Groupomania } from '../models/groupo.models';

@Component({
  selector: 'app-groupomania',
  templateUrl: './groupomania.component.html',
  styleUrls: ['./groupomania.component.scss'],
})
export class GroupomaniaComponent implements OnInit {
  @Input() groupomania!: Groupomania;

  title!: String;
  description!: string;
  createdDate!: Date;
  like!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Bienvenue';
    this.description = 'Vous etes chez vous';
    this.createdDate = new Date();
    this.like = 6;
    this.imageUrl =
      'https://www.lescanalous.com/wp-content/uploads/2020/11/carnon-plage.jpg';
    this.buttonText = 'Like !';
  }

  onLike() {
    if (this.buttonText === 'Like !') {
      this.groupomania.like++;
      this.buttonText = 'Merci !';
    } else {
      this.groupomania.like--;
      this.buttonText = 'Like !';
    }
  }
}
