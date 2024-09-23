import { Router } from "express";
import {
  getAllBeersHandler,
  getBeerByNameHandler,
  getBeerByIdHandler,
  createBeerHandler,
  updateRatingBeerHandler,
} from "../controllers";
import { validate } from "../middleware";
import { beerRatingSchema, beerSchema } from "../schema";

const router = Router();

router.get("/beers", getAllBeersHandler);
router.get("/beers/:name", getBeerByNameHandler);
router.get("/beer/:id", getBeerByIdHandler);

router.post("/beer", validate(beerSchema), createBeerHandler);

router.put("/beer/:id", validate(beerRatingSchema), updateRatingBeerHandler);

export default router;
