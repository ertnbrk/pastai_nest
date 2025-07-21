import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
@Injectable()
export class SearchService {
  constructor(private readonly esService: ElasticsearchService) {}

  async indexTestData() {
    const result = await this.esService.index({
      index: 'test-index',
      document: {
        title: 'NestJS Elasticsearch Example',
        content: 'Elasticsearch integration works!',
        timestamp: new Date(),
      },
    });

    return result;
  }
    async searchExample(query: string) {
    const result = await this.esService.search({
      index: 'test-index',
      query: {
        match: { content: query },
      },
    });

    return result.hits.hits;
  }
}