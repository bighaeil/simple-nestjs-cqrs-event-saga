import { Controller, Get, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateOrderCommand } from './commands/create-order.command';
import { OrderService } from './order.service';

@Controller('/orders')
export class OrderController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly orderService: OrderService,
  ) {}

  @Post()
  async createOrder() {
    await this.commandBus.execute(new CreateOrderCommand());
  }

  @Get()
  async findAllOrders() {
    return this.orderService.findAllOrders();
  }
}
