# Project API Routing Documentation

## 1. Frontend API Routes

### User Module
- **Login API**
    - Method: POST
    - URL: `/api/auth/login`
    - Purpose: Authenticates a user.
    - Corresponding Backend Route: `/api/auth/login`
    - Example Request:
      ```json
      {
        "username": "",
        "password": ""
      }
      ```
    - Example Response:
      ```json
      {
        "token": ""
      }
      ```

## 2. Backend API Routes

### Authentication
- **POST** `/api/auth/login`: Handles user authentication.
    - Middleware: None
    - Returns: JWT Token for authentication
    - Error Codes: 401 Unauthorized, 400 Bad Request

### User Management
- **GET** `/api/users`: Fetches a list of users.
    - Middleware: Requires admin role.
    - Returns: Array of user objects
    - Error Codes: 403 Forbidden, 401 Unauthorized
