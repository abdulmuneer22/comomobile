import { Controller, Get } from '@nestjs/common';

@Controller('ping')
export class PingController {

    @Get()
    pong(): string {
        return "pong"
    }
}
