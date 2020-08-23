import { ApiProperty } from '@nestjs/swagger';
export class CreateTaskDto {

  @ApiProperty({
    example: 'Todo',
    description: 'Title of Task',
    type: String
  })
  title: string;

  @ApiProperty({
    example: 'Description for todo',
    description: 'Description of task',
    type: String
  })
  description: string;

  @ApiProperty({ required: false, default: true })
  isEnabled?: boolean = true;
}
