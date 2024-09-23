import logger from "pino";
import dayjs from "dayjs";
import config from "config";
import { Beer } from "../models";

const level = config.get<string>("logLevel");

export const log = logger({
  transport: {
    target: "pino-pretty",
  },
  level,
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export const calculateRating = (rate: number, beerResults: Beer) => {
  const { rating, ratingCount } = beerResults;

  const newRating = rating
    ? (rating * ratingCount + rate) / (ratingCount + 1)
    : rate;

  return parseFloat(newRating.toFixed(2));
};
