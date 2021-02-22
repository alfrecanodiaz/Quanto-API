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
import { TransactionService } from './transaction.service';
import { TransactionDTO } from './transaction.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly service: TransactionService) {}

  @Get('')
  async findAll(@Res() res) {
    const lists = await this.service.findAll();
    return res.status(HttpStatus.OK).json(lists);
  }

  @Get('user/:user')
  async findByUser(@Res() res, @Param('user') user: string) {
    const lists = await this.service.find({ user: user });
    return res.status(HttpStatus.OK).json(lists);
  }

  @Get(':id')
  async findById(@Res() res, @Param('id') id: string) {
    const lists = await this.service.findById(id);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(lists);
  }

  @Post('')
  async create(@Res() res, @Body() transactionDTO: TransactionDTO) {
    transactionDTO.date = new Date(); // creation date
    const lists = await this.service.create(transactionDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Transaction has been created successfully',
      lists,
    });
  }

  @Put(':id')
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() transactionDTO: TransactionDTO,
  ) {
    const lists = await this.service.update(id, transactionDTO);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Transaction has been successfully updated',
      lists,
    });
  }

  @Put(':id/link/:user')
  async link(@Res() res, @Param('id') id: string, @Param('user') user: string) {
    const lists = await this.service.link(id, user);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Transaction user has been successfully updated',
      lists,
    });
  }

  @Delete(':id')
  async delete(@Res() res, @Param('id') id: string) {
    const lists = await this.service.delete(id);
    if (!lists) throw new NotFoundException('Transaction does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Transaction has been deleted',
      lists,
    });
  }
}
