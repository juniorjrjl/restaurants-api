import { body, param } from "express-validator";


const customerBodyValidators = [body('name').trim().notEmpty().withMessage("Informe o nome do cliente"), 
    body('name').isLength({ min: 1, max: 255 }).withMessage("O nome do cliente deve ter entre 1 e 255 caractéres"), 
    body('phone').trim().notEmpty().withMessage("Informe o telefone do cliente"), 
    body('phone').isLength({ min: 1, max: 255 }).withMessage("O telefone do cliente deve ter entre 1 e 255 caractéres")]

const customerUrlParamsValidator = [param('id').isNumeric().withMessage("Informe um identificador de usuário válido")]

export const newCustomerValidators = () => customerBodyValidators
export const updateCustomerValidators = () => customerUrlParamsValidator.concat(customerBodyValidators)
export const findByIdCustomerValidators = () => customerUrlParamsValidator
export const findEvaluationsCustomerValidators = () => customerUrlParamsValidator
export const deleteIdCustomerValidators = () => customerUrlParamsValidator