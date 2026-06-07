import { Module } from '@nestjs/common';
import { UtilizatoriService } from './utilizatori.service';
import { UtilizatoriController } from './utilizatori.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [UtilizatoriController],
  providers: [UtilizatoriService],
})
export class UtilizatoriModule {}
