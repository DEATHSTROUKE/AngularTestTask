import {Account} from "./account";

export interface IUser {
  id: string;
  name: string;
  password: string;
  accounts: Account[];
}

export interface IUserInfo {
  name: string;
  password: string;
}
