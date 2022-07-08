import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
import { Groupomania } from '../models/groupomania.models';
import { GroupomaniaService } from '../services/groupomania-services';

@Component({
  selector: 'app-groupomania-list',
  templateUrl: './groupomania-list.component.html',
  styleUrls: ['./groupomania-list.component.scss'],
})
export class GroupomaniaListComponent implements OnInit {
  groupomania!: Groupomania[];
  //groupomania$!: Observable<Groupomania[]>;

  constructor(private groupomaniaService: GroupomaniaService) {}

  ngOnInit(): void {
    this.groupomania = this.groupomaniaService.getAllGroupomania();
    //this.groupomania$ = this.groupomaniaService.getAllGroupomania();
  }
}
