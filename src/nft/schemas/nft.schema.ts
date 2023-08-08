import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type NFTDocument = HydratedDocument<NFT>;

@Schema()
export class NFT {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  maxBid: number | null;

  @Prop({ required: true })
  author: string[];

  @Prop({ required: true })
  owner: string[];

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ required: true, type: Date })
  creationDate: Date;
}

export const NFTSchema = SchemaFactory.createForClass(NFT);
