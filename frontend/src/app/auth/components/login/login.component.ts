import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { UserServices } from 'src/app/core/services/user-services';
import { LoggedInUserId } from 'src/app/core/models/loggedInUserId.model';
import { CommonModule } from '@angular/common';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user!: User;
  users: User[] = [];
  signinForm!: FormGroup;
  loginForm!: FormGroup;
  registerActive: boolean = false;
  loginActive: boolean = true;
  loggedInUser!: User | null;
  loggedInUserId!: LoggedInUserId | null;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private userServices: UserServices
  ) {}

  ngOnInit() {
    this.signinForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(2),
        ],
      ],
      firstname: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(2),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(50)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(5),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(5),
        ],
      ],
    });

    this.loginForm = this.fb.group({
      email: [
        'admin@groupomania.com',
        [Validators.required, Validators.email, Validators.maxLength(50)],
      ],
      password: [
        'administrator2022',

        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(5),
        ],
      ],
    });

    let button: any = document.querySelector('.section');
    button.onclick = function () {
      this.classList.toggle('active');
    };

    if (localStorage.getItem('loggedInUserId') === null) {
      this.loggedInUserId = null;
    } else {
      this.loggedInUserId = JSON.parse(
        localStorage.getItem('loggedInUserId') || '{}'
      );
    }
  }

  register(user: User) {}

  onLogin() {
    console.log('onLogin()');

    this.auth
      .login(this.loginForm.value['email'], this.loginForm.value['password'])
      .pipe(
        tap(() => {
          console.log('Navigate to /post');
          this.router.navigateByUrl('/post');
        }),
        catchError((e) => {
          alert(e.message);
          throw e;
        })
      )
      .subscribe();
  }

  onRegisterPage() {
    document.getElementById('register')?.classList.add('active');
    document.getElementById('login')?.classList.remove('active');
    this.registerActive = true;
    this.loginActive = false;
  }

  onLoginPage() {
    location.reload();
  }

  //connecter un utilisateur
  loginUser(user: User) {
    this.userServices.loginUser(user).subscribe(
      (response: User) => {
        localStorage.setItem('loggedInUserId', JSON.stringify(response));
        this.loggedInUserId = JSON.parse(
          localStorage.getItem('loggedInUserId') || '{}'
        );
        location.href = '/accueil';
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getUsers() {
    this.userServices.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  //Ajouter un utilisateur
  addUser(user: User) {
    user.role = 'CLIENT';
    this.userServices.addUser(user).subscribe(
      (response: User) => {
        this.loginUser(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
