import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop([String])
  foto: string[];

  @Prop()
  nombre: string;

  @Prop()
  apellido: string;

  @Prop()
  dni: number;

  @Prop()
  direccion: string;

  @Prop()
  fechaNac: string;

  @Prop()
  genero: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  nombreUser: string;

  @Prop()
  hash: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
