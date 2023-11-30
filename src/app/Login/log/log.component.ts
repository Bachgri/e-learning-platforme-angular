import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServService } from 'src/app/Services/serv.service';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogComponent implements OnInit {
  formLogin!: FormGroup;
  error: any = '';
  user!: SocialUser;
  loggedIn!: boolean;
  accessToken: any;
  data: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: ServService,
    private authService: SocialAuthService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: this.fb.control('', [Validators.email]),
      password: this.fb.control(''),
      Remember: this.fb.control(false),
    });

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;

      this.loginWithGoogle({
        Email: user.email,
        Password: user.id,
        Role: 'Student',
      });
    });
  }

  loginWithGoogle(data: any) {
    this.service.createForGoogle(data).subscribe(
      (res) => console.log('passed'),
      (error) =>
        this.service
          .login({ email: this.user.email, password: this.user.id })
          .subscribe(
            (res) => {
              this.service.accessToken = res.access_token;
              console.log(res);
              this.service.loadProfile(res.acces_token);
              if (this.service.valid) {
                this.router.navigateByUrl('/Etudiant/home');
              } else {
                console.log('error');
              }
            } //,
            // (error) => console.log(error)
          )
    );
  }

  login() {
    this.service.login(this.formLogin.value).subscribe(
      (res: any) => {
        // hadchi mat9isuch chuf dyal google

        console.log('Response:', res);
        // Handle successful response (next)
        sessionStorage.setItem('role', res.role);
        sessionStorage.setItem('token', res.access_token);
        this.service.accessToken = res;
        this.service.loadProfile(res.acces_token);
        if (res.role == 'Admin') {
          this.router.navigate(['/admin/dashboard']);
        } else if (res.role == 'Professor') {
          this.router.navigate(['/prof/course']);
        } else {
          // this.service.accessToken = res;
          // this.service.loadProfile(res.access_token);
          this.router.navigateByUrl('/Etudiant/home');
        }
      },
      (error: any) => {
        console.error('Error:', error);
        this.error = 'Email or Password incorrect';
        this.formLogin.reset();
        // Handle error
      }
    );
  }
}
