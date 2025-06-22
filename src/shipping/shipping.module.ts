import { Module } from '@nestjs/common';
import { InventoryReservedHandler } from './handlers/inventory-reserved.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { ShippingService } from './shipping.service';

@Module({
  imports: [CqrsModule],
  providers: [InventoryReservedHandler, ShippingService],
})
export class ShippingModule {}
