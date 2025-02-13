import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { UtilsService } from 'src/utils/utils.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly utilsService: UtilsService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':age')
  getResult(@Param('age') age:number ) {

    let today = new Date();
    let year = today.getFullYear()

    if ((year - age) <= 0 ) {
      return this.utilsService.apiResponse(
        HttpStatus.OK,
        year,
        [{message:"You are not born",property:"email"}]
     ) 
    }

    return this.utilsService.apiResponse(
      HttpStatus.OK,
      year - age,
      [{message:"email subscribed to newsletter",property: `${year - age}`}]
   ) 

  }

}
