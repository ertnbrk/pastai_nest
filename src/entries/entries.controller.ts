import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { CreateEntryDto } from './dto/create-entry.dto';
import { Entry } from './entry.entity';
@Controller('entries')
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) {}

  @Get('test')
  getTestMessage() {
    return { message: '✅ MemoryWeaver backend is working!' };
  }
  @Post()
  async createEntry(@Body() data: Partial<Entry>): Promise<Entry> {
    return this.entriesService.createEntry(data);
  }

  @Get()
  getAll(@Query('userId') userId: string) {
    return this.entriesService.findAll(userId);
  }
}
