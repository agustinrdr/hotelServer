import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Habitacion} from "./habitacion.entity";

@Entity({name: 'estado_habitacion'})
export class EstadoHabitacion {

    @PrimaryGeneratedColumn({name: "estado_habitacion_id"})
    id: number;

    @Column({name: "estado"})
    estado: string;

    @Column({name: 'descripcion'})
    descripcion: string;

    @OneToMany(type => Habitacion, habitacion => habitacion.id)
    habitacion: Habitacion;

}
