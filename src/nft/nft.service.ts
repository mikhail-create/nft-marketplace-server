import { Injectable } from '@nestjs/common';
import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftDto } from './dto/update-nft.dto';
import { InjectModel } from '@nestjs/mongoose';
import { NFT, NFTDocument } from './schemas/nft.schema';
import { Model } from 'mongoose';

@Injectable()
export class NftService {
  constructor(@InjectModel(NFT.name) private nftModel: Model<NFTDocument>) { }

  async findAll() {
    const allNFT = await this.nftModel.find()
    return allNFT;
  }
  
  create(createNftDto: CreateNftDto) {
    return 'This action adds a new nft';
  }

  findOne(id: number) {
    return `This action returns a #${id} nft`;
  }

  update(id: number, updateNftDto: UpdateNftDto) {
    return `This action updates a #${id} nft`;
  }

  remove(id: number) {
    return `This action removes a #${id} nft`;
  }
}
