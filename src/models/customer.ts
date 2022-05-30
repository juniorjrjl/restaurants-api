import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export interface CustomerInstance extends Model {
    id: number
    name: string
    phone: string
}

const Customer = sequelize.define<CustomerInstance>(
    'customers',
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
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    export { Customer }