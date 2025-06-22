import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateOrderCommand } from '../commands/create-order.command';
import { OrderCreatedEvent } from '../events/order-created.event';
import { OrderService } from '../order.service';

@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler implements ICommandHandler<CreateOrderCommand> {
  constructor(
    private readonly eventBus: EventBus,
    private readonly orderService: OrderService,
  ) {}

  async execute(command: CreateOrderCommand): Promise<void> {
    const order = await this.orderService.createOrder();

    console.log(`1. CreateOrderCommand → OrderCreatedEvent 발생`);
    this.eventBus.publish(new OrderCreatedEvent(order.id));
  }
}
