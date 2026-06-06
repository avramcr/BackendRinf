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
        utilizatorId: createComenziDto.utilizatorId,
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

    if (comanda.status !== StatusComanda.APROBARE_MANAGER) {
      throw new Error('Comanda nu este in etapa de aprobare manager');
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

  async aprobareIt(id: number) {
    const comanda = await this.prisma.comanda.findUnique({
      where: { id },
    });

    if (!comanda) {
      throw new Error('Comanda nu exista');
    }

    if (comanda.status !== StatusComanda.APROBARE_IT) {
      throw new Error('Comanda nu este in etapa de aprobare IT');
    }

    return this.prisma.comanda.update({
      where: { id },
      data: {
        status: StatusComanda.APROBARE_FINANCIAR,
      },
    });
  }

  async aprobareFinanciar(id: number) {
    const comanda = await this.prisma.comanda.findUnique({
      where: { id },
    });

    if (!comanda) {
      throw new Error('Comanda nu exista');
    }

    if (comanda.status !== StatusComanda.APROBARE_FINANCIAR) {
      throw new Error('Comanda nu este in etapa de aprobare financiara');
    }
    return this.prisma.comanda.update({
      where: { id },
      data: {
        status: StatusComanda.FACTURATA,
      },
    });
  }

  async finalizare(id: number) {
    const comanda = await this.prisma.comanda.findUnique({
      where: { id },
    });

    if (!comanda) {
      throw new Error('Comanda nu exista');
    }

    if (comanda.status !== StatusComanda.FACTURATA) {
      throw new Error('Comanda nu este facturata');
    }

    return this.prisma.comanda.update({
      where: { id },
      data: {
        status: StatusComanda.FINALIZATA,
      },
    });
  }

  async retrimite(id: number) {
    const comanda = await this.prisma.comanda.findUnique({
      where: { id },
    });

    if (!comanda) {
      throw new Error('Comanda nu exista');
    }

    if (comanda.status !== StatusComanda.NECESITA_RELUCRARE) {
      throw new Error('Comanda nu necesita relucrare');
    }

    let statusNou: StatusComanda;

    if (comanda.suma < 100) {
      if (comanda.categorie === 'ECHIPAMENTE_IT') {
        statusNou = StatusComanda.APROBARE_IT;
      } else {
        statusNou = StatusComanda.APROBARE_FINANCIAR;
      }
    } else {
      statusNou = StatusComanda.APROBARE_MANAGER;
    }

    return this.prisma.comanda.update({
      where: { id },
      data: {
        status: statusNou,
        comentariuRespingere: null,
      },
    });
  }
}
