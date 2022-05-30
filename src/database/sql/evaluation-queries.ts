export const evaluationReviewsByCustomer = 
`
SELECT e.restaurant_id "restaurantId",
       e.customer_id "customerId",
       e.comment, 
       e.stars,
       ((SELECT SUM(sub_e1.stars) 
           FROM evaluations sub_e1 
          WHERE sub_e1.customer_id = e.customer_id)::Float 
        /
        (SELECT COUNT(sub_e2.customer_id) 
           FROM evaluations sub_e2 
          WHERE sub_e2.customer_id = e.customer_id)::Float) "averageStarsGiven"
  FROM evaluations e
 WHERE e.customer_id = :customer_id
`

export const evaluationReviewsByRestaurant =
`
SELECT e.restaurant_id "restaurantId",
       e.customer_id "customerId",
       e.comment, 
       e.stars,
       ((SELECT SUM(sub_e1.stars) 
           FROM evaluations sub_e1 
          WHERE sub_e1.restaurant_id = e.restaurant_id)::Float 
        /
        (SELECT COUNT(sub_e2.customer_id) 
           FROM evaluations sub_e2 
          WHERE sub_e2.restaurant_id = e.restaurant_id)::Float) "averageStarsGiven"
  FROM evaluations e
 WHERE e.restaurant_id = :restaurant_id
`