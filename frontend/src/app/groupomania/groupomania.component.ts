import { Component, OnInit, Input } from '@angular/core';
import { Groupomania } from '../models/groupomania.models';
import { GroupomaniaService } from '../services/groupomania-services';

@Component({
  selector: 'app-groupomania',
  templateUrl: './groupomania.component.html',
  styleUrls: ['./groupomania.component.scss'],
})
export class GroupomaniaComponent implements OnInit {
  @Input() groupomania!: Groupomania;

  buttonText!: string;

  constructor(private groupomaniaService: GroupomaniaService) {}

  ngOnInit() {
    this.buttonText = 'Like !';
  }

  onLike() {
    if (this.buttonText === 'Like !') {
      this.groupomaniaService.groupomaniaById(this.groupomania.id, 'Like');
      this.buttonText = 'Merci !';
    } else {
      this.groupomaniaService.groupomaniaById(this.groupomania.id, 'Dislike');
      this.buttonText = 'Like !';
    }
  }
}
