import { body } from 'express-validator';

export const productValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('category_id').isNumeric().withMessage('Category ID must be a number')
];
