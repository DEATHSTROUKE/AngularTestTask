import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  isShownPassword: boolean = false;
  passwordForm: FormGroup;
  avatarForm: FormGroup;

  constructor(private router: Router, private userService: UserService,
              public authService: AuthService) {
  }

  ngOnInit(): void {
    const password = this.authService.getPassword();
    this.passwordForm = new FormGroup({
      'password': new FormControl(password, [Validators.required])
    });
    const avatar = this.authService.avatar;
    this.avatarForm = new FormGroup({
      'avatar': new FormControl(avatar)
    });
  }

  changeAvatar(clean?: boolean) {
    if (clean) {
      this.avatarForm.value.avatar = '';
      console.log(this.avatarForm.value)
    }
    this.authService.changeAvatar(this.avatarForm.value.avatar);
  }

  updatePassword() {
    console.log(this.passwordForm.value)
    this.authService.changePassword(this.passwordForm.value.password).subscribe({
      next: () => alert('Пароль изменен'),
      error: () => console.error('Произошла ошибка смены пароля')
    });
  }

  toggleIsShownPassword() {
    this.isShownPassword = !this.isShownPassword;
  }

  deleteUser() {
    if (confirm('Вы действительно хотите удалить аккаунт?')) {
      this.authService.deleteUser();
    }
  }

}
