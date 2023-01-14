import { Module } from '@nestjs/common';
import { ActuatorController } from './actuator.controller';
import { ActuatorService } from './actuator.service';

@Module({
  providers: [ActuatorService],
  controllers: [ActuatorController],
})
export class ActuatorModule {}
