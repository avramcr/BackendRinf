import { Module } from '@nestjs/common';
import { UtilizatoriService } from './utilizatori.service';
import { UtilizatoriController } from './utilizatori.controller';

@Module({
  controllers: [UtilizatoriController],
  providers: [UtilizatoriService],
})
export class UtilizatoriModule {}
