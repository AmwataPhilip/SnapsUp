export class Image {
  constructor(public name: string, public url: string) {}

  toFirestoreImage() {
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
