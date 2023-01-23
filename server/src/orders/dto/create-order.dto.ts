export class SingleOrderDto {
  readonly name: string;
  readonly toppings: string[];
  readonly status: string;
  readonly duration: number;
}
export class PrepTimeDto {
  readonly dough: number;

  readonly toppings: number;


  readonly oven: number;


  readonly waiter: number;
}
export class CreateOrderDto {
  readonly orders: SingleOrderDto;

  readonly createdAt: number;

  readonly completedAt: number;

  readonly status: string;

  readonly preptime: PrepTimeDto;
  
}
