import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { OrderRepository } from './repositories/order.repository';
import { CreateOrderCommand } from './commands/create-order.command';

@Injectable()
export class OrderService {
  constructor(
    private commandBus: CommandBus,
    private readonly orderRepository: OrderRepository,
  ) {}

  async createOrder() {
    console.log(`[Saga] ShippingService: START`);

    const order = await this.orderRepository.create();
    console.log(`[OrderService] Creating order: ${order.id}`);

    await this.commandBus.execute(new CreateOrderCommand(order.id));
  }

  async findAllOrders() {
    return await this.orderRepository.findAll();
  }
}
