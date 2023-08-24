import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarea } from './entities/tarea.entity';

@Injectable()
export class TareasService {
  constructor(
    @InjectRepository(Tarea)
    private readonly tareaRepository : Repository<Tarea>
  ){

  }
  async create(createTareaDto: CreateTareaDto) {
    return await this.tareaRepository.save({...createTareaDto,})
    //return 'se creo el gato'
  }

  async findAll() {
    return await this.tareaRepository.find();
  }

  async findOne(id: number) {
    return await this.tareaRepository.findOneBy({id});
  }

  async update(id: number, updateTareaDto: UpdateTareaDto) {
    return await this.tareaRepository.update(id,updateTareaDto)
  }

 async remove(id: number) {
    return await this.tareaRepository.softDelete({id});
    //el softdelete le pone fecha al deletedAt y cuando pedis todas las tareas no devuelve esa
  }
}
