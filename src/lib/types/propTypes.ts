export class GasUsage {
  public cost: number | null = 0;
  public created_at: string | null = null;
  public id: number = -1;
  public kWh: number = -1;
  public user_id: string = "";

  constructor(
    cost: number | null,
    created_at: string | null,
    id: number,
    kWh: number,
    user_id: string
  ) {
    this.cost = cost;
    this.created_at = created_at;
    this.id = id;
    this.kWh = kWh;
    this.user_id = user_id;
  }
}
