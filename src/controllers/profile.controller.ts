// controllers/Profile.controller.ts
import { ProfileRepository } from "@/repositories/profile.repository";
import ProfileService from "@/services/profile.service";
import { Request, Response, NextFunction } from "express";

const profileService = new ProfileService(
  new ProfileRepository(),
);

class ProfileController {
  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const Profiles = await profileService.getAllProfiles();
      res.status(200).json(Profiles);
    } catch (error) {
      next(error);
    }
  }

  // public async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const id = parseInt(req.params.id, 10);
  //     const Profile = await ProfileService.getProfileById(id);
  //     res.status(200).json(Profile);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const Profile: CreateProfileDto = req.body;
  //     const created = await ProfileService.createProfile(Profile);
  //     res.status(201).json({ success: created });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const id = parseInt(req.params.id, 10);
  //     const Profile: CreateProfileDto = req.body;
  //     const updated = await ProfileService.updateProfile(id, Profile);
  //     res.status(200).json({ success: updated });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const id = parseInt(req.params.id, 10);
  //     const deleted = await ProfileService.deleteProfile(id);
  //     res.status(204).send();
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

export default new ProfileController();
