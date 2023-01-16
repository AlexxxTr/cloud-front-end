export class GasUsage {
  public cost: number | null;
  public created_at: string | null;
  public id: number;
  public kWh: number;
  public user_id: string;
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

export class GasReading {
  public created_at: string | null;
  public id: number;
  public user_id: string;
  public cubic_metres: number;

  constructor(
    created_at: string | null,
    id: number,
    user_id: string,
    cubic_metres: number
  ) {
    this.created_at = created_at;
    this.id = id;
    this.user_id = user_id;
    this.cubic_metres = cubic_metres;
  }
}

export class Temperatures {
  public created_at: string | null;
  public id: number;
  public user_id: string;
  public temperature: number;

  constructor(
    created_at: string | null,
    id: number,
    user_id: string,
    temperature: number
  ) {
    this.created_at = created_at;
    this.id = id;
    this.user_id = user_id;
    this.temperature = temperature;
  }
}
