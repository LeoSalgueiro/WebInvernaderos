import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NodosController } from './nodos.controller';
import { Nodo, NodoSchema } from './nodos.schema';
import { NodosService } from './nodos.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Nodo.name, schema: NodoSchema, collection: 'nodos' },
    ]),
  ],
  controllers: [NodosController],
  providers: [NodosService],
})
export class NodosModule {}
