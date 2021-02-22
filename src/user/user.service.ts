import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async findAll(): Promise<any> {
    return await this.userModel.find().exec();
  }

  async findById(id): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async find(req): Promise<any> {
    return await this.userModel.find(req).exec();
  }

  async create(userDTO: UserDTO): Promise<any> {
    const user = new this.userModel(userDTO);
    return user.save();
  }

  async update(id, userDTO: UserDTO): Promise<any> {
    return await this.userModel.findByIdAndUpdate(id, userDTO, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.userModel.findByIdAndRemove(id);
  }
}
