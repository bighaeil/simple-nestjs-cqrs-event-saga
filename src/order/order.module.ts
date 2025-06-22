import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { CqrsModule } from '@nestjs/cqrs';
import { OrderRepository } from './repositories/order.repository';
import { OrderController } from './order.controller';
import { CreateOrderHandler } from './handlers/create-order.handler';
import { OrderSaga } from './sagas/order.saga';

@Module({
  imports: [CqrsModule],
  providers: [OrderService, OrderRepository, CreateOrderHandler, OrderSaga],
  controllers: [OrderController],
})
export class OrderModule {}
