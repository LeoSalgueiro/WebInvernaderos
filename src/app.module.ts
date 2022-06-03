import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NodosModule } from './nodos/nodos.module';
import { NodosController } from './nodos/nodos.controller';
import { NodosService } from './nodos/nodos.service';
import { Nodo, NodoSchema } from './nodos/nodos.schema';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    UsuariosModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://Usuario-Administrador:60pVzoUn9uRtsUch@cluster0.snph0.mongodb.net/Huertas-Ant?retryWrites=true&w=majority',
      }),
    }),
    MongooseModule.forFeature([
      { name: Nodo.name, schema: NodoSchema, collection: 'nodos' },
    ]),
    NodosModule,
  ],
  controllers: [AppController, NodosController],
  providers: [AppService, NodosService],
})
export class AppModule {}
