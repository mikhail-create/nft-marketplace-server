import { Test, TestingModule } from '@nestjs/testing';
import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';
import { getModelToken } from '@nestjs/mongoose';
import { Collection } from './schemas/collection.schema';

describe('CollectionController', () => {
  let controller: CollectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectionController],
      providers: [CollectionService, { provide: getModelToken(Collection.name), useValue: jest.fn() }],
    }).compile();

    controller = module.get<CollectionController>(CollectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
