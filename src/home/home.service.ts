import { Injectable, ConflictException, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { Home } from './schema/home.schema';
import { PostHome } from './dtos/home.dtos';
@Injectable()
export class HomeService {
    constructor(
        @InjectModel(Home.name) private readonly homeModel: Model<Home>,
      ) {}
    async getAllHome(){
        return await this.homeModel.find().exec();
    }
    async postHome(body:PostHome){
        console.log(body)
        return await this.homeModel.create(body);
    }
}
