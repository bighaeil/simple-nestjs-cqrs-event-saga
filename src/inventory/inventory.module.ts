import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { InventoryService } from './inventory.service';
import { ReserveInventoryHandler } from './handlers/reserve-inventory.handler';

@Module({
  imports: [CqrsModule],
  providers: [ReserveInventoryHandler, InventoryService],
})
export class InventoryModule {}
