import {
  IsString,
  IsArray,
  IsNotEmpty,
} from 'class-validator';

export class PostHome {
  @IsString()
  @IsNotEmpty()
  address: string;
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsString()
  @IsNotEmpty()
  price: string;
  @IsArray()
  images: string[];
}
