import { Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('/orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  async createOrder() {
    return this.orderService.createOrder();
  }

  @Get()
  async findAllOrders() {
    return this.orderService.findAllOrders();
  }
}
