import { ApiProperty } from '@nestjs/swagger';

export class TransactionDTO {
  @ApiProperty({
    description: 'Created date of the transaction',
  })
  date: Date;
  @ApiProperty({
    description: 'Amount of the transaction',
    required: true,
  })
  readonly amount: number;
  @ApiProperty({
    description: 'Destination account of the transaction',
    required: true,
  })
  readonly account: string;
  @ApiProperty({
    description: 'User linked to the transaction',
    required: true,
  })
  readonly user: string;
}
