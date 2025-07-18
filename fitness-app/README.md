# Fitness App

This repository contains the microservices architecture for a Fitness App. Each service is designed to handle a specific domain of the application, enabling scalability, maintainability, and independent deployment.

## Repository Structure

- `activityservice/` - Manages user activities, such as logging workouts, tracking activity types, and storing activity data.
- `aiservice/` - Provides AI-driven recommendations and analytics based on user activity data.
- `configserver/` - Centralized configuration server for all microservices, using Spring Cloud Config.
- `gateway/` - API Gateway for routing requests, authentication, and aggregating responses from multiple services.
- `userservice/` - Handles user registration, authentication, and user profile management.
- `fitness-app-frontend/` - Frontend application for users to interact with the fitness platform.

## Getting Started

### Prerequisites
- Java 17+
- Maven
- Node.js (for frontend)
- MongoDB (for data storage)
- RabbitMQ (for messaging)

### Running the Services

1. **Start Eureka Service Discovery**
   - Navigate to `eureka/` and run:
     ```sh
     ./mvnw spring-boot:run
     ```
2. **Start Config Server**
   - Navigate to `configserver/` and run:
     ```sh
     ./mvnw spring-boot:run
     ```
3. **Start Other Microservices**
   - For each of `activityservice/`, `aiservice/`, `gateway/`, and `userservice/`, run:
     ```sh
     ./mvnw spring-boot:run
     ```
4. **Start the Frontend**
   - Navigate to `fitness-app-frontend/` and run:
     ```sh
     npm install
     npm run dev
     ```

### Configuration
- All configuration files are managed in the `configserver/` under `src/main/resources/config/`.
- Update the `application.yml` files as needed for your environment.

## Technologies Used
- **Spring Boot** (Java)
- **Spring Cloud** (Config, Eureka, Gateway)
- **MongoDB**
- **RabbitMQ**
- **React** (Frontend)