import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type HomeDocument=HydratedDocument<Home>
@Schema({ timestamps: true })
export class Home {
  @Prop({ required: true })
  address: string;
  @Prop({ required: true })
  city: string;
  @Prop({ required: true })
  price: string;
  @Prop([String])
  images: string[];
}

export const HomeSchema=SchemaFactory.createForClass(Home)
