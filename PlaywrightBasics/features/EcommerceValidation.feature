Feature: Ecommerce End To End Validation

@Regression     
# npx cucumber-js --tags "@Regression"  --exit
Scenario: Login and Place an Order
Given Login using "raghavdce@gmail.com" and "Rahulshetty@123"
When User searches for "IPHONE 13 PRO" and add to cart
Then verify cart page displays the product "IPHONE 13 PRO"
When User enters the valid details like "ind" and "raghavdce@gmail.com" places the order
Then verify order in the order history with text " Thankyou for the order. "

@smoke     
# npx cucumber-js --tags "@Regression"  --exit
Scenario: Login and Place an Order
Given Login using "raghavdce@gmail.com" and "Rahulshetty@1"
Then validate the error message
