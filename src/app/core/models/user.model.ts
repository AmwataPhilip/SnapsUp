import { Base } from './base.model';

export class User extends Base {
  constructor(
    uuid: string,
    createdAt: number,
    updatedAt: number,
    deletedAt: number,
    public firstName: string,
    public lastName: string
  ) {
    super(uuid, createdAt, updatedAt, deletedAt);
  }

  toFirestoreObject() {
    return {
      uuid: this.uuid,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
      firstName: this.firstName,
      lastName: this.lastName,
    };
  }
}
