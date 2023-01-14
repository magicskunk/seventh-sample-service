import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from '../config/configuration';
import * as process from 'process';

@Controller('actuator')
export class ActuatorController {
  constructor(private configService: ConfigService<AppConfig>) {}

  @Get('/env')
  public getAllEnv() {
    const rootKeys: (keyof AppConfig)[] = ['http', 'database'];
    return {
      ...rootKeys.reduce((p, c) => {
        return { ...p, ...{ [c]: this.configService.get(c) } };
      }, {}),
      ...process.env,
    };
  }
}
