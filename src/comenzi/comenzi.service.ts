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

  findAll() {
    return `This action returns all comenzi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comenzi`;
  }

  update(id: number, updateComenziDto: UpdateComenziDto) {
    return `This action updates a #${id} comenzi`;
  }

  remove(id: number) {
    return `This action removes a #${id} comenzi`;
  }
}
