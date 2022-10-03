import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { wrap } from '@mikro-orm/core';

import { CreateStatisticDto } from './dto/create-statistic.dto';
import { Statistic } from './entities/statistic.entity';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Statistic)
    private readonly statisticRepository: EntityRepository<Statistic>,
  ) {}

  async create(createStatisticDto: CreateStatisticDto) {
    const { date } = createStatisticDto;
    const statistic = new Statistic(date);
    wrap(statistic).assign(createStatisticDto);
    await this.statisticRepository.persistAndFlush(statistic);

    return statistic;
  }

  async findAll(from: Date, to: Date) {
    const statistics = await this.statisticRepository
      .createQueryBuilder('a')
      .select('*')
      .where({
        $and: [{ date: { $gt: from } }, { date: { $lt: to } }],
      })
      .getResult();

    return statistics;
  }

  async removeAll() {
    await this.statisticRepository.nativeDelete({});
    return true;
  }
}
