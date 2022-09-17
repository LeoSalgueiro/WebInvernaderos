import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigNodo, nodosConfigDocument } from './configNodo.schema';
import { Nodo, nodosDocument } from './nodos.schema';

@Injectable()
export class NodosService {
  constructor(
    @InjectModel(Nodo.name) private nodoModel: Model<nodosDocument>,
    @InjectModel(ConfigNodo.name) private configNodoModel: Model<nodosConfigDocument>,
  ) {}

  async findAll(email): Promise<Nodo[]> {
    return await this.nodoModel.find({ email: email }).sort({ fechaAlta: -1 });
  }

  async findAllByNombre(email, nombre): Promise<Nodo[]> {
    return await this.nodoModel
      .find({ email: email, nombre: nombre })
      .sort({ fechaAlta: -1 })
      .limit(300);
  }

  async findOne(email): Promise<Nodo> {
    const res = await this.nodoModel
      .find({ email: email })
      .sort({ fechaAlta: -1 })
      .limit(5);
    const result = res[0];
    return result;
  }

  async insertOne(body): Promise<Nodo> {
    return await this.nodoModel.create(body);
  }

  async getConfiguracionNodos(email): Promise<ConfigNodo[]> {
    return await this.configNodoModel.find({ email: email });
  }

  async getConfiguracionDeNodo(email, nombreNodo): Promise<ConfigNodo> {
    return await this.configNodoModel.findOne({
      email: email,
      nombre: nombreNodo,
    });
  }

  async getUltimoIngreso(email, nombre): Promise<Nodo[]> {
    return await this.nodoModel
      .find({ email: email, nombre: nombre })
      .sort({ fechaAlta: -1 })
      .limit(1);
  }
}
