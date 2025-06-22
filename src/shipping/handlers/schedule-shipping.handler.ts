import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ScheduleShippingCommand } from '../commands/schedule-shipping.command';
import { ShippingService } from '../shipping.service';

@CommandHandler(ScheduleShippingCommand)
export class ScheduleShippingHandler
  implements ICommandHandler<ScheduleShippingCommand>
{
  constructor(private readonly shippingService: ShippingService) {}

  async execute(command: ScheduleShippingCommand): Promise<void> {
    console.log(`7. ShippingService → 배송 예약 완료`);
    await this.shippingService.scheduleShipping(command.orderId);
  }
}
