import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database'; // ⬅️ ini BUKAN ./index

interface CategoryAttributes {
  id: number;
  name: string;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

export class Category extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
  public id!: number;
  public name!: string;
}

Category.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false }
  },
  {
    sequelize,
    modelName: 'Category',
    tableName: 'categories'
  }
);
