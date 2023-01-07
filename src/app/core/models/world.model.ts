import { Base } from './base.model';

export class World extends Base {
  constructor(
    uuid: string,
    createdAt: number,
    updatedAt: number,
    deletedAt: number,
    public name: string,
    public coverImageUrl: string,
    public ownerUuid: string
  ) {
    super(uuid, createdAt, updatedAt, deletedAt);
  }

  toFirestoreObject() {
    return {
      uuid: this.uuid,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
      name: this.name,
      coverImageUrl: this.coverImageUrl,
      ownerUuid: this.ownerUuid,
    };
  }
}
