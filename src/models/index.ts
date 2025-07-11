import { Sequelize } from 'sequelize';
import { sequelize as db } from '../config/database';
import { Product } from './product';
import { Category } from './category';

// RELASI HARUS DIDEFINISIKAN DI SINI
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

export const sequelize = db;
export { Product, Category };
