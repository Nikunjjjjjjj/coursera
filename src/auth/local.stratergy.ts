import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UsersService} from "../users/users.service"
import { User } from "src/users/user.entity";
import { Injectable, UnauthorizedException } from "@nestjs/common";
//import { Strategy } from "passport-strategy";


@Injectable()
export class LocalStratergy extends PassportStrategy(Strategy){
    constructor(private readonly usersService: UsersService){
        super();
    }
    validate(password:string,useremail:string):User{
        const user:User= this.usersService.findUserByEmail(useremail);
        console.log(user);
        
        if (user === undefined) throw new UnauthorizedException();
        if (user != undefined && user.password == password){
            return user;
        }
        else{
            throw new UnauthorizedException()
        }
    }
}