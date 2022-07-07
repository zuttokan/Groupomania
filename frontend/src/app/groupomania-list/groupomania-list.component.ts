import { Component, OnInit } from '@angular/core';
import { Groupomania } from '../models/groupo.models';
import { GroupomaniaService } from '../services/groupomania-services';

@Component({
  selector: 'app-groupomania-list',
  templateUrl: './groupomania-list.component.html',
  styleUrls: ['./groupomania-list.component.scss'],
})
export class GroupomaniaListComponent implements OnInit {
  groupomania!: Groupomania[];

  constructor(private groupomaniaService: GroupomaniaService) {}

  ngOnInit(): void {
    this.groupomania = this.groupomaniaService.getAllGroupomania();
  }
}
