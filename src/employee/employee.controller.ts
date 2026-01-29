import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
  @Get()
  getAllEmployees() {
    return [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
  }
}
