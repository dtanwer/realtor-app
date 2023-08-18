import { Injectable, ConflictException, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { LoginDtos, SignUpDtos } from '../dtos/auth.dtos';
import { User } from '../schema/user.schema';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async signUp(body: SignUpDtos): Promise<User | { msg: string }> {
    const { email, password } = body;
    const user = await this.userModel.findOne({ email });
    if (user) {
      console.log(user);
      throw new ConflictException();
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const newUser = await this.userModel.create({
      ...body,
      password: hashedPassword,
    });
    return newUser;
  }
  async login(body: LoginDtos) {
    const { email, password } = body;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new HttpException('Invalid Credential', 400);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = await this.genrateJWT(user._id, email);
      return { msg: 'Login Done!', token };
    } else {
      return { msg: 'wrong Password' };
    }
  }

  private genrateJWT(id: Object, email: string) {
    return;
    jwt.sign({ email, id }, process.env.TOKEN_KEY, { expiresIn: 3600000 });
  }
}
