import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Nodo, nodosDocument } from './nodos.schema';

@Injectable()
export class NodosService {
  constructor(
    @InjectModel(Nodo.name) private nodoModel: Model<nodosDocument>,
  ) {}

  async findAll(email): Promise<Nodo[]> {
    return await this.nodoModel.find({ email: email }).sort({ fechaAlta: -1 });
  }

  async findOne(email): Promise<Nodo> {
    const res = await this.nodoModel
      .find({ email: email })
      .sort({ fechaAlta: -1 });
    const result = res[0];
    return result;
  }

  async insertOne(body): Promise<Nodo> {
    return await this.nodoModel.create(body);
  }

  /*
  async insert(body): Promise<Nodo> {
    return await this.nodoModel.insertMany({
      nombre: body.nombre,
      conexiones: body.conexiones,
      fechaAlta: body.fechaAlta,
      tipo: body.tipo,
      email: body.email,
      descripcion: body.descripcion,
    });
  }
  */
}
