import { Base } from './base.model';
import { World } from './world.model';
export class Image {
  constructor(public name: string, public url: string) {}

  toFirestoreObject() {
    return { name: this.name, url: this.url };
  }
}

export class ImageFile extends Image {
  constructor(public file: File, name: string, url: string) {
    super(name, url);
  }

  getSanitizedName() {
    const unsanitizedName = this.name;
    return unsanitizedName.trim().toLocaleLowerCase().replaceAll(' ', '_');
  }

  toImage() {
    return new Image(this.name, this.url);
  }
}

export class ImageNode extends Base {
  constructor(
    uuid: string,
    createdAt: number,
    updatedAt: number,
    deletedAt: number,
    public name: string,
    public url: string,
    public nodeName: string,
    public ownerUuid: string,
    public world: World,
    public parentImage?: ImageNode,
    public childImage?: ImageNode
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
      url: this.url,
      nodeName: this.nodeName,
      ownerUuid: this.ownerUuid,
      worldUuid: this.world.uuid,
      parentImageUuid: this.parentImage?.uuid,
      childImageUuid: this.childImage?.uuid,
    };
  }
}
