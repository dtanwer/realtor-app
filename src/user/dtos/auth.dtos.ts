import {IsString,IsPhoneNumber,IsEmail,MaxLength,IsNotEmpty,Matches} from 'class-validator'

export class SignUpDtos{
    @IsString()
    @IsNotEmpty()
    name:string;

    @Matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,{message:"Phone must be a valid Phone Number"})
    phone:string;

    @IsEmail()
    email:string;
    @IsString()
    @MaxLength(8)
    password:string;

}
export class LoginDtos{
    @IsEmail()
    email:string;
    @IsString()
    password:string;

}