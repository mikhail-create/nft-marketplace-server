import { Collection } from "src/collection/entities/collection.entity";
import { NFT } from "src/nft/entities/nft.entity";

export class User {
  id: number;     // Unique id
  rank: number;     // Rank in top
  rankDaily: number;     // Rank in daily top
  rankWeekly: number;     // Rank in weekly top
  rankMonthly: number;     // Rank in monthly top
  avatar: string;     // Avatar img url
  username: string;     // Username
  email: string;      // User email
  password: string;     // User password
  nfts: NFT[];      // Array of user NFT's
  collections: Collection[];      // Array of user collection's
  change: number;     // User volume change between -5 and 5, also can be float numbers
  NFTSolds: number;       // Amount of sold
  volume: number;     // User volume between 0 and 25, also can be float numbers

  constructor(
    id: number,
    username: string,
    email: string,
    rank: number,
    rankDaily: number,
    rankWeekly: number,
    rankMonthly: number,
    change: number,
    NFTSolds: number,
    volume: number,
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.rank = rank;
    this.rankDaily = rankDaily;
    this.rankWeekly = rankWeekly;
    this.rankMonthly = rankMonthly;
    this.change = change;
    this.NFTSolds = NFTSolds;
    this.volume = volume;
    this.nfts = [];
    this.collections = [];
  }

  addNFT(nft: NFT) {
    this.nfts.push(nft);
  }

  removeNFT(nftId: number) {
    this.nfts = this.nfts.filter(nft => nft.id !== nftId);
  }

  createCollection(name: string, description: string) {
    const collectionId = this.collections.length + 1;
    const newCollection = new Collection(collectionId, name, description);
    this.collections.push(newCollection);
    return newCollection;
  }

  getCollectionById(collectionId: number) {
    return this.collections.find(collection => collection.id === collectionId);
  }
}