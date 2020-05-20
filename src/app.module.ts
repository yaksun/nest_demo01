import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypegooseModule } from "nestjs-typegoose";
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost:27017/yaksun", {
      useNewUrlParser: true
    }),
    PostsModule,
    NewsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
