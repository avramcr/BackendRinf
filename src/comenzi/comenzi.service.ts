import { Injectable } from '@nestjs/common';
import { CreateComenziDto } from './dto/create-comenzi.dto';
import { UpdateComenziDto } from './dto/update-comenzi.dto';

import { PrismaClient, StatusComanda } from '@prisma/client';

@Injectable()
export class ComenziService {
  private prisma = new PrismaClient();

  async create(createComenziDto: CreateComenziDto) {
    let status: StatusComanda;
    if (createComenziDto.suma < 100) {
      if (createComenziDto.categorie === 'ECHIPAMENTE_IT') {
        status = StatusComanda.APROBARE_IT;
      } else {
        status = StatusComanda.APROBARE_FINANCIAR;
      }
    } else {
      status = StatusComanda.APROBARE_MANAGER;
    }

    return this.prisma.comanda.create({
      data: {
        titlu: createComenziDto.titlu,
        descriere: createComenziDto.descriere,
        categorie: createComenziDto.categorie,
        suma: createComenziDto.suma,
        status,
      },
    });
  }

  async findAll() {
    return this.prisma.comanda.findMany();
  }

  async findOne(id: number) {
    return this.prisma.comanda.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateComenziDto: UpdateComenziDto) {
    return this.prisma.comanda.update({
      where: { id },
      data: updateComenziDto,
    });
  }

  async remove(id: number) {
    return this.prisma.comanda.delete({
      where: { id },
    });
  }

  async respinge(id: number, comentariu: string) {
    return this.prisma.comanda.update({
      where: { id },
      data: {
        status: StatusComanda.NECESITA_RELUCRARE,
        comentariuRespingere: comentariu,
      },
    });
  }

  async aprobareManager(id: number) {
    const comanda = await this.prisma.comanda.findUnique({
      where: { id },
    });

    if (!comanda) {
      throw new Error('Comanda nu exista');
    }

    if (comanda.categorie === 'ECHIPAMENTE_IT') {
      return this.prisma.comanda.update({
        where: { id },
        data: {
          status: StatusComanda.APROBARE_IT,
        },
      });
    }

    return this.prisma.comanda.update({
      where: { id },
      data: {
        status: StatusComanda.APROBARE_FINANCIAR,
      },
    });
  }
}
