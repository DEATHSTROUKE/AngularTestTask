import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userName: string | null;

  constructor(private router: Router, private userService: UserService,
              public authService: AuthService) {
    this.userName = userService.userName
  }

  logout() {
    if (confirm('Вы действительно хотите выйти?')) {
      this.authService.logout();
    }
  }
}
