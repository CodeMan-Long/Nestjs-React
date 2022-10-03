import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs'

import { StatisticsService } from './statistics.service';
import { StatisticsController } from './statistics.controller';
import { Statistic } from './entities/statistic.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Statistic])],
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}
