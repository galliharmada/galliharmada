import { Module } from '@nestjs/common';
import AppService from 'app.service';
import DatabaseModule from 'database/database.module';
import { GuestsModule } from './guests/guests.module';
import AppController from './app.controller';

@Module({
  imports: [DatabaseModule, GuestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule { }
