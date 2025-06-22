import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { CqrsModule } from '@nestjs/cqrs';
import { OrderRepository } from './repositories/order.repository';
import { OrderController } from './order.controller';

@Module({
  imports: [CqrsModule],
  providers: [OrderService, OrderRepository],
  controllers: [OrderController],
})
export class OrderModule {}
