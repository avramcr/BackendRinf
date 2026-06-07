import { PartialType } from '@nestjs/mapped-types';
import { CreateComenziDto } from './create-comenzi.dto';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class UpdateComenziDto {
  @IsNotEmpty()
  @IsString()
  titlu!: string;

  @IsOptional()
  @IsString()
  descriere?: string;

  @IsNotEmpty()
  @IsString()
  categorie!: string;

  @IsNumber()
  @IsPositive()
  suma!: number;
}
