import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { LocalStratergy } from "./auth/local.stratergy";
import { AuthService } from "./auth/auth.service";
import { RoleGuard } from "./role.guard";
import { CONSTRANTS } from "./app.constants";

@Controller('app')
export class AppController{
    constructor(private readonly authService:AuthService){

    }
    @Post('/login')
    @UseGuards(AuthGuard("local"))
    login(@Request() req):string{
        //console.log(req.user);
        
        const token= this.authService.generateToken(req.user)
        return token;
    }

    @Get('/admin')
    @UseGuards(AuthGuard("jwt"))
    admin(@Request() req):string{        
        return " PRIVATE DATA of admin";
    }

    @Get('/user')
    @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTRANTS.ROLES.USER))
    user(@Request() req):string{
        return " PRIVATE DATA of Users";
    }
}