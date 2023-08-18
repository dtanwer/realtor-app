import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ConfigModule } from '@nestjs/config';
import { HomeModule } from './home/home.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://dtanwer:1234@cluster0.nicacv5.mongodb.net/exam?retryWrites=true&w=majority"),
    UserModule,ConfigModule.forRoot(), HomeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
