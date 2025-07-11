import { Request, Response, NextFunction } from 'express';
import { Category } from '../models/category';

// ✅ GET /api/categories
export const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

// ✅ GET /api/categories/:id
export const findOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id);

    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    next(err);
  }
};

// ✅ POST /api/categories
export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const newCategory = await Category.create({ name });
    res.status(201).json(newCategory);
  } catch (err) {
    next(err);
  }
};

// ✅ PUT /api/categories/:id
export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id);

    if (!category) return res.status(404).json({ message: 'Category not found' });

    await category.update(req.body);
    res.json({ message: 'Category updated', data: category });
  } catch (err) {
    next(err);
  }
};

// ✅ DELETE /api/categories/:id
export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id);

    if (!category) return res.status(404).json({ message: 'Category not found' });

    await category.destroy();
    res.json({ message: 'Category deleted' });
  } catch (err) {
    next(err);
  }
};
