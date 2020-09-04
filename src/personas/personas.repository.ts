import {EntityRepository, Repository} from "typeorm";
import {Persona} from "../entities/persona.entity";

@EntityRepository(Persona)
export class PersonasRepository extends Repository<Persona>{

}
