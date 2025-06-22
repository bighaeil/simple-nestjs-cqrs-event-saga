import { Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateOrderCommand } from './commands/create-order.command';

@Controller('/orders')
export class OrderController {
  constructor(private commandBus: CommandBus) {}

  @Post()
  async createOrder() {
    await this.commandBus.execute(new CreateOrderCommand());
  }
}
