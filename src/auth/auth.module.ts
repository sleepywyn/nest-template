import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { BearerStrategy } from './bearer.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [PassportModule],
  providers: [AuthService, LocalStrategy, BearerStrategy]
})
export class AuthModule {}
