import { ErrorCodeEnum } from "../consts/ErrorCode";

export abstract class Repository<T> {
  protected members: T[];

  constructor(members: T[]) {
    this.members = members;
  }

  abstract getAll(): Promise<T[] | ErrorCodeEnum>;
  abstract getById(id: number): Promise<T | undefined | ErrorCodeEnum>;
  abstract create(item: T): Promise<boolean | ErrorCodeEnum>;
  abstract update(id: number, item: T): Promise<boolean | ErrorCodeEnum>;
  abstract delete(id: number): Promise<boolean | ErrorCodeEnum>;
}
