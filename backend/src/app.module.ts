import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [MikroOrmModule.forRoot(), StatisticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
