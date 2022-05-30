import { Restaurant } from "./restaurant";
import { Customer } from "./customer";
import { Evaluation } from "./evaluation";

Restaurant.hasMany(Evaluation);
Customer.hasMany(Evaluation);

Evaluation.belongsTo(Restaurant);
Evaluation.belongsTo(Customer);

export{
    Restaurant,
    Customer,
    Evaluation
}