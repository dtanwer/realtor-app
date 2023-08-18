import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { HomeSchema,Home } from './schema/home.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Home.name,schema:HomeSchema}])],
  providers: [HomeService],
  controllers: [HomeController]
})
export class HomeModule {}
