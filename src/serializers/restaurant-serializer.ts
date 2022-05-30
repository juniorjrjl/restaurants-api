import { evaluationDTO } from "../dto/evaluation-dto"
import { EvaluationInstance } from "../models/evaluation"
import { RestaurantInstance } from "../models/restaurant"

export const restaurantSerializer = (restaurant: RestaurantInstance) =>{
    return {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        phone: restaurant.phone,
        address: restaurant.address
    }
}

export const evaluationSerializer = (evaluation: EvaluationInstance) => {
    return{
        customerId: evaluation.customerId,
        restaurantId: evaluation.restaurantId,
        comment: evaluation.comment,
        stars: evaluation.stars
    }
}

const reviewsSerializer = (evaluation: evaluationDTO) =>{
    return {
        customerId: evaluation.customerId,
        starts: evaluation.stars,
        coment: evaluation.comment
    }
}

export const restaurantReviewsSerializer = (evaluations: evaluationDTO[]) =>{
    const reviews = evaluations.map(e => reviewsSerializer(e))
    return {
        restaurantId: evaluations[0].restaurantId,
        averageStarsReceived: evaluations[0].averageStarsGiven,
        reviews: reviews
    }
}