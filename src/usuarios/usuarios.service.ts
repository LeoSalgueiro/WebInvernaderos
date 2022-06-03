import { Injectable } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Usuario, UsuarioDocument, UsuarioSchema } from './usuario.schema';
import { resourceLimits } from 'worker_threads';

// This should be a real class/interface representing a user entity
//export type Usuario2 = any;

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    const result = await this.usuarioModel.find().exec();
    //let result = await this.usuarioModel.find((user)=> user.name === nombre)
    return result;
  }

  async buscarUsuario(email): Promise<Usuario> {
    const result = await this.usuarioModel.findOne({
      email: email,
    });
    //let result = await this.usuarioModel.find((user)=> user.name === nombre)
    return result;
  }

  async actualizarInformacionUsuario(body): Promise<boolean> {
    const user = await this.buscarUsuario(body.email);
    //const updateUser = { ...user };
    if (body.foto) {
      user.foto = body.foto;
    }
    if (body.nombre) {
      user.nombre = body.nombre;
    }
    if (body.apellido) {
      user.apellido = body.apellido;
    }
    if (body.dni) {
      user.dni = body.dni;
    }
    if (body.direccion) {
      user.direccion = body.direccion;
    }
    if (body.fechaNac) {
      user.fechaNac = body.fechaNac;
    }
    if (body.genero) {
      user.genero = body.genero;
    }
    if (body.password) {
      user.password = body.password;
    }
    if (body.nombreUser) {
      user.nombreUser = body.nombreUser;
    }
    const resp = await this.usuarioModel.updateOne({ email: body.email }, user);
    return resp ? true : false;
  }

  async agregarUsuario(body): Promise<string> {
    const user = await this.buscarUsuario(body.email);

    const usuario = {
      foto: body.foto != null ? body.foto : '',
      nombre: body.nombre != null ? body.nombre : '',
      apellido: body.apellido != null ? body.apellido : '',
      dni: body.dni != null ? body.dni : '',
      direccion: body.direccion != null ? body.direccion : '',
      fechaNac: body.fechaNac != null ? body.fechaNac : '',
      genero: body.genero != null ? body.genero : '',
      email: body.email != null ? body.email : '',
      password: body.password != null ? body.password : '',
      nombreUser: body.nombreUser != null ? body.nombreUser : '',
    };

    if (user != null) {
      return 'El usuario ya existe';
    } else {
      const us = await this.usuarioModel.insertMany(usuario);
      return 'usuario agregado';
    }
  }

  /*
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<Usuario | undefined> {
    return this.users.find((user) => user.username === username);
  }
  */
}
