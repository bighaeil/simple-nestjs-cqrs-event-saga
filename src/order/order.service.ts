import { Injectable } from '@nestjs/common';
import { OrderRepository } from './repositories/order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async createOrder() {
    const order = await this.orderRepository.create();
    console.log(`[OrderService] Creating order: ${order.id}`);
    return order;
  }

  async findAllOrders() {
    return await this.orderRepository.findAll();
  }
}
