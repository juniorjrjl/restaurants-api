import { CustomerInstance } from "../models/customer"
import { customerQueryService } from "./query/customer-query-service"

export const customerService ={

    save: async (customer: CustomerInstance) => await customer.save(),

    update: async (customer: CustomerInstance) => {
        const storedCustomer = await customerQueryService.findById(customer.id)
        const {name, phone} = customer
        storedCustomer.set({name, phone})
        return await storedCustomer.save()
    },

    delete: async (id: number) => {
        const storedCustomer = await customerQueryService.findById(id)
        storedCustomer.destroy()
    }

}