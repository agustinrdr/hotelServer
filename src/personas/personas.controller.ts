import {Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors} from '@nestjs/common';
import {Persona} from "../entities/persona.entity";
import {PersonasService} from "./personas.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {createWriteStream} from "fs";
import * as moment from 'moment'

@Controller('api/v1/personas')
export class PersonasController {

    constructor(private personasService: PersonasService) {
    }

    @Get('/')
    getAll(): Promise<Persona[]> {
        return this.personasService.findAll();
    }

    @Get('/:id')
    getOne(@Param('id') id): Promise<Persona> {
        return this.personasService.findOne(id);
    }

    @Post('/')
    save(@Body() persona:Persona): Promise<Persona>{
        return this.personasService.save(persona);
    }

    @Delete('/:id')
    delete(@Param('id') id){
        return this.personasService.delete(id);
    }

    @Put('/:id')
    update(@Body() persona: Persona,@Param('id') id){
        return this.personasService.update(id, persona);
    }

    @Get('/getByNombre/:nombre')
    getByNombre(@Param('nombre')nombre: string){
        return this.personasService.getNombre(nombre);
    }

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file){
        let date = new Date();
        const path = "C:\\users\\slay1\\Desktop\\" + moment(date).format('YYYYMMDDHHMMSS')+ '-' +file.originalname;
        let fileStream = createWriteStream(path);
        fileStream.write(file.buffer);
        fileStream.end();
    }

}
