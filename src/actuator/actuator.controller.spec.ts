import { Test, TestingModule } from '@nestjs/testing';
import { ActuatorController } from './actuator.controller';
import { ConfigService } from '@nestjs/config';

describe('ActuatorController', () => {
  let controller: ActuatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActuatorController],
      providers: [ConfigService],
    }).compile();

    controller = module.get<ActuatorController>(ActuatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
