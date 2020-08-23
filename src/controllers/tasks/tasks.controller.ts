import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TasksService } from '../../services/tasks/tasks.service';
import { Task, TaskStatus } from '../../interfaces/task.interface';
import { CreateTaskDto } from '../../dto/create-task.dto';

import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetTasksFilterDto } from '../../dto/get-tasks-filter.dto';

@ApiTags('Task')
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {
  }

  @Get('/all-tasks')
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get('/filter')
  searchTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    return this.taskService.getTaskFilter(filterDto);
  }

  @Get('/info-task/:id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  @Post('/register-task')
  @ApiResponse({ status: 201, description: 'Task createds' })
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @ApiOperation({ summary: 'Create task'})
  @ApiBody({ type: CreateTaskDto, description: 'Create of tasks' })
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @Post('/delete-task')
  deleteTask(@Body('id') id: string) {
    return this.taskService.deleteTask(id);
  }

  @Post('/update-task/:id/status')
  updateTask(@Param('id') id: string, @Body('status') status: TaskStatus): Task {
    return this.taskService.updateTask(id, status);
  }
}
