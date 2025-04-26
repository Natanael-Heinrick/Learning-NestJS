import { Injectable } from "@nestjs/common";
import { verify } from "crypto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TaskService{
    
    constructor(private readonly prisma:PrismaService){}

    private async verifyId(id){
        return this.prisma.tasks.findFirst({
            where: {
                id
            }
        })
    }

    async create({name, type, completed}){

        if(!name) return `Please insert name`
        if(!type) return `Please insert type`
        if(!completed){
            completed == false
        }

        return this.prisma.tasks.create({
            data:{
                name,
                type,
                completed
            }
        });
    }

    async show(){
        return this.prisma.tasks.createMany()

    }

    async showById(id){
        const existId = await this.verifyId(id);

        if (!existId) return `Please insert ID value`

        return this.prisma.tasks.findMany({
            where: {
                id
            }
        })
    }

    async update(id, {name, type, completed}){
        const existId = await this.verifyId(id);

        if (!existId) return `Please insert ID value`

        const updateItem = {
            name,
            type,
            completed
        }

        if(!name){
            return `Please insert Name`
        } else {
            updateItem.name = name;
        }

        if(!type){
            return `Please insert Type`
        } else {
            updateItem.type = type;
        }

        if (!completed){
            return `Please insert Completed`
        } else {
            updateItem.completed = completed;
        }

        return this.prisma.tasks.update({
            where: {
                id
            },
            data: updateItem
        })
    }

        async updatePartial(id, {name, type, completed}){
        const existId = await this.verifyId(id);

        if (!existId) return `Please insert ID value`

        const updateItem = {
            name,
            type,
            completed
        }

        if(name) updateItem.name = name;

        if (type) updateItem.type = type;

        if(completed) updateItem.completed = completed;


        return this.prisma.tasks.update({
            where: {
                id
            },
            data: updateItem
        })
    }

    async delete(id){
        const existId = await this.verifyId(id);

        if (!existId) return `Please insert ID value`

        await this.prisma.tasks.delete({
            where: {
                id
            }
        })

        return `The user with id: ${id}, don't exist more in the system`
    }
}