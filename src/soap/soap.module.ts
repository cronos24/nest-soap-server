import { Module } from '@nestjs/common';
import { SoapService } from './soap.service';

@Module({
  providers: [SoapService]
})
export class SoapModule {}
