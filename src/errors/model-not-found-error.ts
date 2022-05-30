import { RestauranApiError } from "./restaurant-api-error";

export class ModelNotFoundError extends RestauranApiError{

    constructor(message: string){
        super(message)
    }

}