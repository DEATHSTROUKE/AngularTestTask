import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
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

  constructor(private router: Router, private authService: AuthService) {
  }

  submitLogin() {
    console.log(this.loginForm.value);
    const userInfo: IUserInfo = {
      name: this.loginForm.value.name,
      password: this.loginForm.value.password
    }

    this.authService.login(userInfo).subscribe({
      next: () => console.log('Все круто'),
      error: (err) => alert(err.message)
    })
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl('')
    })
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }
}
