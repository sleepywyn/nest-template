import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate, Environment } from './env.validation';

import { HeroModule } from './hero/hero.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    HeroModule, 
    AuthModule,
    ConfigModule.forRoot({
      validate,
      envFilePath: process.env.NODE_ENV === Environment.Development ? '.dev.env' 
                :  process.env.NODE_ENV === Environment.Test ? '.test.env'
                :  process.env.NODE_ENV === Environment.Production ? '.prod.env' : '.dev.env', // add to nest-cli.json  "assets": [{"include": "*.env", "outDir": "./dist"}],
      isGlobal: true
    })
  ]
})
export class AppModule {}
