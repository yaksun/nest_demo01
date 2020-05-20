import { Controller } from '@nestjs/common';
import {New as NewsSchame} from './new.modle'
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from '@typegoose/typegoose/lib/types';
import {ApiTags,ApiOperation,ApiProperty} from '@nestjs/swagger'


import {Crud} from 'nestjs-mongoose-crud'


@Crud({
    model:NewsSchame,
    routes:{
        find:{
            decorators:[
                ApiOperation({summary:'新闻列表'})
            ]
        }
    }
})
@Controller('news')
export class NewsController {
    constructor(
        @InjectModel(NewsSchame) private readonly model:ModelType<NewsSchame>
      ) {}

}
