import * as mongoose from 'mongoose';
import { SchemaTypes } from 'mongoose';

export const TransactionSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  amount: {
    type: Number,
    required: [true, 'The amount is required'],
  },
  account: {
    type: String,
    required: [true, 'The account is required'],
  },
  user: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
  },
});
