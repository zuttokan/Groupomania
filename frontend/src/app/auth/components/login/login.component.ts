import { Component, OnInit } from '@angular/core';
import { PostsServices } from 'src/app/core/services/posts-services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // onLogin() {
  //   this.auth.login();
  //   this.router.navigateByUrl('/post');
  // }
}
