import { TaskStatus } from '../interfaces/task.interface';
import { ApiProperty } from '@nestjs/swagger';

export class GetTasksFilterDto {
  @ApiProperty({
    example: 'OPEN',
    description: 'Status of task',
    enum: TaskStatus
  })
  status: TaskStatus;

  @ApiProperty({
    example: 'OPEN',
    description: 'Search',
    type: String
  })
  search: string;
}
