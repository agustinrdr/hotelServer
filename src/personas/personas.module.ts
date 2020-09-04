import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PersonasRepository} from "./personas.repository";
import {PersonasService} from "./personas.service";
import {PersonasController} from "./personas.controller";

@Module({
    imports: [TypeOrmModule.forFeature([PersonasRepository])],
    providers: [PersonasService],
    controllers: [PersonasController]
})
export class PersonasModule {}
