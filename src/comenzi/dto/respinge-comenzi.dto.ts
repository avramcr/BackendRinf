import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsOptional,
  isNotEmpty,
} from 'class-validator';

export class RespingeComenziDto {
  @IsNotEmpty()
  @IsString()
  comentariu!: string;
}
