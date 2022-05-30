import { QueryTypes } from "sequelize"
import { sequelize } from "../../database"
import { ModelNotFoundError } from "../../errors/model-not-found-error"
import { Restaurant, Evaluation } from "../../models"
import { evaluationDTO } from "../../dto/evaluation-dto"
import { evaluationReviewsByRestaurant } from "../../database/sql/evaluation-queries"

export const restaurantQueryService ={

    findAll: async () => await Restaurant.findAll(),

    findById: async (id: number) => {
        const customer = await Restaurant.findByPk(id)
        if (customer === null){
            throw new ModelNotFoundError(`O restaurante de identificador ${id} não foi encontrado`)
        }
        return customer
    },

    findEvaluations: async(id: number) =>{
        const restaurantEvaluations = await sequelize.query<evaluationDTO>(evaluationReviewsByRestaurant, {
            replacements : { restaurant_id : id }, type: QueryTypes.SELECT, raw: true
        })
        return restaurantEvaluations
    },

    findEvaluation: async(customerId: number, restaurantId: number) =>{
        return await Evaluation.findOne({ where: { customerId, restaurantId } } )
    }

}