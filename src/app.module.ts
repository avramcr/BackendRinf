import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComenziModule } from './comenzi/comenzi.module';
import { UtilizatoriModule } from './utilizatori/utilizatori.module';

@Module({
  imports: [ComenziModule, UtilizatoriModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
