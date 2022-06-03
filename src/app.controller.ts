import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard'; //descomentar cuando sea el programa real
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { UsuariosService } from './usuarios/usuarios.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private userService: UsuariosService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  //@UseGuards(JwtAuthGuard)
  /*
  @Get('nodos')
  async getProfile(@Request() req) {
    let algo = "algo";
    
    let result = await this.userService.findAll(req.query.email);
    return result;
  }
  */
}
