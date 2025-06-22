import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  async processPayment(orderId: string) {
    console.log(`[PaymentService] Processing payment for order: ${orderId}`);
  }
}
