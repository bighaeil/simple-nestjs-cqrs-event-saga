import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { ReserveInventoryCommand } from '../commands/reserve-inventory.command';
import { InventoryReservedEvent } from '../events/inventory-reserved.event';
import { InventoryService } from '../inventory.service';

@CommandHandler(ReserveInventoryCommand)
export class ReserveInventoryHandler
  implements ICommandHandler<ReserveInventoryCommand>
{
  constructor(
    private readonly eventBus: EventBus,
    private readonly inventoryService: InventoryService,
  ) {}

  async execute(command: ReserveInventoryCommand): Promise<void> {
    await this.inventoryService.reserveInventory(command.orderId);

    console.log(`5. InventoryService → InventoryReservedEvent`);
    this.eventBus.publish(new InventoryReservedEvent(command.orderId));
  }
}
