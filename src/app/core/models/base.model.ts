export abstract class Base {
  constructor(
    public uuid: string,
    public createdAt: number,
    public updatedAt: number,
    public deletedAt: number
  ) {}
}
