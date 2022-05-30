import { QueryTypes } from "sequelize"
import { sequelize } from "../../database"
import { evaluationReviewsByCustomer } from "../../database/sql/evaluation-queries"
import { evaluationDTO } from "../../dto/evaluation-dto"
import { ModelNotFoundError } from "../../errors/model-not-found-error"
import { Customer } from "../../models"

export const customerQueryService ={

    findAll: async () => await Customer.findAll(),

    findById: async (id: number) => {
        const customer = await Customer.findByPk(id)
        if (customer === null){
            throw new ModelNotFoundError(`O cliente de identificador ${id} não foi encontrado`)
        }
        return customer
    },

    findEvaluations: async(id: number) =>{
        const customerEvaluations = await sequelize.query<evaluationDTO>(evaluationReviewsByCustomer, {
            replacements : { customer_id : id }, type: QueryTypes.SELECT, raw: true
        })
        return customerEvaluations
    }

}