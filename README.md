# ChatWeb

ChatWeb is a simple chatbot application that uses the Hugging Face Inference API to generate responses to user inputs. The application consists of a MongoDB database, the backend of the ChatWeb application is built with Node.js and Express.js and the frontend of the ChatWeb application is built with HTML, CSS, and JavaScript.

## Project Structure
The project is divided into three main components: the database, the frontend, and the backend. Each component runs in its own Docker container. The project is ready for deployment on platforms like Railway and can also be set up using Docker Compose.

### Database

The directory contains files related to the MongoDB database setup.

- [`mongo-init.js`]: This file is likely used to initialize your MongoDB database with necessary collections and documents.
- [`mongod.conf`]: This is a configuration file for MongoDB. It can contain settings like the port number, bind IP, and path to the data directory.

### Backend

It handles requests from the frontend, interacts with database, interacts with the Hugging Face Inference API, and sends responses back to the frontend. Here are the relevant files and their descriptions:

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

It provides an interface for the user to interact with the chatbot. 
- [`/css/`]: This directory contains CSS files that style the web page. It includes files like `constants.css`, `style.css`, `list-of-conversations.css`, `chat-input.css`, and `custom-alerts.css`.
- [`/assets/`]: This directory contains static files like images and icons used in the application. It includes a subdirectory `/icons/` which contains icon files.
- [`/src/`]:
  - [`script.js`]: Handles the chat interface, including sending messages and viewing responses. It also sets up event listeners for the chat input and the 'New chat' button.
  - [`index.js`]: Imports and initializes the network requests and utility functions used in the application.
  - [`load_list_of_conversations.js`]: Responsible for loading the list of conversation titles.
  - [`utils.js`]: Contains utility functions used across the application, such as `clear_conversation` and `addDiv2Conversation`.
  - [`send_to_server.js`]: Handles sending user input to the server.
  - [`custom-alert.js`]: Contains functions related to custom alerts in the application.
  - [`/network_requests/`]: Contains JavaScript files that handle various network requests for the application.
    - [`close_website.js`]: Contains the function to handle the event when the website is closed.
    - [`new_chat_created.js`]: Contains the function to handle the event when a new chat is created.
    - [`fetch_data.js`]: Contains the function to fetch data from the server.
    - [`delete_post.js`]: Contains the function to delete a post.
    - [`save_conversation.js`]: Contains the function to save a conversation.
    - [`update_conversation_title.js`]: Contains the function to update the title of a conversation.
 

# To-Do List

## Overal
- [ ] 🟡 Add [central logger](https://youtu.be/6cxgasCDJgA?si=cGsZWgCirJA8vB1k) which will track all logs from each Docker container.
- [ ] 🟢 Add [web analytics](https://plausible.io/).
- [ ] 🟢 Add error tracking and monitoring tools like [Sentry](https://sentry.io/welcome/).

## Database
- [ ] 🔴 Ensure each user has a unique ID.
- [ ] 🔴 Each conversation should store user ID.

## Backend 
### API
- [ ] 🟢 Improve [API design](https://www.youtube.com/watch?v=_gQaygjm_hg).
- [ ] 🟢 Introduce [API security](https://www.youtube.com/watch?v=6WZ6S-qmtqY).
- [ ] 🟡 Allow multiple calls for APIs.
- [ ] 🟢 Make API documentation using tools like Swagger or Postman.
- [ ] 🟢 Add rate limiting to your API for better security and performance.
### Model
- [ ] 🟢 Add second model.
- [ ] 🟢 Add initial instructions for each prompt.

## Frontend
- [x] 🟡 Add dark/light mode.
- [ ] 🟢 Replace functions that create HTML elements with React components.
- [x] 🔴 Add responsive design for mobile views.
- [x] 🟢 Fix refresh and close signal.
- [x] 🟡 Add messages to existing conversations.
- [x] 🟡 Replace save button with logic.
- [x] 🟡 Sort conversation by last use.

## Test
- [ ] 🟡 Add tests for the [API](https://www.youtube.com/watch?v=qquIJ1Ivusg).
- [ ] 🟡 Tests the frontend.
- [ ] 🔴 Use GitHub Actions.
- [ ] 🟢 Add end-to-end tests using tools like [Cypress](https://sentry.io/welcome/).
- [ ] 🟡 Set up test coverage reports with high coverage.
- [ ] 🟡 Implement load testing to ensure the application can handle high traffic.
