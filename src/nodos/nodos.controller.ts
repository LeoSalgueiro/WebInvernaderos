import { Controller, Get, Post, Request } from '@nestjs/common';
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

  @Get('nodo')
  async getNodo(@Request() req){
    const result = await this.nodoService.findOne(req.query.email);
    return result;
  }

  @Post('')
  async postNodo(@Request() req) {
    const result = await this.nodoService.insertOne(req.body);
    return result;
  }
}
