import { Strategy } from "passport-http-bearer";
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from "./auth.service";
import { Injectable } from "@nestjs/common";
// A fixed admin token example
@Injectable()
export class BearerStrategy extends PassportStrategy(Strategy) { // strategy default name: bearer
  constructor(private authService: AuthService) {
    super();
  }

  async validate(token: string): Promise<any> {
    console.log('validating bearer token');
    return await this.authService.validateIssued(token);
  }
}
