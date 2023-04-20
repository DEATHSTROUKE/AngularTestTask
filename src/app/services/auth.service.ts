import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Observable, of, throwError} from "rxjs";
import {IUserInfo} from "../models/user";
import {users_data} from "../data/users";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userName: string | null = null;

  constructor(private router: Router) {
  }

  isLoggedIn(): boolean {
    return this.getUserFromStorage() != null;
  }

  getUserFromStorage() {
    //Should be jwt token instead of username
    return localStorage.getItem('user');
  }

  setUserToStorage(value: string) {
    localStorage.setItem('user', value);
  }

  login(userInfo: IUserInfo): Observable<string | boolean> {
    const user = users_data.find(item => userInfo.name === item.name &&
      userInfo.password === item.password);
    console.log(user);

    if (user) {
      this.userName = user.name;
      this.setUserToStorage(user.name);
      this.router.navigate(['']);
      return of(true);
    }

    return throwError(() => new Error('Failed login'))
  }


}
