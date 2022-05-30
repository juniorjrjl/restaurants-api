import { Request } from "express"
import { validationResult } from "express-validator";
import { InvalidParamError, InvalidParamField } from "../errors/invalid-param-error";

export const checkValidators = (req: Request) =>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        const fields = errors.array().map(e => InvalidParamField.builder()
            .withField(e.param)
            .withMessage(e.msg)
            .build())
        throw new InvalidParamError("A requisição contém parametros inválidos", fields);
    }
}