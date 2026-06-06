import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComenziModule } from './comenzi/comenzi.module';

@Module({
  imports: [ComenziModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
