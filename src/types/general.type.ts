export interface AppConfig {
  port: number;
  origin: string;
}

export interface CreateBeerParams {
  name: string;
  type: string;
  rating: number;
}
