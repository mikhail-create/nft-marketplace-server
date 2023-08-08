import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NftModule } from './nft/nft.module';
import { CollectionModule } from './collection/collection.module';
import { UserModule } from './user/user.module';
import { NftModule } from './nft/nft.module';

@Module({
  imports: [UserModule, NftModule, CollectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
