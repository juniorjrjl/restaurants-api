export class evaluationDTO{
    restaurantId: number
    customerId: number
    comment: string
    stars: number
    averageStarsGiven: number

    constructor(restaurantId: number, customerId: number, comment: string, stars: number, averageStarsGiven: number){
        this.restaurantId = restaurantId
        this.customerId = customerId
        this.comment = comment
        this.stars = stars
        this.averageStarsGiven = averageStarsGiven
    }

}