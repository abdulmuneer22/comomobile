import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { ScanQRDTO } from './dto';
import { Scan } from './scan.entity';

const tempMessage = {
  message: 'I would like to order a pizza',
  dish: 'Pizza',
  phoneNumber: '+8989889',
};

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

    // record this scan
    const newScan = new Scan();
    newScan.code = scanQRDTO.code;
    newScan.message = tempMessage;
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
