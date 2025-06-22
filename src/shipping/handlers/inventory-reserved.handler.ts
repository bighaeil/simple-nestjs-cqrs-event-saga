import { InventoryReservedEvent } from '../../inventory/events/inventory-reserved.event';
import { EventBus, EventsHandler } from '@nestjs/cqrs';
import { ShippingScheduledEvent } from '../events/shipping-scheduled.event';
import { ShippingService } from '../shipping.service';

@EventsHandler(InventoryReservedEvent)
export class InventoryReservedHandler {
  constructor(
    private readonly eventBus: EventBus,
    private readonly shippingService: ShippingService,
  ) {}

  async handle(event: InventoryReservedEvent) {
    console.log(`[ShippingService] InventoryReserved: ${event.orderId}`);

    await this.shippingService.scheduleShipping(event.orderId);

    console.log(`[Saga] ShippingService -> (ShippingScheduledEvent)`);
    this.eventBus.publish(new ShippingScheduledEvent(event.orderId));
  }
}
