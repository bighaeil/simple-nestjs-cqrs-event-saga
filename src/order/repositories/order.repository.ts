import { Injectable } from '@nestjs/common';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  async create(): Promise<Order> {
    const order = new Order(Math.random().toString(36).substring(2, 15));
    this.orders.push(order);
    return order;
  }

  async findById(id: string): Promise<Order | null> {
    return this.orders.find((order) => order.id === id) || null;
  }

  async findAll(): Promise<Order[]> {
    return this.orders;
  }
}
``;
