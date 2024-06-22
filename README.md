# ChatWeb

ChatWeb is a simple chatbot application that uses the Hugging Face Inference API to generate responses to user inputs. The application consists of a frontend built with HTML and CSS, and a backend built with Node.js.

## Project Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is a simple HTML page styled with CSS. It provides an interface for the user to interact with the chatbot. The relevant files are:

- [`frontend/index.html`]: This is the main HTML file.
- [`frontend/script.js`]: It includes a chat interface where the user can send messages and view the chatbot's responses.
- [`/css/ directory`]: This directory contains CSS files that style the web page.
- [`/assets/ directory`]: This directory contains static files like images and icons used in the application. It includes a   subdirectory `/icons/` which contains icon files.
- [`/js/ directory`]: It includes additional JavaScript files that handle various functionalities on the web page

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
