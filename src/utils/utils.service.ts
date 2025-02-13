import { Injectable } from '@nestjs/common';
import { ApiResponseDto } from './dto/error.response.dto';

@Injectable()
export class UtilsService {

    apiResponse<T>(statusCode: number, data: any = null, messages: {message:string,property:string}[] | [] = []): ApiResponseDto<T> {
       return {
         statusCode,
         messages,
         data,
       };
    }

}