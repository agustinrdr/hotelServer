import {EntityRepository, Repository} from "typeorm";
import {Habitacion} from "../entities/habitacion.entity";

@EntityRepository(Habitacion)
export class HabitacionesRepository extends Repository<Habitacion>{

}
