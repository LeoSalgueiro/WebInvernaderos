import { Controller, Request, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Get()
  async getUsuarios() {
    const result = await this.usuariosService.findAll();
    return result;
  }

  @Post()
  async getUsuario(@Request() req) {
    const result = await this.usuariosService.buscarUsuario(req.body);
    return result;
  }

  @Post('update')
  async actualizarInformacion(@Request() req) {
    const result = await this.usuariosService.actualizarInformacionUsuario(
      req.body,
    );
    return result;
  }

  @Post('insert')
  async agregarUsuario(@Request() req) {
    const result = await this.usuariosService.agregarUsuario(req.body);
    return result;
  }
}
