import {IUser} from "../models/user";

export let users_data: IUser[] = [
  {
    id: '1',
    name: 'User1',
    password: 'password123',
    avatar: 'https://www.digiseller.ru/preview/587043/p1_2295104_8d88ab8d.jpg',
    accounts: [{
      id: '1',
      type: 'facebook',
      login: 'user1',
      avatar: 'https://www.digiseller.ru/preview/587043/p1_2295104_8d88ab8d.jpg',
      password: '123123',
      birthdate: '2003-03-24',
      gender: 'мужской',
      link: 'https://fb.com/123',
      reg_date: '2023-04-10',
      facebook_field: 'example'
    }, {
      id: '2',
      type: 'facebook',
      login: 'user2',
      password: '123123',
      birthdate: '1994-02-12',
      gender: 'женский',
      link: 'https://fb.com/343',
      reg_date: '2022-10-04',
      facebook_field: 'example'
    }, {
      id: '3',
      type: 'facebook',
      login: 'nagibator3000',
      password: '123123',
      avatar: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-46.jpg',
      birthdate: '2002-02-15',
      gender: 'женский',
      link: 'https://fb.com/123',
      reg_date: '2023-04-10',
      facebook_field: 'example'
    }, {
      id: '4',
      type: 'instagram',
      login: 'Cool_Boy',
      password: '123123',
      avatar: 'https://otkritkis.com/wp-content/uploads/2022/06/pdtrp.jpg',
      birthdate: '',
      gender: 'мужской',
      link: 'https://fb.com/123',
      reg_date: '2020-06-20',
      instagram_field: 'example2'
    }, {
      id: '5',
      type: 'twitter',
      login: 'ITMO_University',
      password: '123123',
      birthdate: '2003-03-24',
      gender: 'мужской',
      link: 'https://twitter.com/123',
      reg_date: '2010-12-09',
    },
    ]
  }
]
