import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { LocalStratergy } from "./local.stratergy";
import { UsersModule } from "src/users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { JwtStratergy } from "./jwt.stratergy";


@Module({
    imports:[ PassportModule,UsersModule,JwtModule.register({
        secret: "key",
        signOptions: { expiresIn: '60s' },
      }),],
    controllers:[],
    providers:[LocalStratergy,JwtStratergy,AuthService],
    exports:[AuthService],
})

export class AuthModule {}