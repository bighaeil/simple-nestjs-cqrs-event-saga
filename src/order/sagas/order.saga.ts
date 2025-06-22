import { Injectable } from '@nestjs/common';
import { ICommand, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';
import { OrderCreatedEvent } from '../events/order-created.event';
import { PaymentCompletedEvent } from '../../payment/events/payment-completed.event';
import { InventoryReservedEvent } from '../../inventory/events/inventory-reserved.event';
import { RequestPaymentCommand } from '../../payment/commands/equest-payment.command';
import { ReserveInventoryCommand } from '../../inventory/commands/reserve-inventory.command';
import { ScheduleShippingCommand } from '../../shipping/commands/schedule-shipping.command';

@Injectable()
export class OrderSaga {
  @Saga()
  orderCreated = (
    events$: Observable<OrderCreatedEvent>,
  ): Observable<ICommand> => {
    return events$.pipe(
      map((event) => {
        console.log(`2. OrderSaga → RequestPaymentCommand`);
        return new RequestPaymentCommand(event.orderId);
      }),
    );
  };

  @Saga()
  paymentCompleted = (
    events$: Observable<PaymentCompletedEvent>,
  ): Observable<ICommand> => {
    return events$.pipe(
      map((event) => {
        console.log(`4. OrderSaga → ReserveInventoryCommand`);
        return new ReserveInventoryCommand(event.orderId);
      }),
    );
  };

  @Saga()
  inventoryReserved = (
    events$: Observable<InventoryReservedEvent>,
  ): Observable<ICommand> => {
    return events$.pipe(
      map((event) => {
        console.log(`6. OrderSaga → ScheduleShippingCommand`);
        return new ScheduleShippingCommand(event.orderId);
      }),
    );
  };
}
