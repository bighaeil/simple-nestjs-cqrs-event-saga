import { EventBus, EventsHandler } from '@nestjs/cqrs';
import { PaymentCompletedEvent } from '../../payment/events/payment-completed.event';
import { InventoryReservedEvent } from '../events/inventory-reserved.event';
import { InventoryService } from '../inventory.service';

@EventsHandler(PaymentCompletedEvent)
export class PaymentCompletedHandler {
  constructor(
    private readonly eventBus: EventBus,
    private readonly inventoryService: InventoryService,
  ) {}

  async handle(event: PaymentCompletedEvent) {
    await this.inventoryService.reserveInventory(event.orderId);

    console.log(`[Saga] InventoryService -> (InventoryReservedEvent)`);
    this.eventBus.publish(new InventoryReservedEvent(event.orderId));
  }
}
