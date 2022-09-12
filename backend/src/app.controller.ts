import { Controller } from '@nestjs/common';
import { ScanService } from './scan/scan.service';

@Controller()
export class AppController {
  constructor(private readonly scanService: ScanService) {}
}
