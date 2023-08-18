import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { User,UserSchema} from './schema/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
  providers: [AuthService],
  controllers: [AuthController]
})
export class UserModule {}
