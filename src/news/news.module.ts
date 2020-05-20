import { Module } from '@nestjs/common';
import { TypegooseModule } from "nestjs-typegoose";
import {New} from './new.modle'
import {NewsController} from './news.controller'


@Module({
    imports: [TypegooseModule.forFeature([New])],
    controllers: [NewsController],

})
export class NewsModule {}
