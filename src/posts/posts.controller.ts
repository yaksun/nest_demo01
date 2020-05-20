import { Controller, Get, Post, Delete, Body, Param, Query } from '@nestjs/common';
import {ApiTags,ApiOperation,ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty} from 'class-validator'
import { InjectModel } from "nestjs-typegoose";
import {Post as PostSchame} from './post.modle'
import { ModelType } from '@typegoose/typegoose/lib/types';

class CreatePostDto{

    @ApiProperty({description:'标题',example:'帖子标题1'})
    @IsNotEmpty({message:'标题不能为空'})
    title:string

    @ApiProperty({description:'内容',example:'内容标题2'})
    content:string
}

@Controller('api/posts')
@ApiTags('博客')  // 分组
export class PostsController {

    constructor(
        @InjectModel(PostSchame) private readonly postSchame:ModelType<PostSchame>
      ) {}

    // 列表
    @Get()
    @ApiOperation({summary:'博客列表'})
   async show(){
       return await this.postSchame.find()
    }


    // 新建
    @Post( )
    @ApiOperation({summary:'添加博客'})
    async create(@Body() addPost : CreatePostDto){
        await this.postSchame.create(addPost)

        return {
            success:true 
        }
    }


    //详情
    @Get(':id')
    @ApiOperation({summary:'博客详情'})
    async detail(@Param('id') id:string){
        return await  this.postSchame.findById(id) 
    }


    //修改
    @Post(':id')
    @ApiOperation({summary:'修改博客'})
   async update(@Body() updPost : CreatePostDto,@Param('id') id:string){
    await this.postSchame.findByIdAndUpdate(id,updPost)

        return {
            success:true
        }
    }


    // 删除
    @Post('del/:id')
    @ApiOperation({summary:'删除博客'})
   async remove(@Param('id') id:string){
        await this.postSchame.findByIdAndDelete(id) 

        return {
            success:true
        }
    }
  



}
