import { NextFunction, Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { Restaurant, Evaluation } from "../models"
import { evaluationSerializer, restaurantReviewsSerializer, restaurantSerializer } from "../serializers/restaurant-serializer"
import { restaurantService } from "../services/restaurant-service"
import { restaurantQueryService } from "../services/query/restaurant-query-service"
import { customerQueryService } from "../services/query/customer-query-service"
import { EvaluationInstance } from "../models/evaluation"
import { checkValidators } from "../validatos/check-validators"


const restaurantControllerUtils = {
    buildEvaluation: async (req: Request): Promise<EvaluationInstance> => {
        checkValidators(req)
        const { id } = req.params
        const {customerId, stars, comment} =  req.body
        await restaurantQueryService.findById(Number(id))
        await customerQueryService.findById(customerId)
        return new Promise((resolve, reject) => resolve(Evaluation.build({restaurantId: id, customerId: customerId, stars, comment})))
    }
}

export const restaurantController ={

    index: async (req: Request, res: Response, next: NextFunction) => {
        try{
            const restaurants = await restaurantQueryService.findAll()
            return res.status(StatusCodes.OK).json(restaurants.map(c => restaurantSerializer(c)))
        } catch (err){
            next(err)
        }
    },

    findEvaluations:async (req:Request, res: Response, next: NextFunction) => {
        try{
            checkValidators(req)
            const { id } = req.params
            const evaluations = await restaurantQueryService.findEvaluations(Number(id))
            return res.status(StatusCodes.OK).json(restaurantReviewsSerializer(evaluations))
        } catch (err){
            next(err)
        }
    },

    findById: async (req: Request, res: Response, next: NextFunction) => {
        try{
            checkValidators(req)
            const { id } = req.params
            const restaurant = await restaurantQueryService.findById(Number(id))
            return res.status(StatusCodes.OK).json(restaurantSerializer(restaurant))
        } catch (err){
            next(err)
        }
    },

    save: async (req: Request, res: Response, next: NextFunction) => {
        try{
            checkValidators(req)
            const {name, description, phone, address} =  req.body
            const restaurant = Restaurant.build({name, description, phone, address})
            const savedRestaurant = await restaurantService.save(restaurant)
            return res.status(StatusCodes.CREATED).json(restaurantSerializer(savedRestaurant))
        } catch (err){
            next(err)
        }
    },

    update: async (req: Request, res: Response, next: NextFunction) => {
        try{
            checkValidators(req)
            const { id } = req.params
            const {name, phone, address} =  req.body
            const restaurant = Restaurant.build({id, name, phone, address})
            await restaurantService.update(restaurant)
            return res.status(StatusCodes.OK).json(restaurantSerializer(restaurant))
        } catch (err){
            next(err)
        }
    },

    delete: async (req: Request, res: Response, next: NextFunction) => {
        try{
            checkValidators(req)
            const { id } = req.params
            await restaurantService.delete(Number(id))
            return res.status(StatusCodes.NO_CONTENT).send()
        } catch (err){
            next(err)
        }
    },

    newEvaluation: async (req: Request, res: Response, next: NextFunction) => {
        try {
            let evaluation = await restaurantControllerUtils.buildEvaluation(req)
            console.log(evaluation)
            evaluation = await restaurantService.newEvaluation(evaluation)
            return res.status(StatusCodes.CREATED).json(evaluationSerializer(evaluation))
        } catch (err) {
            next(err)
        }
    },

    editEvaluation: async (req: Request, res: Response, next: NextFunction) => {
        try {
            let evaluation = await restaurantControllerUtils.buildEvaluation(req)
            evaluation = await restaurantService.editEvaluation(evaluation)
            return res.status(StatusCodes.OK).json(evaluationSerializer(evaluation))
        } catch (err) {
            next(err)
        }
    },

}