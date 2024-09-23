export interface AppConfig {
  port: number;
  prefix: string;
  origin: string;
}

export interface CreateBeerParams {
  name: string;
  type: string;
  rating: number;
}
