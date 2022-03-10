import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConvertionsService } from './convertions.service';
import { CreateConvertionDto } from './dto/create-convertion.dto';
import { UpdateConvertionDto } from './dto/update-convertion.dto';

@Controller('convertions')
export class ConvertionsController {
  constructor(private readonly convertionsService: ConvertionsService) {}

  @Post()
  create(@Body() createConvertionDto: CreateConvertionDto) {
    return this.convertionsService.create(createConvertionDto);
  }

  @Get()
  findAll() {
    return this.convertionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.convertionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConvertionDto: UpdateConvertionDto) {
    return this.convertionsService.update(+id, updateConvertionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.convertionsService.remove(+id);
  }
}
