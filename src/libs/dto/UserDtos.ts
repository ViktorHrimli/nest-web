import { IsString, IsEmail } from 'class-validator';

export class UserMessageDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  message: string;
}
