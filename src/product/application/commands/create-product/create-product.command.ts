export class CreateProductCommand {
  constructor(
    public readonly name: string,
    public readonly sku: string,
    public readonly images?: string[]
  ) {}
}