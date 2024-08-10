import { ProfileItem } from "@/entities/profile.entity";
import { ProfileRepository } from "@/repositories/profile.repository";


class ProfileService {
  private ProfileRepository: ProfileRepository;

  constructor(ProfileRepository: ProfileRepository) {
    this.ProfileRepository = ProfileRepository;
  }

  public async getAllProfiles(): Promise<ProfileItem[]> {
    return await this.ProfileRepository.getAll();
  }

  public async getProfileById(
    id: number,
  ): Promise<ProfileItem | undefined> {
    return await this.ProfileRepository.getById(id);
  }

  public async createProfile(
    Profile: ProfileItem,
  ): Promise<boolean> {
    return await this.ProfileRepository.create(Profile);
  }

  public async updateProfile(
    id: number,
    question: ProfileItem,
  ): Promise<boolean> {
    return await this.ProfileRepository.update(id, question);
  }

  public async deleteProfile(id: number): Promise<boolean> {
    return await this.ProfileRepository.delete(id);
  }
}

export default ProfileService;
