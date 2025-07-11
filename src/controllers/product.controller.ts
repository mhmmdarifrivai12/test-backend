import { Request, Response, NextFunction } from 'express';
import { Product } from '../models/product';
import { Category } from '../models/category';

export const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await Product.findAll({ include: Category });
    res.json(products);
  } catch (err) {
    next(err);
  }
};

export const findOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Product.findByPk(req.params.id, { include: Category });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    next(err);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, desc, image, category_id } = req.body;
    const newProduct = await Product.create({ name, desc, image, category_id });
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.update(req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    next(err);
  }
};
