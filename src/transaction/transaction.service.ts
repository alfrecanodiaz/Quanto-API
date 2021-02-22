import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from './transaction.model';
import { TransactionDTO } from './transaction.dto';

@Injectable()
export class TransactionService {
  constructor(@InjectModel('Transaction') private model: Model<Transaction>) {}

  async findAll(): Promise<any> {
    return await this.model.find().exec();
  }

  async findById(id): Promise<Transaction> {
    return await this.model.findById(id).exec();
  }

  async find(req): Promise<any> {
    return await this.model.find(req).exec();
  }

  async create(transactionDTO: TransactionDTO): Promise<any> {
    const transaction = new this.model(transactionDTO);
    return transaction.save();
  }

  async update(id, transactionDTO: TransactionDTO): Promise<any> {
    return await this.model.findByIdAndUpdate(id, transactionDTO, {
      new: true,
    });
  }

  async link(id, user: string): Promise<any> {
    return await this.model.findByIdAndUpdate(
      id,
      { user: user },
      {
        new: true,
      },
    );
  }

  async delete(id): Promise<any> {
    return await this.model.findByIdAndRemove(id);
  }
}
