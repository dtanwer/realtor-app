import { PostHome } from './dtos/home.dtos';
import { HomeService } from './home.service';
import { Body, Controller, Post,Get} from '@nestjs/common';

@Controller('home')
export class HomeController {
    constructor(private readonly homeService:HomeService){}
    @Get()
    async getAllHome(){
        return  await this.homeService.getAllHome()
    }
    @Post()
    async postHome(@Body() body:PostHome){
        return await this.homeService.postHome(body)
    }

}
