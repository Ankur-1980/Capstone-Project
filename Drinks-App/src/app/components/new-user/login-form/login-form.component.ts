import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  message: string;
  messageTimeout;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    public nav: NavbarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkLoginMessage();

    this.nav.hide();
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      loginDate: this.fb.control(new Date()),
    });
  }

  checkLoginMessage() {
    this.route.queryParams.subscribe((params) => {
      this.message = params['message'] ? params['message'] : null;

      this.messageTimeout = setTimeout(() => {
        this.router.navigate([], {
          replaceUrl: true,
          queryParams: { message: null },
          queryParamsHandling: 'merge',
        });

        this.message = '';
      }, 2000);
    });
  }

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // this doesn't work for some reason
  // get loginFormControl() {
  //   return this.loginForm.controls;
  // }

  onSubmit() {
    // console.log(this.loginForm.value);
    this.usersService.login(this.loginForm.value);
  }

  ngOnDestroy() {
    this.messageTimeout && clearTimeout(this.messageTimeout);
  }
}
