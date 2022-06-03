import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export type nodosDocument = Nodo & Document;

@Schema()
export class Nodo {
  @Prop()
  conexiones: Array<string>;

  @Prop()
  nombre: string;

  @Prop()
  tipo: string;

  @Prop()
  email: string;

  @Prop()
  descripcion: string;

  @Prop()
  fechaAlta: Date;
}

export const NodoSchema = SchemaFactory.createForClass(Nodo);
