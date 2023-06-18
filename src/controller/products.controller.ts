import { Request, Response } from "express";
import logger from "../tools/winston";
import { Res } from "../types";
import { findAll, createMany } from "../repository/products.repo";

const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await findAll();

    return res
      .status(200)
      .json(new Res({ message: "todos os produtos", data }));
  } catch (error) {
    logger.error(error);
    return res.status(500).json(new Res({ message: "Error", data: error }));
  }
};

const createProducts = async (req: Request, res: Response) => {
  try {
    const data = await createMany();

    return res
      .status(200)
      .json(new Res({ message: "todos os produtos", data }));
  } catch (error) {
    logger.error(error);
    return res.status(500).json(new Res({ message: "Error", data: error }));
  }
};

export { getProducts, createProducts };
