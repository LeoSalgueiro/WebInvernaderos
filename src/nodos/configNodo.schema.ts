import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type nodosConfigDocument = ConfigNodo & Document;

@Schema()
export class ConfigNodo {
  @Prop()
  invernadero: string;

  @Prop()
  usuario: string;

  @Prop()
  nombre: string;

  @Prop()
  tipo: string;

  @Prop()
  email: string;

  @Prop()
  funcion: Array<object>;

  @Prop()
  topics: Array<string>;
}

export const ConfigNodoSchema = SchemaFactory.createForClass(ConfigNodo);
