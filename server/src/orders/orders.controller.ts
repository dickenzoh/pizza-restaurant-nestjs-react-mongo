import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './interfaces/order.interface';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersServices: OrdersService) {}

  @Get()
  findAll(): Promise<Order[]> {
    return this.ordersServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Order> {
    return this.ordersServices.findOne(id);
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersServices.create(createOrderDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Order> {
    return this.ordersServices.delete(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderDto: CreateOrderDto,
  ): Promise<Order> {
    return this.ordersServices.update(id, updateOrderDto);
  }
}
