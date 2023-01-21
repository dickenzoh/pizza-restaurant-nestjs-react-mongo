import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './interfaces/order.interface';
import { OrderClass } from './schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(OrderClass.name)
    private orderModel: Model<OrderClass>,
  ) {}

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order> {
    return await this.orderModel.findOne({ _id: id });
  }

  async create(order: Order): Promise<Order> {
    const newProduct = new this.orderModel(order);
    return await newProduct.save();
  }

  async delete(id: string): Promise<Order> {
    return await this.orderModel.findByIdAndRemove(id);
  }

  async update(id: string, order: Order): Promise<Order> {
    return await this.orderModel.findByIdAndUpdate(id, order, {
      new: true,
    });
  }
}
