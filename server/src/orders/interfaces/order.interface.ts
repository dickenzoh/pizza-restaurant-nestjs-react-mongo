export class SingleOrder {
   name: string;
   toppings: string[];
   status: string;
   duration: number;
}

export class PrepTime {
  dough: number;

  toppings: number;


  oven: number;


  waiter: number;
}
export interface Order {
  id?: string;

   orders: SingleOrder;

   createdAt: number;

   completedAt: number;

   status: string;

   preptime: PrepTime;   
}

