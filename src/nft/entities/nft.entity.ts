import { User } from "src/user/entities/user.entity";

export class NFT {
  id: number;     // Unique id
  name: string;     // NFT name
  description: string;      // NFT description
  imageUrl: string;     // NFT image url
  price: number;      // Price for buy without auction
  maxBid: number | null;      // Maximum bid
  author: User;     // NFT author
  owner: User;      // NFT owner
  tags: string[];     // NFT tags, like ['art', 'space', 'cyberpunk']
  creationDate: Date;     // Creation date

  constructor(
    id: number,
    name: string,
    description: string,
    imageUrl: string,
    price: number,
    author: User,
    owner: User
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
    this.maxBid = null;
    this.author = author;
    this.owner = owner;
    this.tags = [];
    this.creationDate = new Date();
  }
}