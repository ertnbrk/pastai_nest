import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}
async indexTestData() {
    return await this.elasticsearchService.index({
      index: 'test-index',
      document: {
        title: 'Hello Elastic!',
        content: 'Testing NestJS + Elasticsearch',
        timestamp: new Date(),
      },
    });
  }
  async indexEntry(entry: { id: string; title: string; content: string }) {
    return await this.elasticsearchService.index({
      index: 'entries',
      document: {
        id: entry.id,
        title: entry.title,
        content: entry.content,
        timestamp: new Date(),
      },
    });
  }

  async searchTestData(query: string) {
    return await this.elasticsearchService.search({
      index: 'entries',
      query: {
        multi_match: {
          query,
          fields: ['title', 'content'],
        },
      },
    });
  }
}