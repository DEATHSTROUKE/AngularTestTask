import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Observable, of, throwError} from "rxjs";
import {IUser, IUserInfo} from "../models/user";
import {users_data} from "../data/users";
import {Account} from "../models/account";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userName: string | null = null;
  avatar?: string;

  constructor(private router: Router) {
    this.userName = this.getUserFromStorage();
    const user = this.findUserByName();
    this.avatar = user?.avatar;
  }

  isLoggedIn(): boolean {
    return this.getUserFromStorage() != null;
  }

  findUserByName(): IUser | undefined {
    return users_data.find(user => user.name === this.userName)
  }

  getUserFromStorage() {
    //Should be jwt token instead of username
    return localStorage.getItem('user');
  }

  setUserToStorage(value: string) {
    localStorage.setItem('user', value);
  }

  login(userInfo: IUserInfo): Observable<string | boolean> {
    const user = users_data.find(user => userInfo.name === user.name &&
      userInfo.password === user.password);

    if (user) {
      this.userName = user.name;
      this.setUserToStorage(user.name);
      this.router.navigate(['']);
      return of(true);
    }

    return throwError(() => new Error('Ошибка авторизации'))
  }

  register(userInfo: IUserInfo): Observable<string | boolean> {
    const user = this.findUserByName();
    if (!user) {
      const newUser = {
        id: String(users_data.length + 1),
        name: userInfo.name,
        password: userInfo.password,
        accounts: [],
      }
      users_data.push(newUser);
      this.userName = userInfo.name;
      this.setUserToStorage(userInfo.name);
      this.router.navigate(['']);
      return of(true);
    }
    return throwError(() => new Error('Пользователь с таким именем уже существует'))
  }

  getPassword(): string {
    console.log(this.userName)
    return this.findUserByName()?.password ?? '';
  }

  changePassword(newPassword: string): Observable<boolean> {
    const user = this.findUserByName()
    if (user) {
      user.password = newPassword;
      return of(true);
    }
    return throwError(() => new Error('Ошибка смены пароля'))
  }

  changeAvatar(avatar: string) {
    this.avatar = avatar;
  }

  deleteUser() {
    const userIdx = users_data.findIndex(user => user.name !== this.userName)
    users_data.splice(userIdx, 1);
    this.logout();
  }

  logout() {
    localStorage.removeItem('user');
    this.userName = null;
    this.router.navigate(['login']);
  }
}
