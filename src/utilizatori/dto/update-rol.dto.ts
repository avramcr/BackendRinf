import { IsEnum } from 'class-validator';

export enum Rol {
  CLIENT = 'CLIENT',
  MANAGER = 'MANAGER',
  IT = 'IT',
  FINANCIAR = 'FINANCIAR',
  ADMIN = 'ADMIN',
}

export class UpdateRolDto {
  @IsEnum(Rol)
  rol!: Rol;
}
