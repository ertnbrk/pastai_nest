import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [ElasticsearchModule.registerAsync({
    useFactory: () => ({
      node: process.env.ELASTICSEARCH_NODE,
      headers: {
          'accept': 'application/vnd.elasticsearch+json; compatible-with=8',
          'content-type': 'application/vnd.elasticsearch+json; compatible-with=8',
        },
    }),
  })],
  providers: [SearchService],
  controllers: [SearchController],
  exports: [SearchService], 
})
export class SearchModule {}
