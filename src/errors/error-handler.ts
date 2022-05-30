import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { ErrorResponse } from "./error-response";
import { EvaluationAlreadyExists } from "./evaluation-already-exists";
import { InvalidParamError } from "./invalid-param-error";
import { ModelNotFoundError } from "./model-not-found-error";
import { RestauranApiError } from "./restaurant-api-error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) =>{

    console.error("Happened a error!")
    if (err instanceof EvaluationAlreadyExists){
        console.error(`ModelNotFoundError ${err}`)
        return res.status(StatusCodes.CONFLICT).json(ErrorResponse.buildConflictError(err.message))
    } else if (err instanceof ModelNotFoundError){
        console.error(`ModelNotFoundError ${err}`)
        return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse.buildNotFoundError(err.message))
    } else if (err instanceof InvalidParamError){
        console.error(`InvalidParamError ${err}`)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse.buildBadRequestError(err))
    } else if (err instanceof Error || RestauranApiError){
        console.error(`GenericError ${err}`)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse.buildDefaultError())
    }

}