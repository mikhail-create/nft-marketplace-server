import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Collection, CollectionDocument } from './schemas/collection.schema';
import { Model } from 'mongoose';

@Injectable()
export class CollectionService {
  constructor(@InjectModel(Collection.name) private collectionModel: Model<CollectionDocument>) { }

  async findAll() {
    const allCollection = await this.collectionModel.find()
    return allCollection;
  }
  
  create(createCollectionDto: CreateCollectionDto) {
    return 'This action adds a new collection';
  }

  findOne(id: number) {
    return `This action returns a #${id} collection`;
  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return `This action updates a #${id} collection`;
  }

  remove(id: number) {
    return `This action removes a #${id} collection`;
  }
}
