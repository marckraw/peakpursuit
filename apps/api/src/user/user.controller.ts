import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    const { email, password } = body;
    this.userService.create(email, password);
  }

  @Get('')
  getAllUsers() {
    return this.userService.findAll();
  }
}
