import { Module } from '@nestjs/common';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from 'src/services/app.service';
import { UtilsService } from 'src/utils/utils.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UtilsService],
})
export class AppModule {}
