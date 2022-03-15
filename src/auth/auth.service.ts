import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  validateUser(username: string, password: string) {
    // 预留
    if (username === 'admin') return {username};
    return null;
  }

  validateIssued(token: string) {
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
    console.log(`received token: ${token}`);
    console.log(`config token: ${this.configService.get<String>('bearer')}`); // 注意配置大小写
    if (token === this.configService.get<String>('bearer')) return {issuer: 'auth-service'};
    return null;
  }
}
