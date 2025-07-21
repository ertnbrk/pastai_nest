import { Controller, Get, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Controller()
export class AppController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Get('test-cache')
  async getCache() {
    const key = 'hello';
    const cached = await this.cacheManager.get<string>(key);

    if (cached) {
      return { from: 'cache', value: cached };
    }

    const value = 'Hello from Redis!';
    await this.cacheManager.set(key, value, 60); // expires in 60 seconds
    return { from: 'set', value };
  }
  
}
