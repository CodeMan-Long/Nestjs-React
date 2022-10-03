import { IsNotEmpty } from 'class-validator';

export class CreateStatisticDto {
  @IsNotEmpty()
  readonly date: Date;

  readonly views: number;
  readonly clicks: number;
  readonly cost: number;
}
