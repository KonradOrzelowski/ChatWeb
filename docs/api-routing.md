# Project API Routing Documentation

## 1. Backend API Routes

### Conversations
- **GET** `/conversations/:id`:
    - Returns: List of convesartoins

- **POST** `/delete_alert`: Deletes a conversation from the database by its ID
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

- **GET** `/lists/list_of_titles`
    - Returns: List of all titles
    - Example Response:
      ```json
        {"response":[
            {"title":"Title 1","_id":"3b8a4c1e7d2f5a9b8e6d3c2a"},
            {"title":"Title 2", "_id":"9d4e7f8c1b2a6e3f4c5b8a1e"},
            {"title":"Title 3","_id":"e5c9d1a4b2f3e8a6d7f5b9c1"}
        ]}
    ```
- **GET** `/lists/list_of_convs`
    - Returns: List of all conversations
    - Example Response:
      ```json
        {"response":{
            "3b8a4c1e7d2f5a9b8e6d3c2a": {
                "_id":"3b8a4c1e7d2f5a9b8e6d3c2a",
                "title":"Title 1",
                "conversation":[
                    {"speaker":"You","message":"Question."},
                    {"speaker":"Bot","message":"Answer."}
                ]
            },

            "9d4e7f8c1b2a6e3f4c5b8a1e":{
                "_id":"9d4e7f8c1b2a6e3f4c5b8a1e",
                "title":"Title 2",
                "conversation":[
                    {"speaker":"You","message":"Question."},
                    {"speaker":"Bot","message":"Answer."},
                    {"speaker":"You","message":"Question."},
                    {"speaker":"Bot","message":"Answer."}
                ]
            }
        }}
    ```

- **POST** `/refresh`
    - Returns: Status
    - Example Response:
      ```json
        {
        "response": true
        }
    ```

- **POST** `/save_conversation`: Insert conversation into MongoDB