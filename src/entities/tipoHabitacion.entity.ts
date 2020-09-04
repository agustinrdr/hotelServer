import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Habitacion} from "./habitacion.entity";

@Entity({name: 'tipo_habitacion'})
export class TipoHabitacion {

    @PrimaryGeneratedColumn({name: "tipo_habitacion_id"})
    id: number;

    @Column({name: "capacidad"})
    capacidad: number;

    @Column({name: 'tipo_habitacion'})
    tipoHabitacion: string;

    @Column({name: 'descripcion'})
    descripcion: string;

    @Column({name: 'tarifa'})
    tarifa: string

    @OneToMany(type => Habitacion, habitacion => habitacion.id)
    habitacion: Habitacion;

}
