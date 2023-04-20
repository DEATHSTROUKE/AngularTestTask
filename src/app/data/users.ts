import {IUser} from "../models/user";

export const users_data: IUser[] = [
  {
    id: '1',
    name: 'user1',
    password: '1',
    accounts: [{
      id: '1',
      type: 'facebook',
      login: 'user1',
      password: '123123',
      birthdate: '24.03.2003',
      gender: 'мужской',
      link: 'https://fb.com/123',
      reg_date: '10.04.2023',
      facebook_field: 'example'
    }]
  }
]
