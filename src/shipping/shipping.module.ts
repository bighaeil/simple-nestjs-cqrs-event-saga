import { Module } from '@nestjs/common';
import { InventoryReservedHandler } from './handlers/inventory-reserved.handler';
import { ShippingScheduledHandler } from './handlers/shipping-scheduled.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { ShippingService } from './shipping.service';

@Module({
  imports: [CqrsModule],
  providers: [
    InventoryReservedHandler,
    ShippingScheduledHandler,
    ShippingService,
  ],
})
export class ShippingModule {}
