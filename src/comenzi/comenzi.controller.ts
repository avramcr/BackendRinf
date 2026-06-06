import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComenziService } from './comenzi.service';
import { CreateComenziDto } from './dto/create-comenzi.dto';
import { UpdateComenziDto } from './dto/update-comenzi.dto';

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
}
