import { Module } from '@nestjs/common';
import { HabitacionesService } from './habitaciones.service';
import { HabitacionesController } from './habitaciones.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {HabitacionesRepository} from "./habitaciones.repository";

@Module({
  imports: [TypeOrmModule.forFeature([HabitacionesRepository])],
  providers: [HabitacionesService],
  controllers: [HabitacionesController]
})
export class HabitacionesModule {}
