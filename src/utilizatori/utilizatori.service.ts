import { Injectable } from '@nestjs/common';
import { CreateUtilizatoriDto } from './dto/create-utilizatori.dto';
import { UpdateUtilizatoriDto } from './dto/update-utilizatori.dto';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class UtilizatoriService {
  private prisma = new PrismaClient();

  async create(createUtilizatoriDto: CreateUtilizatoriDto) {
    return this.prisma.utilizator.create({
      data: {
        nume: createUtilizatoriDto.nume,
        email: createUtilizatoriDto.email,
        parola: createUtilizatoriDto.parola,
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
}
