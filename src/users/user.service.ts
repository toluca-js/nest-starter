import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findById(id: string) : Promise<User> {
    return this.userRepository
      .createQueryBuilder("user")
      .where("user.id = :id", { id })
      .getOne();
  }

  async deleteById(id: string) {
    const user: User = await this.findById(id);
    await this.userRepository.delete(user);
  }

  create(request: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.firstName = request.firstName;
    user.lastName = request.lastName;

    return this.userRepository.save(user);
  }

  async update(request: UpdateUserDto): Promise<User> {
    return this.userRepository
      .save({
        id: request.id,
        firstName: request.firstName,
        lastName: request.lastName
      });
  }
}