import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly lastname: string;
  readonly email: string;
  readonly phone_number: string;
}
