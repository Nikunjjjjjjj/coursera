import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

function globalMidllewareOne(req:Request,res:Response,next:NextFunction) {
  //console.log("this is global 1");
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMidllewareOne);
  await app.listen(process.env.PORT ?? 3000);
  console.log(process.env.PORT);
  
}
bootstrap();
