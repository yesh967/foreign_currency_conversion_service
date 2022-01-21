# foreign_currency_conversion_service

# Description
Foreign_currency_conversion_service is a basic implementation of microservices and microservices architectures. 
Its  implementated with help of Spring Boot framework. 
It contains multiple microservices which we use and get to talk to each other using 
Eureka Naming Server and using api gateways for routing endpoint urls.
It has a basic frontend application to accept the parameters given and ratio and calculated net amount.

The application can convert multiple currencies and provide ratio and net amount of quantity entered.
The application can be used to get understanding of how microservices communicate with each other,
be granular, more robust and improve code readability. 


# Requirements
For building and running the application you need:

•	JDK 1.8
•	Maven 
•	IDE for example like intellij or ecllipse
•	embedded h2 database
•	postman  
•	vs code



# Running the application locally
To run this Spring Boot application on your local machine one just has to execute all the main methods in the springboot.Application class from your IDE.
Postman can be used to perform various crud operations on the application for interaction with the developed Application and its database.
Microservice hierarchy for running these applications is • eureka server to register existing microservices	
•	api gateway 
•	exchange application 
•	conversion application 
•	react app


# Future scope
Existance of multiple variation for exchange and transaction exists.
Its an application focused towards learning and understanding react and microservices but can be 
incorporated with other forms of legal transactional currencies like cryptocurrency.



