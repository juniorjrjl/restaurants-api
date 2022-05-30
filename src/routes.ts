import express from 'express'
import { customerController } from './controllers/customer-controller'
import { restaurantController } from './controllers/restaurant-controller'
import { deleteIdCustomerValidators, findByIdCustomerValidators, findEvaluationsCustomerValidators, newCustomerValidators, updateCustomerValidators } from './validatos/customer-validators'
import { deleteIdRestaurantValidators, editEvaluationRestaurantValidators, findByIdRestaurantValidators, findEvaluationsRestaurantValidators, newEvaluationRestaurantValidators, newRestaurantValidators, updateRestaurantValidators } from './validatos/restaurant-validators'

const router = express.Router()

router.get('/customers', customerController.index)
router.post('/customers', newCustomerValidators(),customerController.save)
router.get('/customers/:id', findByIdCustomerValidators(), customerController.findById)
router.put('/customers/:id', updateCustomerValidators(), customerController.update)
router.delete('/customers/:id', deleteIdCustomerValidators(), customerController.delete)
router.get('/customers/:id/reviews', findEvaluationsCustomerValidators(), customerController.findEvaluations)

router.get('/restaurants', restaurantController.index)
router.post('/restaurants', newRestaurantValidators(), restaurantController.save)
router.get('/restaurants/:id', findByIdRestaurantValidators(), restaurantController.findById)
router.put('/restaurants/:id', updateRestaurantValidators(), restaurantController.update)
router.delete('/restaurants/:id', deleteIdRestaurantValidators(), restaurantController.delete)
router.get('/restaurants/:id/reviews', findEvaluationsRestaurantValidators(), restaurantController.findEvaluations)
router.post('/restaurants/:id/reviews', newEvaluationRestaurantValidators(), restaurantController.newEvaluation)
router.put('/restaurants/:id/reviews', editEvaluationRestaurantValidators(), restaurantController.editEvaluation)

export { router }