import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PaymentService } from './payment.service';
import { RequestPaymentHandler } from './handlers/request-payment.handler';

@Module({
  imports: [CqrsModule],
  providers: [RequestPaymentHandler, PaymentService],
})
export class PaymentModule {}
