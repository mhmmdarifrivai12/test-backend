import { Router } from 'express';
import * as productController from '../controllers/product.controller';
import { productValidation } from '../validators/product.validator';
import { validationResult } from 'express-validator';

const router = Router();

// Middleware validasi hasil
const validate = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.get('/', productController.findAll);
router.get('/:id', productController.findOne);
router.post('/', productValidation, validate, productController.create);
router.put('/:id', productValidation, validate, productController.update);
router.delete('/:id', productController.remove);

export default router;
