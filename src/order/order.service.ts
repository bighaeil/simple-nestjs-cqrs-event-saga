import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { OrderCreatedEvent } from './events/order-created.event';
import { OrderRepository } from './repositories/order.repository';

@Injectable()
export class OrderService {
  constructor(
    private readonly eventBus: EventBus,
    private readonly orderRepository: OrderRepository,
  ) {}

  async createOrder() {
    console.log(`[Saga] ShippingService: START`);

    const order = await this.orderRepository.create();
    console.log(`[OrderService] Creating order: ${order.id}`);

    console.log(`[Saga] OrderService -> (OrderCreatedEvent)`);
    this.eventBus.publish(new OrderCreatedEvent(order.id));
  }

  async findAllOrders() {
    return await this.orderRepository.findAll();
  }
}
