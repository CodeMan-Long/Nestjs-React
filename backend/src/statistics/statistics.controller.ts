import { Controller, Get, Post, Body, Delete, Query } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { CreateStatisticDto } from './dto/create-statistic.dto';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Post()
  create(@Body() createStatisticDto: CreateStatisticDto) {
    return this.statisticsService.create(createStatisticDto);
  }

  @Get()
  findAll(@Query('from') from: Date, @Query('to') to: Date) {
    return this.statisticsService.findAll(from, to);
  }

  @Delete()
  removeAll() {
    return this.statisticsService.removeAll();
  }
}
