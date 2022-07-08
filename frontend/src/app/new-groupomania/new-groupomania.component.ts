import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Groupomania } from '../models/groupomania.models';
import { GroupomaniaService } from '../services/groupomania-services';

@Component({
  selector: 'app-new-groupomania',
  templateUrl: './new-groupomania.component.html',
  styleUrls: ['./new-groupomania.component.scss'],
})
export class NewGroupomaniaComponent implements OnInit {
  groupoForm!: FormGroup;
  groupoPreview$!: Observable<Groupomania>;
  urlRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private groupomaniaService: GroupomaniaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.urlRegex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.groupoForm = this.formBuilder.group(
      {
        title: [null, Validators.required],
        description: [null, Validators.required],
        imageUrl: [null, [Validators.pattern(this.urlRegex)]],
        location: [null],
      },
      {
        updateOn: 'blur',
      }
    );
  }

  onSubmitForm(): void {
    this.groupomaniaService.addGroupoPost(this.groupoForm.value);
    this.router.navigateByUrl('/groupomania');
  }
}
