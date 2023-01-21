import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://dickenzoh_30:Merngoose2030@cluster0.dbijinl.mongodb.net/?retryWrites=true&w=majority'), OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
