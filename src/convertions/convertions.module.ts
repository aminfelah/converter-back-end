import { Module } from '@nestjs/common';
import { ConvertionsService } from './convertions.service';
import { ConvertionsController } from './convertions.controller';

@Module({
  controllers: [ConvertionsController],
  providers: [ConvertionsService]
})
export class ConvertionsModule {}
