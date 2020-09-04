import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Persona} from "./persona.entity";

@Entity({name: 'tipo_persona'})
export class TipoPersona {

    @PrimaryGeneratedColumn({name: "tipo_persona_id"})
    id: number;

    @Column({name: "tipo"})
    tipo: string;

    @Column({name: 'descripcion'})
    descripcion: string;

    @OneToMany(type => Persona, persona => persona.id)
    persona: Persona;

}
