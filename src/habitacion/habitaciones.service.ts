import { Injectable } from '@nestjs/common';
import {HabitacionesRepository} from "./habitaciones.repository";
import {Habitacion} from "../entities/habitacion.entity";
import {MoreThanOrEqual} from "typeorm";

@Injectable()
export class HabitacionesService {

    constructor(private habitacionesRepository: HabitacionesRepository) {
    }

    findAll(): Promise<Habitacion[]>{
        return this.habitacionesRepository.find({relations: ["estadoHabitacion","tipoHabitacion"]});
    }

    findAllByCapacidad(capacidad): Promise<Habitacion[]>{
        return this.habitacionesRepository.find({relations: ["estadoHabitacion","tipoHabitacion"],
            where:{ tipoHabitacion:{capacidad:capacidad}}});
    }

    findOne(id): Promise<Habitacion>{
        return this.habitacionesRepository.findOne(id,{relations: ["estadoHabitacion","tipoHabitacion"]});
    }

    save(Habitacion: Habitacion){
        return this.habitacionesRepository.save(Habitacion);
    }

    delete(id){
        return this.habitacionesRepository.delete(id);
    }

    update(id, persona: Habitacion){
        return this.habitacionesRepository.update(id,persona);
    }
}
