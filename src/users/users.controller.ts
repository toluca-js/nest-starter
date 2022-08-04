import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';
import { LoggerInterceptor } from 'src/interceptors/logger.interceptor';
import { User } from 'src/users/user.entity';
import { UserService } from 'src/users/user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@UseInterceptors(LoggerInterceptor)
@Controller('users')
export class UsersController {

  constructor(private userService: UserService) {}

  @Get()
  async findAll(@Req() request: Request): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(":id")
  async findById(@Param() params): Promise<User> {
      return await this.userService.findById(params.id);
  }

  @Post()
  async create(@Body() request: CreateUserDto): Promise<User> {
    return await this.userService.create(request);
  }

  @Put()
  async update(@Body() request: UpdateUserDto): Promise<User> {
    return await this.userService.update(request);
  }

  @Delete(":id")
  async deleteById(@Param() params) {
    await this.userService.deleteById(params.id);
  }

}