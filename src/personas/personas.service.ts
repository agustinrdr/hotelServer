import { Injectable } from '@nestjs/common';
import {PersonasRepository} from "./personas.repository";
import {Persona} from "../entities/persona.entity";

@Injectable()
export class PersonasService {

    constructor(private personaRepository: PersonasRepository) {
    }

    findAll(): Promise<Persona[]>{
        return this.personaRepository.find({relations: ["tipoPersona"]});
    }

    findOne(id): Promise<Persona>{
        return this.personaRepository.findOne(id,{relations: ["tipoPersona"]});
    }

    save(persona: Persona){
        return this.personaRepository.save(persona);
    }

    delete(id){
        return this.personaRepository.delete(id);
    }

    update(id, persona: Persona){
        return this.personaRepository.update(id,persona);
    }

    getNombre(nombre){
        return this.personaRepository.query('SELECT * FROM persona WHERE nombre_apellido LIKE ?',['%'+nombre+'%']);
    }

}
