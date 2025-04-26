import { IsBoolean, IsString } from "class-validator";


export class CreateTaskDTO{
    @IsString()
    name: string

    @IsString()
    type: string

    @IsBoolean()
    completed: boolean
}