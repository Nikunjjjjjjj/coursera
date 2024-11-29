import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CONSTRANTS } from 'src/app.constants';

@Injectable()
export class UsersService {
  public users:User[] =[{
    username:"user1",
    password:"admin1",
    email:"user1@gmail.com",
    age:23,
    role:CONSTRANTS.ROLES.ADMIN,
  },
  {
    username:"user2",
    password:"admin2",
    email:"user2@gmail.com",
    age:22,
    role:CONSTRANTS.ROLES.USER,
  },
  {
    username:"user3",
    password:"admin3",
    email:"user3@gmail.com",
    age:21,
    role:CONSTRANTS.ROLES.USER,
  }
]

  

  findUserByEmail(userEmail: string):User {
    return this.users.find((user:User)=> user.email == userEmail);
  }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
