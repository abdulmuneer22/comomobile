import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ScanQRDTO } from './dto';
import { ScanService } from './scan.service';

@Controller('scan')
export class ScanController {
  constructor(private authService: ScanService) {}

  @Get('/')
  async getAllScans() {
    return this.authService.getAllScanData();
  }

  @Post('/add-scan-data')
  async addScanData(@Body() scanQRDTO: ScanQRDTO) {
    return this.authService.addScanData(scanQRDTO);
  }

  @Get('/scans/:id')
  async getScansByUser(@Param('id') userId: string) {
    return this.authService.getScansByUserId(userId);
  }
}
