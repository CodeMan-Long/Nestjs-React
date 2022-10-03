import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Statistic {
  @PrimaryKey()
  id: number;

  @Property()
  date: Date;

  @Property({ default: 0 })
  views: number;

  @Property({ default: 0 })
  clicks: number;

  @Property({ default: 0 })
  cost: number;
}
