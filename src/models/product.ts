import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database'; // ⬅️ ini juga BUKAN ./index

interface ProductAttributes {
  id: number;
  name: string;
  desc: string;
  image: string;
  category_id: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public desc!: string;
  public image!: string;
  public category_id!: number;
}

Product.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    desc: { type: DataTypes.TEXT },
    image: { type: DataTypes.STRING },
    category_id: { type: DataTypes.INTEGER, allowNull: false }
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  }
);
