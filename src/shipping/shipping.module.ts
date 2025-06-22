import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ShippingService } from './shipping.service';
import { ScheduleShippingHandler } from './handlers/schedule-shipping.handler';

@Module({
  imports: [CqrsModule],
  providers: [ScheduleShippingHandler, ShippingService],
})
export class ShippingModule {}
