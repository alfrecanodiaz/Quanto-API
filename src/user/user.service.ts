import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private model: Model<User>) {}

  async findAll(): Promise<any> {
    return await this.model.find().exec();
  }

  async findById(id): Promise<User> {
    return await this.model.findById(id).exec();
  }

  async find(req): Promise<any> {
    return await this.model.find(req).exec();
  }

  async create(userDTO: UserDTO): Promise<any> {
    const user = new this.model(userDTO);
    return user.save();
  }

  async update(id, userDTO: UserDTO): Promise<any> {
    return await this.model.findByIdAndUpdate(id, userDTO, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.model.findByIdAndRemove(id);
  }
}
