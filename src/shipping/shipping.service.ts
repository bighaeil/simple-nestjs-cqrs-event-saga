import { Injectable } from '@nestjs/common';

@Injectable()
export class ShippingService {
  async scheduleShipping(orderId: string) {
    console.log(`[ShippingService] Scheduling shipping for order: ${orderId}`);
  }

  async completeShipping(orderId: string) {
    console.log(`[ShippingService] Completing shipping for order: ${orderId}`);
  }
}
