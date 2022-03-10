import {  IsNotEmpty } from 'class-validator';
export class CreateConvertionDto {

    @IsNotEmpty()
    fromcurrency: string;
    @IsNotEmpty()
    tocurrency: string;
    @IsNotEmpty()
    date: string;
}
