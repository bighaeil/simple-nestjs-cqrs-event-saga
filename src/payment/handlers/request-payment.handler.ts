import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { RequestPaymentCommand } from '../commands/equest-payment.command';
import { PaymentCompletedEvent } from '../events/payment-completed.event';
import { PaymentService } from '../payment.service';

@CommandHandler(RequestPaymentCommand)
export class RequestPaymentHandler
  implements ICommandHandler<RequestPaymentCommand>
{
  constructor(
    private readonly eventBus: EventBus,
    private readonly paymentService: PaymentService,
  ) {}

  async execute(command: RequestPaymentCommand): Promise<void> {
    await this.paymentService.processPayment(command.orderId);

    console.log(`3. PaymentService → PaymentCompletedEvent`);
    this.eventBus.publish(new PaymentCompletedEvent(command.orderId));
  }
}
