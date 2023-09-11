import { Module } from '@nestjs/common';

import { DashboardModule } from '@mr-monorepo/dashboard';

@Module({
  imports: [DashboardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
