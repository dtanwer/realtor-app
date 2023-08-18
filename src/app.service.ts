import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  apiCheck(): string {
    return 'Api is Working !!';
  }
}
