import { Controller, Get, Post, Request } from '@nestjs/common';
import { get } from 'http';
import { NodosService } from './nodos.service';

@Controller('nodos')
export class NodosController {
  constructor(private nodoService: NodosService) {}

  //@UseGuards(JwtAuthGuard)
  @Get('nodos')
  async getNodos(@Request() req) {
    const result = await this.nodoService.findAll(req.query.email);
    return result;
  }

  @Get('informacionPorNombre')
  async getNodosPorNombre(@Request() req) {
    const result = await this.nodoService.findAllByNombre(
      req.query.email,
      req.query.nombre,
    );
    return result;
  }

  @Get('nodo')
  async getNodo(@Request() req) {
    const result = await this.nodoService.findOne(req.query.email);
    return result;
  }

  @Post('')
  async postNodo(@Request() req) {
    const result = await this.nodoService.insertOne(req.body);
    return result;
  }

  @Get('configNodo')
  async getNodoConfig(@Request() req) {
    const result = await this.nodoService.getConfiguracionNodos(
      req.query.email,
    );
    return result;
  }

  @Get('configUnNodo')
  async getNodoConfigPorNombre(@Request() req) {
    const result = await this.nodoService.getConfiguracionDeNodo(
      req.query.email,
      req.query.nombreNodo,
    );
    return result;
  }

  @Get('ultimaInformacionDeNodos')
  async getUltimaInformacionDeNodo(@Request() req) {
    const result = await this.nodoService
      .getUltimoIngreso(req.query.email, req.query.nombre)
      .then((response) => {
        //console.log(response);
        return response;
      });

      return result;
  }
}
