# ChatWeb

ChatWeb is a simple chatbot application that uses the Hugging Face Inference API to generate responses to user inputs. The application consists of a MongoDB database, a backend built with Node.js and a frontend built with HTML and CSS.

## Project Structure
The project is divided into three main components: the database, the frontend, and the backend. Each component runs in its own Docker container. The project is ready for deployment on platforms like Railway and can also be set up using Docker Compose.

### Database

The directory contains files related to the MongoDB database setup.

- [`mongo-init.js`]: This file is likely used to initialize your MongoDB database with necessary collections and documents.
- [`mongod.conf`]: This is a configuration file for MongoDB. It can contain settings like the port number, bind IP, and path to the data directory.

### Backend

The backend of the ChatWeb application is built with Node.js and Express.js. It handles requests from the frontend, interacts with database, interacts with the Hugging Face Inference API, and sends responses back to the frontend. Here are the relevant files and their descriptions:

- [`server.js`]: This file sets up and starts the Express.js server.
- [`ConversationsHandler.js`]: This file handles the retrieval and manipulation of conversation data from the MongoDB database.
- [`generate_response_from_model.js`]: This file generates responses from a machine learning model.
- [`/state_manager/`]: This directory contains files related to managing the state of the application. It includes a file named messages_manager.js which manages the state of messages in the application.
- [`/routes/`]: This directory contains routing files for the Express.js server. Some of the files include:
  - [`conversations_routing.js`]: Handles routes related to conversations.
  - [`delete_conversation_routing.js`]: Handles routes related to deleting conversations.
  - [`get_lists_routing.js`]: Handles routes related to retrieving lists.
  - [`incoming_messages_routing.js`]: Handles routes related to incoming messages.

### Frontend

The frontend of the ChatWeb application is built with HTML, CSS, and JavaScript. It provides an interface for the user to interact with the chatbot. 
- [`/css/`]: This directory contains CSS files that style the web page. It includes files like `constants.css`, `style.css`, `list-of-conversations.css`, `chat-input.css`, and `custom-alerts.css`.
- [`/assets/`]: This directory contains static files like images and icons used in the application. It includes a subdirectory `/icons/` which contains icon files.
- [`/src/`]:
  - [`script.js`]: Handles the chat interface, including sending messages and viewing responses. It also sets up event listeners for the chat input and the 'New chat' button.
  - [`index.js`]: Imports and initializes the network requests and utility functions used in the application.
  - [`load_list_of_conversations.js`]: Responsible for loading the list of conversation titles.
  - [`utils.js`]: Contains utility functions used across the application, such as `clear_conversation` and `addDiv2Conversation`.
  - [`send_to_server.js`]: Handles sending user input to the server.
  - [`custom-alert.js`]: Contains functions related to custom alerts in the application.
  - [`/network_requests/`: Contains JavaScript files that handle various network requests for the application.
    - [`close_website.js`]: Contains the function to handle the event when the website is closed.
    - [`new_chat_created.js`]: Contains the function to handle the event when a new chat is created.
    - [`fetch_data.js`]: Contains the function to fetch data from the server.
    - [`delete_post.js`]: Contains the function to delete a post.
    - [`save_conversation.js`]: Contains the function to save a conversation.
    - [`update_conversation_title.js`]: Contains the function to update the title of a conversation.
 

# To-Do List

## Database
- [ ]  Database

## Backend 
- [ ] Backend

## Frontend
- [ ] Frontend

## Deployments
- [ ] Deployments

## Tests
- [ ] Tests

## Test Proposals

### 1. `backend/main.js`
- Test the `askQuestion` function to ensure it correctly prompts and retrieves user input.
- Test the `runInference` function to ensure it correctly interacts with the Hugging Face API and returns the expected results.
- Test the `mainLoop` function to ensure it correctly orchestrates the conversation flow and handles the 'exit' command. 

### 2. `backend/server.js`
- Test the server setup to ensure it correctly applies middleware and starts listening on the correct port.
- Test the `runInference` function similar to the one in [`main.js`](command:_github.copilot.openSymbolInFile?%5B%22frontend%2Findex.html%22%2C%22main.js%22%5D "frontend/index.html").
- Test the server's response to various API requests, ensuring it correctly handles and responds to valid and invalid requests.

### 3. `frontend/index.html`
- Test the user interface to ensure it correctly displays conversations and handles user input.
- Test the fetch request to ensure it correctly interacts with the backend server and updates the conversation display.

### 4. `frontend/style.css`
- Test the styles to ensure they are correctly applied to the HTML elements.
