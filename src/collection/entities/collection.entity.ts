import { NFT } from "src/nft/entities/nft.entity";

export class Collection {
  id: number;     // Unique id
  name: string;     // Collection name
  description: string;      // Collection description
  nfts: NFT[];      // Array of included NFT's

  constructor(
    id: number,
    name: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.nfts = [];
  }

  addNFT(nft: NFT) {
    this.nfts.push(nft);
  }

  removeNFT(nftId: number) {
    this.nfts = this.nfts.filter(nft => nft.id !== nftId);
  }
}
