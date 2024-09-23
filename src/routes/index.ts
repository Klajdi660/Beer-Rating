import { Router } from "express";
import config from "config";
import beerRoutes from "./beer.route";
import { AppConfig } from "../types";

const { prefix } = config.get<AppConfig>("app");

const routes = Router();

routes.use(`${prefix}`, beerRoutes);

export default routes;
