import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from '../user.entity';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEnum(UserRole)
  role: string;
}
