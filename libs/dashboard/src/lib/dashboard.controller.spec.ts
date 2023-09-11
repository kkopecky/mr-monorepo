import { Test } from '@nestjs/testing';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

describe('DashboardController', () => {
  let controller: DashboardController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DashboardService],
      controllers: [DashboardController],
    }).compile();

    controller = module.get(DashboardController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
