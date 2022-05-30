import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export interface EvaluationInstance extends Model {
    customerId: number
    restaurantId: number
    comment: string
    stars: number
}

const Evaluation = sequelize.define<EvaluationInstance>(
    'evaluations',
    {
        customerId: {
            type: DataTypes.INTEGER,
            field: "customer_id", 
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'customers',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'NO ACTION'
        },
        restaurantId: {
            type: DataTypes.INTEGER,
            field: "restaurant_id", 
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'restaurants',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'NO ACTION'
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stars: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    })

export { Evaluation }