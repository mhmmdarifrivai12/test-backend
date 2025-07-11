import { Router } from 'express';
import * as categoryController from '../controllers/category.controller';
import { body, validationResult } from 'express-validator';

const router = Router();

// Middleware validasi
const validate = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.get('/', categoryController.findAll);
router.get('/:id', categoryController.findOne);
router.post('/', [body('name').notEmpty().withMessage('Name is required')], validate, categoryController.create);
router.put('/:id', [body('name').notEmpty().withMessage('Name is required')], validate, categoryController.update);
router.delete('/:id', categoryController.remove);

export default router;
