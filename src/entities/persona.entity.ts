import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {TipoPersona} from "./tipoPersona.entity";

@Entity({name:'persona'})
export class Persona{

    @PrimaryGeneratedColumn({name:"persona_id"})
    id: number;

    @Column({name:"nombre_apellido"})
    nombre: string;

    @Column({name:'dni'})
    dni: string;

    @Column({name:"direccion"})
    direccion: string;

    @Column({name:"provincia"})
    provincia: string;

    @Column({name:"pais"})
    pais: string;

    @Column({name:"fecha_nacimiento"})
    fechaNacimiento: Date;

    @Column({name:"telefono"})
    telefono: string;

    @Column({name:"email"})
    email: string;

    @ManyToOne(type => TipoPersona, tipoPersona => tipoPersona.id)
    tipoPersona: TipoPersona;

}
