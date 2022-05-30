import { body, param } from "express-validator";

const restaurantBodySaveValidators = [body('description').trim().notEmpty().withMessage("Informe uma descrição para o restaurante"), 
body('description').isLength({ min: 1, max: 255 }).withMessage("A descrição do restaurante deve ter entre 1 e 255 caractéres")]

const restaurantBodyValidators = [body('name').trim().notEmpty().withMessage("Informe o nome do restaurante"), 
    body('name').isLength({ min: 1, max: 255 }).withMessage("O nome do restaurante deve ter entre 1 e 255 caractéres"), 
    body('phone').trim().notEmpty().withMessage("Informe o telefone do restaurante"), 
    body('phone').isLength({ min: 1, max: 255 }).withMessage("O telefone do restaurante deve ter entre 1 e 255 caractéres"),
    body('address').trim().notEmpty().withMessage("Informe o endereço do restaurante"), 
    body('address').isLength({ min: 1, max: 255 }).withMessage("O endereço do restaurante deve ter entre 1 e 255 caractéres")]

const restaurantUrlParamsValidator = [param('id').isNumeric().withMessage("Informe um identificador de restaurante válido")]

const evaluationBodyValidators = [body('comment').trim().notEmpty().withMessage("Informe o comentário da avaliação"), 
    body('comment').isLength({ min: 1, max: 255 }).withMessage("O comentário da avaliação deve ter entre 1 e 255 caractéres"), 
    body('stars').isNumeric().withMessage('O campo estrelas da avaliação deve ter um valor numério'),
    body('stars').isInt({min: 0, max: 5}).withMessage('A quantidade de estralas da avaliação deve ser entre 0 e 5'),
    body('customerId').isNumeric().withMessage("Informe um identificador de cliente válido")
]

export const newRestaurantValidators = () => restaurantBodyValidators.concat(restaurantBodySaveValidators)
export const updateRestaurantValidators = () => restaurantUrlParamsValidator.concat(restaurantBodyValidators)
export const findByIdRestaurantValidators = () => restaurantUrlParamsValidator
export const findEvaluationsRestaurantValidators = () => restaurantUrlParamsValidator
export const deleteIdRestaurantValidators = () => restaurantUrlParamsValidator
export const newEvaluationRestaurantValidators = () => restaurantUrlParamsValidator.concat(evaluationBodyValidators)
export const editEvaluationRestaurantValidators = () => restaurantUrlParamsValidator.concat(evaluationBodyValidators)