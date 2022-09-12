import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { PingModule } from './ping/ping.module';
import { ScanModule } from './scan/scan.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), PingModule, ScanModule],
})
export class AppModule {}
