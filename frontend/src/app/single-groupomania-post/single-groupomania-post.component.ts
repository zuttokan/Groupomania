import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Groupomania } from '../models/groupomania.models';
import { GroupomaniaService } from '../services/groupomania-services';

@Component({
  selector: 'app-single-groupomania-post',
  templateUrl: './single-groupomania-post.component.html',
  styleUrls: ['./single-groupomania-post.component.scss'],
})
export class SingleGroupomaniaPostComponent implements OnInit {
  groupomania!: Groupomania;

  buttonText!: string;

  constructor(
    private groupomaniaService: GroupomaniaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonText = 'Like !';
    const groupomaniaId = +this.route.snapshot.params['id'];
    this.groupomania =
      this.groupomaniaService.getGroupomaniaById(groupomaniaId);
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
