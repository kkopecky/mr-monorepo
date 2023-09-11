import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get()
  getAll() {
    return 'dashboard data';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  create() {
    return 'This action adds a new dashboard';
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `This action updates a #${id} dashboard`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} dashboard`;
  }
}
