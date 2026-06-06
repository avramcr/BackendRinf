import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUtilizatoriDto {
  @IsNotEmpty()
  @IsString()
  nume!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  parola!: string;
}
