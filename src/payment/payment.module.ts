import { Module } from '@nestjs/common';
import { OrderCreatedHandler } from './handlers/order-created.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { PaymentService } from './payment.service';

@Module({
  imports: [CqrsModule],
  providers: [OrderCreatedHandler, PaymentService],
})
export class PaymentModule {}
