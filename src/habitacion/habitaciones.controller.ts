import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Habitacion} from "../entities/habitacion.entity";
import {HabitacionesService } from "./habitaciones.service"

@Controller('api/v1/habitaciones')
export class HabitacionesController {

    constructor(private habitacionesService: HabitacionesService) {
    }

    @Get('/')
    getAll(): Promise<Habitacion[]> {
        return this.habitacionesService.findAll();
    }

    @Get('/byCapacidad/:capacidad')
    getAllByCapacidad(@Param('capacidad') capacidad): Promise<Habitacion[]> {
        return this.habitacionesService.findAllByCapacidad(capacidad);
    }

    @Get('/:id')
    getOne(@Param('id') id): Promise<Habitacion> {
        return this.habitacionesService.findOne(id);
    }

    @Post('/')
    save(@Body() habitacion:Habitacion): Promise<Habitacion>{
        return this.habitacionesService.save(habitacion);
    }

    @Delete('/:id')
    delete(@Param('id') id){
        return this.habitacionesService.delete(id);
    }

    @Put('/:id')
    update(@Body() habitacion: Habitacion,@Param('id') id){
        return this.habitacionesService.update(id, habitacion);
    }

}
