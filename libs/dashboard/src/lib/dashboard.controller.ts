import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboards')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get()
  getAll() {
    return {
      dashboards: [
        { id: 1, name: 'Dasboard1', stocks: ['AAPL', 'GOOG', 'TSLA'] },
        { id: 2, name: 'Dasboard2', stocks: ['AAPL', 'GOOG', 'TSLA'] },
        { id: 3, name: 'Dasboard3', stocks: ['AAPL', 'GOOG', 'TSLA'] },
        { id: 4, name: 'Dasboard4', stocks: ['AAPL', 'GOOG', 'TSLA'] },
        { id: 5, name: 'Dasboard5', stocks: ['AAPL', 'GOOG', 'TSLA'] },
      ],
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string): any {
    return { id, name: 'Dasboard1', stocks: ['AAPL', 'GOOG', 'TSLA'] };
  }

  @Post()
  create() {
    return 'This action adds a new dashboard';
  }

  @Put(':id')
  update(@Param('id') id: string): any {
    return { id, name: 'Dasboard1', stocks: ['AAPL', 'GOOG', 'TSLA'] };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} dashboard`;
  }
}
