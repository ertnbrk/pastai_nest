import { Controller, Get, Query  } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('test-es')
  async testElastic() {
    return this.searchService.indexTestData();
  }
  @Get()
  async search(@Query('q') query: string) {
    return await this.searchService.searchTestData(query);
  }
  @Get('ping')
getPing() {
  return { message: 'pong' };
}
}
