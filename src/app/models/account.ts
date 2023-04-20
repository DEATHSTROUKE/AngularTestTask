type network = 'facebook' | 'twitter' | 'instagram';

export interface IBaseAcc {
  id: string;
  type: network;
  link: string;
  login: string;
  password: string;
  gender: 'мужской' | 'женский';
  birthdate: string;
  reg_date: string;
}

export interface IFacebookAcc extends IBaseAcc {
  type: 'facebook';
  facebook_field: string;
}

export interface ITwitterAcc extends IBaseAcc {
  type: 'twitter';
  twitter_field: string;
}

export interface IInstagramAcc extends IBaseAcc {
  type: 'instagram';
  instagram_field: string;
}

export type Account = IFacebookAcc | ITwitterAcc | IInstagramAcc
