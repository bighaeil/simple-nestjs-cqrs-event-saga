import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { InventoryModule } from './inventory/inventory.module';
import { PaymentModule } from './payment/payment.module';
import { ShippingModule } from './shipping/shipping.module';

@Module({
  imports: [OrderModule, InventoryModule, PaymentModule, ShippingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
