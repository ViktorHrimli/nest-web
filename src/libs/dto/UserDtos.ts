import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class UserMessageDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  message: string;
}
