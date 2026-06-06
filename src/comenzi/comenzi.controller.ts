import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ComenziService } from './comenzi.service';
import { CreateComenziDto } from './dto/create-comenzi.dto';
import { UpdateComenziDto } from './dto/update-comenzi.dto';
import { RespingeComenziDto } from './dto/respinge-comenzi.dto';

@Controller('comenzi')
export class ComenziController {
  constructor(private readonly comenziService: ComenziService) {}

  @Post()
  create(@Body() createComenziDto: CreateComenziDto) {
    return this.comenziService.create(createComenziDto);
  }

  @Get()
  findAll() {
    return this.comenziService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comenziService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComenziDto: UpdateComenziDto) {
    return this.comenziService.update(+id, updateComenziDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comenziService.remove(+id);
  }

  @Patch(':id/respingere')
  respinge(
    @Param('id') id: string,
    @Body() respingeComenziDto: RespingeComenziDto,
  ) {
    return this.comenziService.respinge(+id, respingeComenziDto.comentariu);
  }

  @Patch(':id/aprobare-manager')
  aprobareManager(@Param('id') id: string) {
    return this.comenziService.aprobareManager(+id);
  }

  @Patch(':id/aprobareI')
  aprobarIt(@Param('id') id: string) {
    return this.comenziService.aprobareIt(+id);
  }

  @Patch(':id/aprobare-financiar')
  aprobareFinanciar(@Param('id') id: string) {
    return this.comenziService.aprobareFinanciar(+id);
  }

  @Patch(':id/finalizare')
  finalizare(@Param('id') id: string) {
    return this.comenziService.finalizare(+id);
  }

  @Patch(':id/retrimite')
  retrimite(@Param('id') id: string) {
    return this.comenziService.retrimite(+id);
  }
}
