import { Module } from '@nestjs/common';
import {PersonasModule} from "./personas/personas.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import { HabitacionesModule } from './habitacion/habitaciones.module';

@Module({
  imports: [PersonasModule,TypeOrmModule.forRoot(), HabitacionesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
