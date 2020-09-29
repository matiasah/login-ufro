import {User} from '../models/user';
export const UserMocks: User[] = [
  {
    id: '1',
    username: 'j.cespedes01@ufromail.cl',
    password: 'adminadmin',
    authorities: ['ROLE_ADMIN'],
    enabled: true,
    createdAt: '2020-09-29T01:45:41.063Z'
  },
  {
    id: '2',
    username: 'm.hermosilla03@ufromail.cl ',
    password: 'adminadmin',
    authorities: ['ROLE_ADMIN'],
    enabled: true,
    createdAt: '2020-09-29T01:45:41.063Z'
  },
  {
    id: '3',
    username: 'f.mariqueo01@ufromail.cl',
    password: 'adminadmin',
    authorities: ['ROLE_ADMIN'],
    enabled: true,
    createdAt: '2020-09-29T01:45:41.063Z'
  },
];
