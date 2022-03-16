import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate, Environment } from './env.validation';
import { join } from 'path';

import configuration from './config/configuration';

import { HeroModule } from './hero/hero.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    HeroModule, 
    AuthModule,
    ConfigModule.forRoot({
      validate,
      envFilePath: process.env.NODE_ENV === Environment.Development ? join(__dirname, '.env.dev') // the default folder is not dist if not using path join
                :  process.env.NODE_ENV === Environment.Test ? join(__dirname, '.env.test')
                :  process.env.NODE_ENV === Environment.Production ? join(__dirname, '.env.prod') : join(__dirname, '.dev.env'), // add to nest-cli.json  "assets": [{"include": "*.env", "outDir": "./dist"}],
      load: [configuration],
      isGlobal: true
    })
  ]
})
export class AppModule {}
