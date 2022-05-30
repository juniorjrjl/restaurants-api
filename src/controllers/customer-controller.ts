import { NextFunction, Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { Customer } from "../models"
import { customerSerializer, customerReviewsSerializer } from "../serializers/customer-serializer"
import { customerService } from "../services/customer-service"
import { customerQueryService } from "../services/query/customer-query-service"
import { checkValidators } from "../validatos/check-validators"

export const customerController ={

    index: async (req: Request, res: Response, next: NextFunction) => {
        try{
            const customers = await customerQueryService.findAll()
            return res.status(StatusCodes.OK).json(customers.map(c => customerSerializer(c)))
        } catch (err){
            next(err)
        }
    },

    findEvaluations: async (req:Request, res: Response, next: NextFunction) => {
        try{
            console.log("teste")
            checkValidators(req)
            const { id } = req.params
            console.log("teste")
            const evaluations = await customerQueryService.findEvaluations(Number(id))
            return res.status(StatusCodes.OK).json(customerReviewsSerializer(evaluations))
        } catch (err){
            next(err)
        }
    },

    findById: async (req: Request, res: Response, next: NextFunction) => {
        try{
            checkValidators(req)
            const { id } = req.params
            const customer = await customerQueryService.findById(Number(id))
            return res.status(StatusCodes.OK).json(customerSerializer(customer))
        } catch (err){
            next(err)
        }
    },

    save: async (req: Request, res: Response, next: NextFunction) => {
        try{
            checkValidators(req)
            const {name, phone} =  req.body
            const customer = Customer.build({name, phone})
            const savedCustomer = await customerService.save(customer)
            return res.status(StatusCodes.CREATED).json(customerSerializer(customer))
        } catch (err){
            next(err)
        }
    },

    update: async (req: Request, res: Response, next: NextFunction) => {
        try{
            checkValidators(req)
            const { id } = req.params
            const {name, phone} =  req.body
            const customer = Customer.build({id, name, phone})
            await customerService.update(customer)
            return res.status(StatusCodes.OK).json(customerSerializer(customer))
        } catch (err){
            next(err)
        }
    },

    delete: async (req: Request, res: Response, next: NextFunction) => {
        try{
            checkValidators(req)
            const { id } = req.params
            await customerService.delete(Number(id))
            return res.status(StatusCodes.NO_CONTENT).send()
        } catch (err){
            next(err)
        }
    }

}