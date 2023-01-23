import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';
import config from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})//process.env.MONGO_URI
export class AppModule {}
