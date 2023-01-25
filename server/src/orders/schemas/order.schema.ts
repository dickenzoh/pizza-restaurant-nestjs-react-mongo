import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';


// Nested Schema
@Schema({_id: false,  versionKey: false })
export class SingleOrder extends Document {
  @Prop()
  name: string;

  @Prop({ type: [String] })
  toppings: string[];
  

  @Prop()
  status: string;

  @Prop()
  duration: number;
}
export const SingleOrderSchema = SchemaFactory.createForClass(SingleOrder);

class Toppings {
  @Prop({ type: String, required: true, lowercase: true })
  topping: string;

}

// Nested Schema
@Schema({_id: false, versionKey: false })
export class PrepTime extends Document {
  @Prop()
  dough: number;

  @Prop()
  toppings: number;

  @Prop()
  oven: number;

  @Prop()
  waiter: number;
}
export const PrepTimeSchema = SchemaFactory.createForClass(PrepTime);

// Parent Schema
@Schema({timestamps: true})
export class OrderClass extends Document {
  @Prop({ type: SingleOrder })
      orders: SingleOrder;

  @Prop({default: now()})
    createdAt: Date;

  @Prop()
  completedAt: number;

  @Prop()
  status: string;

  @Prop({ type: PrepTime })
  preptime:   PrepTime;
  
}
export const OrderSchema = SchemaFactory.createForClass(OrderClass);
