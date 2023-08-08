import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Collection } from 'src/collection/schemas/collection.schema';
import { NFT } from 'src/nft/schemas/nft.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop({ required: true, unique: true })
  rank: number;

  @Prop({ required: true, unique: true })
  rankDaily: number;

  @Prop({ required: true, unique: true })
  rankWeekly: number;

  @Prop({ required: true, unique: true })
  rankMontly: number;

  @Prop({ required: true })
  avatar: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })     // array of id nft item
  nfts: string[];

  @Prop({ required: true })     // array of id collection
  collections: string[];

  @Prop({ required: true })
  change: number;

  @Prop({ required: true })
  NFTSolds: number;

  @Prop({ required: true })
  volume: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
