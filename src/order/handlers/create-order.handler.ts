import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateOrderCommand } from '../commands/create-order.command';
import { OrderCreatedEvent } from '../events/order-created.event';

@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler implements ICommandHandler<CreateOrderCommand> {
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: CreateOrderCommand): Promise<void> {
    console.log(`[Order] Created: ${command.orderId}`);
    this.eventBus.publish(new OrderCreatedEvent(command.orderId));
  }
}
