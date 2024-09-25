import { Beer } from "../models";
import { CreateBeerParams } from "../types";
import { log, calculateRating } from "../utils";

export const getAllBeer = async (): Promise<Beer | any> => {
  return Beer.findAll().catch((error) => {
    log.error(`${JSON.stringify({ action: "getAllBeer catch", data: error })}`);
  });
};

export const getBeerByName = async (name: string): Promise<Beer | any> => {
  return Beer.findOne({
    where: { name },
  }).catch((error) => {
    log.error(
      `${JSON.stringify({ action: "getBeerByName catch", data: error })}`
    );
  });
};

export const getBeerById = async (id: number): Promise<Beer | any> => {
  return Beer.findOne({
    where: { id },
  }).catch((error) => {
    log.error(
      `${JSON.stringify({ action: "getBeerById catch", data: error })}`
    );
  });
};

export const createBeer = async (
  data: CreateBeerParams
): Promise<Beer | any> => {
  const { name, type, rating } = data;

  const newBeer = new Beer({
    name,
    type,
    rating: rating ? rating : 0,
    ratingCount: rating ? 1 : 0,
  });

  return newBeer.save().catch((error) => {
    log.error(
      `${JSON.stringify({
        action: "createBeer catch",
        data: newBeer,
        message: error,
      })}`
    );
  });
};

export const updateBeerRating = async (
  beerResults: Beer,
  rate: number,
  id: number
) => {
  const newRating = calculateRating(rate, beerResults);

  beerResults.rating = newRating;
  beerResults.ratingCount += 1;

  return Beer.update(beerResults, { where: { id } }).catch((error) => {
    log.error(
      `${JSON.stringify({ action: "updateBeerRating catch", data: error })}`
    );
  });
};
