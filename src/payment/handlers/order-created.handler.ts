import { EventBus, EventsHandler } from '@nestjs/cqrs';
import { OrderCreatedEvent } from '../../order/events/order-created.event';
import { PaymentCompletedEvent } from '../events/payment-completed.event';
import { PaymentService } from '../payment.service';

@EventsHandler(OrderCreatedEvent)
export class OrderCreatedHandler {
  constructor(
    private readonly eventBus: EventBus,
    private readonly paymentService: PaymentService,
  ) {}

  async handle(event: OrderCreatedEvent) {
    await this.paymentService.processPayment(event.orderId);

    console.log(`[Saga] PaymentService -> (PaymentCompletedEvent)`);
    this.eventBus.publish(new PaymentCompletedEvent(event.orderId));
  }
}
