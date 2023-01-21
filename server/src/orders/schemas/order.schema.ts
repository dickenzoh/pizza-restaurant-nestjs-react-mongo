import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class OrderClass extends Document {
  @Prop()
  name: string;

  @Prop()
  toppings: string;

  @Prop()
  status: string;

  @Prop()
  duration: number;
}

export const OrderSchema = SchemaFactory.createForClass(OrderClass);
