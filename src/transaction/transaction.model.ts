import { Document } from 'mongoose';

export interface Transaction extends Document {
  readonly date: Date;
  readonly amount: number;
  readonly account: string;
  readonly user: any;
}
