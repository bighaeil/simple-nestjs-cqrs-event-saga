import { EventsHandler } from '@nestjs/cqrs';
import { ShippingScheduledEvent } from '../events/shipping-scheduled.event';
import { ShippingService } from '../shipping.service';

@EventsHandler(ShippingScheduledEvent)
export class ShippingScheduledHandler {
  constructor(private readonly shippingService: ShippingService) {}

  async handle(event: ShippingScheduledEvent) {
    console.log(`[ShippingService] ScheduleCompleted: ${event.orderId}`);

    console.log(`[Saga] ShippingService: END`);
    await this.shippingService.completeShipping(event.orderId);
  }
}
