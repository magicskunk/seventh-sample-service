import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyModule } from './dummy/dummy.module';
import { ConfigModule } from '@nestjs/config';
import { yaml } from './config/configuration';
import { ActuatorModule } from './actuator/actuator.module';

@Module({
  imports: [
    DummyModule,
    ConfigModule.forRoot({
      load: [yaml],
      isGlobal: true,
      expandVariables: true,
      cache: true,
    }),
    ActuatorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
