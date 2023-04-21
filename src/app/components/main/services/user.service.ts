import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Account, ICreateAccount} from "../../../models/account";
import {AuthService} from "../../../services/auth.service";
import {users_data} from "../../../data/users";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string | null;
  accounts: Account[];

  constructor(private router: Router, private authService: AuthService) {
    this.userName = this.authService.getUserFromStorage();
    if (this.userName != null) {
      this.accounts = users_data.find(item => item.name == this.userName)?.accounts ?? []
    }
  }

  createAccount(newAccount: ICreateAccount): Observable<boolean> {
    const account = this.formToAccount(newAccount);
    console.log(account)
    this.accounts = [...this.accounts, account];

    return of(true);
  }

  editAccount(editAccount: ICreateAccount, id: string): Observable<boolean> {
    const account = this.formToAccount(editAccount, id);
    console.log(id, account)
    this.accounts = this.accounts.map(item => {
      if (item.id === id) {
        return account;
      }
      return item;
    });
    return of(true);
  }

  deleteAccount(id: string): Observable<boolean> {
    this.accounts = this.accounts.filter(item => item.id != id);
    return of(true);
  }

  formToAccount(formAccount: ICreateAccount, _id?: string): Account {
    const id = _id ?? String(this.accounts.length + 1);
    const account: Account = {
      id: id,
      type: formAccount.type,
      login: formAccount.login,
      avatar: formAccount.avatar,
      password: formAccount.password,
      birthdate: formAccount.birthdate,
      gender: formAccount.gender,
      link: formAccount.link,
      reg_date: formAccount.reg_date,
    }

    if (account.type === 'facebook') {
      account.facebook_field = formAccount.extra_field;
    } else if (account.type === 'twitter') {
      account.twitter_field = formAccount.extra_field;
    } else if (account.type === 'instagram') {
      account.instagram_field = formAccount.extra_field;
    }

    return account;
  }

}
