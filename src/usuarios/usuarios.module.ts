import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario, UsuarioSchema } from './usuario.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosController } from './usuarios.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
  ],
  providers: [UsuariosService],
  exports: [UsuariosService],
  controllers: [UsuariosController],
})
export class UsuariosModule {}
