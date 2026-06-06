import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUtilizatoriDto {
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  parola!: string;
}
