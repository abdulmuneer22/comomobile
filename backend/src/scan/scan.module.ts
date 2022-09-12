import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScanController } from './scan.controller';
import { Scan } from './scan.entity';
import { ScanService } from './scan.service';

@Module({
  imports: [TypeOrmModule.forFeature([Scan])],
  controllers: [ScanController],
  providers: [ScanService],
})
export class ScanModule {}
