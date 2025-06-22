import { InventoryReservedEvent } from '../../inventory/events/inventory-reserved.event';
import { EventBus, EventsHandler } from '@nestjs/cqrs';
import { ShippingService } from '../shipping.service';

@EventsHandler(InventoryReservedEvent)
export class InventoryReservedHandler {
  constructor(
    private readonly eventBus: EventBus,
    private readonly shippingService: ShippingService,
  ) {}

  async handle(event: InventoryReservedEvent) {
    await this.shippingService.scheduleShipping(event.orderId);

    console.log(`[Saga] ShippingService: End`);
  }
}
