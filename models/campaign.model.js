import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Product = sequelize.define(
    'Product',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        },
        quantityInStock: {
            type: DataTypes.INTEGER
        }
    },
    {
        tableName: 'products'
    }
);

export default Product;
