import { Test, TestingModule } from '@nestjs/testing';
import { CollectionService } from './collection.service';
import { getModelToken } from '@nestjs/mongoose';
import { Collection } from './schemas/collection.schema';

describe('CollectionService', () => {
  let service: CollectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectionService, { provide: getModelToken(Collection.name), useValue: jest.fn() }],
    }).compile();

    service = module.get<CollectionService>(CollectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
