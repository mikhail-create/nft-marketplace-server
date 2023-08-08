import { Test, TestingModule } from '@nestjs/testing';
import { NftService } from './nft.service';
import { getModelToken } from '@nestjs/mongoose';
import { NFT } from './schemas/nft.schema';

describe('NftService', () => {
  let service: NftService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NftService, { provide: getModelToken(NFT.name), useValue: jest.fn() }],
    }).compile();

    service = module.get<NftService>(NftService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
