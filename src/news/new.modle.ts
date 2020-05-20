import { prop } from '@typegoose/typegoose';
import {ApiTags,ApiOperation,ApiProperty} from '@nestjs/swagger'

 
export class New {



  @ApiProperty({description:'名称'})
  @prop()
  cfg_name:string 

  @ApiProperty({description:'类型'})
  @prop()
  cfg_type:string

  @ApiProperty({description:'描述'})
  @prop()
  cfg_desc:string

  @ApiProperty({description:'yaml'})
  @prop()
  cfg_yaml:string


}
 