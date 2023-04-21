import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {IUserInfo} from "../../models/user";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;
  isLogin: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.isLogin = this.router.url === '/login';
  }

  onLogin() {
    const userInfo: IUserInfo = this.formToUserInfo();
    this.authService.login(userInfo).subscribe({
      next: () => console.log('Вы успешно авторизовались'),
      error: (err) => alert(err.message)
    })
  }

  onRegister() {
    const userInfo: IUserInfo = this.formToUserInfo();
    this.authService.register(userInfo).subscribe({
      next: () => console.log('Вы успешно зарегистрировались'),
      error: (err) => alert(err.message)
    })
  }

  formToUserInfo(): IUserInfo {
    return {
      name: this.loginForm.value.name,
      password: this.loginForm.value.password
    };
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }
}
