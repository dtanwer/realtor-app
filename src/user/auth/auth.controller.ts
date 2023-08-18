import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDtos, SignUpDtos } from '../dtos/auth.dtos';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signup')
  async signup(@Body() body: SignUpDtos) {
    try {
      return await this.authService.signUp(body);
    } catch (error) {
      return error;
    }
  }
  @Post('/login')
  async login(@Body() body: LoginDtos) {
    console.log(body);
    try {
        return await this.authService.login(body)    
    } catch (error) {
        return error;
    }
  }
}
