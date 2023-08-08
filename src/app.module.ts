import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionModule } from './collection/collection.module';
import { UserModule } from './user/user.module';
import { NftModule } from './nft/nft.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    NftModule,
    CollectionModule,
    MongooseModule.forRoot('mongodb+srv://mikhail:YcDcbI3b4BY7AK9O@cluster--1.lfg5wai.mongodb.net/?retryWrites=true&w=majority'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
