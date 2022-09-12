import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getDishInformation } from 'src/api';

import { Repository } from 'typeorm';
import { ScanQRDTO } from './dto';
import { Scan } from './scan.entity';

@Injectable()
export class ScanService {
  constructor(
    @InjectRepository(Scan)
    private scanRepository: Repository<Scan>,
  ) {}

  async getAllScanData(): Promise<Scan[]> {
    return await this.scanRepository.find();
  }

  async addScanData(scanQRDTO: ScanQRDTO): Promise<Scan> {
    if (!scanQRDTO.code || !scanQRDTO.name) {
      throw new BadRequestException('Please provide a valid input');
    }

    let dishData;

    try {
      const { response, error } = await getDishInformation(scanQRDTO.code);
      if (response) {
        dishData = response;
      } else {
        Logger.error(error);
        throw new Error('Invalid QR Code Scanned');
      }
    } catch (error) {
      throw new Error('Invalid QR Code Scanned');
    }

    if (!dishData) {
      throw new Error('Invalid QR Code Scanned');
    }

    // record this scan
    const newScan = new Scan();
    newScan.code = scanQRDTO.code;
    newScan.message = dishData;
    newScan.userName = scanQRDTO.name;
    if (scanQRDTO.deviceId) {
      newScan.deviceId = scanQRDTO.deviceId;
    }
    try {
      return await newScan.save();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getScansByUserId(userId: string): Promise<Scan[]> {
    return await this.scanRepository.find({
      where: {
        userName: userId,
      },
    });
  }
}
