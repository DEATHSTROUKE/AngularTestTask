type network = 'facebook' | 'twitter' | 'instagram';
type gender = 'мужской' | 'женский'

export interface IBaseAcc {
  id: string;
  type: network;
  avatar?: string;
  link: string;
  login: string;
  password: string;
  gender: gender;
  birthdate: string;
  reg_date: string;
}

export interface IFacebookAcc extends IBaseAcc {
  type: 'facebook';
  facebook_field?: string;
}

export interface ITwitterAcc extends IBaseAcc {
  type: 'twitter';
  twitter_field?: string;
}

export interface IInstagramAcc extends IBaseAcc {
  type: 'instagram';
  instagram_field?: string;
}

export type Account = IFacebookAcc | ITwitterAcc | IInstagramAcc

export interface ICreateAccount {
  type: network;
  login: string;
  password: string;
  avatar: string;
  birthdate: string;
  gender: gender;
  link: string;
  reg_date: string;
  extra_field: string;
}
