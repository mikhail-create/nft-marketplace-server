import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionModule } from './collection/collection.module';
import { UserModule } from './user/user.module';
import { NftModule } from './nft/nft.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    UserModule,
    NftModule,
    CollectionModule,
    MongooseModule.forRoot('mongodb+srv://mikhail:YcDcbI3b4BY7AK9O@cluster--1.lfg5wai.mongodb.net/?retryWrites=true&w=majority'),
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
