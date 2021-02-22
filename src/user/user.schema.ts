import * as mongoose from 'mongoose';
import { SchemaTypes } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Your name is required'],
    max: 256,
  },
  lastname: {
    type: String,
    max: 256,
    default: '',
  },
  email: {
    type: String,
    max: 256,
    required: [true, 'Email address is required'],
    trim: true,
    lowercase: true,
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  phone_number: {
    type: String,
    max: 10,
    min: 10,
    default: '',
  },
  transactions: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Transaction',
    },
  ],
});
