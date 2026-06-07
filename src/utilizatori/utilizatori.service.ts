import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUtilizatoriDto } from './dto/create-utilizatori.dto';
import { UpdateUtilizatoriDto } from './dto/update-utilizatori.dto';
import { PrismaClient } from '@prisma/client';
import { LoginUtilizatoriDto } from './dto/login-utilizatori.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
@Injectable()
export class UtilizatoriService {
  private prisma = new PrismaClient();

  private jwt = new JwtService({
    secret: process.env.JWT_SECRET || 'secret_test',
    signOptions: {
      expiresIn: '1d',
    },
  });

  async create(createUtilizatoriDto: CreateUtilizatoriDto) {
    const saltRounds = 10;

    const parolaCriptata = await bcrypt.hash(
      createUtilizatoriDto.parola,
      saltRounds,
    );
    return this.prisma.utilizator.create({
      data: {
        nume: createUtilizatoriDto.nume,
        email: createUtilizatoriDto.email,
        parola: parolaCriptata,
      },
    });
  }

  async findAll() {
    return this.prisma.utilizator.findMany();
  }

  async findOne(id: number) {
    return this.prisma.utilizator.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateUtilizatoriDto: UpdateUtilizatoriDto) {
    return this.prisma.utilizator.update({
      where: { id },
      data: updateUtilizatoriDto,
    });
  }

  remove(id: number) {
    return this.prisma.utilizator.delete({
      where: { id },
    });
  }

  async login(loginUtilizatoriDto: LoginUtilizatoriDto) {
    const utilizator = await this.prisma.utilizator.findUnique({
      where: {
        email: loginUtilizatoriDto.email,
      },
    });

    if (!utilizator) {
      throw new UnauthorizedException('Email inexistent.');
    }

    const parolaCorecta = await bcrypt.compare(
      loginUtilizatoriDto.parola,
      utilizator.parola,
    );

    if (!parolaCorecta) {
      throw new UnauthorizedException('Parolă incorectă.');
    }

    const payload = {
      sub: utilizator.id,
      email: utilizator.email,
      rol: utilizator.rol,
    };

    const token = await this.jwt.signAsync(payload);

    return {
      message: 'Login reușit',
      access_token: token,
      utilizator: {
        id: utilizator.id,
        nume: utilizator.nume,
        email: utilizator.email,
        rol: utilizator.rol,
      },
    };
  }
}
