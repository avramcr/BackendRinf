import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UtilizatoriService } from './utilizatori.service';
import { CreateUtilizatoriDto } from './dto/create-utilizatori.dto';
import { UpdateUtilizatoriDto } from './dto/update-utilizatori.dto';

@Controller('utilizatori')
export class UtilizatoriController {
  constructor(private readonly utilizatoriService: UtilizatoriService) {}

  @Post()
  create(@Body() createUtilizatoriDto: CreateUtilizatoriDto) {
    return this.utilizatoriService.create(createUtilizatoriDto);
  }

  @Get()
  findAll() {
    return this.utilizatoriService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.utilizatoriService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUtilizatoriDto: UpdateUtilizatoriDto) {
    return this.utilizatoriService.update(+id, updateUtilizatoriDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.utilizatoriService.remove(+id);
  }
}
