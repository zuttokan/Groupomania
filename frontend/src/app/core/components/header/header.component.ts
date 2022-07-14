import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onAddNewPost(): void {
    this.router.navigateByUrl('/post/create');
  }
  onLogout(): void {
    console.log('test');

    if (localStorage.getItem('session')) {
      localStorage.removeItem('session');
      localStorage.removeItem('email');
      this.router.navigateByUrl('/auth/login');
    }
  }
}
