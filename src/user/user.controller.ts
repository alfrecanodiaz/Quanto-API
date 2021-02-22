import {
  Controller,
  Res,
  Get,
  HttpStatus,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('')
  async findAll(@Res() res) {
    const lists = await this.service.findAll();
    return res.status(HttpStatus.OK).json(lists);
  }

  @Get(':id')
  async findById(@Res() res, @Param('id') id: string) {
    const lists = await this.service.findById(id);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(lists);
  }

  @Post('')
  async addCustomer(@Res() res, @Body() userDTO: UserDTO) {
    const lists = await this.service.create(userDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User has been created successfully',
      lists,
    });
  }

  @Put(':id')
  async update(@Res() res, @Param('id') id: string, @Body() userDTO: UserDTO) {
    const lists = await this.service.update(id, userDTO);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User has been successfully updated',
      lists,
    });
  }

  @Delete(':id')
  async delete(@Res() res, @Param('id') id: string) {
    const lists = await this.service.delete(id);
    if (!lists) throw new NotFoundException('User does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'User has been deleted',
      lists,
    });
  }
}
