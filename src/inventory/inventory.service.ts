import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryService {
  async reserveInventory(orderId: string) {
    console.log(`[InventoryService] Reserving inventory for order: ${orderId}`);
  }
}
