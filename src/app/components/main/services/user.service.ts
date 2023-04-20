import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Account} from "../../../models/account";
import {AuthService} from "../../../services/auth.service";
import {users_data} from "../../../data/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string | null;
  accounts?: Account[];

  constructor(private router: Router, private authService: AuthService) {
    this.userName = this.authService.getUserFromStorage();
    if (this.userName != null) {
      this.accounts = users_data.find(item => item.name == this.userName)?.accounts
    }
    console.log(this.accounts)
  }



}
