import { Module } from '@nestjs/common';
import { TaskController } from './tasks/tasks.controller';
import { TaskService } from './tasks/tasks.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [TaskController],
    providers: [TaskService],
    exports: [TaskService] 
})
export class AppModule {}