import { PartialType } from '@nestjs/mapped-types';
import { CreateConvertionDto } from './create-convertion.dto';

export class UpdateConvertionDto extends PartialType(CreateConvertionDto) {}
