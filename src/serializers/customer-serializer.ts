import { evaluationDTO } from "../dto/evaluation-dto"
import { CustomerInstance } from "../models/customer"
import { EvaluationInstance } from "../models/evaluation"


export const customerSerializer = (customer: CustomerInstance) =>{
    return {
        id: customer.id,
        name: customer.name,
        phone: customer.phone
    }
}

const reviewsSerializer = (evaluation: evaluationDTO) =>{
    return {
        restaurantId: evaluation.restaurantId,
        starts: evaluation.stars,
        coment: evaluation.comment
    }
}

export const customerReviewsSerializer = (evaluations: evaluationDTO[]) =>{
    const reviews = evaluations.map(e => reviewsSerializer(e))
    return {
        customerId: evaluations[0].customerId,
        averageStarsGiven: evaluations[0].averageStarsGiven,
        reviews: reviews
    }
}
