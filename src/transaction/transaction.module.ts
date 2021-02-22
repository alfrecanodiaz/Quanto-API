import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema } from './transaction.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'Transaction',
        useFactory: () => {
          return TransactionSchema;
        },
      },
    ]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
