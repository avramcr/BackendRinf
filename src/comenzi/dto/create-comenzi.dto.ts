import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsOptional,
  isNotEmpty,
} from 'class-validator';

export class CreateComenziDto {
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
