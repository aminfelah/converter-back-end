import { Injectable } from '@nestjs/common';
import { CreateConvertionDto } from './dto/create-convertion.dto';
import { UpdateConvertionDto } from './dto/update-convertion.dto';
import { Convertion } from './entities/convertion.entity';

@Injectable()
export class ConvertionsService {
  async create(createConvertionDto: CreateConvertionDto) {
    const convertion = Convertion.create(createConvertionDto);
   await convertion.save()
   return "convertion completed"
  }

  async findAll() : Promise<Convertion[]>{
     const convertions=Convertion.find();
     return convertions;
    
  }

  findOne(id: number) {
    return `This action returns a #${id} convertion`;
  }

  update(id: number, updateConvertionDto: UpdateConvertionDto) {
    return `This action updates a #${id} convertion`;
  }

  remove(id: number) {
    return `This action removes a #${id} convertion`;
  }
}
