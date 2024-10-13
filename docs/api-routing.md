# Project API Routing Documentation

## 1. Backend API Routes

### Conversations
- **GET** `/conversations/:id`:
    - Returns: List of convesartoins

- **POST** `/delete_alert`: Deletes a conversation alert from the "ChatWebDB" by its ID
    - Example Request:
    ```json
        {
        "message": "7f2a3e9c5d1b4a6f2c9b1d7e"
        }
    ```
    - Returns: Status
    - Example Response:
      ```json
        {
        "response": true
        }
    ```

### User Management
- **GET** `/api/users`: Fetches a list of users.
    - Middleware: Requires admin role.
    - Returns: Array of user objects
    - Error Codes: 403 Forbidden, 401 Unauthorized


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




