import { Test, TestingModule } from '@nestjs/testing';
import { NftController } from './nft.controller';
import { NftService } from './nft.service';
import { getModelToken } from '@nestjs/mongoose';
import { NFT } from './schemas/nft.schema';

describe('NftController', () => {
  let controller: NftController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NftController],
      providers: [NftService, { provide: getModelToken(NFT.name), useValue: jest.fn() }],
    }).compile();

    controller = module.get<NftController>(NftController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
