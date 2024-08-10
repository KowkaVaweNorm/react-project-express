// services/users.service.ts
import { UserItem } from '@/entities/user.entity';
import { UserRepository } from '@/repositories/user.repository';


class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async getAllusers(): Promise<UserItem[]> {
    return await this.userRepository.getAll();
  }

  public async getuserById(
    id: number,
  ): Promise<UserItem | undefined> {
    return await this.userRepository.getById(id);
  }

  public async createuser(
    user: UserItem,
  ): Promise<boolean> {
    return await this.userRepository.create(user);
  }

  public async updateuser(
    id: number,
    question: UserItem,
  ): Promise<boolean> {
    return await this.userRepository.update(id, question);
  }

  public async deleteuser(id: number): Promise<boolean> {
    return await this.userRepository.delete(id);
  }
}

export default UserService;
