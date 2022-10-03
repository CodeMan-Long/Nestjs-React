import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Statistic {
  @PrimaryKey()
  id: number;

  @Property()
  date: Date;

  @Property()
  views: number;

  @Property()
  clicks: number;

  @Property()
  cost: number;
}
