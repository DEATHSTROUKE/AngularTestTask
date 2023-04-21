import {Account} from "./account";

export interface IUser {
  id: string;
  name: string;
  avatar?: string;
  password: string;
  accounts: Account[];
}

export interface IUserInfo {
  name: string;
  password: string;
}
