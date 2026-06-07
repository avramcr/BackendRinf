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
import { Headers } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('comenzi')
export class ComenziController {
  constructor(private readonly comenziService: ComenziService) {}

  private jwt = new JwtService({
    secret: process.env.JWT_SECRET || 'secret_test',
  });

  @Post()
  async create(
    @Body() createComenziDto: CreateComenziDto,
    @Headers('authorization') authorization: string,
  ) {
    const token = authorization.split(' ')[1];
    const decoded = await this.jwt.verifyAsync(token);
    return this.comenziService.create(createComenziDto, decoded.sub);
  }

  @Get('utilizator')
  async getOrderByUtilizatorId(
    @Headers('authorization') authorization: string,
  ) {
    const token = authorization.split(' ')[1];
    const decoded = await this.jwt.verifyAsync(token);

    return this.comenziService.getOrderByUtilizatorId(decoded.sub);
  }

  @Get()
  findAll() {
    return this.comenziService.findAll();
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

  @Patch(':id/aprobare-managerComanda')
  aprobareManager(@Param('id') id: string) {
    return this.comenziService.aprobareManager(+id);
  }

  @Patch(':id/aprobare-it')
  aprobarIt(@Param('id') id: string) {
    return this.comenziService.aprobareIt(+id);
  }

  @Patch(':id/aprobare-financiar')
  aprobareFinanciar(@Param('id') id: string) {
    return this.comenziService.aprobareFinanciar(+id);
  }

  @Patch(':id/retrimite')
  retrimite(
    @Param('id') id: string,
    @Body() updateComenziDto: UpdateComenziDto,
  ) {
    return this.comenziService.retrimite(+id, updateComenziDto);
  }

  @Get('comenziManager')
  getComenziAprobareManager() {
    return this.comenziService.getComenziAprobareManager();
  }

  @Get('comenziDepartamentIt')
  getComenziAprobareIt() {
    return this.comenziService.getComenziAprobareIt();
  }

  @Get('comenziDepartamentFinanciar')
  getComenziAprobareFinanciar() {
    return this.comenziService.getComenziAprobareFinanciar();
  }

  @Get('/facturate')
  getComenziFacturate() {
    return this.comenziService.getComenziFacturate();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comenziService.findOne(+id);
  }
}
