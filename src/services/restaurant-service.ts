import { EvaluationAlreadyExists } from "../errors/evaluation-already-exists"
import { ModelNotFoundError } from "../errors/model-not-found-error"
import { EvaluationInstance } from "../models/evaluation"
import { RestaurantInstance } from "../models/restaurant"
import { restaurantQueryService } from "./query/restaurant-query-service"

export const restaurantService ={

    save: async (restaurant: RestaurantInstance) => await restaurant.save(),

    update: async (restaurant: RestaurantInstance) => {
        const storedRestaurant = await restaurantQueryService.findById(restaurant.id)
        const {name, phone, address} = restaurant
        storedRestaurant.set({name, phone, address})
        return await storedRestaurant.save()
    },

    delete: async (id: number) => {
        const storedRestaurant = await restaurantQueryService.findById(id)
        storedRestaurant.destroy()
    },

    newEvaluation:async (evaluation: EvaluationInstance) => {
        const storedEvaluation = await restaurantQueryService.findEvaluation(evaluation.customerId, evaluation.restaurantId)
        if (storedEvaluation !== null){
            const message = `O cliente  com identificador ${evaluation.customerId} já avaliou o restaurante com identificador ${evaluation.restaurantId}`
            throw new EvaluationAlreadyExists(message)
        }
        console.log(evaluation)
        return evaluation.save()
    },

    editEvaluation:async (evaluation: EvaluationInstance) => {
        const storedEvaluation = await restaurantQueryService.findEvaluation(evaluation.customerId, evaluation.restaurantId)
        if (storedEvaluation === null){
            const message = `O cliente  com identificador ${evaluation.customerId} ainda não avaliou o restaurante com identificador ${evaluation.restaurantId}`
            throw new ModelNotFoundError(message)
        }
        const { stars, comment } = evaluation
        storedEvaluation.set({ stars, comment })
        console.log(storedEvaluation)
        return storedEvaluation.save()
    }

}