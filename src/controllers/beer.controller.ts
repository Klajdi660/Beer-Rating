import { Request, Response } from "express";
import {
  createBeer,
  getAllBeer,
  getBeerById,
  getBeerByName,
  updateBeerRating,
} from "../services";

export const getAllBeersHandler = async (req: Request, res: Response) => {
  const beers = await getAllBeer();
  if (!beers) {
    return res.json({
      error: true,
      message: "List of beers cannot be obtained",
    });
  }

  res.json({
    error: false,
    message: "Beer list fetched successfully",
    data: beers,
  });
};

export const getBeerByNameHandler = async (req: Request, res: Response) => {
  const { name } = req.params;

  const results = await getBeerByName(name);
  if (!results) {
    return res.json({
      error: true,
      message: "Beer with this name does not exist",
    });
  }

  return res.json({ error: false, data: results });
};

export const getBeerByIdHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  const results = await getBeerById(+id);
  if (!results) {
    return res.json({
      error: true,
      message: "Beer with this Id does not exist",
    });
  }

  return res.json({ error: false, data: results });
};

export const createBeerHandler = async (req: Request, res: Response) => {
  const { name } = req.body;

  const existingBeer = await getBeerByName(name);
  if (existingBeer) {
    return res.json({
      error: true,
      message: "Beer with this name already exist",
    });
  }

  const newBeer = await createBeer(req.body);
  if (!newBeer) {
    return res.json({ error: true, message: "Failed to create new beer" });
  }

  res.json({
    error: false,
    message: "New beer has been created",
    data: newBeer,
  });
};

export const updateRatingBeerHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { rate } = req.body;

  const beerResults = await getBeerById(+id);
  if (!beerResults) {
    return res.json({
      error: true,
      message: "Beer with this Id does not exist",
    });
  }

  const updateBeerRatingResults = await updateBeerRating(
    beerResults,
    rate,
    +id
  );
  if (!updateBeerRatingResults) {
    return res.json({ error: true, message: "Failed to update rating beer" });
  }

  res.json({
    error: false,
    message: "Successful rating beer",
    data: beerResults,
  });
};
