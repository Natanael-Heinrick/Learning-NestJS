import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { TaskService } from "./tasks.service";
import { UpdatePutTaskDTO } from "./dto/update-put-task-dto";
import { UpdatePatchTaskDTO } from "./dto/update-patch-task-dto";

@Controller('tasks')
export class TaskController{
    
    constructor(private readonly taskService: TaskService){}

    @Post()
    async create(@Body() {name, type, completed}: CreateTaskDTO){
        return this.taskService.create({name, type, completed})    
    }
    
    @Get()
    async show(){
        return this.taskService.show()
    }

    @Get(':id')
    async showById(@Param('id', ParseIntPipe) id: number){
        return this.taskService.showById(id)
    }

    @Put(':id')
        async update(@Param('id', ParseIntPipe) id: number, 
        @Body() {name, type, completed}: UpdatePutTaskDTO){
        return this.taskService.update(id, {name, type, completed})
    }

    @Patch(':id')
    async updatePartial(@Param('id', ParseIntPipe) id: number, 
    @Body() {name, type, completed}: UpdatePatchTaskDTO){
        return this.taskService.updatePartial(id, {name,type, completed})
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return this.taskService.delete(id);
    }

}