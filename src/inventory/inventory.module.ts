import { Module } from '@nestjs/common';
import { PaymentCompletedHandler } from './handlers/payment-completed.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { InventoryService } from './inventory.service';

@Module({
  imports: [CqrsModule],
  providers: [PaymentCompletedHandler, InventoryService],
})
export class InventoryModule {}
