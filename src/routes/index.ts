import { Router } from "express";
import config from "config";
import beerRoutes from "./beer.route";
import { AppConfig } from "../types";

const routes = Router();

routes.use(beerRoutes);

export default routes;
