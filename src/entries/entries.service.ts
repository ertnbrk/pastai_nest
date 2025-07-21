import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entry } from './entry.entity';
import { CreateEntryDto } from './dto/create-entry.dto';

@Injectable()
export class EntriesService {
  constructor(
    @InjectRepository(Entry)
    private entryRepo: Repository<Entry>,
  ) {}

  async createEntry(data: Partial<Entry>): Promise<Entry> {
    const entry = this.entryRepo.create(data);
    return this.entryRepo.save(entry);
  }

  findAll(userId: string) {
    return this.entryRepo.find({
      where: { userId },
      order: { datetimeUtc: 'DESC' },
    });
  }
}
