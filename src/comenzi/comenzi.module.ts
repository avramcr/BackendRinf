import { Module } from '@nestjs/common';
import { ComenziService } from './comenzi.service';
import { ComenziController } from './comenzi.controller';

@Module({
  controllers: [ComenziController],
  providers: [ComenziService],
})
export class ComenziModule {}
