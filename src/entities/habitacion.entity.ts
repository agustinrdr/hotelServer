import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {EstadoHabitacion} from "./estadoHabitacion.entity";
import {TipoHabitacion} from "./tipoHabitacion.entity";

@Entity({name: 'habitacion'})
export class Habitacion {

    @PrimaryGeneratedColumn({name: "habitacion_id"})
    id: number;

    @Column({name: "numero_habitacion"})
    numero_habitacion: string;

    @ManyToOne(type => EstadoHabitacion, estadoHabitacion => estadoHabitacion.id)
    estadoHabitacion: EstadoHabitacion;

    @ManyToOne(type => TipoHabitacion, tipoHabitacion => tipoHabitacion.id)
    tipoHabitacion: TipoHabitacion;

}
