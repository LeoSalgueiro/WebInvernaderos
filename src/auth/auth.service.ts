import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private usuariosSertvice: UsuariosService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usuariosSertvice.buscarUsuario(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(body: any) {
    const payload = { username: body.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
