import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export interface RestaurantInstance extends Model {
    id: number
    name: String
    description: String
    phone: String
    address: String
}

const Restaurant = sequelize.define<RestaurantInstance>(
    'restaurants',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

export { Restaurant }