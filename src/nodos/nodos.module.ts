import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigNodo, ConfigNodoSchema } from './configNodo.schema';
import { NodosController } from './nodos.controller';
import { Nodo, NodoSchema } from './nodos.schema';
import { NodosService } from './nodos.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Nodo.name,
        schema: NodoSchema,
        collection: 'nodos',
      },
      {
        name: ConfigNodo.name,
        schema: ConfigNodoSchema,
        collection: 'configNodo',
      },
    ]),
  ],
  controllers: [NodosController],
  providers: [NodosService],
})
export class NodosModule {}
