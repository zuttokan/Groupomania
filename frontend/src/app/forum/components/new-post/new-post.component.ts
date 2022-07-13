import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';
import { PostsServices } from 'src/app/core/services/posts-services';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {
  postForm!: FormGroup;
  postPreview$!: Observable<Post>;
  urlRegex!: RegExp;
  imagePreview!: string;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.urlRegex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.postForm = this.formBuilder.group(
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
    this.postService.addPost(this.postForm.value).subscribe(() => {
      this.router.navigateByUrl('/post');
    });
  }
  onFileAdded(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.postForm.get('image')!.setValue(file);
    this.postForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
