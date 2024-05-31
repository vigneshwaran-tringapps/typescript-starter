import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Repository } from 'typeorm';
import { ClassRoom } from './entities/class.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(ClassRoom)
    private readonly classRepo: Repository<ClassRoom>
  ){}

  async create(createClassDto: CreateClassDto) {
    return this.classRepo.save({
      name: createClassDto.name
    });
  }

  findAll() {
    return `This action returns all class`;
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
