import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './database.providers';

@Module({
  imports: [TypeOrmModule.forRoot(config)],

})
export default class DatabaseModule { }
